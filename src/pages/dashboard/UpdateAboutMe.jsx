import { FaFacebookF } from "react-icons/fa";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import Button from "../../components/shared/Button";
import { useForm } from "react-hook-form";
import {
  useGetAboutMeQuery,
  useUpdateAboutMeMutation,
} from "../../redux/features/api/aboutMe/aboutMeApi";
import Swal from "sweetalert2";

const UpdateAboutMe = () => {
  const { register, handleSubmit } = useForm();
  const [updateAboutMe] = useUpdateAboutMeMutation();
  const { data: aboutMe, isLoading, isError } = useGetAboutMeQuery();
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
  const id = aboutMe[0]._id;

  const onSubmit = async (data) => {
    try {
      const result = await updateAboutMe({
        id: id,
        data: data,
      });
      if (result.data.modifiedCount > 0) {
        Swal.fire({
          title: "Info Updated Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error updating Info:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-auto">
      <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-1/2 md:max-xl:w-full">
        <h1 className="text-2xl font-notoSans text-[#55e6a5]">
          Update About Me
        </h1>
        <div>
          <Button text="Update" type="submit" />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-5">
          <div className="form-control">
            <label
              htmlFor="name"
              className="text-lg text-white font-notoSans mb-2"
            >
              Full Name:
            </label>
            <input
              type="text"
              name="name"
              defaultValue={aboutMe[0]?.name}
              {...register("name")}
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="role"
              className="text-lg text-white font-notoSans mb-2"
            >
              Role:
            </label>
            <input
              type="text"
              name="role"
              defaultValue={aboutMe[0]?.role}
              {...register("role")}
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="about"
              className="text-lg text-white font-notoSans mb-2"
            >
              About Me:
            </label>
            <textarea
              name="about"
              cols="30"
              rows="5"
              defaultValue={aboutMe[0]?.about}
              {...register("about")}
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            ></textarea>
          </div>

          <div className="form-control">
            <label
              htmlFor="mobile"
              className="text-lg text-white font-notoSans mb-2"
            >
              Mobile:
            </label>
            <input
              type="text"
              name="mobile"
              defaultValue={aboutMe[0]?.mobile}
              {...register("mobile")}
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="email"
              className="text-lg text-white font-notoSans mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              defaultValue={aboutMe[0]?.email}
              {...register("email")}
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="address"
              className="text-lg text-white font-notoSans mb-2"
            >
              Address:
            </label>
            <input
              type="text"
              name="address"
              defaultValue={aboutMe[0]?.address}
              {...register("address")}
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="website"
              className="text-lg text-white font-notoSans mb-2"
            >
              Website:
            </label>
            <input
              type="text"
              name="website"
              defaultValue={aboutMe[0]?.website}
              {...register("website")}
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="maplink"
              className="text-lg text-white font-notoSans mb-2"
            >
              Map Link (iframe):
            </label>
            <input
              type="text"
              name="maplink"
              defaultValue={aboutMe[0]?.maplink}
              {...register("maplink")}
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="watchTheVideo"
              className="text-lg text-white font-notoSans mb-2"
            >
              Watch the video Link:
            </label>
            <input
              type="text"
              name="watchTheVideo"
              placeholder="eg. https://www.youtube.com/embed/..."
              defaultValue={aboutMe[0]?.watchTheVideo}
              {...register("watchTheVideo")}
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="sociallinks"
              className="text-lg text-white font-notoSans mb-2"
            >
              Social Media (links):
            </label>
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <div className="py-2 px-2 border border-[#55e6a5] border-r-0">
                  <FaFacebookF className="text-[#55e6a5]" />
                </div>
                <input
                  type="text"
                  name="facebook"
                  defaultValue={aboutMe[0]?.facebook}
                  {...register("facebook")}
                  className="w-full md:w-[48%] md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                />
              </div>
              <div className="flex items-center">
                <div className="py-2 px-2 border border-[#55e6a5] border-r-0">
                  <FaTwitter className="text-[#55e6a5]" />
                </div>
                <input
                  type="text"
                  name="twitter"
                  defaultValue={aboutMe[0]?.twitter}
                  {...register("twitter")}
                  className="w-full md:w-[48%] md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                />
              </div>
              <div className="flex items-center">
                <div className="py-2 px-2 border border-[#55e6a5] border-r-0">
                  <FaGithub className="text-[#55e6a5]" />
                </div>
                <input
                  type="text"
                  name="github"
                  defaultValue={aboutMe[0]?.github}
                  {...register("github")}
                  className="w-full md:w-[48%] md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                />
              </div>
              <div className="flex items-center">
                <div className="py-2 px-2 border border-[#55e6a5] border-r-0">
                  <FaLinkedin className="text-[#55e6a5]" />
                </div>
                <input
                  type="text"
                  name="linkedin"
                  defaultValue={aboutMe[0]?.linkedin}
                  {...register("linkedin")}
                  className="w-full md:w-[48%] md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateAboutMe;
