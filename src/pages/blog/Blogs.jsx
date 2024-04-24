import BlogCard from "../../components/BlogCard";
import { IoSearch } from "react-icons/io5";
import MiniBlogCard from "./MiniBlogCard";
import PageBanner from "../../components/shared/PageBanner";
import { useGetAllBlogsQuery } from "../../redux/features/api/blog/blogApi";

const Blog = () => {
  const { data: allBlogs } = useGetAllBlogsQuery();
  return (
    <div>
      <PageBanner title="Blogs" subTitle="my blogs list" />
      <div className="md:mt-32 mt-20 mb-20 md:w-3/5 w-full text-center md:text-left mx-auto flex flex-col md:max-xl:flex-col md:flex-row justify-between gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:max-xl:grid-cols-1 lg:max-2xl:grid-cols-1 justify-items-center gap-20">
          {allBlogs?.map((blog) => (
            <BlogCard key={blog?._id} blog={blog} />
          ))}
        </div>
        <div className="flex flex-col gap-10 md:gap-20">
          <div className="py-10 px-8 bg-zinc-900 w-[82%] md:w-full mx-auto">
            <form className="flex items-center w-full">
              <div className="form-control w-full">
                <input
                  type="text"
                  className="py-3 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-white "
                  placeholder="Search Here"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-4 px-4 bg-[#55e6a5] border border-[#55e6a5] text-[#141c27]"
                >
                  <IoSearch />
                </button>
              </div>
            </form>
          </div>
          <div className="bg-zinc-900 py-10 px-8 flex flex-col items-start gap-8 w-[82%] md:w-full mx-auto">
            <h1 className="text-white text-3xl font-poppins capitalize">
              Recent posts
            </h1>
            <div className="flex flex-col gap-5">
              <MiniBlogCard />
              <MiniBlogCard />
              <MiniBlogCard />
              <MiniBlogCard />
              <MiniBlogCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
