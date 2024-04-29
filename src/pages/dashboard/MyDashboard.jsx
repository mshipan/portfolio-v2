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
import { useGetAllProjectsQuery } from "../../redux/features/api/project/projectApi";
import { useGetAllBlogsQuery } from "../../redux/features/api/blog/blogApi";
import {
  useDeleteAContactMutation,
  useGetAllContactsQuery,
  useUpdateIsNewStatusOnContactMutation,
} from "../../redux/features/api/contact/contactApi";
import {
  useDeleteANewsLetterMutation,
  useGetAllNewsLettersQuery,
} from "../../redux/features/api/newsLetter/newsLetterApi";
import Swal from "sweetalert2";
import ViewContactModal from "../../components/dashboard/ViewContactModal";

const MyDashboard = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isContactModalClose, setIsContactModalClose] = useState(false);
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
  const { data: allProjects } = useGetAllProjectsQuery();
  const { data: allBlogs } = useGetAllBlogsQuery();
  const { data: allContacts } = useGetAllContactsQuery();
  const { data: allNewsLetters } = useGetAllNewsLettersQuery();
  const [deleteANewsLetter] = useDeleteANewsLetterMutation();
  const [deleteAContact] = useDeleteAContactMutation();
  const [updateIsNewStatus] = useUpdateIsNewStatusOnContactMutation();

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

  const handleDeleteANewsLetter = async (_id) => {
    Swal.fire({
      title: "Are you sure to Delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await deleteANewsLetter({ id: _id });
          if (result.data.deletedCount > 0) {
            Swal.fire(
              "Deleted!",
              "This newsletter email has been deleted.",
              "success"
            );
          }
        } catch (error) {
          console.error("error deleting newsletter email", error);
        }
      }
    });
  };

  const markContactAsViewed = async (contactId) => {
    try {
      await updateIsNewStatus({ id: contactId, isNew: false });
    } catch (error) {
      throw new Error("Failed to mark contact as viewed");
    }
  };

  const openContactModal = async (contactId) => {
    setIsContactModalOpen(true);
    setSelectedContactId(contactId);
    try {
      await markContactAsViewed(contactId);
    } catch (error) {
      console.error("Error marking contact as viewed:", error);
    }
  };
  const closeContactModal = () => {
    setIsContactModalClose(true);
    setSelectedContactId(null);
  };
  const handleDeleteAContact = async (_id) => {
    Swal.fire({
      title: "Are you sure to Delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await deleteAContact({ id: _id });
          if (result.data.deletedCount > 0) {
            Swal.fire("Deleted!", "This contact has been deleted.", "success");
          }
        } catch (error) {
          console.error("error deleting contact", error);
        }
      }
    });
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
              {aboutMe?.[0].name}.
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
                  <p className="font-notoSans text-4xl text-[#55e6a5]">
                    {allProjects?.length}
                  </p>
                  <p className="font-notoSans text-slate-400 text-xs">
                    Last: <span>{allProjects?.[0].projectTitle}</span>
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
                  <p className="font-notoSans text-4xl text-[#55e6a5]">
                    {allBlogs?.length}
                  </p>
                  <p className="font-notoSans text-slate-400 text-xs">
                    Last: <span>{allBlogs?.[0].blogTitle}</span>
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
                  <p className="font-notoSans text-4xl text-[#55e6a5]">
                    {allContacts?.length}
                  </p>
                  <p className="font-notoSans text-slate-400 text-xs">
                    Last: <span>{allContacts?.[0].name}</span>
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
                  <p className="font-notoSans text-4xl text-[#55e6a5]">
                    {allNewsLetters?.length}
                  </p>
                  <p className="font-notoSans text-slate-400 text-xs">
                    Last: <span>{allNewsLetters?.[0].email}</span>
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
                  {allNewsLetters?.slice(0, 4)?.map((newsLetter, i) => (
                    <tr
                      key={newsLetter?._id}
                      className="border border-[#55e6a5]"
                    >
                      <td className="font-poppins text-slate-400 text-sm">
                        {i + 1}
                      </td>

                      <td className="font-poppins text-slate-400 text-xs">
                        {newsLetter?.email}
                      </td>

                      <td className="font-poppins text-slate-400 text-xs">
                        <button
                          onClick={() =>
                            handleDeleteANewsLetter(newsLetter?._id)
                          }
                          className=" p-1 bg-[#141c27] hover:bg-[#55e6a5] text-[#55e6a5] hover:text-black border border-[#55e6a5]"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
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
                  {allContacts?.slice(0, 5)?.map((contact, i) => (
                    <tr key={contact?._id} className="border border-[#55e6a5]">
                      <td className="font-poppins text-slate-400 text-sm">
                        {i + 1}
                      </td>
                      <td className="font-poppins text-slate-400 text-xs">
                        {contact?.subject?.slice(0, 40)}...
                      </td>
                      <td className="font-poppins text-slate-400 text-xs">
                        {contact?.name?.slice(0, 5)}...
                      </td>
                      <td className="font-poppins text-slate-400 text-xs">
                        {contact?.email?.slice(0, 7)}...
                      </td>
                      <td className="font-poppins text-slate-400">
                        {contact?.phone}
                      </td>
                      <td className="font-poppins text-slate-400 text-xs">
                        {contact?.email?.slice(0, 40)}...
                      </td>
                      <td className="font-poppins text-slate-400 text-xs">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => openContactModal(contact?._id)}
                            className=" p-1 bg-[#55e6a5] hover:bg-[#141c27] text-black hover:text-[#55e6a5] border border-[#55e6a5]"
                          >
                            view
                          </button>
                          <button
                            onClick={() => handleDeleteAContact(contact?._id)}
                            className=" p-1 bg-[#141c27] hover:bg-[#55e6a5] text-[#55e6a5] hover:text-black border border-[#55e6a5]"
                          >
                            delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {selectedContactId && (
        <ViewContactModal
          isContactModalOpen={isContactModalOpen}
          isContactModalClose={isContactModalClose}
          contactId={selectedContactId}
          onClose={closeContactModal}
        />
      )}
    </div>
  );
};

export default MyDashboard;
