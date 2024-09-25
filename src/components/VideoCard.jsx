import React from "react";
import { formatDuration, getFormattedCount, timeSincePublished } from "../utils/helpers";
import { useGetChannelDetails } from "../utils/hooks/useGetChannelDetails";

const VideoCard = ({
  items,
  imageClass = "w-full h-52",
  containerClass = "",
  divClass = "",
  headingClass = "",
  showChannelIcon = true,
}) => {
  const { snippet, statistics, contentDetails } = items;
  const { title, thumbnails, channelTitle, publishedAt, channelId } = snippet;

  const channels = useGetChannelDetails(channelId);
  if (!channels) return;

  return (
    <div className={`${containerClass} bg-white overflow-hidden rounded-xl`}>
      <div className="relative">
        <img
          src={thumbnails?.medium?.url}
          alt="Card1"
          className={`${imageClass} object-fill rounded-xl hover:cursor-pointer`}
        />
        <p className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-sm px-1 py-0.5 rounded">
          {formatDuration(contentDetails.duration)}
        </p>
      </div>

      <div className={`px-2 ${divClass}`}>
        <div className="flex space-x-3">
          {showChannelIcon && (
            <img
              src={channels?.snippet?.thumbnails?.medium?.url}
              alt="channel icon"
              className="size-10 rounded-full mt-0.5"
            />
          )}

          <div>
            <h3 className={`${headingClass} font-semibold`}>
              {title.length >= 40 ? title.slice(0, 35).concat("...") : title}
            </h3>

            <p className="text-slate-600 font-semibold text-sm">{channelTitle}</p>
            <div className="flex space-x-2 pb-6">
              <p className="text-gray-600 text-sm">{getFormattedCount(statistics.viewCount)} views . </p>
              <p className="text-gray-600 text-sm">{timeSincePublished(publishedAt)}</p>
            </div>
          </div>
          <div className="flex items-start justify-start h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
