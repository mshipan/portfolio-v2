import projectBg from "../assets/projectBg.jpg";
import projectImg from "../assets/cc.png";
import { Link } from "react-router-dom";
const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col items-start gap-5">
      <div
        className="px-5 pt-8 md:px-20 md:pt-16 bg-zinc-900 bg-cover bg-blend-darken"
        style={{ backgroundImage: `url(${project?.projectBanner})` }}
      >
        <div
          className="hero w-80 h-80 md:w-[25rem] md:h-[25rem] object-top bg-top hover:bg-bottom transition-all duration-[4s] ease-in-out"
          style={{ backgroundImage: `url(${project?.projectBg})` }}
        ></div>
      </div>
      <div className="h-full text-white">
        <Link to={`/project/${project?._id}`}>
          <h1 className="text-2xl font-bold mb-2 hover:underline">
            {project?.projectTitle}
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
