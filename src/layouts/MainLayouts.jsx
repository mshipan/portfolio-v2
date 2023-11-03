import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer";
import FollowMe from "../components/FollowMe";
import EmailAndPhone from "../components/EmailAndPhone";

const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <EmailAndPhone />
      <FollowMe />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;
