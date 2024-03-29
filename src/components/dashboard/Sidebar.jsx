import { useState } from "react";
import fav from "../../assets/favicon.jpg";
import { FaRegUserCircle, FaRegNewspaper } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { BsPostcard, BsPersonFillGear } from "react-icons/bs";
import { AiOutlineContacts } from "react-icons/ai";
import { MdDesignServices, MdOutlineRateReview } from "react-icons/md";
import { IoCloseSharp, IoHome } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";
import { RiPagesLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";

import { MdOutlineMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "About Me", path: "/dashboard/about-me", icon: FaRegUserCircle },
    { title: "Education", path: "/dashboard/education", icon: FaUserGraduate },
    {
      title: "Skills",
      path: "/dashboard/skills",
      icon: BsPersonFillGear,
      gap: true,
    },
    {
      title: "Projects",
      path: "/dashboard/projects",
      icon: GoProjectRoadmap,
      gap: true,
    },
    { title: "Blogs", path: "/dashboard/blogs", icon: BsPostcard, gap: true },
    {
      title: "Contacts ",
      path: "/dashboard/contacts",
      icon: AiOutlineContacts,
      gap: true,
    },
    {
      title: "Services",
      path: "/dashboard/services",
      icon: MdDesignServices,
      gap: true,
    },
    {
      title: "Newsletters",
      path: "/dashboard/newsletters",
      icon: FaRegNewspaper,
      gap: true,
    },
  ];
  const homeMenus = [
    { title: "Home", path: "/", icon: IoHome },
    { title: "Blog", path: "/blogs", icon: RiPagesLine },
    { title: "Contact Me", path: "/contact", icon: CgWebsite },
  ];
  return (
    <div
      className={` bg-[#0c172b] h-auto p-5 pt-3 relative duration-300 ${
        open ? "w-72" : "w-20 "
      }`}
    >
      {open ? (
        <IoCloseSharp
          className="absolute cursor-pointer -right-8 top-4 
          text-3xl text-white"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <MdOutlineMenu
          className="absolute cursor-pointer -right-8 top-4 
          text-3xl text-white"
          onClick={() => setOpen(!open)}
        />
      )}
      <div className="flex gap-x-4 items-center">
        <img src={fav} className="cursor-pointer duration-500 w-10" />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 font-notoSans ${
            !open && "scale-0"
          }`}
        >
          Shipan
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map(({ title, icon: Icon, path, gap }, index) => (
          <li key={index}>
            <NavLink
              to={path}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${gap ? "mt-4" : "mt-2"} ${index === 0 && "bg-light-white"} `}
            >
              <Icon size={20} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {title}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="border-t border-slate-400 mt-10">
        <ul className="pt-5">
          {homeMenus.map(({ title, icon: Icon, path, gap }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${gap ? "mt-4" : "mt-2"} ${index === 0 && "bg-light-white"} `}
              >
                <Icon size={20} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {title}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
