import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <section className="flex items-center min-h-[100vh] p-16 bg-gray-800 text-gray-50 ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>
            {error.status ? error.status : 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
          <p className="mt-4 mb-8 text-gray-100">
            But do not worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="px-8 py-3 font-semibold rounded text-white bg-gray-700 hover:bg-white border hover:text-black hover:border border-black hover:text-sm hover:font-bold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
