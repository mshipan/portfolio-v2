import { useContext, useState } from "react";
import { PiUserCircleLight } from "react-icons/pi";
import { AuthContext } from "../../providers/AuthProviders";
import toast from "react-hot-toast";

const DashboardNav = () => {
  const { setLoading, logOut } = useContext(AuthContext);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout successfull");
        setLoading(false);
        setIsUserDropdownOpen(false);
      })
      .catch((error) => {
        toast.error(`${error.message}`);
        setLoading(false);
      });
  };
  const userMenuDropdown = (
    <>
      <li>
        <button onClick={handleLogout} className="text-white">
          Log Out
        </button>
      </li>
    </>
  );
  return (
    <div className="bg-[#0c172b] h-16 flex items-center justify-end p-4">
      <div onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}>
        <PiUserCircleLight size={40} className="cursor-pointer text-gray-300" />
      </div>
      <div>
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
