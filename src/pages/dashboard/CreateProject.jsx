import { useEffect, useState } from "react";
import Button from "../../components/shared/Button";
import CreatableSelect from "react-select/creatable";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { BsPlus } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { useAddAProjectMutation } from "../../redux/features/api/project/projectApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { imageUpload } from "../../utils/imageFetch";

const CreateProject = () => {
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const [selectedTechnologyUsed, setSelectedTechnologyUsed] = useState(null);
  const [createLoading, setCreateLoading] = useState(false);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projectFeatures",
  });
  const technologyUsedOptions = [
    { value: "html5", label: "HTML5" },
    { value: "css3", label: "CSS3" },
    { value: "bootstrap", label: "Bootstrap" },
    { value: "tailwind css", label: "Tailwind Css" },
    { value: "react", label: "React" },
    { value: "Node.Js", label: "Node.Js" },
    { value: "Express.Js", label: "Express.Js" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "firebase", label: "Firebase" },
    { value: "redux", label: "Redux" },
    { value: "rtk query", label: "Rtk Query" },
    { value: "Tanstack Query", label: "Tanstack Query" },
    { value: "Socket.Io", label: "Socket.Io" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "1px solid #55e6a5" : "1px solid #141c27",
      boxShadow: "none",
      background: "#141c27",
      border: "1px solid #55e6a5",
      "&:hover": {
        border: "1px solid #55e6a5",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#55e6a5" : "#141c27",
      color: state.isSelected ? "black" : "white",
    }),
    input: (provided) => ({
      ...provided,
      outline: "none",
      background: "#141c27",
      color: "white",
    }),
    menu: (provided) => ({
      ...provided,
      border: "none",
      background: "#141c27",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#141c27",
      border: "1px solid #55e6a5",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "white",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "white",
      "&:hover": {
        backgroundColor: "#55e6a5",
        color: "white",
      },
    }),
  };

  const [addProject] = useAddAProjectMutation();

  const projectBanner = watch("projectBanner");
  const projectBg = watch("projectBg");

  const onSubmit = async (data) => {
    setCreateLoading(true);
    try {
      const imageData1 = await imageUpload(projectBanner[0]);
      const imageData2 = await imageUpload(projectBg[0]);
      data.projectBanner = imageData1.data.display_url;
      data.projectBg = imageData2.data.display_url;

      const result = await addProject(data);
      if (result.data) {
        Swal.fire({
          title: "Project Added Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();
        setCreateLoading(false);
        navigate("/dashboard/projects");
      } else {
        Swal.fire({
          title: "Project Added Failed!",
          text: "Press OK to continue",
          icon: "error",
          confirmButtonText: "OK",
        });
        setCreateLoading(false);
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
      setCreateLoading(false);
    }
  };

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  useEffect(() => {
    calculateDuration(startDate, endDate);
  }, [startDate, endDate]);

  const calculateDuration = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const duration = Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24);
    setValue("projectDuration", duration + " days");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-auto md:h-auto">
      <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-1/2 md:max-xl:w-full">
        <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-full md:max-xl:w-full">
          <h1 className="text-2xl font-notoSans text-[#55e6a5]">
            Create Project
          </h1>
          <div>
            <Button
              text={`${createLoading ? "Creating..." : "Create Project"}`}
              type="submit"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-5">
          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="projectTitle"
                className="text-lg text-white font-notoSans mb-2"
              >
                Project Title:
              </label>
              {errors.projectTitle && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Project Title is required. **
                </p>
              )}
            </div>
            <input
              type="text"
              name="projectTitle"
              {...register("projectTitle", { required: true })}
              placeholder="Project Title eg. Chemistry Corner 1"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="projectBanner"
                className="text-lg text-white font-notoSans mb-2"
              >
                Project Banner:
              </label>
              {errors.projectBanner && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Project Banner is required. **
                </p>
              )}
            </div>

            <input
              name="projectBanner"
              {...register("projectBanner", { required: true })}
              type="file"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="projectBg"
                className="text-lg text-white font-notoSans mb-2"
              >
                Project Bg:
              </label>
              {errors.projectBg && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Project Bg is required. **
                </p>
              )}
            </div>

            <input
              name="projectBg"
              {...register("projectBg", { required: true })}
              type="file"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="projectDescription"
                className="text-lg text-white font-notoSans mb-2"
              >
                Project Description:
              </label>
              {errors.projectDescription && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Project Description is required. **
                </p>
              )}
            </div>
            <textarea
              name="projectDescription"
              {...register("projectDescription", { required: true })}
              cols="30"
              rows="5"
              placeholder="Project Description..."
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            ></textarea>
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="projectGoals"
                className="text-lg text-white font-notoSans mb-2"
              >
                Project Goals:
              </label>
              {errors.projectGoals && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Project Goals is required. **
                </p>
              )}
            </div>
            <textarea
              name="projectGoals"
              {...register("projectGoals", { required: true })}
              cols="30"
              rows="5"
              placeholder="Project Goals..."
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            ></textarea>
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="technologyUsed"
                className="text-lg text-white font-notoSans mb-2"
              >
                Technology Used :{" "}
              </label>
              {errors.technologyUsed && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Technology Used is required. **
                </p>
              )}
            </div>
            <Controller
              name="technologyUsed"
              control={control}
              defaultValue={selectedTechnologyUsed}
              render={({ field }) => (
                <CreatableSelect
                  {...field}
                  options={technologyUsedOptions}
                  isMulti
                  className="w-full md:w-1/2 md:max-xl:w-full"
                  styles={customStyles}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                  })}
                />
              )}
            />
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="projectFeatures"
                className="text-lg text-white font-notoSans mb-2"
              >
                Project Features : <br />
                <small>Click the Add more button to add features</small>
              </label>
              {errors.projectFeatures && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Project Features is required. **
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <div className="grid grid-cols-1 gap-1">
                {fields?.map((field, index) => (
                  <div key={index} className="flex gap-3">
                    <input
                      type="text"
                      name={`projectFeatures[${index}].feature`}
                      placeholder={`Project Features ${index + 1}`}
                      defaultValue={field.feature} // Set defaultValue here
                      className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                      {...register(`projectFeatures[${index}].feature`)}
                    />
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="border border-[#131D4E] p-2 bg-white"
                      title="Remove feature"
                    >
                      <FaXmark className="text-[#131D4E] text-lg" />
                    </button>
                  </div>
                ))}
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => append({ feature: "" })}
                  className="border border-[#55e6a5] px-2 py-1 mt-3 inline-flex items-center text-white hover:text-black hover:bg-white transition-all ease-in-out duration-300"
                  title="Add more feature"
                >
                  <BsPlus className="text-lg inline-block" /> Add more
                </button>
              </div>
            </div>
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="projectDuration"
                className="text-lg text-white font-notoSans mb-2"
              >
                Project Duration:
              </label>
              {errors.projectDuration && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Project Duration is required. **
                </p>
              )}
            </div>
            <input
              type="text"
              name="projectDuration"
              {...register("projectDuration", { required: true })}
              placeholder="Project Duration eg. 15 days "
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="startDate"
                className="text-lg text-white font-notoSans mb-2"
              >
                Start Date:
              </label>
              {errors.startDate && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Start Date is required. **
                </p>
              )}
            </div>
            <input
              type="date"
              name="startDate"
              {...register("startDate", { required: true })}
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="endDate"
                className="text-lg text-white font-notoSans mb-2"
              >
                End Date:
              </label>
              {errors.endDate && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  End Date is required. **
                </p>
              )}
            </div>
            <input
              type="date"
              name="endDate"
              {...register("endDate", { required: true })}
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="liveLink"
                className="text-lg text-white font-notoSans mb-2"
              >
                Live Link:
              </label>
              {errors.liveLink && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Live Link is required. **
                </p>
              )}
            </div>
            <input
              type="text"
              name="liveLink"
              {...register("liveLink", { required: true })}
              placeholder="Project Live Link..."
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="githubClient"
                className="text-lg text-white font-notoSans mb-2"
              >
                Github Client Repo:
              </label>
              {errors.githubClient && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Github Client is required. **
                </p>
              )}
            </div>
            <input
              type="text"
              name="githubClient"
              {...register("githubClient", { required: true })}
              placeholder="Github Client Site Repository..."
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="githubServer"
                className="text-lg text-white font-notoSans mb-2"
              >
                Github Server Repo:
              </label>
              {errors.githubServer && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Github Server is required. **
                </p>
              )}
            </div>
            <input
              type="text"
              name="githubServer"
              {...register("githubServer", { required: true })}
              placeholder="Github Server Site Repository..."
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="conclusion"
                className="text-lg text-white font-notoSans mb-2"
              >
                Conclusion:
              </label>
              {errors.conclusion && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Conclusion is required. **
                </p>
              )}
            </div>
            <textarea
              name="conclusion"
              {...register("conclusion", { required: true })}
              cols="30"
              rows="5"
              placeholder="Project Conclution..."
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateProject;
