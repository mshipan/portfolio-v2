import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import PageBanner from "../../components/shared/PageBanner";
import { useGetAllProjectsQuery } from "../../redux/features/api/project/projectApi";
import "./Projects.css";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: allProjects } = useGetAllProjectsQuery();

  const projectsPerPage = 4;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allProjects
    ?.filter((project) => project?.projectTitle?.toLowerCase()?.toLowerCase())
    .slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(allProjects?.length / projectsPerPage);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <PageBanner
        title="Projects"
        subTitle={`my projects list. Length: ${allProjects?.length}`}
      />
      <div className="flex flex-col gap-6">
        <div className="md:mt-32 mt-20 mb-20 md:w-3/5 w-full text-center md:text-left mx-auto grid grid-cols-1 md:grid-cols-2 md:max-xl:grid-cols-1 lg:max-2xl:grid-cols-1 justify-items-center gap-10">
          {currentProjects?.map((project) => (
            <ProjectCard key={project?._id} project={project} />
          ))}
        </div>

        {allProjects?.length > projectsPerPage && (
          <div className="flex justify-center items-center w-full">
            <div className="flex justify-center items-center">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 border border-[#55e6a5] text-[#55e6a5] rounded-full mx-1 ${
                  currentPage === 1
                    ? "bg-transparent cursor-not-allowed"
                    : "bg-transparent hover:bg-[#55e6a5] hover:text-[#141c27] transition-all ease-in-out duration-500"
                }`}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePagination(pageNumber)}
                    className={`px-4 py-2 border border-[#55e6a5] rounded-full mx-1 ${
                      currentPage === pageNumber
                        ? "bg-[#55e6a5] text-[#141c27]"
                        : "bg-transparent text-[#55e6a5]"
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              )}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 border border-[#55e6a5] text-[#55e6a5] rounded-full mx-1 ${
                  currentPage === totalPages
                    ? "bg-transparent cursor-not-allowed"
                    : "bg-transparent hover:bg-[#55e6a5] hover:text-[#141c27] transition-all ease-in-out duration-500"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
