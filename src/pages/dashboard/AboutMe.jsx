import { FaFacebookF } from "react-icons/fa";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import Button from "../../components/shared/Button";
import { Link } from "react-router-dom";
import { useGetAboutMeQuery } from "../../redux/features/api/baseApi";

const AboutMe = () => {
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
  console.log("About Me", aboutMe[0]);
  return (
    <div className="h-auto">
      <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-1/2 md:max-xl:w-full">
        <h1 className="text-2xl font-notoSans text-[#55e6a5]">About Me</h1>
        <div>
          <Link to="/dashboard/update-about-me">
            <Button text="Update Info" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-5">
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
              readOnly
              value={aboutMe[0]?.name}
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
              readOnly
              value={aboutMe[0]?.role}
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins capitalize"
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
              readOnly
              cols="30"
              rows="5"
              value={aboutMe[0]?.about}
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
              readOnly
              value={aboutMe[0]?.mobile}
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
              readOnly
              value={aboutMe[0]?.email}
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
              readOnly
              value={aboutMe[0]?.address}
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
              readOnly
              value={aboutMe[0]?.website}
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
              readOnly
              value={aboutMe[0]?.maplink}
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
              readOnly
              placeholder="eg. https://www.youtube.com/embed/..."
              value={aboutMe[0]?.watchTheVideo}
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
                  readOnly
                  value={aboutMe[0]?.facebook}
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
                  readOnly
                  value={aboutMe[0]?.twitter}
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
                  readOnly
                  value={aboutMe[0]?.github}
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
                  readOnly
                  value={aboutMe[0]?.linkedin}
                  className="w-full md:w-[48%] md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutMe;
