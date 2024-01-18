import { GoProject } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa";

const MyDashboard = () => {
  return (
    <div className="h-auto md:h-screen">
      <div className="flex flex-col gap-3 md:gap-0 mb-5 justify-between w-full md:max-xl:w-full">
        <div className=" mb-5 w-full md:w-full md:max-xl:w-full flex items-baseline justify-between">
          <h1 className="font-notoSans text-3xl text-[#55e6a5]">Dashboard</h1>
          <h1 className="text-xl font-notoSans text-[#55e6a5]">
            Wellcome Back,{" "}
            <span className="font-poppins text-white font-bold">
              Shipan Mallik.
            </span>
          </h1>
        </div>

        <div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="border border-[#55e6a5] border-opacity-40 bg-[#141c27] inline-block w-80">
              <div className="flex items-center justify-between p-6">
                <div className="flex flex-col gap-3">
                  <h1 className="font-poppins text-lg text-white uppercase leading-3">
                    Projects
                  </h1>
                  <p className="font-notoSans text-4xl text-[#55e6a5]">10</p>
                  <p className="font-notoSans text-slate-400 text-xs">
                    Last: <span>Chemistry Corner 1</span>
                  </p>
                </div>
                <GoProject size={50} className="opacity-30" />
              </div>
            </div>

            <div className="border border-[#55e6a5] border-opacity-40 bg-[#141c27] inline-block w-80">
              <div className="flex items-center justify-between p-6">
                <div className="flex flex-col gap-3">
                  <h1 className="font-poppins text-lg text-white uppercase leading-3">
                    Blogs
                  </h1>
                  <p className="font-notoSans text-4xl text-[#55e6a5]">5</p>
                  <p className="font-notoSans text-slate-400 text-xs">
                    Last: <span>Lorem ipsum dolor sit amet.</span>
                  </p>
                </div>
                <RiPagesLine size={50} className="opacity-30" />
              </div>
            </div>

            <div className="border border-[#55e6a5] border-opacity-40 bg-[#141c27] inline-block w-80">
              <div className="flex items-center justify-between p-6">
                <div className="flex flex-col gap-3">
                  <h1 className="font-poppins text-lg text-white uppercase leading-3">
                    Contacts
                  </h1>
                  <p className="font-notoSans text-4xl text-[#55e6a5]">15</p>
                  <p className="font-notoSans text-slate-400 text-xs">
                    Last: <span>Lorem ipsum dolor sit amet.</span>
                  </p>
                </div>
                <IoIosContact size={50} className="opacity-30" />
              </div>
            </div>

            <div className="border border-[#55e6a5] border-opacity-40 bg-[#141c27] inline-block w-80">
              <div className="flex items-center justify-between p-6">
                <div className="flex flex-col gap-3">
                  <h1 className="font-poppins text-lg text-white uppercase leading-3">
                    Newsletters
                  </h1>
                  <p className="font-notoSans text-4xl text-[#55e6a5]">20</p>
                  <p className="font-notoSans text-slate-400 text-xs">
                    Last: <span>Lorem ipsum dolor sit amet.</span>
                  </p>
                </div>
                <FaRegNewspaper size={50} className="opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;
