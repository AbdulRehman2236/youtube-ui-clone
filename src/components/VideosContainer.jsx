import React from "react";
import VideoCard from "./VideoCard";
import { usePopularVideos } from "../utils/hooks/usePopularVideos";

const VideosContainer = () => {
  const videos = usePopularVideos();

  if (!videos) return;

  return (
    <div className="col-span-10 p-3 px-4">
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
          {videos.map((video) => (
            <VideoCard key={video.id} items={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideosContainer;
