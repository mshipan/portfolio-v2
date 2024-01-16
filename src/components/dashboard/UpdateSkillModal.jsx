import React from "react";
import Button from "../shared/Button";

const UpdateSkillModal = () => {
  return (
    <dialog id="my_modal_4" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg font-notoSans text-[#55e6a5]">
          Update Skill
        </h3>
        <div>
          <form className="flex flex-col gap-4 mt-5">
            <div className="form-control">
              <label htmlFor="skillName" className="text-white font-poppins">
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
              <Button text="Update Skill" type="submit"></Button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateSkillModal;
