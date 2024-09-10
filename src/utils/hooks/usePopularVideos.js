import { useEffect, useState } from "react";
import { GET_POPULAR_VIDEOS_API } from "../constants";

export const usePopularVideos = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(GET_POPULAR_VIDEOS_API + API_KEY);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return videos;
};
