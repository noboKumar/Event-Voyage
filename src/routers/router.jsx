import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../pages/Home";
import Error from "../pages/Error";
import MyProfile from "../pages/MyProfile";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Blogs from "../pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <MyProfile></MyProfile>
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/blogs",
        element: (
          <PrivateRouter>
            <Blogs></Blogs>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
