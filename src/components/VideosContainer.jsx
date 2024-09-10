import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const VideosContainer = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=20&key=" +
        API_KEY
    );
    const json = await data.json();
    setVideos(json.items);
    console.log(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

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
