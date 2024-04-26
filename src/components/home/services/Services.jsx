import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./services.css";

import { FreeMode, Pagination } from "swiper/modules";
import { useGetAllServicesQuery } from "../../../redux/features/api/service/servicesApi";

const Services = () => {
  const { data: allServices } = useGetAllServicesQuery();
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
          {allServices?.map((service) => (
            <SwiperSlide key={service?._id}>
              <div className="border border-zinc-700 pt-16 px-10 pb-10 w-96 lg:max-2xl:w-80 h-[30rem]">
                <div className="flex flex-col gap-10">
                  <img
                    src={service?.serviceImage}
                    alt="web development"
                    className="w-16"
                  />
                  <h1 className="capitalize font-notoSans text-xl lg:max-2xl:text-base text-white text-left">
                    {service?.serviceTitle}
                  </h1>
                </div>

                <p className="font-poppins lg:max-2xl:text-sm text-zinc-400 mt-6 text-left">
                  {service?.serviceDescription}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
