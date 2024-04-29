import { useForm } from "react-hook-form";
import Button from "../shared/Button";
import {
  useGetEducationByIdQuery,
  useUpdateEducationMutation,
} from "../../redux/features/api/education/educationApi";
import Swal from "sweetalert2";

const UpdateEducationCardModal = ({ isModalOpen, closeModal, education }) => {
  const { register, handleSubmit } = useForm();
  const [updateEducation] = useUpdateEducationMutation();
  const {
    data: singleEducation,
    isLoading,
    isError,
  } = useGetEducationByIdQuery(education._id);
  if (isLoading) {
    return <p className="font-poppins text-white text-lg">Loading...</p>;
  }
  if (isError) {
    return (
      <p className="font-poppins text-[#55e6a5] text-lg">
        Error Fetching Data...
      </p>
    );
  }
  const { _id, title, startYear, endYear, description } = singleEducation;
  const onSubmit = async (data) => {
    try {
      const result = await updateEducation({
        id: _id,
        data: data,
      });
      if (result.data.modifiedCount > 0) {
        Swal.fire({
          title: "Education Updated Successfully!",
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
    <dialog open={isModalOpen} className="modal modal-middle sm:modal-middle">
      <div className="modal-box bg-[#141c27]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white bg-[#243144]"
          >
            ✕
          </button>
        </form>

        {/* You can access education data here */}
        <h3 className="font-bold text-lg font-notoSans text-[#55e6a5]">
          Update Education
        </h3>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-5"
          >
            <div className="form-control">
              <label htmlFor="title" className="text-white font-poppins">
                Education Title:
              </label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                {...register("title")}
                placeholder="Your Education Title"
                className="border border-[#55e6a5] p-1 bg-[#141c27] placeholder-zinc-300 outline-none text-zinc-400"
              />
            </div>

            <div className="form-control">
              <label htmlFor="startYear" className="text-white font-poppins">
                Star Year:
              </label>
              <input
                type="text"
                name="startYear"
                defaultValue={startYear}
                {...register("startYear")}
                max="100"
                min="0"
                placeholder="Star Year"
                className="border border-[#55e6a5] p-1 bg-[#141c27] placeholder-zinc-300 outline-none text-zinc-400"
              />
            </div>

            <div className="form-control">
              <label htmlFor="endYear" className="text-white font-poppins">
                End Year:
              </label>
              <input
                type="text"
                name="endYear"
                defaultValue={endYear}
                {...register("endYear")}
                max="100"
                min="0"
                placeholder="End Year"
                className="border border-[#55e6a5] p-1 bg-[#141c27] placeholder-zinc-300 outline-none text-zinc-400"
              />
            </div>

            <div className="form-control">
              <label htmlFor="description" className="text-white font-poppins">
                Description:
              </label>

              <textarea
                name="description"
                {...register("description")}
                defaultValue={description}
                cols="30"
                rows="5"
                placeholder="Description"
                className="border border-[#55e6a5] p-1 bg-[#141c27] placeholder-zinc-300 outline-none text-zinc-400"
              ></textarea>
            </div>
            <div>
              <Button text="Update Education" type="submit"></Button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateEducationCardModal;
