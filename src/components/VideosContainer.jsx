import React from "react";
import VideoCard from "./VideoCard";
import { usePopularVideos } from "../utils/hooks/usePopularVideos";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideosContainer = () => {
  const isSidebarOpen = useSelector((store) => store.sidebar.isSidebarOpen);
  usePopularVideos();
  const videos = useSelector((store) => store.videos.videosList);

  if (!videos) return;

  return (
    <div className="container mx-auto mt-10">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${
          isSidebarOpen ? "lg:grid-cols-3" : "lg:grid-cols-4"
        } 2xl:grid-cols-5 gap-4`}
      >
        {videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} items={video} imageClass="w-full h-52" divClass="py-2 w-full" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideosContainer;
