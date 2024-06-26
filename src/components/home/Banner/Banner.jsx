import "./Banner.css";
import bannerBg from "../../../assets/banner-scaled.jpg";
import Button from "../../shared/Button";
import { PiDownloadSimple } from "react-icons/pi";
import { FaPlayCircle } from "react-icons/fa";
import myImg from "../../../assets/me.png";
import { Fragment, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Dialog, Transition } from "@headlessui/react";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGetAboutMeQuery } from "../../../redux/features/api/aboutMe/aboutMeApi";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // const PDF_FILE_URL = "https://portfolio-v2-de4b6.web.app/CV_of_Shipan_Mallik.pdf";
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

  const { data: allAboutMe } = useGetAboutMeQuery();
  const aboutMe = allAboutMe?.[0];

  // const downloadFileAtUrl = (url) => {
  //   const fileName = url.split("/").pop();
  //   const aTag = document.createElement("a");
  //   aTag.href = url;
  //   aTag.setAttribute("download", fileName);
  //   document.body.appendChild(aTag);
  //   aTag.click();
  //   aTag.remove();
  // };

  return (
    <div className="relative z-0">
      <div>
        <img
          src={bannerBg}
          className="h-[90vh] md:h-screen"
          alt="Banner Image"
        />
      </div>
      <div className="flex md:max-xl:flex-col-reverse sm:max-xl:flex-col-reverse sm:max-xl:gap-32 md:max-xl:gap-32 items-center justify-between w-full px-2 md:px-0 md:w-3/5 md:max-xl:w-[95%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 md:max-xl:items-center sm:max-xl:items-center">
            <h1 className="sm:max-xl:text-3xl xl:max-2xl:text-2xl text-5xl uppercase font-notoSans text-white">
              hi, i&apos;m shipan!
            </h1>

            <h1 className="sm:max-xl:text-3xl xl:max-2xl:text-3xl text-5xl uppercase font-notoSans text-white flex flex-col sm:max-xl:flex-row sm:max-xl:gap-2 md:flex-row md:gap-2">
              <span>creative</span>
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
                className="text-[#55e6a5]"
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </div>
          <p className="text-zinc-300 max-w-md text-sm md:max-xl:text-center">
            {aboutMe?.about}
          </p>
          <div className="flex flex-col sm:max-xl:flex-row md:flex-row items-start md:items-center md:max-xl:justify-center gap-2">
            <Link to={aboutMe?.cvDriveLink} target="_blank">
              <Button
                text="download cv"
                className="capitalize flex items-center gap-2"
                icon={<PiDownloadSimple />}
                onClick={() => {
                  // downloadFileAtUrl(PDF_FILE_URL);
                }}
              />
            </Link>

            <button onClick={openModal} className="flex items-center gap-3">
              <FaPlayCircle className="text-4xl text-[#55e6a5]" />
              <span className="capitalize text-white hover:text-[#55e6a5] transition-all ease-out duration-500">
                watch the video
              </span>
            </button>

            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-3xl transform bg-white text-left align-middle shadow-xl transition-all">
                        <div>
                          <button
                            type="button"
                            className="absolute -top-1 -right-2 bg-white p-2 rounded-full z-50"
                            onClick={closeModal}
                          >
                            <FaXmark className="text-[#141c27]" />
                          </button>
                          <iframe
                            className="w-full aspect-video"
                            src={aboutMe?.watchTheVideo}
                          ></iframe>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
        <div className="hidden md:max-xl:block sm:max-xl:block xl:block">
          <div className="relative">
            <div className="circle top-1/2 sm:max-xl:top-16 left-1/2 transform -translate-x-1/2">
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
                <img
                  src="https://i.ibb.co/DbPsQ4q/me.png"
                  alt="My Image"
                  className="xl:max-2xl:w-80 w-[30rem] sm:max-xl:w-[25rem]"
                />
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
