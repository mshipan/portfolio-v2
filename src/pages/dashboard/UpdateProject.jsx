import { useEffect, useState } from "react";
import Button from "../../components/shared/Button";
import CreatableSelect from "react-select/creatable";
import { useFieldArray, useForm } from "react-hook-form";
import { BsPlus } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetProjectByIdQuery,
  useUpdateAProjectMutation,
} from "../../redux/features/api/project/projectApi";
import Swal from "sweetalert2";
import { imageUpload } from "../../utils/imageFetch";

const UpdateProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    watch,
    setValue,
  } = useForm();
  const [projectFeatures, setProjectFeatures] = useState([]);

  const { append, remove } = useFieldArray({
    control,
    name: "projectFeatures",
  });

  const [updateLoading, setUpdateLoading] = useState(false);
  const [selectedTechnologyUsed, setSelectedTechnologyUsed] = useState(null);

  const { data: singleProject } = useGetProjectByIdQuery(id);

  useEffect(() => {
    if (singleProject && singleProject.projectFeatures) {
      setProjectFeatures([...singleProject.projectFeatures]);
    }
  }, [singleProject]);

  // const { projectFeatures } = singleProject || {};

  const [updateAProject] = useUpdateAProjectMutation();

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

  const projectBanner = watch("projectBanner");
  const projectBg = watch("projectBg");

  const onSubmit = async (data) => {
    setUpdateLoading(true);

    const imageData1 = await imageUpload(projectBanner[0]);
    const imageData2 = await imageUpload(projectBg[0]);

    data.projectBanner = imageData1.data.display_url;
    data.projectBg = imageData2.data.display_url;
    data.technologyUsed = selectedTechnologyUsed;
    data.projectFeatures = projectFeatures;

    try {
      const result = await updateAProject({
        id: id,
        data: data,
      });

      if (result.data.modifiedCount > 0) {
        Swal.fire({
          title: "Project Updated Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        setUpdateLoading(false);
        navigate("/dashboard/projects");
      }
    } catch (error) {
      console.error("Error updating Project:", error);
      setUpdateLoading(false);
    }
  };

  const newStartDate = watch("startDate");
  const newEndDate = watch("endDate");

  useEffect(() => {
    calculateDuration(newStartDate, newEndDate);
  }, [newStartDate, newEndDate]);

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
            Update Project
          </h1>
          <div>
            <Button
              type="submit"
              text={`${updateLoading ? "Updating..." : "Update"}`}
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
              defaultValue={singleProject?.projectTitle}
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
              type="file"
              name="projectBanner"
              {...register("projectBanner", { required: true })}
              defaultValue={singleProject?.projectBanner}
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
              type="file"
              name="projectBg"
              {...register("projectBg", { required: true })}
              defaultValue={singleProject?.projectBg}
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
              defaultValue={singleProject?.projectDescription}
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
              defaultValue={singleProject?.projectGoals}
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            ></textarea>
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="technologyUsed"
                className="text-lg text-white font-notoSans mb-2"
              >
                Technology Used :
              </label>
              {errors.technologyUsed && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Technology Used is required. **
                </p>
              )}
            </div>
            <div className="mb-3">
              <span className="text-white mb-2">Selected Options Are:</span>{" "}
              <p className="grid grid-cols-4 gap-2 w-1/2">
                {singleProject?.technologyUsed?.map((tech, i) => (
                  <span
                    key={i}
                    className="border border-[#55e6a5] text-white py-1 px-3 text-sm"
                  >
                    {tech?.label}
                  </span>
                ))}
              </p>
            </div>
            <CreatableSelect
              name="technologyUsed"
              defaultValue={singleProject?.technologyUsed}
              onChange={setSelectedTechnologyUsed}
              options={technologyUsedOptions}
              isMulti
              className="w-full md:w-1/2 md:max-xl:w-full"
              styles={customStyles}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
              })}
            ></CreatableSelect>
          </div>

          <div className="form-control">
            <label
              htmlFor="projectFeatures"
              className="text-lg text-white font-notoSans mb-2"
            >
              Project Features:
            </label>
            <div className="flex flex-col">
              {projectFeatures.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <input
                    type="text"
                    {...register(`projectFeatures.${index}.feature`, {
                      required: true,
                    })}
                    value={feature.feature} // Use value instead of defaultValue
                    onChange={(e) => {
                      const updatedFeatures = [...projectFeatures];
                      updatedFeatures[index].feature = e.target.value;
                      setProjectFeatures(updatedFeatures);
                    }}
                    placeholder={`Project Features ${index + 1}`}
                    className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      remove(index); // Remove the corresponding item from the form data
                      setProjectFeatures(
                        (prevFeatures) =>
                          prevFeatures.filter((_, i) => i !== index) // Remove the corresponding item from the state array
                      );
                    }}
                    className="border border-[#131D4E] p-2 bg-white"
                    title="Remove feature"
                  >
                    <FaXmark className="text-[#131D4E] text-lg" />
                  </button>
                </div>
              ))}
              <div>
                <button
                  type="button"
                  onClick={() => {
                    append({ feature: "" });
                    setProjectFeatures([...projectFeatures, { feature: "" }]);
                  }}
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
              defaultValue={singleProject?.projectDuration}
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
              defaultValue={singleProject?.startDate}
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
              defaultValue={singleProject?.endDate}
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
              defaultValue={singleProject?.liveLink}
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
              defaultValue={singleProject?.githubClient}
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
              defaultValue={singleProject?.githubServer}
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
              defaultValue={singleProject?.conclusion}
              cols="30"
              rows="5"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateProject;
