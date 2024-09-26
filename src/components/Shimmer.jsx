import React from "react";
import { useSelector } from "react-redux";

const Shimmer = () => {
  const isSidebarOpen = useSelector((store) => store.sidebar.isSidebarOpen);

  return (
    <div
      className={`grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 ${
        isSidebarOpen ? "lg:grid-cols-3" : "lg:grid-cols-4"
      } gap-8 2xl:grid-cols-5`}
    >
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col m-2  rounded shadow-md w-full sm:w-60 md:w-60 lg:w-72 animate-pulse h-80"
        >
          <div className="h-48 rounded-t dark:bg-gray-300"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
            <div className="w-full h-6 rounded dark:bg-gray-300"></div>
            <div className="w-full h-6 rounded dark:bg-gray-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
