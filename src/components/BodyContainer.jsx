import React from "react";
import VideosContainer from "./VideosContainer";
import { useSelector } from "react-redux";
import SuggestionButtonList from "./SuggestionButtonList";

const BodyContainer = () => {
  const isSidebarOpen = useSelector((store) => store.sidebar.isSidebarOpen);
  return (
    <div className={`${isSidebarOpen ? "col-span-10" : "col-span-12"} p-3 px-4`}>
      <SuggestionButtonList />
      <VideosContainer />
    </div>
  );
};

export default BodyContainer;
