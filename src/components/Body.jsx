import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import VideosContainer from "./VideosContainer";

const Body = () => {
  return (
    <div className="p-3 px-6">
      <Header />
      <div className="container grid grid-cols-12">
        <Sidebar />
        <VideosContainer />
      </div>
    </div>
  );
};

export default Body;
