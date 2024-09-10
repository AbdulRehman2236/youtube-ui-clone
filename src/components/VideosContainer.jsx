import React from "react";
import VideoCard from "./VideoCard";
import { usePopularVideos } from "../utils/hooks/usePopularVideos";
import { useSelector } from "react-redux";

const VideosContainer = () => {
  const isSidebarOpen = useSelector((store) => store.sidebar.isSidebarOpen);
  const videos = usePopularVideos();

  if (!videos) return;

  return (
    <div className="container mx-auto mt-10">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${
          isSidebarOpen ? "lg:grid-cols-3" : "lg:grid-cols-4"
        } 2xl:grid-cols-5 gap-4`}
      >
        {videos.map((video) => (
          <VideoCard key={video.id} items={video} />
        ))}
      </div>
    </div>
  );
};

export default VideosContainer;
