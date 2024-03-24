import Button from "../../components/shared/Button";
import { Link } from "react-router-dom";
import { CiStopwatch } from "react-icons/ci";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useGetAllProjectsQuery } from "../../redux/features/api/project/projectApi";

const ProjectsOnDashboard = () => {
  const { data: allProjects } = useGetAllProjectsQuery();
  return (
    <div className="h-auto md:h-auto">
      <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-1/2 md:max-xl:w-full">
        <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-full md:max-xl:w-full">
          <h1 className="text-2xl font-notoSans text-[#55e6a5]">Projects</h1>
          <div>
            <Link to="/dashboard/create-project">
              <Button text="Create Project" />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-1/2 md:max-xl:w-full">
        {allProjects?.map((project) => (
          <div
            key={project?._id}
            className="w-96 bg-slate-900 flex flex-col gap-2 rounded-md"
          >
            <div className="py-2 pl-2 flex flex-col gap-1">
              <h1 className="font-notoSans text-xl text-white ">
                {project?.projectTitle}
              </h1>
              <div className="flex items-center gap-1 text-lg">
                <CiStopwatch className="text-[#55e6a5] text-2xl" />
                <p className="font-poppins text-slate-400">
                  {project?.projectDuration} days
                </p>
              </div>
            </div>
            <img
              src={project?.projectBanner}
              alt="Project Banner"
              className="mb-2 w-full h-56"
            />
            <div className="ml-3">
              <p className="font-poppins text-sm text-white mb-3">
                {project?.projectDescription.slice(0, 90)}...
              </p>
              <div className="flex items-center gap-3 mb-5">
                <Link to="/dashboard/update-project">
                  <button
                    className="bg-[#55e6a5] px-3 py-1 border border-[#55e6a5] text-black hover:text-[#55e6a5] font-poppins hover:bg-[#141c27] transition-all ease-in-out duration-500 inline-flex items-center gap-1"
                    title="Edit"
                  >
                    <FaRegEdit />
                    Edit
                  </button>
                </Link>
                <button
                  className="bg-[#141c27] px-3 py-1 border border-[#55e6a5] text-[#55e6a5] hover:text-black font-poppins hover:bg-[#55e6a5] transition-all ease-in-out duration-500 inline-flex items-center gap-1"
                  title="Delete"
                >
                  <FaRegTrashAlt />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsOnDashboard;
