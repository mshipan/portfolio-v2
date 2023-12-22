import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Blogs from "../pages/blog/Blogs";
import Contact from "../pages/Contact";
import Projects from "../pages/projects/Projects";
import ProjectDetails from "../pages/projects/ProjectDetails";
import BlogDetails from "../pages/blog/BlogDetails";
import DashBoardLayout from "../layouts/DashBoardLayout";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import AboutMe from "../pages/dashboard/AboutMe";
import UpdateAboutMe from "../pages/dashboard/UpdateAboutMe";
import Education from "../pages/dashboard/Education";
import CreateEducation from "../pages/dashboard/CreateEducation";
import Skills from "../pages/dashboard/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/project",
        element: <ProjectDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/about-me",
        element: <AboutMe />,
      },
      {
        path: "/dashboard/update-about-me",
        element: <UpdateAboutMe />,
      },
      {
        path: "/dashboard/education",
        element: <Education />,
      },
      {
        path: "/dashboard/create-education",
        element: <CreateEducation />,
      },
      {
        path: "/dashboard/skills",
        element: <Skills />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
