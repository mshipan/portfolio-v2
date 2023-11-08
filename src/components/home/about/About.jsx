import { BsFillPlayFill } from "react-icons/bs";
import Button from "../../shared/Button";
import { PiDownloadSimple } from "react-icons/pi";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaXmark } from "react-icons/fa6";

const About = () => {
  const PDF_FILE_URL = "http://localhost:5173/Resume_of_Shipan_Mallik.pdf";

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const downloadFileAtUrl = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div
      id="about"
      className="mt-32 mb-20 md:w-3/5 w-full text-center md:text-left mx-auto"
    >
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-[#55e6a5] text-2xl font-light font-poppins mb-10">
          About me
        </h1>
        <div className="flex flex-col md:max-lg:flex-col md:flex-row items-center justify-between w-[90%] mx-auto gap-10">
          <div className="bg-zinc-900 p-10 w-72 h-72 md:w-96 md:h-96 flex flex-col items-center justify-center gap-10 md:gap-28">
            <div className="relative flex h-20 w-20">
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-700 opacity-75"></div>
              <button
                onClick={openModal}
                className="relative inline-flex rounded-full h-20 w-20 bg-zinc-800 items-center justify-center"
              >
                <BsFillPlayFill className="text-3xl" />
              </button>
            </div>
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
                        <div className="">
                          <button
                            type="button"
                            className="absolute -top-1 -right-2 bg-white p-2 rounded-full z-50"
                            onClick={closeModal}
                          >
                            <FaXmark className="text-[#141c27]" />
                          </button>
                          <iframe
                            className="w-full aspect-video"
                            src="https://www.youtube.com/embed/pJQXGmMofro?si=LE5Jav2uUHxOfTh5"
                          ></iframe>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
            <Button
              text="get resume"
              className="capitalize flex items-center gap-2"
              icon={<PiDownloadSimple />}
              onClick={() => {
                downloadFileAtUrl(PDF_FILE_URL);
              }}
            />
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col md:max-lg:items-center gap-4">
              <h1 className="font-notoSans text-4xl md:text-5xl text-white">
                I&apos;m shipan mallik
              </h1>
              <h1 className="font-poppins text-base md:text-2xl text-zinc-400">
                Front-end Developer specializing in
              </h1>
              <h1 className="font-poppins text-2xl text-zinc-400">
                MERN Stack
              </h1>
            </div>
            <p className=" text-zinc-400 max-w-lg md:text-justify text-center">
              As a talented React enthusiast with a computer science and
              engineering degree, I possess a strong foundation to excel as a
              front-end developer. With a passion for creating visually
              captivating and interactive web applications, I am eager to
              contribute, collaborate, and embark on an exciting journey as a
              React front-end developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
