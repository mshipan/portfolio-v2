import { useEffect, useRef, useState } from "react";
import Button from "../../components/shared/Button";
import { useInView } from "react-intersection-observer";
import ProgressBar from "../../components/ProgressBar";
import { CiEdit, CiTrash } from "react-icons/ci";
import UpdateSkillModal from "../../components/dashboard/UpdateSkillModal";

const Skills = () => {
  const [isInView, setIsInView] = useState(false);
  const progressBarRef = useRef();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    setIsInView(inView);
  }, [inView]);
  return (
    <div className="h-auto md:h-auto" ref={ref}>
      <div className="md:w-1/2">
        <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-full md:max-xl:w-full">
          <h1 className="text-2xl font-notoSans text-[#55e6a5]">Skills</h1>
          <div>
            <Button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              text="Create Skill"
            />{" "}
            {/* modal */}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-10 mx-2 md:mx-0">
            <div className="flex flex-row items-center justify-between gap-5">
              <ProgressBar
                text="html5"
                value={95}
                percentValue={95}
                isVisible={isInView}
                ref={progressBarRef}
                className="w-full"
              />
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  <CiEdit size={25} className="text-[#55e6a5]" title="Edit" />
                </button>
                <button>
                  <CiTrash
                    size={25}
                    className="text-[#55e6a5]"
                    title="Delete"
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-5">
              <ProgressBar
                text="css3"
                value={90}
                percentValue={90}
                isVisible={isInView}
                ref={progressBarRef}
                className="w-full"
              />
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  <CiEdit size={25} className="text-[#55e6a5]" title="Edit" />
                </button>
                <button>
                  <CiTrash
                    size={25}
                    className="text-[#55e6a5]"
                    title="Delete"
                  />
                </button>
              </div>
            </div>
          </div>
          <UpdateSkillModal />
        </div>
        <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg font-notoSans text-[#55e6a5]">
              Create Skill
            </h3>
            <div>
              <form className="flex flex-col gap-4 mt-5">
                <div className="form-control">
                  <label
                    htmlFor="skillName"
                    className="text-white font-poppins"
                  >
                    Skill Name:
                  </label>
                  <input
                    type="text"
                    name="skillName"
                    placeholder="Your Skill Name"
                    className="border border-[#55e6a5] p-1 bg-[#141c27] placeholder-zinc-300 outline-none"
                  />
                </div>
                <div className="form-control">
                  <label
                    htmlFor="skillPercentage"
                    className="text-white font-poppins"
                  >
                    Skill Percentage:
                  </label>
                  <input
                    type="number"
                    name="skillPercentage"
                    max="100"
                    min="0"
                    placeholder="Your Skill Percentage"
                    className="border border-[#55e6a5] p-1 bg-[#141c27] placeholder-zinc-300 outline-none"
                  />
                </div>
                <div>
                  <Button text="Create Skill" type="submit"></Button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Skills;
