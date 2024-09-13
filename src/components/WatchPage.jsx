import React from "react";
import WatchVideo from "./WatchVideo";
import SuggestionButtonList from "./SuggestionButtonList";
import VideosList from "./VideosList";
import CommentsThread from "./CommentsThread";

const WatchPage = () => {
  return (
    <>
      <div className="col-span-8 h-auto my-6 mx-4">
        <WatchVideo />
        <CommentsThread />
      </div>
      <div className="col-span-4 h-auto my-6 ml-8">
        <SuggestionButtonList />
        <VideosList />
      </div>
    </>
  );
};

export default WatchPage;
