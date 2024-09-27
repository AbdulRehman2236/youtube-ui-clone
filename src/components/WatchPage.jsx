import React from "react";
import WatchVideo from "./WatchVideo";
import SuggestionButtonList from "./SuggestionButtonList";
import VideosList from "./VideosList";

const WatchPage = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-8 h-auto my-6 mx-4">
        <WatchVideo />
      </div>
      <div className="col-span-4 h-auto my-6 ml-3 mr-2 hidden lg:block">
        <SuggestionButtonList />
        <VideosList />
      </div>
    </div>
  );
};

export default WatchPage;
