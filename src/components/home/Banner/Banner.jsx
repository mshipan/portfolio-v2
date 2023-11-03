import "./Banner.css";
import bannerBg from "../../../assets/banner-scaled.jpg";
import Button from "../../shared/Button";
import { PiDownloadSimple } from "react-icons/pi";
import { FaPlayCircle } from "react-icons/fa";
import myImg from "../../../assets/me.png";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  useEffect(() => {
    const text = document.querySelector(".text p");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style=" transform: rotate(${i * 5.3}deg)">${char}</span>`
      )
      .join("");
  }, []);
  return (
    <div className="relative z-0">
      <div>
        <img src={bannerBg} className="h-screen" alt="Banner Image" />
      </div>
      <div className="flex items-center justify-between w-full px-2 md:px-0 md:w-3/5 md:max-xl:w-[95%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl uppercase font-notoSans text-white">
              hi, i&apos;m shipan
            </h1>

            <h1 className="text-5xl uppercase font-notoSans text-white">
              creative
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "CODER",
                  1000,
                  "TEAM PLAYER",
                  1000,
                  "DESIGNER",
                  1000,
                  "DEVELOPER",
                  1000,
                ]}
                className="text-[#55e6a5] ml-3"
                speed={50}
                repeat={Infinity}
              />
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
        <div className="hidden md:block">
          <div className="relative">
            <div className="circle top-1/2 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <div className="blob absolute">
                  <svg viewBox="0 0 165 165" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#55E6A5" transform="translate(100 100)">
                      <animate
                        attributeName="d"
                        dur="10000ms"
                        repeatCount="indefinite"
                        values="M59.7,-17.5C68.6,7.8,60.8,40.4,40.1,55.5C19.4,70.6,-14.3,68.3,-36.2,51.9C-58.1,35.5,-68.2,5,-60.2,-19.1C-52.2,-43.2,-26.1,-61,-0.3,-60.9C25.4,-60.8,50.9,-42.8,59.7,-17.5Z;
                  
                  M48.8,-16.9C57,9.4,53.1,38.6,36.3,51C19.5,63.5,-10.2,59.2,-30.7,44C-51.1,28.7,-62.3,2.4,-55.6,-21.8C-49,-45.9,-24.5,-68,-2.1,-67.3C20.3,-66.6,40.6,-43.2,48.8,-16.9Z;
                  
                  M60.3,-19.6C67.6,3,55.8,31.7,33.4,48.6C11,65.5,-21.9,70.5,-44.5,55.4C-67.2,40.4,-79.5,5.3,-70.4,-19.8C-61.2,-44.9,-30.6,-59.9,-2.1,-59.3C26.5,-58.6,53,-42.2,60.3,-19.6Z;
                  
                  M60.4,-19.1C67.6,2.6,55.4,31,33.4,47.4C11.3,63.8,-20.6,68,-39.2,54.4C-57.8,40.8,-63.1,9.3,-54.3,-14.5C-45.6,-38.4,-22.8,-54.5,1.9,-55.1C26.6,-55.8,53.2,-40.8,60.4,-19.1Z;
                  
                  M59.7,-17.5C68.6,7.8,60.8,40.4,40.1,55.5C19.4,70.6,-14.3,68.3,-36.2,51.9C-58.1,35.5,-68.2,5,-60.2,-19.1C-52.2,-43.2,-26.1,-61,-0.3,-60.9C25.4,-60.8,50.9,-42.8,59.7,-17.5Z"
                      ></animate>
                    </path>
                  </svg>
                </div>
                {/* add glow effect */}
                <div className="blob">
                  <svg viewBox="0 0 165 165" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#55E6A5" transform="translate(100 100)">
                      <animate
                        attributeName="d"
                        dur="10000ms"
                        repeatCount="indefinite"
                        values="M59.7,-17.5C68.6,7.8,60.8,40.4,40.1,55.5C19.4,70.6,-14.3,68.3,-36.2,51.9C-58.1,35.5,-68.2,5,-60.2,-19.1C-52.2,-43.2,-26.1,-61,-0.3,-60.9C25.4,-60.8,50.9,-42.8,59.7,-17.5Z;
                  
                  M48.8,-16.9C57,9.4,53.1,38.6,36.3,51C19.5,63.5,-10.2,59.2,-30.7,44C-51.1,28.7,-62.3,2.4,-55.6,-21.8C-49,-45.9,-24.5,-68,-2.1,-67.3C20.3,-66.6,40.6,-43.2,48.8,-16.9Z;
                  
                  M60.3,-19.6C67.6,3,55.8,31.7,33.4,48.6C11,65.5,-21.9,70.5,-44.5,55.4C-67.2,40.4,-79.5,5.3,-70.4,-19.8C-61.2,-44.9,-30.6,-59.9,-2.1,-59.3C26.5,-58.6,53,-42.2,60.3,-19.6Z;
                  
                  M60.4,-19.1C67.6,2.6,55.4,31,33.4,47.4C11.3,63.8,-20.6,68,-39.2,54.4C-57.8,40.8,-63.1,9.3,-54.3,-14.5C-45.6,-38.4,-22.8,-54.5,1.9,-55.1C26.6,-55.8,53.2,-40.8,60.4,-19.1Z;
                  
                  M59.7,-17.5C68.6,7.8,60.8,40.4,40.1,55.5C19.4,70.6,-14.3,68.3,-36.2,51.9C-58.1,35.5,-68.2,5,-60.2,-19.1C-52.2,-43.2,-26.1,-61,-0.3,-60.9C25.4,-60.8,50.9,-42.8,59.7,-17.5Z"
                      ></animate>
                    </path>
                  </svg>
                </div>
              </div>
              <div className="absolute z-50">
                <img src={myImg} alt="My Image" className="w-[30rem]" />
              </div>
              <div className="text z-0">
                <p className="font-notoSans text-white">
                  Shipan Mallik - Front End Web Developer -{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
