import ProjectCard from "../../components/ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <div className="projectsBannerImage h-[20rem] md:h-[30rem] flex flex-col gap-5 items-center justify-center">
        <h1 className="font-notoSans text-5xl text-white mt-7">Projects</h1>
        <p className="font-poppins capitalize text-[#55e6a5]">
          my projects list
        </p>
      </div>
      <div className="md:mt-32 mt-20 mb-20 md:w-3/5 w-full text-center md:text-left mx-auto grid grid-cols-1 md:grid-cols-2 md:max-xl:grid-cols-1 lg:max-2xl:grid-cols-1 justify-items-center gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
