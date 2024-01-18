import { Outlet, useNavigate } from "react-router-dom";
import DashboardNav from "../components/dashboard/DashboardNav";
import Sidebar from "../components/dashboard/Sidebar";
import MyDashboard from "../pages/dashboard/MyDashboard";

const DashBoardLayout = () => {
  const navigate = useNavigate();

  const dashboardRoot = window.location.pathname;

  if (dashboardRoot === "/dashboard") {
    return (
      <div className="flex">
        <Sidebar />
        <div className="h-auto md:max-xl:h-screen flex-1">
          <DashboardNav />
          <div className="p-7">
            <MyDashboard />
          </div>
        </div>
      </div>
    );
  }
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
