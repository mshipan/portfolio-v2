import { NavLink } from "react-router-dom";
import logo from "../../../assets/favicon.jpg";
import { BiMenu } from "react-icons/bi";
import "./Navbar.css";
const Navbar = () => {
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
  return (
    <div className="fixed top-0 left-0 right-0">
      <div className="bg-[#02050a] flex items-center justify-between w-3/5 mx-auto">
        <div className="flex items-center gap-5">
          <img src={logo} className="w-16 h-16" alt="Logo" />
          <h1 className=" text-white font-notoSans font-semibold text-2xl uppercase">
            Shipan
          </h1>
        </div>
        <div>
          <ul className="text-white font-notoSans uppercase text-sm flex items-center gap-12">
            {navLinks}
          </ul>
        </div>
        <div className="px-3 py-2 bg-[#55e6a5]">
          <BiMenu className="text-[#02050a] text-5xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
