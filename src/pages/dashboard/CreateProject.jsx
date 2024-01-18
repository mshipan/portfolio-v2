import { useState } from "react";
import Button from "../../components/shared/Button";
import CreatableSelect from "react-select/creatable";
import { useFieldArray, useForm } from "react-hook-form";
import { BsPlus } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";

const CreateProject = () => {
  const { register, control, handleSubmit, reset } = useForm();
  const [selectedTechnologyUsed, setSelectedTechnologyUsed] = useState(null);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tourGallery",
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
  return (
    <div className="h-auto md:h-auto">
      <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-1/2 md:max-xl:w-full">
        <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-full md:max-xl:w-full">
          <h1 className="text-2xl font-notoSans text-[#55e6a5]">
            Create Project
          </h1>
          <div>
            <Button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              text="Create Project"
            />{" "}
            {/* modal */}
          </div>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-5">
          <div className="form-control">
            <label
              htmlFor="projectTitle"
              className="text-lg text-white font-notoSans mb-2"
            >
              Project Title:
            </label>
            <input
              type="text"
              name="projectTitle"
              placeholder="Project Title eg. Chemistry Corner 1"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="projectBanner"
              className="text-lg text-white font-notoSans mb-2"
            >
              Project Banner:
            </label>
            <input
              type="text"
              name="projectBanner"
              placeholder="Project Details Banner Image link"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="projectBg"
              className="text-lg text-white font-notoSans mb-2"
            >
              Project Bg:
            </label>
            <input
              type="text"
              name="projectBg"
              placeholder="Long Page Screenshot link"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="projectDescription"
              className="text-lg text-white font-notoSans mb-2"
            >
              Project Description:
            </label>
            <textarea
              name="projectDescription"
              cols="30"
              rows="5"
              placeholder="Project Description..."
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            ></textarea>
          </div>

          <div className="form-control">
            <label
              htmlFor="projectGoals"
              className="text-lg text-white font-notoSans mb-2"
            >
              Project Goals:
            </label>
            <textarea
              name="projectGoals"
              cols="30"
              rows="5"
              placeholder="Project Goals..."
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            ></textarea>
          </div>

          <div className="form-control">
            <label
              htmlFor="technologyUsed"
              className="text-lg text-white font-notoSans mb-2"
            >
              Technology Used :{" "}
            </label>
            <CreatableSelect
              name="technologyUsed"
              defaultValue={selectedTechnologyUsed}
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
              Project Features : <br />
              <small>Click the Add more button to add features</small>
            </label>
            <div className="flex flex-col">
              <div className="grid grid-cols-1 gap-1">
                {fields?.map((field, index) => (
                  <div key={field.id} className="flex gap-3">
                    <input
                      type="text"
                      name={`projectFeatures[${index}].feature`}
                      placeholder={`Project Features ${index + 1}`}
                      defaultValue={field.feature}
                      className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                      {...register(`projectFeatures[${index}].feature`)}
                    />
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="border border-[#131D4E] p-2 bg-white"
                      title="Remove image"
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
                  title="Add more image"
                >
                  <BsPlus className="text-lg inline-block" />
                  Add more
                </button>
              </div>
            </div>
          </div>

          <div className="form-control">
            <label
              htmlFor="projectDuration"
              className="text-lg text-white font-notoSans mb-2"
            >
              Project Duration:
            </label>
            <input
              type="text"
              name="projectDuration"
              placeholder="Project Duration eg. 15 days (need a calculation)"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="startDate"
              className="text-lg text-white font-notoSans mb-2"
            >
              Start Date:
            </label>
            <input
              type="date"
              name="startDate"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="endDate"
              className="text-lg text-white font-notoSans mb-2"
            >
              End Date:
            </label>
            <input
              type="date"
              name="endDate"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="liveLink"
              className="text-lg text-white font-notoSans mb-2"
            >
              Live Link:
            </label>
            <input
              type="text"
              name="liveLink"
              placeholder="Project Live Link..."
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="githubClient"
              className="text-lg text-white font-notoSans mb-2"
            >
              Github Client Repo:
            </label>
            <input
              type="text"
              name="githubClient"
              placeholder="Github Client Site Repository..."
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="githubServer"
              className="text-lg text-white font-notoSans mb-2"
            >
              Github Server Repo:
            </label>
            <input
              type="text"
              name="githubServer"
              placeholder="Github Server Site Repository..."
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="conclusion"
              className="text-lg text-white font-notoSans mb-2"
            >
              Conclusion:
            </label>
            <textarea
              name="conclusion"
              cols="30"
              rows="5"
              placeholder="Project Conclution..."
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
