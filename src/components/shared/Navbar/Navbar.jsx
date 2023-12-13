import { NavLink } from "react-router-dom";
import logo from "../../../assets/favicon.jpg";
import { BiMenu } from "react-icons/bi";
import "./Navbar.css";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import RightDrawer from "./RightDrawer";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "about" },
    { text: "Service", link: "service" },
    { text: "Projects", link: "projects" },
    { text: "Blog", link: "/blogs" },
    { text: "Contact", link: "/contact" },
  ];
  const navLinks = navItems.map((item, index) => (
    <li key={index}>
      {item.link.startsWith("/") ? (
        <NavLink
          to={item.link}
          className={({ isActive }) => (isActive ? "text-[#55e6a5]" : "")}
        >
          {item.text}
        </NavLink>
      ) : (
        <Link
          to={item.link}
          className={({ isActive }) => (isActive ? "text-[#55e6a5]" : "")}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {item.text}
        </Link>
      )}
    </li>
  ));

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="fixed -top-1 left-0 right-0 z-50">
      <div className="bg-[#02050a] flex items-center justify-between md:w-3/5 md:max-xl:w-[95%] mx-auto">
        <div className="flex items-center md:gap-5 gap-2">
          <img src={logo} className="md:w-16 w-11 md:h-16 h-11" alt="Logo" />
          <h1 className=" text-white font-notoSans font-semibold md:text-2xl uppercase">
            Shipan
          </h1>
        </div>
        <div className="hidden md:block">
          <ul className="text-white font-notoSans uppercase text-sm flex items-center md:gap-5">
            {navLinks}
          </ul>
        </div>
        {/* For the Large screen */}
        <div className="hidden md:block md:px-3 px-1 md:py-2 py-1 bg-[#55e6a5]">
          <label
            htmlFor="my-drawer-4"
            className="text-[#02050a] md:text-5xl text-4xl cursor-pointer"
          >
            <BiMenu onClick={toggleDrawer} />
          </label>
        </div>
        {/* For the small screen */}
        <div
          className="block md:hidden md:px-3 px-1 md:py-2 py-1 bg-[#55e6a5]"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? (
            <FaXmark className="text-[#02050a] md:text-5xl text-4xl cursor-pointer" />
          ) : (
            <BiMenu className="text-[#02050a] md:text-5xl text-4xl cursor-pointer" />
          )}
        </div>
      </div>
      <div
        className={`md:hidden block bg-[#02050a] py-4 border-y border-[#55e6a5] absolute w-full transition-all ease-out duration-500 ${
          isMenuOpen ? "top-11" : "-top-72 opacity-0"
        }`}
      >
        <ul className="text-white font-notoSans uppercase text-sm flex flex-col items-center gap-3">
          {navLinks}
        </ul>
      </div>
      {/* Drawer */}
      <div className="drawer drawer-end">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          checked={isDrawerOpen}
        />
        <div className="drawer-content">
          {/* Page content here */
          /* You can include any content you want inside the drawer */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={toggleDrawer}
          />
          <div className=" w-80 min-h-full text-base-content bg-[#09101a]">
            {/* Sidebar content here  */}
            <RightDrawer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
