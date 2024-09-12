import { useEffect, useState } from "react";
import { GET_VIDEO_DETAILS_API } from "../constants";

export const useGetVideoDetails = (videoId) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [videoDetails, setVideoDetails] = useState([]);
  const getVideoDetails = async () => {
    const data = await fetch(GET_VIDEO_DETAILS_API(videoId, API_KEY));
    const json = await data.json();
    setVideoDetails(json.items);
  };

  useEffect(() => {
    getVideoDetails();
  }, []);

  return videoDetails;
};
