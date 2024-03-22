import { GoProject } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa";
import { CiCircleChevRight } from "react-icons/ci";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useEffect, useState } from "react";
import { useGetAboutMeQuery } from "../../redux/features/api/aboutMe/aboutMeApi";

const MyDashboard = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { data: aboutMe } = useGetAboutMeQuery();

  const tileClassName = ({ date }) => {
    // Check if the day is Friday (5 is the index for Friday)
    if (date.getDay() === 5) {
      return "friday-tile"; // Apply a custom CSS class for Fridays
    }

    if (date.getDay() === 6) {
      return "saturday-tile";
    }

    if (date.getDay() === 0) {
      return "sunday-tile";
    }
    return null;
  };
  return (
    <div className="h-auto md:h-screen">
      <div className="flex flex-col gap-3 md:gap-0 mb-5 justify-between w-full md:max-xl:w-full">
        <div className=" mb-5 w-full md:w-full md:max-xl:w-full flex items-baseline justify-between">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="font-notoSans text-3xl text-[#55e6a5]">Dashboard</h1>
            <span className="text-white">{currentTime}</span>
          </div>
          <h1 className="text-xl font-notoSans text-[#55e6a5]">
            Wellcome Back,{" "}
            <span className="font-poppins text-white font-bold">
              {aboutMe[0].name}.
            </span>
          </h1>
        </div>

        <div className="flex flex-col gap-10">
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
              <div>
                <Link to="/dashboard/projects">
                  <button className="w-full capitalize font-poppins bg-[#55e6a5] text-black inline-flex items-center gap-2 justify-center">
                    more info
                    <CiCircleChevRight size={20} />
                  </button>
                </Link>
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
              <div>
                <Link to="/dashboard/blogs">
                  <button className="w-full capitalize font-poppins bg-[#55e6a5] text-black inline-flex items-center gap-2 justify-center">
                    more info
                    <CiCircleChevRight size={20} />
                  </button>
                </Link>
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
              <div>
                <Link to="/dashboard/contacts">
                  <button className="w-full capitalize font-poppins bg-[#55e6a5] text-black inline-flex items-center gap-2 justify-center">
                    more info
                    <CiCircleChevRight size={20} />
                  </button>
                </Link>
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
              <div>
                <Link to="/dashboard/newsletters">
                  <button className="w-full capitalize font-poppins bg-[#55e6a5] text-black inline-flex items-center gap-2 justify-center">
                    more info
                    <CiCircleChevRight size={20} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-10">
            <Calendar tileClassName={tileClassName} className="text-black " />
            <div className="flex flex-col gap-4">
              <h1 className="font-notoSans text-[#55e6a5]">
                Latest Newsletter Emails
              </h1>
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
          <div className="flex flex-col gap-4">
            <h1 className="font-notoSans text-[#55e6a5]">Latest Contacts</h1>
            <div className="w-1/3 md:w-full overflow-x-auto">
              <table className="table border border-[#55e6a5]">
                <thead>
                  <tr className="border border-[#55e6a5]">
                    <th className="font-notoSans text-white">Sl No.</th>
                    <th className="font-notoSans text-white">Subject</th>
                    <th className="font-notoSans text-white">Name</th>
                    <th className="font-notoSans text-white">Email</th>
                    <th className="font-notoSans text-white">Phone</th>
                    <th className="font-notoSans text-white">Message</th>
                    <th className="font-notoSans text-white">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-[#55e6a5]">
                    <td className="font-poppins text-slate-400 text-sm">1</td>
                    <td className="font-poppins text-slate-400 text-xs">
                      I have a query...
                    </td>
                    <td className="font-poppins text-slate-400 text-xs">
                      Shipan...
                    </td>
                    <td className="font-poppins text-slate-400 text-xs">
                      mshipan65...
                    </td>
                    <td className="font-poppins text-slate-400">01622543390</td>
                    <td className="font-poppins text-slate-400 text-xs">
                      Lorem ipsum...
                    </td>
                    <td className="font-poppins text-slate-400 text-xs">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() =>
                            document.getElementById("my_modal_5").showModal()
                          }
                          className=" p-1 bg-[#55e6a5] hover:bg-[#141c27] text-black hover:text-[#55e6a5] border border-[#55e6a5]"
                        >
                          view
                        </button>
                        <button className=" p-1 bg-[#141c27] hover:bg-[#55e6a5] text-[#55e6a5] hover:text-black border border-[#55e6a5]">
                          delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box bg-[#141c27]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white bg-gray-600">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4 font-notoSans text-[#55e6a5]">
            Contact Details
          </h3>
          <div>
            <form className="flex flex-col gap-4">
              <div className="flex justify-between">
                <div className="form-control">
                  <label
                    htmlFor="contactName"
                    className="text-white font-poppins mb-2"
                  >
                    Contact Name:
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    readOnly
                    className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                    value="Shipan Mallik"
                  />
                </div>

                <div className="form-control">
                  <label
                    htmlFor="contactEmail"
                    className="text-white font-poppins mb-2"
                  >
                    Contact Email:
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    readOnly
                    className="py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                    value="mshipan657@gmail.com"
                  />
                </div>
              </div>

              <div className="form-control">
                <label
                  htmlFor="subject"
                  className="text-white font-poppins mb-2"
                >
                  Subject:
                </label>
                <input
                  type="text"
                  name="subject"
                  readOnly
                  className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                  value="I have a query"
                />
              </div>

              <div className="form-control">
                <label
                  htmlFor="contactPhone"
                  className="text-white font-poppins mb-2"
                >
                  Contact Phone:
                </label>
                <input
                  type="text"
                  name="contactPhone"
                  readOnly
                  className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                  value="01622543390"
                />
              </div>

              <div className="form-control">
                <label
                  htmlFor="message"
                  className="text-white font-poppins mb-2"
                >
                  Message:
                </label>
                <textarea
                  name="message"
                  cols="30"
                  readOnly
                  rows="5"
                  className="w-full py-1 px-2 outline-none border border-[#55e6a5] bg-[#141c27] placeholder:text-white text-slate-400 font-poppins"
                  value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi vel vitae et obcaecati molestiae laudantium esse quisquam quibusdam corporis. Quisquam."
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyDashboard;
