import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/shared/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  useGetBlogByIdQuery,
  useUpdateABlogMutation,
} from "../../redux/features/api/blog/blogApi";
import { imageUpload } from "../../utils/imageFetch";
import Swal from "sweetalert2";

const UpdateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateLoading, setUpdateLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const { data: singleBlog } = useGetBlogByIdQuery(id);
  const [updateABlog] = useUpdateABlogMutation();

  const blogBanner = watch("blogBanner");
  const authorImage = watch("authorImage");

  const onSubmit = async (data) => {
    setUpdateLoading(true);

    const imageData1 = await imageUpload(blogBanner[0]);
    const imageData2 = await imageUpload(authorImage[0]);

    data.blogBanner = imageData1.data.display_url;
    data.authorImage = imageData2.data.display_url;

    try {
      const result = await updateABlog({
        id: id,
        data: data,
      });

      if (result.data.modifiedCount > 0) {
        Swal.fire({
          title: "Blog Updated Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        setUpdateLoading(false);
        navigate("/dashboard/blogs");
      }
    } catch (error) {
      console.error("Error updating Blog:", error);
      setUpdateLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-auto md:h-screen">
      <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-1/2 md:max-xl:w-full">
        <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-full md:max-xl:w-full">
          <h1 className="text-2xl font-notoSans text-[#55e6a5]">Update Blog</h1>
          <div>
            <Button text={`${updateLoading ? "Updating..." : "Update"}`} />
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
              defaultValue={singleBlog?.blogTitle}
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
              name="blogBanner"
              {...register("blogBanner", { required: true })}
              defaultValue={singleBlog?.blogBanner}
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
              defaultValue={singleBlog?.authorName}
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
              defaultValue={singleBlog?.authorImage}
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
              defaultValue={singleBlog?.createdAt}
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
              defaultValue={singleBlog?.blogDescription}
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

export default UpdateBlog;
