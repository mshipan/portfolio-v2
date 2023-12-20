import { Outlet } from "react-router-dom";
import DashboardNav from "../components/dashboard/DashboardNav";
import Sidebar from "../components/dashboard/Sidebar";

const DashBoardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-auto md:max-xl:h-screen flex-1">
        <DashboardNav />
        <div className="p-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
