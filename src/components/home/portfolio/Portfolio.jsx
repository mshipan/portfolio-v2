import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import Button from "../../shared/Button";
import { BsPlus } from "react-icons/bs";
import projectImg from "../../../assets/cc.png";
import projectBg from "../../../assets/projectBg.jpg";
import { FreeMode } from "swiper/modules";

const Portfolio = () => {
  return (
    <div
      id="projects"
      className="mt-32  w-full text-center md:text-left mx-auto"
    >
      <div>
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-[#55e6a5] text-2xl font-light font-poppins ">
            Portfolio
          </h1>
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-white text-5xl font-bold font-notoSans capitalize">
              my recent complete projects
            </h1>
            <Button
              text="more project"
              icon={<BsPlus />}
              className="flex items-center gap-1 capitalize"
            />
          </div>
        </div>

        <div className="mt-16 ml-3 md:ml-0">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            centeredSlides={true}
            freeMode={true}
            modules={[FreeMode]}
            breakpoints={{
              // When window width is >= 768px (desktop)
              768: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              800: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              // When window width is < 768px (mobile)
              1024: {
                slidesPerView: 2,
              },
              1440: {
                slidesPerView: 3, // Adjust the number of slides as needed
                spaceBetween: 0,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col items-start gap-5">
                <div
                  className="px-5 pt-8 md:px-20 md:pt-16 bg-zinc-900 bg-cover bg-blend-darken"
                  style={{ backgroundImage: `url(${projectBg})` }}
                >
                  <div
                    className="hero w-80 h-80 md:w-[25rem] md:h-[25rem] object-top bg-top hover:bg-bottom transition-all duration-[4s] ease-in-out"
                    style={{ backgroundImage: `url(${projectImg})` }}
                  ></div>
                </div>
                <div className="h-full flex flex-col items-start justify-center gap-3 text-white">
                  <h1 className="text-2xl font-bold mb-2">
                    Chemistry Corner 1
                  </h1>
                  <p className="text-base text-zinc-500">
                    Online Dating Platform
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-start gap-5">
                <div
                  className="px-5 pt-8 md:px-20 md:pt-16 bg-zinc-900 bg-cover bg-blend-darken"
                  style={{ backgroundImage: `url(${projectBg})` }}
                >
                  <div
                    className="hero w-80 h-80 md:w-[25rem] md:h-[25rem] object-top bg-top hover:bg-bottom transition-all duration-[4s] ease-in-out"
                    style={{ backgroundImage: `url(${projectImg})` }}
                  ></div>
                </div>
                <div className="h-full flex flex-col items-start justify-center gap-3 text-white">
                  <h1 className="text-2xl font-bold mb-2">
                    Chemistry Corner 1
                  </h1>
                  <p className="text-base text-zinc-500">
                    Online Dating Platform
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-start gap-5">
                <div
                  className="px-5 pt-8 md:px-20 md:pt-16 bg-zinc-900 bg-cover bg-blend-darken"
                  style={{ backgroundImage: `url(${projectBg})` }}
                >
                  <div
                    className="hero w-80 h-80 md:w-[25rem] md:h-[25rem] object-top bg-top hover:bg-bottom transition-all duration-[4s] ease-in-out"
                    style={{ backgroundImage: `url(${projectImg})` }}
                  ></div>
                </div>
                <div className="h-full flex flex-col items-start justify-center gap-3 text-white">
                  <h1 className="text-2xl font-bold mb-2">
                    Chemistry Corner 1
                  </h1>
                  <p className="text-base text-zinc-500">
                    Online Dating Platform
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-start gap-5">
                <div
                  className="px-5 pt-8 md:px-20 md:pt-16 bg-zinc-900 bg-cover bg-blend-darken"
                  style={{ backgroundImage: `url(${projectBg})` }}
                >
                  <div
                    className="hero w-80 h-80 md:w-[25rem] md:h-[25rem] object-top bg-top hover:bg-bottom transition-all duration-[4s] ease-in-out"
                    style={{ backgroundImage: `url(${projectImg})` }}
                  ></div>
                </div>
                <div className="h-full flex flex-col items-start justify-center gap-3 text-white">
                  <h1 className="text-2xl font-bold mb-2">
                    Chemistry Corner 1
                  </h1>
                  <p className="text-base text-zinc-500">
                    Online Dating Platform
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-start gap-5">
                <div
                  className="px-5 pt-8 md:px-20 md:pt-16 bg-zinc-900 bg-cover bg-blend-darken"
                  style={{ backgroundImage: `url(${projectBg})` }}
                >
                  <div
                    className="hero w-80 h-80 md:w-[25rem] md:h-[25rem] object-top bg-top hover:bg-bottom transition-all duration-[4s] ease-in-out"
                    style={{ backgroundImage: `url(${projectImg})` }}
                  ></div>
                </div>
                <div className="h-full flex flex-col items-start justify-center gap-3 text-white">
                  <h1 className="text-2xl font-bold mb-2">
                    Chemistry Corner 1
                  </h1>
                  <p className="text-base text-zinc-500">
                    Online Dating Platform
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
