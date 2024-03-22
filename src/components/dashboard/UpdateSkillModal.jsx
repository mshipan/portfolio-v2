import React from "react";
import Button from "../shared/Button";
import { useForm } from "react-hook-form";
import {
  useGetSkillByIdQuery,
  useUpdateSkillMutation,
} from "../../redux/features/api/skill/skillApi";
import Swal from "sweetalert2";

const UpdateSkillModal = ({ isSkillModalOpen, closeModal, skill }) => {
  const { register, handleSubmit } = useForm();
  const [updateSkill, { isLoading: updateLoading }] = useUpdateSkillMutation();
  const {
    data: singleSkill,
    isLoading,
    isError,
  } = useGetSkillByIdQuery(skill._id);

  if (isLoading) {
    return <p className="font-poppins text-white text-lg">Loading...</p>;
  }

  if (isError || !singleSkill) {
    return (
      <p className="font-poppins text-[#55e6a5] text-lg">
        Error Fetching Data...
      </p>
    );
  }

  const { _id, skillName, skillPercentage } = singleSkill;

  const onSubmit = async (data) => {
    try {
      const result = await updateSkill({
        id: _id,
        data: data,
      });
      if (result.data.modifiedCount > 0) {
        Swal.fire({
          title: "Skill Updated Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error updating education:", error);
    }
  };
  return (
    <dialog
      open={isSkillModalOpen}
      className="modal modal-middle sm:modal-middle"
    >
      <div className="modal-box bg-[#141c27]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white bg-gray-600"
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg font-notoSans text-[#55e6a5]">
          Update Skill
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
                defaultValue={skillName}
                placeholder="Your Skill Name"
                className="border border-[#55e6a5] p-1 bg-[#141c27] placeholder-zinc-300 text-zinc-300 outline-none"
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
                defaultValue={skillPercentage}
                max="100"
                min="0"
                placeholder="Your Skill Percentage"
                className="border border-[#55e6a5] p-1 bg-[#141c27] placeholder-zinc-300 text-zinc-300 outline-none"
              />
            </div>
            <div>
              <Button
                onClick={closeModal}
                text={updateLoading ? "Updating" : "Update Skill"}
                loadingSpinner={
                  <span className="loading loading-spinner loading-sm"></span>
                }
                loading={updateLoading}
                type="submit"
              ></Button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateSkillModal;
