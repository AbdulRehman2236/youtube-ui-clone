import { useEffect, useState } from "react";
import { GET_CHANNEL_DETAILS } from "../constants";

export const useGetChannelDetails = (channelId) => {
  const [channels, setChannels] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getChannels = async () => {
    const data = await fetch(GET_CHANNEL_DETAILS(channelId, API_KEY));
    const json = await data.json();
    setChannels(json.items[0]);
  };

  useEffect(() => {
    getChannels();
  }, [channelId]);

  return channels;
};
