import React from "react";
import { usePopularVideos } from "../utils/hooks/usePopularVideos";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const VideosList = () => {
  const videos = usePopularVideos();

  if (!videos) return;

  return (
    <div className="mt-6">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard
            key={video.id}
            items={video}
            imageClass="h-28 w-[400px]"
            showChannelIcon={false}
            containerClass="flex justify-between items-center h-32"
          />
        </Link>
      ))}
    </div>
  );
};

export default VideosList;
