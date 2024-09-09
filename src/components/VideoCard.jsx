import React from "react";

const VideoCard = (items) => {
  const { title, thumbnails, channelTitle } = items.items;
  return (
    <div className="bg-white shadow-lg overflow-hidden rounded-xl">
      <img src={thumbnails?.medium?.url} alt="Card1" className="w-full h-48 object-fill rounded-xl" />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;
