import projectBg from "../assets/projectBg.jpg";
import projectImg from "../assets/cc.png";
import { Link } from "react-router-dom";
const ProjectCard = () => {
  return (
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
        <Link to="/project">
          <h1 className="text-2xl font-bold mb-2 hover:underline">
            Chemistry Corner 1
          </h1>
        </Link>
        <p className="text-base text-zinc-500">Online Dating Platform</p>
      </div>
    </div>
  );
};

export default ProjectCard;
