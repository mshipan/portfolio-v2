import { BsPlus } from "react-icons/bs";
import Button from "../../shared/Button";
import BlogCard from "../../BlogCard";
import { Link } from "react-router-dom";
import { useGetAllBlogsQuery } from "../../../redux/features/api/blog/blogApi";

const Blog = () => {
  const { data: allBlogs } = useGetAllBlogsQuery();
  return (
    <div className="mt-32 mb-20 md:w-3/5 w-full text-center md:text-left mx-auto">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-[#55e6a5] text-2xl font-light font-poppins ">
          My Blogs
        </h1>
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-white text-5xl font-bold font-notoSans capitalize">
            my recent blog posts
          </h1>
          <Link to="/blogs">
            <Button
              text="more blog"
              icon={<BsPlus />}
              className="flex items-center gap-1 capitalize"
            />
          </Link>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:max-xl:flex-col md:max-xl:gap-5 xl:gap-5 md:flex-row items-center justify-between gap-5 md:gap-0">
        {allBlogs?.map((blog) => (
          <BlogCard key={blog?._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
