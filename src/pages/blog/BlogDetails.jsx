import PageBanner from "../../components/shared/PageBanner";
import BlogBannerImg from "../../assets/blog1.jpg";
import userImg from "../../assets/user.jpg";
import { AiFillLike } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import Button from "../../components/shared/Button";
import MiniBlogCard from "./MiniBlogCard";

const BlogDetails = () => {
  return (
    <div>
      <PageBanner
        title="Blog Details"
        subTitle="Don't wait until you officially started"
      />
      <div className="md:mt-32 mt-20 mb-20 md:w-3/5 w-full text-center md:text-left mx-auto flex flex-col md:flex-row gap-5">
        <div className="md:w-3/4 w-[98%] mx-auto">
          <div>
            <img src={BlogBannerImg} alt="Blog Banner" className="w-full" />
          </div>
          <div className="grid grid-cols-2 md:flex md:items-center md:gap-10 gap-4 py-5">
            <div className="flex items-center gap-3">
              <img
                src={userImg}
                alt="User Image"
                className="w-10 rounded-full"
              />
              <h1 className="text-white font-poppins">by Shipan</h1>
            </div>
            <div className="flex items-center gap-3">
              <LuClock className="text-xl text-[#55e6a5]" />
              <h1 className="text-white font-poppins">October 18, 2023</h1>
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillLike className="text-xl text-[#55e6a5]" />
              <h1 className="text-white font-poppins">0</h1>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FaComments className="text-xl text-[#55e6a5]" />
              <h1 className="text-white font-poppins">0</h1>
            </div>
          </div>
          <div className="mb-5">
            <p className="text-zinc-400 font-poppins text-sm text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              consequuntur voluptatibus, architecto quia, voluptates commodi
              natus nemo reiciendis numquam dolore hic ea ex nobis repudiandae,
              quae obcaecati nisi inventore quisquam. Quam quasi facilis,
              cupiditate magni enim consequatur ab fuga vero illum aperiam rem,
              harum ex, mollitia dolore quod itaque deserunt accusantium
              doloribus ullam? Debitis, eveniet maiores? Blanditiis cumque
              minima aspernatur quam, dignissimos nisi sed, non numquam porro
              doloribus nostrum officiis veniam error voluptatibus dolores
              placeat. Debitis laborum ut eligendi facere.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-notoSans text-white text-left">
              Comments
            </h1>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-start gap-4">
                <div>
                  <img
                    src={userImg}
                    alt="User image"
                    className="w-36 md:w-12 rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <h1 className="text-xl font-poppins text-white text-left">
                      John Doe
                    </h1>
                    <p className="text-zinc-500 text-sm font-poppins text-left">
                      Web Developer
                    </p>
                  </div>
                  <p className="text-zinc-500 text-sm font-poppins text-left">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cumque sit reprehenderit eaque rem magni blanditiis minima
                    ex perferendis nemo reiciendis.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-4">
                <div>
                  <img
                    src={userImg}
                    alt="User image"
                    className="w-36 md:w-12 rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <h1 className="text-xl font-poppins text-white text-left">
                      John Doe
                    </h1>
                    <p className="text-zinc-500 text-sm font-poppins text-left">
                      Web Developer
                    </p>
                  </div>
                  <p className="text-zinc-500 text-sm font-poppins text-left">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cumque sit reprehenderit eaque rem magni blanditiis minima
                    ex perferendis nemo reiciendis.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-4">
                <div>
                  <img
                    src={userImg}
                    alt="User image"
                    className="w-36 md:w-12 rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <h1 className="text-xl font-poppins text-white text-left">
                      John Doe
                    </h1>
                    <p className="text-zinc-500 text-sm font-poppins text-left">
                      Web Developer
                    </p>
                  </div>
                  <p className="text-zinc-500 text-sm font-poppins text-left">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cumque sit reprehenderit eaque rem magni blanditiis minima
                    ex perferendis nemo reiciendis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-10">
            <h1 className="text-3xl font-notoSans text-white text-left">
              Leave a comment
            </h1>
            <div>
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="form-control">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="py-3 px-2 outline-none border border-[#55e6a5] placeholder:text-white text-white bg-[#141c27]"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="role"
                      placeholder="Your Role"
                      className="py-3 px-2 outline-none border border-[#55e6a5] placeholder:text-white text-white bg-[#141c27]"
                    />
                  </div>
                  <div className="form-control md:col-span-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="py-3 px-2 outline-none border border-[#55e6a5] placeholder:text-white text-white bg-[#141c27]"
                    />
                  </div>
                  <div className="form-control md:col-span-2">
                    <textarea
                      name="comment"
                      placeholder="Comment"
                      cols="30"
                      rows="10"
                      className="py-3 px-2 outline-none border border-[#55e6a5] placeholder:text-white text-white bg-[#141c27]"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <Button
                    text="Submit Comment"
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

export default BlogDetails;
