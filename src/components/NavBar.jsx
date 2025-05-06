import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const NavBar = () => {
  const { user, logOut } = use(AuthContext);

  const navBarLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>about</NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>My profile</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "You Have been Logged out",
          icon: "success",
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="shadow-sm bg-base-200 ">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navBarLinks}
            </ul>
          </div>
          <Link className="btn btn-ghost md:text-2xl">
            Event <span className="text-primary">Voyage</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">{navBarLinks}</ul>
        </div>
        <div className="navbar-end gap-5">
          <Tooltip id="user-tooltip">{user.displayName}</Tooltip>
          {user ? (
            <a data-tooltip-id="user-tooltip">
              <img
                className="w-15 h-15 object-cover rounded-full border-2 p-1 cursor-pointer"
                src={user.photoURL}
                alt=""
              />
            </a>
          ) : (
            <FaUserCircle size={40} />
          )}

          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-primary text-white"
            >
              Log Out
            </button>
          ) : (
            <Link to={"/login"} className="btn btn-primary text-white">
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
