import { FaFacebookF } from "react-icons/fa";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import Button from "../../components/shared/Button";

const AboutMe = () => {
  return (
    <div className="h-auto">
      <div className="flex items-center mb-5 justify-between w-1/2">
        <h1 className="text-2xl font-notoSans text-[#55e6a5]">About Me</h1>
        <div>
          <Button text="Update Info" />
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
              value="Shipan"
              className="w-1/2 py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
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
              value="Front End Web Developer"
              className="w-1/2 py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
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
              value="I'm a passionate Web Developer with a knack for creating captivating digital experiences. My skills include HTML5, CSS3, JavaScript, React, Redux, and UI libraries like Tailwind CSS and Bootstrap. On the backend, I excel in Node.js, Express.js, MongoDB, and Firebase. Let's craft user-friendly interfaces that engage and delight users!"
              className="w-1/2 py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
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
              value="01622543390"
              className="w-1/2 py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
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
              value="shipanmallik95@gmail.com"
              className="w-1/2 py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
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
              value="Kathaltola, Mirpur 2"
              className="w-1/2 py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
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
              value="<iframe>www.example.com</iframe>"
              className="w-1/2 py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
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
                  value="www.facebook.com"
                  className="w-[48%] py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
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
                  value="www.twitter.com"
                  className="w-[48%] py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
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
                  value="www.github.com"
                  className="w-[48%] py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
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
                  value="www.linkedin.com"
                  className="w-[48%] py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
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
