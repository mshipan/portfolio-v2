import ProjectCard from "../../components/ProjectCard";
import PageBanner from "../../components/shared/PageBanner";
import { useGetAllProjectsQuery } from "../../redux/features/api/project/projectApi";
import "./Projects.css";

const Projects = () => {
  const { data: allProjects } = useGetAllProjectsQuery();

  return (
    <div>
      <PageBanner title="Projects" subTitle="my projects list" />
      <div className="md:mt-32 mt-20 mb-20 md:w-3/5 w-full text-center md:text-left mx-auto grid grid-cols-1 md:grid-cols-2 md:max-xl:grid-cols-1 lg:max-2xl:grid-cols-1 justify-items-center gap-10">
        {allProjects?.map((project) => (
          <ProjectCard key={project?._id} project={project} />
        ))}

        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </div>
    </div>
  );
};

export default Projects;
