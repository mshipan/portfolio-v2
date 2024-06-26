import { Link } from "react-router-dom";
import Button from "../../components/shared/Button";
import { CiStopwatch } from "react-icons/ci";
import { FaRegEdit, FaRegTrashAlt, FaCalendarAlt } from "react-icons/fa";
import {
  useDeleteABlogMutation,
  useGetAllBlogsQuery,
} from "../../redux/features/api/blog/blogApi";
import Swal from "sweetalert2";
import { useState } from "react";

const BlogsOnDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const { data: allBlogs } = useGetAllBlogsQuery();

  const blogsPerPage = 6;
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = allBlogs
    ?.filter((blog) =>
      blog?.blogTitle?.toLowerCase()?.includes(searchQuery?.toLowerCase())
    )
    .slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(allBlogs?.length / blogsPerPage);

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

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset pagination to first page when searching
  };

  const [deleteABlog] = useDeleteABlogMutation();

  const handleDeleteABlog = async (_id) => {
    Swal.fire({
      title: "Are you sure to Delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await deleteABlog({ id: _id });
          if (result.data.deletedCount > 0) {
            Swal.fire("Deleted!", "This blog has been deleted.", "success");
          }
        } catch (error) {
          console.error("error deleting blog", error);
        }
      }
    });
  };

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return dateObj.toLocaleDateString("en-GB", options);
  };
  return (
    <div className="h-auto">
      <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-1/2 md:max-xl:w-full">
        <div className="flex flex-row md:items-center mb-5 justify-between w-full md:w-full md:max-xl:w-full">
          <h1 className="text-2xl font-notoSans text-[#55e6a5] w-1/2">Blogs</h1>

          <div className=" mx-auto">
            <form className="flex items-center w-full">
              <div className="form-control w-full">
                <input
                  type="text"
                  className="py-2.5 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-white "
                  placeholder="Search Blogs by their Title"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </form>
          </div>
          <Link to="/dashboard/create-blog">
            <Button
              text="Create Blog"
              className="border border-[#55e6a5] justify-center"
            />
          </Link>
        </div>
      </div>
      <div
        className={`w-full h-auto ${
          currentBlogs?.length === 1 && "h-screen"
        } md:w-1/2 md:max-xl:w-full flex flex-col gap-8`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {currentBlogs?.map((blog) => (
            <div
              key={blog?._id}
              className="w-96 bg-slate-900 flex flex-col gap-2 rounded-md"
            >
              <div className="py-2 pl-2 flex flex-col gap-1">
                <h1 className="font-notoSans text-xl text-white ">
                  {blog?.blogTitle}
                </h1>
                <div className="flex items-center gap-1 text-lg">
                  <FaCalendarAlt className="text-[#55e6a5] text-base" />
                  <p className="font-poppins text-slate-400">
                    {formatDate(blog?.createdAt)}
                  </p>
                </div>
              </div>
              <img
                src={blog?.blogBanner}
                alt="Project Banner"
                className="mb-2"
              />
              <div className="mx-3">
                <p className="font-poppins text-sm text-white mb-3">
                  {blog?.blogDescription.slice(0, 80)}...
                </p>
                <div className="flex items-center gap-3 mb-5">
                  <Link to={`/dashboard/update-blog/${blog?._id}`}>
                    <button
                      className="bg-[#55e6a5] px-3 py-1 border border-[#55e6a5] text-black hover:text-[#55e6a5] font-poppins hover:bg-[#141c27] transition-all ease-in-out duration-500 inline-flex items-center gap-1"
                      title="Edit"
                    >
                      <FaRegEdit />
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDeleteABlog(blog?._id)}
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

        <div>
          {allBlogs?.length > blogsPerPage && (
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
    </div>
  );
};

export default BlogsOnDashboard;
