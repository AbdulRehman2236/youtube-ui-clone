import React, { useState } from "react";
import { getFormattedCount, timeSincePublished } from "../utils/helpers";

const WatchVideoDescription = ({ statistics, publishedAt, tags, description }) => {
  const [fullDescription, setFullDescription] = useState(description);
  const [showDescription, setShowDescription] = useState(false);
  const [lessDescription] = useState(description.slice(0, 50).concat("..."));

  const handleMoreDescription = () => {
    setShowDescription(true);
    setFullDescription(description);
  };

  const handleLessDescription = () => {
    setShowDescription(false);
  };

  return (
    <div className="mt-6 py-2 px-4 bg-gray-200 rounded-lg">
      <div className="flex">
        <p className="text-black font-semibold text-sm">{getFormattedCount(statistics.viewCount)} views</p>
        <p className="text-gray-900 font-semibold text-sm px-2">{timeSincePublished(publishedAt)}</p>
      </div>
      <p className="text-blue-700 font-bold font-sans text-sm">#{tags.slice(0, 10).join(" #")}</p>
      <div className="text-slate-800 text-sm whitespace-pre-wrap">
        {showDescription ? (
          <>
            <p>{fullDescription}</p>
            <button className="font-bold text-gray-700 mt-6" onClick={handleLessDescription}>
              Show less
            </button>
          </>
        ) : (
          <>
            {lessDescription}
            <button className="font-bold" onClick={handleMoreDescription}>
              more
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WatchVideoDescription;
