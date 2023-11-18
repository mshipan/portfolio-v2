import { Link } from "react-router-dom";
import blogImg from "../assets/blog1.jpg";
import userImg from "../assets/user.jpg";
import { AiFillLike } from "react-icons/ai";
import { FaComments } from "react-icons/fa";

const BlogCard = () => {
  return (
    <div className="w-80 xl:max-2xl:w-80">
      <div className="overflow-hidden bg-cover bg-no-repeat rounded-t-lg">
        <img
          src={blogImg}
          alt="Blog Image"
          className="transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="relative bg-zinc-900 rounded-b-lg">
        <div className="flex items-center justify-center absolute -top-6 left-0 right-0">
          <div className="bg-[#55e6a5] py-3 px-5">
            <h1 className="text-black font-poppins">18 Nov 2023</h1>
          </div>
        </div>
        <div className="pt-10 px-4">
          <Link to="/">
            <h1 className="text-white text-xl font-semibold font-notoSans hover:underline">
              Don't wait until you officially started
            </h1>
          </Link>
          <p className="text-zinc-400 font-poppins text-sm py-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            adipisci perferendis tempora.
          </p>

          <div className="flex items-center justify-between py-3 border-t border-zinc-400">
            <div className="flex items-center gap-3">
              <img
                src={userImg}
                alt="user image"
                className="w-8 h-8 rounded-full"
              />
              <h1 className="font-poppins text-white">
                by <span className="capitalize">shipan</span>
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <AiFillLike className="text-[#55e6a5]" />
                <p className="text-white">0</p>
              </div>
              <div className="flex items-center gap-1">
                <FaComments className="text-[#55e6a5]" />
                <p className="text-white">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
