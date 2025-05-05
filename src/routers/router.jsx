import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../pages/Home";
import Error from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
