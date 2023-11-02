import { NavLink } from "react-router-dom";
import logo from "../../../assets/favicon.jpg";
import { BiMenu } from "react-icons/bi";
import "./Navbar.css";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { text: "Home", link: "/" },
    { text: "Blog", link: "/blog" },
    { text: "Contact", link: "/contact" },
  ];
  const navLinks = navItems.map((item, index) => (
    <li key={index}>
      <NavLink
        to={item.link}
        className={({ isActive }) => (isActive ? "text-[#55e6a5]" : "")}
      >
        {item.text}
      </NavLink>
    </li>
  ));

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0">
      <div className="bg-[#02050a] flex items-center justify-between md:w-3/5 mx-auto">
        <div className="flex items-center md:gap-5 gap-2">
          <img src={logo} className="md:w-16 w-11 md:h-16 h-11" alt="Logo" />
          <h1 className=" text-white font-notoSans font-semibold md:text-2xl uppercase">
            Shipan
          </h1>
        </div>
        <div className="hidden md:block">
          <ul className="text-white font-notoSans uppercase text-sm flex items-center gap-12">
            {navLinks}
          </ul>
        </div>
        {/* For the Large screen */}
        <div className="hidden md:block md:px-3 px-1 md:py-2 py-1 bg-[#55e6a5]">
          <BiMenu className="text-[#02050a] md:text-5xl text-4xl cursor-pointer" />
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
        className={`md:hidden block bg-[#02050a] py-4 border-y border-[#55e6a5] absolute w-full transition-all ease-out duration-300 ${
          isMenuOpen ? "top-11" : "-top-40 opacity-0"
        }`}
      >
        <ul className="text-white font-notoSans uppercase text-sm flex flex-col items-center gap-3">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
