import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import webdev from "../../../assets/webdev.png";
import customwebdev from "../../../assets/customwebdev.png";
import api from "../../../assets/api.png";
import database from "../../../assets/database.png";
import backend from "../../../assets/backend.png";
import testing from "../../../assets/testing.png";
import deploy from "../../../assets/deploy.png";
import "./services.css";

import { FreeMode, Pagination } from "swiper/modules";

const Services = () => {
  return (
    <div
      id="service"
      className="mt-32 md:w-3/5 w-full text-center md:text-left mx-auto"
    >
      <div className="flex flex-col items-center gap-5">
        <p className="text-[#55e6a5] text-2xl font-light font-poppins">
          Services
        </p>

        <h1 className="text-white text-5xl font-bold font-notoSans capitalize">
          Service provide for my clients
        </h1>
      </div>

      <div className="mt-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            // When window width is >= 768px (desktop)
            768: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            800: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            // When window width is < 768px (mobile)
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 3, // Adjust the number of slides as needed
              spaceBetween: 80, // Adjust the spacing as needed
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="border border-zinc-700 pt-16 px-10 pb-10 w-96 h-[30rem]">
              <div className="flex flex-col gap-10">
                <img src={webdev} alt="web development" className="w-16" />
                <h1 className="capitalize font-notoSans text-xl text-white text-left">
                  full stack web development
                </h1>
              </div>

              <p className="font-poppins text-zinc-400 mt-6 text-left">
                I&apos;m a MERN stack developer dedicated to creating seamless
                websites. From front-end with React to back-end with Node.js and
                MongoDB for data, I provide full stack solutions to bring your
                ideas to life. Let&apos;s make your vision a reality.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-zinc-700 pt-16 px-10 pb-10 w-96 h-[30rem]">
              <div className="flex flex-col gap-10">
                <img
                  src={customwebdev}
                  alt="web development"
                  className="w-16"
                />
                <h1 className="capitalize font-notoSans text-xl text-white text-left">
                  Custom Web App Development
                </h1>
              </div>

              <p className="font-poppins text-zinc-400 mt-6 text-left">
                As a MERN stack developer, my expertise lies in crafting custom
                web applications. Whether it&apos;s e-commerce, content
                management, or any unique digital project, I&apos;m here to
                bring your vision to life. Let&apos;s collaborate and create
                something exceptional together to meet your specific needs.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-zinc-700 pt-16 px-10 pb-10 w-96 h-[30rem]">
              <div className="flex flex-col gap-10">
                <img src={api} alt="web development" className="w-16" />
                <h1 className="capitalize font-notoSans text-xl text-white text-left">
                  API Development and Integration
                </h1>
              </div>

              <p className="font-poppins text-zinc-400 mt-6 text-left">
                I&apos;m your go-to MERN stack developer for API development and
                integration. I specialize in creating and integrating APIs,
                enhancing your portfolio website&apos;s functionality for a more
                engaging and dynamic user experience. Let&apos;s take your site
                to the next level!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-zinc-700 pt-16 px-10 pb-10 w-96 h-[30rem]">
              <div className="flex flex-col gap-10">
                <img src={database} alt="web development" className="w-16" />
                <h1 className="capitalize font-notoSans text-xl text-white text-left">
                  Database Design and Implementation
                </h1>
              </div>

              <p className="font-poppins text-zinc-400 mt-6 text-left">
                I&apos;m your go-to MERN stack developer for API development and
                integration. I specialize in creating and integrating APIs,
                enhancing your portfolio website&apos;s functionality for a more
                engaging and dynamic user experience. Let&apos;s take your site
                to the next level!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-zinc-700 pt-16 px-10 pb-10 w-96 h-[30rem]">
              <div className="flex flex-col gap-10">
                <img src={backend} alt="web development" className="w-16" />
                <h1 className="capitalize font-notoSans text-xl text-white text-left">
                  Back-End Development
                </h1>
              </div>

              <p className="font-poppins text-zinc-400 mt-6 text-left">
                As a MERN stack developer, my Back-End Development services
                ensure your website functions seamlessly. I create robust
                server-side logic, manage databases, and implement secure APIs,
                guaranteeing a smooth user experience while you focus on your
                content and front-end design.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-zinc-700 pt-16 px-10 pb-10 w-96 h-[30rem]">
              <div className="flex flex-col gap-10">
                <img src={testing} alt="web development" className="w-16" />
                <h1 className="capitalize font-notoSans text-xl text-white text-left">
                  Testing and Quality Assurance
                </h1>
              </div>

              <p className="font-poppins text-zinc-400 mt-6 text-left">
                As a MERN stack developer, I prioritize Testing and Quality
                Assurance to ensure your portfolio website functions flawlessly.
                I rigorously test every component, from the front-end design to
                the back-end functionality, guaranteeing a seamless and
                error-free user experience. Your satisfaction is my top
                priority.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-zinc-700 pt-16 px-10 pb-10 w-96 h-[30rem]">
              <div className="flex flex-col gap-10">
                <img src={deploy} alt="web development" className="w-16" />
                <h1 className="capitalize font-notoSans text-xl text-white text-left">
                  Deployment and Maintenance
                </h1>
              </div>

              <p className="font-poppins text-zinc-400 mt-6 text-left">
                I offer seamless deployment and ongoing maintenance services to
                ensure your portfolio website stays up and running smoothly.
                With my expertise as a MERN stack developer, I&apos;ll handle
                the technical aspects, so you can focus on showcasing your work
                to the world hassle-free.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
