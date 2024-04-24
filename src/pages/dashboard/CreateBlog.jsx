import { useForm } from "react-hook-form";
import Button from "../../components/shared/Button";
import { useState } from "react";
import { useAddABlogMutation } from "../../redux/features/api/blog/blogApi";
import { imageUpload } from "../../utils/imageFetch";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [blogLoading, setBlogLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [addABlog] = useAddABlogMutation();

  const blogBanner = watch("blogBanner");
  const authorImage = watch("authorImage");

  const onSubmit = async (data) => {
    setBlogLoading(true);
    try {
      const imageData1 = await imageUpload(blogBanner[0]);
      const imageData2 = await imageUpload(authorImage[0]);
      data.blogBanner = imageData1.data.display_url;
      data.authorImage = imageData2.data.display_url;

      const result = await addABlog(data);
      if (result.data) {
        Swal.fire({
          title: "Blog Added Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();
        setBlogLoading(false);
        navigate("/dashboard/blogs");
      } else {
        Swal.fire({
          title: "Blog Added Failed!",
          text: "Press OK to continue",
          icon: "error",
          confirmButtonText: "OK",
        });
        setBlogLoading(false);
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
      setBlogLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-auto md:h-screen">
      <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-1/2 md:max-xl:w-full">
        <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-full md:max-xl:w-full">
          <h1 className="text-2xl font-notoSans text-[#55e6a5]">Create Blog</h1>
          <div>
            <Button text={`${blogLoading ? "Creating..." : "Create"}`} />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-5">
          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="blogTitle"
                className="text-lg text-white font-notoSans mb-2"
              >
                Blog Title:
              </label>
              {errors.blogTitle && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Blog Title is required. **
                </p>
              )}
            </div>
            <input
              type="text"
              name="blogTitle"
              {...register("blogTitle", { required: true })}
              placeholder="Blog Title"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="blogBanner"
                className="text-lg text-white font-notoSans mb-2"
              >
                Blog Banner:
              </label>
              {errors.blogBanner && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Blog Banner is required. **
                </p>
              )}
            </div>
            <input
              type="file"
              name="c"
              {...register("blogBanner", { required: true })}
              placeholder="Blog Banner"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="authorName"
                className="text-lg text-white font-notoSans mb-2"
              >
                Author Name:
              </label>
              {errors.authorName && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Author Name is required. **
                </p>
              )}
            </div>
            <input
              type="text"
              name="authorName"
              {...register("authorName", { required: true })}
              placeholder="Author Name"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="authorImage"
                className="text-lg text-white font-notoSans mb-2"
              >
                Author Image:
              </label>
              {errors.authorImage && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Author Image is required. **
                </p>
              )}
            </div>
            <input
              type="file"
              name="authorImage"
              {...register("authorImage", { required: true })}
              placeholder="Author Image"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="createdAt"
                className="text-lg text-white font-notoSans mb-2"
              >
                Created At:
              </label>
              {errors.createdAt && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Created At is required. **
                </p>
              )}
            </div>
            <input
              type="date"
              name="createdAt"
              {...register("createdAt", { required: true })}
              placeholder="Create At"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="blogDescription"
                className="text-lg text-white font-notoSans mb-2"
              >
                Blog Description:
              </label>
              {errors.blogDescription && (
                <p className="text-yellow-500 text-xs font-notoSans">
                  Blog Description is required. **
                </p>
              )}
            </div>
            <textarea
              name="blogDescription"
              {...register("blogDescription", { required: true })}
              placeholder="Blog Description"
              cols="30"
              rows="5"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateBlog;
