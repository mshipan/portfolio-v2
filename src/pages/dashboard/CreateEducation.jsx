import { useForm } from "react-hook-form";
import Button from "../../components/shared/Button";
import { useNavigate } from "react-router-dom";
import { useAddAnEducationMutation } from "../../redux/features/api/education/educationApi";
import Swal from "sweetalert2";

const CreateEducation = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const [addEducation] = useAddAnEducationMutation();

  const onSubmit = async (data) => {
    try {
      const result = await addEducation(data);
      if (result.data) {
        Swal.fire({
          title: "Education Added Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();
        navigate("/dashboard/education");
      } else {
        Swal.fire({
          title: "Education Added Failed!",
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
    <form onSubmit={handleSubmit(onSubmit)} className="h-screen">
      <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-1/2 md:max-xl:w-full">
        <h1 className="text-2xl font-notoSans text-[#55e6a5]">
          Create Education Info
        </h1>
        <div>
          <Button type="submit" text="Add Education" />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-5">
          <div className="form-control">
            <label
              htmlFor="title"
              className="text-lg text-white font-notoSans mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              name="title"
              {...register("title")}
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="startYear"
              className="text-lg text-white font-notoSans mb-2"
            >
              Start Year:
            </label>
            <input
              type="text"
              name="startYear"
              {...register("startYear")}
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="endYear"
              className="text-lg text-white font-notoSans mb-2"
            >
              End Year:
            </label>
            <input
              type="text"
              name="endYear"
              {...register("endYear")}
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="description"
              className="text-lg text-white font-notoSans mb-2"
            >
              Description:
            </label>
            <textarea
              name="description"
              cols="30"
              rows="5"
              {...register("description")}
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateEducation;
