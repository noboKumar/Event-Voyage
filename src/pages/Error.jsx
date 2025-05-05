import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <section className="bg-base-200 min-h-screen flex justify-center items-center">
      <title>Error</title>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4x">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <Link to={"/"} className="btn btn-primary text-white">
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
