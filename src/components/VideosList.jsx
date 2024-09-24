import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { usePopularVideos } from "../utils/hooks/usePopularVideos";

const VideosList = () => {
  usePopularVideos();
  const videos = useSelector((store) => store.videos.videosList);

  if (!videos) return;

  return (
    <div className="mt-6">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard
            key={video.id}
            items={video}
            imageClass="h-28 w-[400px]"
            divClass="mt-1 w-[120%]"
            headingClass="text-sm"
            showChannelIcon={false}
            containerClass="flex justify-between items-center h-32"
          />
        </Link>
      ))}
    </div>
  );
};

export default VideosList;
