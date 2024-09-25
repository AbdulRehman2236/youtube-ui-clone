import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isSidebarOpen = useSelector((store) => store.sidebar.isSidebarOpen);
  return (
    <div className="grid grid-cols-12 h-[88vh] overflow-hidden">
      <div
        className={`col-span-2 h-full overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100 scrollbar-hover`}
      >
        <Sidebar />
      </div>
      <div
        className={`${
          isSidebarOpen ? "col-span-10" : "col-span-12"
        } h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
