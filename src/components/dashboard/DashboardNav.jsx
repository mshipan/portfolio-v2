import { useState } from "react";
import { PiUserCircleLight } from "react-icons/pi";

const DashboardNav = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const userMenuDropdown = (
    <>
      <li>
        <button>Log Out</button>
      </li>
    </>
  );
  return (
    <div className="bg-[#0c172b] h-16 flex items-center justify-end p-4">
      <div onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}>
        <PiUserCircleLight size={40} className="cursor-pointer" />
      </div>
      <div className="">
        <ul
          className={`absolute right-16 top-5 origin-right transition-all ease-in-out duration-500 ${
            isUserDropdownOpen ? "scal-1" : "scale-0"
          }`}
        >
          {userMenuDropdown}
        </ul>
      </div>
    </div>
  );
};

export default DashboardNav;
