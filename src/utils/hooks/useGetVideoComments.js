import { GET_VIDEO_COMMENTS } from "../constants";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export const useGetVideoComments = (videoId) => {
  const [comments, setComments] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const dispatch = useDispatch();

  const getVideoComments = async () => {
    const data = await fetch(GET_VIDEO_COMMENTS(videoId, API_KEY));
    const json = await data.json();
    setComments(json);
  };

  useEffect(() => {
    getVideoComments();
  }, []);

  return comments;
};
