import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Blogs from "../pages/blog/Blogs";
import Contact from "../pages/Contact";
import Projects from "../pages/projects/Projects";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

export default router;
