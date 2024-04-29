import PageBanner from "../../components/shared/PageBanner";
import userImg from "../../assets/user.jpg";
import { AiFillLike } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import Button from "../../components/shared/Button";
import MiniBlogCard from "./MiniBlogCard";
import { useParams } from "react-router-dom";
import {
  useAddLikeToBlogMutation,
  useGetAllBlogsQuery,
  useGetBlogByIdQuery,
  useRemoveLikeFromBlogMutation,
} from "../../redux/features/api/blog/blogApi";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useAddCommentToBlogMutation } from "../../redux/features/api/comment/commentApi";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { data: allBlogs } = useGetAllBlogsQuery();
  const { data: singleBlog } = useGetBlogByIdQuery(id);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);
  const [addLikeToBlog] = useAddLikeToBlogMutation();
  const [removeLikeFromBlog] = useRemoveLikeFromBlogMutation();
  const [addCommentToBlog] = useAddCommentToBlogMutation();

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return dateObj.toLocaleDateString("en-GB", options);
  };

  const recentBlogs = allBlogs?.slice(0, 5);

  // Function to handle toggling likes
  const handleLikeClick = async () => {
    try {
      if (!liked) {
        // If the post is not liked, add a like
        await addLikeToBlog(id); // Call the mutation to add the like
        setLiked(true); // Set liked state to true
        toast.success("liked the post!");
      } else {
        // If the post is liked, remove the like
        await removeLikeFromBlog(id); // Call the mutation to remove the like
        setLiked(false); // Set liked state to false
        toast.success("post disliked!");
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const createdAt = new Date();
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { name, role, email, comment } = data;
      await addCommentToBlog({ id, name, role, email, comment, createdAt });
      toast.success("Comment added successfully!");
      setLoading(false);
      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error adding comment:", error);
      toast.error("Failed to add comment. Please try again later.");
      setLoading(false);
    }
  };

  // Function to toggle showing all comments
  const toggleShowAllComments = () => {
    setShowAllComments((prev) => !prev);
  };

  return (
    <div>
      <PageBanner title="Blog Details" subTitle={singleBlog?.blogTitle} />
      <div className="md:mt-32 mt-20 mb-20 md:w-3/5 w-full text-center md:text-left mx-auto flex flex-col md:flex-row gap-5">
        <div className="md:w-3/4 w-[98%] mx-auto">
          <div>
            <img
              src={singleBlog?.blogBanner}
              alt="Blog Banner"
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-2 md:flex md:items-center md:gap-10 gap-4 py-5">
            <div className="flex items-center gap-3">
              <img
                src={singleBlog?.authorImage}
                alt="User Image"
                className="w-10 h-10 rounded-full"
              />
              <h1 className="text-white font-poppins">
                by {singleBlog?.authorName}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <LuClock className="text-xl text-[#55e6a5]" />
              <h1 className="text-white font-poppins">
                {formatDate(singleBlog?.createdAt)}
              </h1>
            </div>
            <div
              className="flex items-center justify-center gap-3 cursor-pointer"
              onClick={handleLikeClick}
            >
              <AiFillLike className="text-xl text-[#55e6a5]" />
              <h1 className="text-white font-poppins">{singleBlog?.likes}</h1>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FaComments className="text-xl text-[#55e6a5]" />
              <h1 className="text-white font-poppins">
                {singleBlog?.comments?.length}
              </h1>
            </div>
          </div>
          <div className="mb-5">
            <p className="text-zinc-400 font-poppins text-sm text-start">
              {singleBlog?.blogDescription}
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-notoSans text-white text-left">
              All Comments
            </h1>
            <div className="flex flex-col gap-3">
              {singleBlog?.comments && singleBlog.comments.length > 0 ? (
                (showAllComments
                  ? singleBlog?.comments
                  : singleBlog?.comments?.slice(0, 3)
                )?.map((comment, i) => (
                  <div key={i} className="flex flex-row items-start gap-4">
                    <img
                      src={userImg}
                      alt="User image"
                      className="w-12 md:w-12 h-12 md:h-12 rounded-full"
                    />
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col">
                        <h1 className="text-xl font-poppins text-[#55e6a5] text-left capitalize">
                          {comment?.name}
                        </h1>
                        <p className="text-zinc-500 text-sm font-poppins text-left">
                          {comment?.role}
                        </p>
                      </div>
                      <p className="text-zinc-300 text-sm font-poppins text-left ml-5">
                        {comment?.comment}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-white">No comments added yet.</p>
              )}
              {!showAllComments && singleBlog?.comments?.length > 3 && (
                <button
                  onClick={toggleShowAllComments}
                  className="text-[#55e6a5] border border-[#55e6a5] py-2 px-4 rounded-md hover:bg-[#55e6a5] hover:text-black transition-all ease-in-out duration-500"
                >
                  View All Comments
                </button>
              )}
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-10">
            <h1 className="text-3xl font-notoSans text-white text-left">
              Leave a comment
            </h1>
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
              >
                <div>
                  {errors?.name && (
                    <p className="text-sm text-yellow-500">
                      Name is Required. **
                    </p>
                  )}
                  {errors?.role && (
                    <p className="text-sm text-yellow-500">
                      Role is Required. **
                    </p>
                  )}
                  {errors?.email && (
                    <p className="text-sm text-yellow-500">
                      Email is Required. **
                    </p>
                  )}
                  {errors?.comment && (
                    <p className="text-sm text-yellow-500">
                      Comment is Required. **
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="form-control">
                    <input
                      type="text"
                      name="name"
                      {...register("name", { required: true })}
                      placeholder="Name"
                      className="py-3 px-2 outline-none border border-[#55e6a5] placeholder:text-white text-white bg-[#141c27]"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="role"
                      {...register("role", { required: true })}
                      placeholder="Your Role"
                      className="py-3 px-2 outline-none border border-[#55e6a5] placeholder:text-white text-white bg-[#141c27]"
                    />
                  </div>
                  <div className="form-control md:col-span-2">
                    <input
                      type="email"
                      name="email"
                      {...register("email", { required: true })}
                      placeholder="Email"
                      className="py-3 px-2 outline-none border border-[#55e6a5] placeholder:text-white text-white bg-[#141c27]"
                    />
                  </div>
                  <div className="form-control md:col-span-2">
                    <textarea
                      name="comment"
                      {...register("comment", { required: true })}
                      placeholder="Type Your Comment..."
                      cols="30"
                      rows="10"
                      className="py-3 px-2 outline-none border border-[#55e6a5] placeholder:text-white text-white bg-[#141c27]"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <Button
                    text={loading ? "Submitting..." : "Submit Comment"}
                    type="submit"
                    className="flex items-center gap-1 capitalize "
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="md:w-1/4 w-[98%] mx-auto">
          <div className="bg-zinc-900 py-10 px-4 flex flex-col items-start gap-5 ">
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

export default BlogDetails;
