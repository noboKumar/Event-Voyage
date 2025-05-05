import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../pages/Home";
import Error from "../pages/Error";
import MyProfile from "../pages/MyProfile";

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
        Component: MyProfile,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
