import React, { use } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../provider/AuthContext";
import { FaEdit } from "react-icons/fa";

const MyProfile = () => {
  const { user, updateUser, setUser } = use(AuthContext);
  console.log(user);
  const handleEditProfile = (e) => {
    e.preventDefault();

    const userName = e.target.name.value;
    const photo = e.target.url.value;

    updateUser({
      displayName: userName || user.displayName,
      photoURL: photo || user.photoURL,
    })
      .then(() => {
        setUser({
          ...user,
          displayName: userName || user.displayName,
          photoURL: photo || user.photoURL,
        });
      })
      .catch((error) => {
        console.log(error);
        setUser(user);
      });
  };

  return (
    <div className="w-11/12 mx-auto py-10 flex gap-5">
      <Helmet>
        <title>Profile | Event Voyage</title>
      </Helmet>
      <div className="xl:w-1/2 mx-auto">
        <h1 className="md:text-4xl text-2xl font-semibold">My Profile</h1>
        <div className="bg-primary w-10 h-1 my-2"></div>
        <div className="text-center space-y-4 border-4 border-base-300 py-10 px-5 lg:py-10 lg:px-20 rounded-2xl my-8">
          <img
            className="w-56 h-56 mx-auto rounded-full object-cover border-4 p-1 border-base-300"
            src={user?.photoURL}
            alt="user photo"
          />
          <div className="border-2 border-base-300"></div>
          <div className="space-y-2">
            <h1 className="md:text-4xl text-2xl font-semibold">
              Name: {user.displayName}
            </h1>
            <p className="md:text-2xl">Email: {user.email}</p>
          </div>
          <div className="shadow my-8 mx-2 md:p-10 p-5 rounded-2xl border-2 border-base-300">
            <h1 className="md:text-2xl font-semibold flex gap-2">
              Edit Profile
              <FaEdit />
            </h1>
            <div className="bg-primary w-8 h-1 my-2"></div>
            <form onSubmit={handleEditProfile} className="space-y-5">
              {/* user name */}
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  minLength="3"
                  maxLength="30"
                />
              </label>
              {/* photo url */}
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </g>
                </svg>
                <input
                  type="url"
                  name="url"
                  placeholder="Photo URL"
                  pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                  title="Must be valid URL"
                />
              </label>
              <br />
              {/* button */}
              <button className="btn btn-primary text-white py-6 px-1 md:px-6">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
