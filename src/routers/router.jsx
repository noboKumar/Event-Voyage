import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../pages/Home";
import Error from "../pages/Error";
import MyProfile from "../pages/MyProfile";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import EventDetails from "../pages/EventDetails";
import Loading from "../components/Loading";
import MyBookings from "../pages/MyBookings";
import ForgetPassword from "../pages/ForgetPassword";

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
        path: "/forgetPassword",
        Component: ForgetPassword,
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRouter>
            <MyBookings></MyBookings>
          </PrivateRouter>
        ),
        loader: () => fetch("/bookingsData.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/eventDetails/:id",
        element: (
          <PrivateRouter>
            <EventDetails></EventDetails>
          </PrivateRouter>
        ),
        loader: () => fetch("/eventData.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
