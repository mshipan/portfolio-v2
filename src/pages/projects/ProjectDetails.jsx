import PageBanner from "../../components/shared/PageBanner";
import projectBannerImg from "../../assets/projectBanner.jpg";
import { TfiCheck } from "react-icons/tfi";
import { LuClock } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import Button from "../../components/shared/Button";

const ProjectDetails = () => {
  return (
    <div>
      <PageBanner title="Project Details" subTitle="Chemistry Corner 1" />
      <div className="md:mt-32 mt-20 mb-20 md:w-3/5 w-full text-center md:text-left mx-auto ">
        <div className="flex flex-col gap-10 w-[98%] md:w-full mx-auto">
          <div>
            <img
              src={projectBannerImg}
              alt="Project Banner"
              className="w-full h-60 md:h-[40rem] md:max-xl:h-80 rounded-xl"
            />
          </div>
          <div className="flex flex-col md:flex-row md:max-xl:flex-col gap-10">
            <div className="flex flex-col gap-5 md:w-3/4 md:max-xl:w-full">
              <div className="flex flex-col gap-5">
                <h1 className="text-lg font-poppins font-bold text-[#55e6a5]">
                  1. Project Overview
                </h1>
                <div className="flex flex-col gap-3">
                  <h1 className="text-4xl font-notoSans text-white">
                    Project Description
                  </h1>
                  <p className="text-sm text-zinc-500 font-poppins">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis ab aperiam laudantium perferendis ducimus recusandae
                    asperiores, magnam sit repudiandae blanditiis voluptates
                    itaque corporis nulla reiciendis cupiditate dolore odio quam
                    debitis.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-4xl font-notoSans text-white">Goals</h1>
                  <p className="text-sm text-zinc-500 font-poppins">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse magnam consequuntur praesentium nam repudiandae, ea
                    quia reiciendis repellat, alias ad obcaecati aut eligendi
                    dolorum rem, quisquam laudantium ipsam tenetur quos?
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-lg font-poppins font-bold text-[#55e6a5]">
                  2. Technologies Used
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                  <div className="py-3 px-2 border border-[#55e6a5]">
                    <p className="text-white font-poppins capitalize text-center">
                      Tailwind Css
                    </p>
                  </div>
                  <div className="py-3 px-2 border border-[#55e6a5]">
                    <p className="text-white font-poppins capitalize text-center">
                      React
                    </p>
                  </div>
                  <div className="py-3 px-2 border border-[#55e6a5]">
                    <p className="text-white font-poppins capitalize text-center">
                      node.js
                    </p>
                  </div>
                  <div className="py-3 px-2 border border-[#55e6a5]">
                    <p className="text-white font-poppins capitalize text-center">
                      express.js
                    </p>
                  </div>
                  <div className="py-3 px-2 border border-[#55e6a5]">
                    <p className="text-white font-poppins capitalize text-center">
                      mongoDB
                    </p>
                  </div>
                  <div className="py-3 px-2 border border-[#55e6a5]">
                    <p className="text-white font-poppins capitalize text-center">
                      firebase
                    </p>
                  </div>
                  <div className="py-3 px-2 border border-[#55e6a5]">
                    <p className="text-white font-poppins capitalize text-center">
                      redux
                    </p>
                  </div>
                  <div className="py-3 px-2 border border-[#55e6a5]">
                    <p className="text-white font-poppins capitalize text-center">
                      tanstack query
                    </p>
                  </div>
                  <div className="py-3 px-2 border border-[#55e6a5]">
                    <p className="text-white font-poppins capitalize text-center">
                      socket.io
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-lg font-poppins font-bold text-[#55e6a5]">
                  3. Features
                </h1>
                <div className="flex flex-col gap-3">
                  <div className="flex md:items-center gap-3">
                    <TfiCheck className="text-[#55e6a5]" />
                    <p className="font-poppins text-sm text-zinc-500 text-left">
                      User-friendly registration and login for easy profile
                      creation and management.
                    </p>
                  </div>
                  <div className="flex md:items-center gap-3">
                    <TfiCheck className="text-[#55e6a5]" />
                    <p className="font-poppins text-sm text-zinc-500 text-left">
                      User-friendly registration and login for easy profile
                      creation and management.
                    </p>
                  </div>
                  <div className="flex md:items-center gap-3">
                    <TfiCheck className="text-[#55e6a5]" />
                    <p className="font-poppins text-sm text-zinc-500 text-left">
                      User-friendly registration and login for easy profile
                      creation and management.
                    </p>
                  </div>
                  <div className="flex md:items-center gap-3">
                    <TfiCheck className="text-[#55e6a5]" />
                    <p className="font-poppins text-sm text-zinc-500 text-left">
                      User-friendly registration and login for easy profile
                      creation and management.
                    </p>
                  </div>
                  <div className="flex md:items-center gap-3">
                    <TfiCheck className="text-[#55e6a5]" />
                    <p className="font-poppins text-sm text-zinc-500 text-left">
                      User-friendly registration and login for easy profile
                      creation and management.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-lg font-poppins font-bold text-[#55e6a5]">
                  4. conclusion
                </h1>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-zinc-500 font-poppins">
                    Chemistry Corner is poised to reshape the online dating
                    landscape by offering a feature-rich platform that
                    prioritizes user experience and security. With a focus on
                    meaningful matches, real-time communication, and user
                    privacy, this project aims to create a safe and engaging
                    space for users to forge authentic connections. By
                    incorporating advanced features, fostering user feedback,
                    and embracing innovation, Chemistry Corner aspires to become
                    a cornerstone in the journey of finding genuine
                    relationships online.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/4 md:max-xl:w-full flex flex-col gap-8">
              <div className="flex flex-col gap-3 bg-zinc-800 py-8 px-5">
                <div className="flex flex-col items-center md:items-start gap-2 bg-zinc-700 py-2 px-5">
                  <div>
                    <h1 className="text-lg font-poppins font-bold text-[#55e6a5]">
                      Project Duration
                    </h1>
                    <p className="text-white inline-flex items-center gap-2">
                      <LuClock className="text-lg" />
                      15 Days
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-zinc-400 inline-flex items-center gap-2">
                        <SlCalender
                          className="text-white text-lg
                      "
                        />
                        Start Date: 21 Nov 2023
                      </h1>
                      <h1 className="text-zinc-400 inline-flex items-center gap-2">
                        <SlCalender
                          className="text-white text-lg
                      "
                        />
                        End Date: 25 Nov 2023
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 bg-zinc-700 py-2 px-5">
                  <div>
                    <h1 className="text-lg font-poppins font-bold text-[#55e6a5]">
                      Live Link
                    </h1>
                    <Link to="">
                      <p className="text-white inline-flex items-center gap-2 hover:text-[#55e6a5]">
                        www.example.com
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-2 bg-zinc-700 py-2 px-5">
                  <div>
                    <h1 className="text-lg font-poppins font-bold text-[#55e6a5]">
                      Github
                    </h1>
                    <div className="flex flex-col gap-2">
                      <div>
                        <div>
                          <h1 className="text-white font-poppins font-semibold">
                            Client
                          </h1>
                        </div>
                        <Link to="">
                          <p className="text-white inline-flex items-center gap-2 hover:text-[#55e6a5]">
                            www.example.com
                          </p>
                        </Link>
                      </div>
                      <div>
                        <div>
                          <h1 className="text-white font-poppins font-semibold">
                            Server
                          </h1>
                        </div>
                        <Link to="">
                          <p className="text-white inline-flex items-center gap-2 hover:text-[#55e6a5]">
                            www.example.com
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-800 py-8 px-5">
                <div className="bg-zinc-700 py-6 px-5 flex flex-col items-center md:items-start">
                  <p className="text-[#55e6a5] font-semibold">Quick Contact</p>
                  <p className="text-xl text-white font-bold font-notoSans">
                    Need This Kind of Project!
                  </p>
                  <p className="font-poppins text-sm mt-5 mb-3">
                    Contact me at my address or click the contact button.
                    I&apos;m always there for you 24/7.
                  </p>
                  <div>
                    <Link to="/contact">
                      <Button
                        text="contact"
                        className="flex items-center gap-1 capitalize"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
