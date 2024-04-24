import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import Button from "../../shared/Button";
import { BsPlus } from "react-icons/bs";

import { FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import ProjectCard from "../../ProjectCard";
import { useGetAllProjectsQuery } from "../../../redux/features/api/project/projectApi";

const Portfolio = () => {
  const { data: allProjects } = useGetAllProjectsQuery();
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
            <Link to="/projects">
              <Button
                text="more project"
                icon={<BsPlus />}
                className="flex items-center gap-1 capitalize"
              />
            </Link>
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
            {allProjects?.map((project) => (
              <SwiperSlide key={project?._id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
