import bannerBg from "../../assets/banner-scaled.jpg";
import Button from "../shared/Button";
import { PiDownloadSimple } from "react-icons/pi";
import { FaPlayCircle } from "react-icons/fa";
import myImg from "../../assets/me.png";

const Banner = () => {
  return (
    <div className="relative z-0">
      <div>
        <img src={bannerBg} className="h-screen" alt="Banner Image" />
      </div>
      <div className="flex items-center justify-between md:w-3/5 md:max-xl:w-[95%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl uppercase font-notoSans text-white">
              hi, i&apos;m shipan
            </h1>
            <h1 className="text-5xl uppercase font-notoSans text-white">
              creative <span>coder</span>
            </h1>
          </div>
          <p className="text-zinc-300 max-w-md text-sm">
            I&apos;m a passionate Web Developer with a knack for creating
            captivating digital experiences. My skills include HTML5, CSS3,
            JavaScript, React, Redux, and UI libraries like Tailwind CSS and
            Bootstrap. On the backend, I excel in Node.js, Express.js, MongoDB,
            and Firebase. Let&apos;s craft user-friendly interfaces that engage
            and delight users!
          </p>
          <div className="flex items-center gap-8">
            <Button
              text="download cv"
              className="capitalize flex items-center gap-2"
              icon={<PiDownloadSimple />}
            />
            <button className="flex items-center gap-3">
              <FaPlayCircle className="text-4xl text-[#55e6a5]" />
              <span className="capitalize text-white hover:text-[#55e6a5] transition-all ease-out duration-500">
                watch the video
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={myImg} alt="My Image" className="w-[30rem]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
