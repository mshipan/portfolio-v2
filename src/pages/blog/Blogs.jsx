import BlogCard from "../../components/BlogCard";
import { IoSearch } from "react-icons/io5";
import MiniBlogCard from "./MiniBlogCard";
import PageBanner from "../../components/shared/PageBanner";
import { useGetAllBlogsQuery } from "../../redux/features/api/blog/blogApi";
import { useState } from "react";

const Blog = () => {
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

  // Filter recent posts based on your criteria (e.g., most recent 5 posts)
  const recentBlogs = allBlogs?.slice(0, 5);

  return (
    <div>
      <PageBanner title="Blogs" subTitle="my blogs list" />
      <div className="md:mt-32 mt-20 mb-20 md:w-3/5 w-full text-center md:text-left mx-auto flex flex-col md:max-xl:flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 md:max-xl:grid-cols-1 lg:max-2xl:grid-cols-1 justify-items-center gap-20">
            {currentBlogs?.map((blog) => (
              <BlogCard key={blog?._id} blog={blog} />
            ))}
          </div>
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

        <div className="flex flex-col gap-10 md:gap-20">
          <div className="py-10 px-8 bg-zinc-900 w-[82%] md:w-full mx-auto">
            <form className="flex items-center w-full">
              <div className="form-control w-full">
                <input
                  type="text"
                  className="py-3 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-white "
                  placeholder="Search Blogs by their Title"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </form>
          </div>
          <div className="bg-zinc-900 py-10 px-8 flex flex-col items-start gap-8 w-[82%] md:w-full mx-auto">
            <h1 className="text-white text-3xl font-poppins capitalize">
              Recent posts
            </h1>
            <div className="flex flex-col gap-5">
              {recentBlogs?.map((blog) => (
                <MiniBlogCard key={blog?._id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
