import React from "react";
import { formatDuration, getFormattedCount, timeSincePublished } from "../utils/helpers";
import { useGetChannelDetails } from "../utils/hooks/useGetChannelDetails";

const SearchVideoCard = ({ item }) => {
  const { snippet, statistics, contentDetails } = item;
  const { title, description, thumbnails, channelTitle, publishedAt, channelId } = snippet;

  const channels = useGetChannelDetails(channelId);
  if (!channels) return;

  return (
    <div className="bg-white overflow-hidden rounded-xl flex mb-4">
      <div className="relative sm:w-[85%] lg:w-2/3">
        <img
          src={thumbnails?.medium?.url}
          alt="Card1"
          className={`w-full h-72 object-fill rounded-xl hover:cursor-pointer`}
        />
        <p className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-sm px-1 py-0.5 rounded">
          {formatDuration(contentDetails.duration)}
        </p>
      </div>

      <div className="px-4 py-2 w-full">
        <div className="flex">
          <h3 className="text-lg font-semibold w-full">{title}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-9 pl-1 flex justify-end"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </div>
        <div className="flex space-x-2 pb-4">
          <p className="text-gray-600 text-sm">{getFormattedCount(statistics.viewCount)} views . </p>
          <p className="text-gray-600 text-sm">{timeSincePublished(publishedAt)}</p>
        </div>
        <div className="flex space-x-3">
          <img
            src={channels?.snippet?.thumbnails?.medium?.url}
            alt="channel icon"
            className="size-9 rounded-full mt-0.5"
          />
          <p className="text-slate-600 mt-2 font-semibold text-sm">{channelTitle}</p>
        </div>
        <p className="text-gray-600 text-sm mt-5">{description.slice(0, 115).concat("...")}</p>
      </div>
    </div>
  );
};

export default SearchVideoCard;
