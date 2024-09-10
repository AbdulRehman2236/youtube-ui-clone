import React from "react";
import { formatDuration, getViewsCount, timeSincePublished } from "../utils/helpers";

const VideoCard = ({ items }) => {
  const { snippet, statistics, contentDetails } = items;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  return (
    <div className="bg-white shadow-lg overflow-hidden rounded-xl">
      <div className="relative">
        <img
          src={thumbnails?.medium?.url}
          alt="Card1"
          className="w-full h-52 object-fill rounded-xl hover:cursor-pointer"
        />
        <p className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-sm px-1 py-0.5 rounded">
          {formatDuration(contentDetails.duration)}
        </p>
      </div>

      <div className="px-4 py-2">
        <div className="flex space-x-3">
          <img
            src="https://yt3.ggpht.com/CuOWVYxYp6iHd2QbDRnFZ81PZw7pCAwWBGU8QQfXlbIJV6RP8ZPKRLNoxKiBZm-kGtCCLaudrfI=s68-c-k-c0x00ffffff-no-rj"
            alt="channel icon"
            className="size-10 rounded-full mt-0.5"
          />

          <div>
            <h3 className="text-balance font-semibold">
              {title.length >= 54 ? title.slice(0, 54).concat("...") : title}
            </h3>

            <p className="text-slate-600 font-semibold text-sm">{channelTitle}</p>
            <div className="flex space-x-2 pb-6">
              <p className="text-gray-600 text-sm">{getViewsCount(statistics.viewCount)} views . </p>
              <p className="text-gray-600 text-sm">{timeSincePublished(publishedAt)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
