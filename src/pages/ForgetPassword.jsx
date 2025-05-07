import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const { forgetPassword, email } = use(AuthContext);

  const handleForgetPassword = (e) => {
    e.preventDefault();
    const emailField = e.target.email.value;
    forgetPassword(emailField)
      .then(() => {
        Swal.fire({
          title: "Email Sent Successfully",
          text: "Please Check Your Email",
          icon: "success",
        });
        window.open("https://mail.google.com/", "_blank")
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.code}`,
        });
      });
  };
  
  return (
    <div className="w-11/12 mx-auto space-y-4 py-5 text-center mt-40">
      <h1 className="text-2xl md:text-4xl font-semibold">Forget Password?</h1>
      <form
        onSubmit={handleForgetPassword}
        className="md:flex justify-center space-y-2"
      >
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
            defaultValue={email}
          />
        </label>
        <button className="btn btn-primary text-white">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
