import React from "react";

const NewsLetters = () => {
  return (
    <div className="h-screen md:h-screen">
      <div className="flex flex-row gap-3 md:gap-0 md:items-center mb-5 justify-between w-full md:w-1/2 md:max-xl:w-full">
        <div className=" mb-5 w-full md:w-full md:max-xl:w-full">
          <h1 className="text-2xl font-notoSans text-[#55e6a5]">
            Newsletter Emails
          </h1>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:max-xl:w-full">
        <div>
          <div className="w-[60%] md:w-full overflow-x-auto">
            <table className="table border border-[#55e6a5]">
              <thead>
                <tr className="border border-[#55e6a5]">
                  <th className="font-notoSans text-white">Sl No.</th>

                  <th className="font-notoSans text-white">Email</th>
                  <th className="font-notoSans text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-[#55e6a5]">
                  <td className="font-poppins text-slate-400 text-sm">1</td>

                  <td className="font-poppins text-slate-400 text-xs">
                    mshipan657@gmail.com
                  </td>

                  <td className="font-poppins text-slate-400 text-xs">
                    <button className=" p-1 bg-[#141c27] hover:bg-[#55e6a5] text-[#55e6a5] hover:text-black border border-[#55e6a5]">
                      delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetters;
