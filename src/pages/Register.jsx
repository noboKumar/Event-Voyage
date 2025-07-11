import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const { createUser, setUser, googleLogIn, updateUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const photo = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (passwordRegex.test(password) === false) {
      setPasswordError(
        "Password must have an Uppercase a Lowercase and at least 6 character"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const userData = result.user;

        updateUser({ displayName: userName, photoURL: photo })
          .then(() => {
            setUser({ ...userData, displayName: userName, photoURL: photo });
            setPasswordError("");
            Swal.fire({
              title: `welcome ${userName}`,
              text: "Successfully Created Account",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error);
            setUser(userData);
          });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.code}`,
        });
      });
  };

  const handleGoogleRegister = () => {
    googleLogIn()
      .then((result) => {
        Swal.fire({
          title: `welcome ${result.user?.displayName}`,
          text: "Successfully Created Account",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="lg:w-2/10 md:w-5/10 shadow space-y-2 md:mx-auto mx-2 my-20 p-10 rounded-2xl border-2 border-base-300">
      <Helmet>
        <title>Please Register</title>
      </Helmet>
      <h1 className="text-4xl font-semibold">Please Register</h1>
      <form onSubmit={handleRegister} className="space-y-4">
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
            required
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
        {/* email */}
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
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            name="email"
            type="email"
            placeholder="mail@site.com"
            required
          />
        </label>
        {/* password */}
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
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input
            type={showPassword ? "text" : "password"}
            required
            name="password"
            placeholder="Password"
            title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
          />
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
          </button>
        </label>
        <p className="text-red-500 text-sm">{passwordError}</p>
        {/* login button */}
        <button className="btn flex btn-primary text-white">
          Create Account
        </button>
        {/* google login */}
        <button
          onClick={handleGoogleRegister}
          type="button"
          className="btn bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Sign up with Google
        </button>
        <p>
          Already Have an Account?{" "}
          <Link className="underline text-primary" to={"/login"}>
            Login Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
