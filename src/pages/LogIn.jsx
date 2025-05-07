import React, { use, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { logIn, googleLogIn, email, setEmail } = use(AuthContext);
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then((result) => {
        Swal.fire({
          title: `welcome, ${result.user.displayName}`,
          text: "Successfully Logged In",
          icon: "success",
        });
        navigate(location?.state || "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.code}`,
        });
      });
  };

  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: `welcome ${result.displayName}`,
          text: "Successfully Logged In",
          icon: "success",
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

  return (
    <div className="md:w-3/10 space-y-5 shadow md:mx-auto mx-2 my-20 p-10 rounded-2xl border-2 border-base-300">
      <Helmet>
        <title>Login Now</title>
      </Helmet>
      <h1 className="text-4xl font-semibold">Login Now!</h1>
      {/* email */}
      <form onSubmit={handleLogIn} className="space-y-4">
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
            ref={emailRef}
            name="email"
            type="email"
            placeholder="mail@site.com"
            required
            defaultValue={email}
            onChange={handleEmailOnChange}
          />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
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
            name="password"
            required
            placeholder="Password"
            minLength="8"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
          <button
            className="cursor-pointer"
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </button>
        </label>
        <Link to={"/forgetPassword"}>
          <p className="underline text-gray-500 cursor-pointer active:text-primary py-2">
            Forget Password?
          </p>
        </Link>
        {/* login button */}
        <button className="btn flex btn-primary text-white">Login</button>
        {/* google login */}
        <button
          type="button"
          onClick={handleGoogleLogIn}
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
          Login with Google
        </button>
        <p>
          Don't Have an Account?{" "}
          <Link className="underline text-primary" to={"/register"}>
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
