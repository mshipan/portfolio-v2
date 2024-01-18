import Button from "../../components/shared/Button";

const UpdateBlog = () => {
  return (
    <div className="h-auto md:h-screen">
      <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-1/2 md:max-xl:w-full">
        <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-full md:max-xl:w-full">
          <h1 className="text-2xl font-notoSans text-[#55e6a5]">Update Blog</h1>
          <div>
            <Button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              text="Update"
            />{" "}
            {/* modal */}
          </div>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-5">
          <div className="form-control">
            <label
              htmlFor="blogTitle"
              className="text-lg text-white font-notoSans mb-2"
            >
              Blog Title:
            </label>
            <input
              type="text"
              name="blogTitle"
              value="Chemistry Corner 1"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="blogBanner"
              className="text-lg text-white font-notoSans mb-2"
            >
              Blog Banner:
            </label>
            <input
              type="text"
              name="blogBanner"
              value="link"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="authorName"
              className="text-lg text-white font-notoSans mb-2"
            >
              Author Name:
            </label>
            <input
              type="text"
              name="authorName"
              value="shipan"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="authorImage"
              className="text-lg text-white font-notoSans mb-2"
            >
              Author Image:
            </label>
            <input
              type="text"
              name="authorImage"
              value="link"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="createdAt"
              className="text-lg text-white font-notoSans mb-2"
            >
              Created At:
            </label>
            <input
              type="date"
              name="createdAt"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="blogDescription"
              className="text-lg text-white font-notoSans mb-2"
            >
              Blog Description:
            </label>

            <textarea
              name="blogDescription"
              cols="30"
              rows="5"
              className="w-full md:w-1/2 md:max-xl:w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
