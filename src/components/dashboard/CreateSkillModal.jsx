import React from "react";
import Button from "../shared/Button";
import { useForm } from "react-hook-form";
import { useAddASkillMutation } from "../../redux/features/api/skill/skillApi";
import Swal from "sweetalert2";

const CreateSkillModal = ({ isModalOpen, closeModal }) => {
  const { register, handleSubmit, reset } = useForm();
  const [createSkill] = useAddASkillMutation();

  const onSubmit = async (data) => {
    try {
      const result = await createSkill(data);
      if (result.data) {
        Swal.fire({
          title: "Skill Added Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();
      } else {
        Swal.fire({
          title: "Skill Added Failed!",
          text: "Press OK to continue",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
    }
  };
  return (
    <dialog
      open={isModalOpen}
      className="modal modal-middle sm:modal-middle z-10"
    >
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg font-notoSans text-[#55e6a5]">
          Create Skill
        </h3>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-5"
          >
            <div className="form-control">
              <label htmlFor="skillName" className="text-white font-poppins">
                Skill Name:
              </label>
              <input
                type="text"
                name="skillName"
                {...register("skillName")}
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
                {...register("skillPercentage")}
                max="100"
                min="0"
                placeholder="Your Skill Percentage"
                className="border border-[#55e6a5] p-1 bg-[#141c27] placeholder-zinc-300 outline-none"
              />
            </div>
            <div>
              <Button
                text="Create Skill"
                type="submit"
                onClick={closeModal}
              ></Button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default CreateSkillModal;
