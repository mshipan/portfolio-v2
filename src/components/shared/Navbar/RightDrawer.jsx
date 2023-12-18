import { Link } from "react-router-dom";
import logo from "../../../assets/favicon.jpg";
import Button from "../Button";

const RightDrawer = () => {
  return (
    <div>
      <div className="bg-[#141c27]">
        <div className="flex items-center gap-3 p-4">
          <img src={logo} alt="Website Logo" className="w-14" />
          <Link to="/dashboard">
            <h1 className="font-notoSans uppercase text-xl text-white">
              Shipan
            </h1>
          </Link>
        </div>
      </div>
      <div className="p-4 mt-7 mb-8">
        <h1 className="font-notoSans uppercase text-lg text-white">About Me</h1>
        <p className="mt-3 text-sm text-zinc-400">
          As a talented React enthusiast with a computer science and engineering
          degree, I possess a strong foundation to excel as a front-end
          developer. With a passion for creating visually captivating and
          interactive web applications, I am eager to contribute, collaborate,
          and embark on an exciting journey as a React front-end developer.
        </p>
      </div>
      <div className="p-4">
        <h1 className="font-notoSans uppercase text-lg text-white mb-6">
          Get in touch
        </h1>
        <div>
          <form className="flex flex-col gap-5">
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-[#55e6a5] p-3 bg-[#141c27] placeholder-zinc-300 outline-none"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Your Email"
                className="border border-[#55e6a5] p-3 bg-[#141c27] placeholder-zinc-300 outline-none"
              />
            </div>
            <div className="form-control">
              <textarea
                name=""
                cols="20"
                rows="5"
                placeholder="Message"
                className="border border-[#55e6a5] p-3 bg-[#141c27] placeholder-zinc-300 outline-none"
              ></textarea>
            </div>
            <div>
              <Button
                text="Submit Now"
                type="submit"
                className="lowercase"
              ></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RightDrawer;
