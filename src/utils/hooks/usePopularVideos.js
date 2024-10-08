import { useEffect } from "react";
import { GET_POPULAR_VIDEOS_API } from "../constants";
import { useDispatch } from "react-redux";
import { setVideosList } from "../slices/videosSlice";

export const usePopularVideos = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const dispatch = useDispatch();

  const getVideos = async () => {
    const data = await fetch(GET_POPULAR_VIDEOS_API + API_KEY);
    const json = await data.json();
    dispatch(setVideosList(json.items));
  };

  useEffect(() => {
    getVideos();
  }, []);
};
