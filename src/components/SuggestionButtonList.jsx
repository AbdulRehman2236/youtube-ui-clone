import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { GET_SEARCH_VIDEOS_API, GET_VIDEO_LIST_BY_IDS } from "../utils/constants";
import { setVideosList } from "../utils/slices/videosSlice";

const SuggestionButtonList = () => {
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const [isActive, setIsActive] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = (direction) => {
    const scrollAmount = direction === "left" ? -200 : 200;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    // Update arrow visibility after scrolling
    scrollLeft + scrollAmount <= 0 ? setShowLeftArrow(false) : setShowLeftArrow(true);
    scrollLeft + scrollAmount >= scrollWidth - clientWidth ? setShowRightArrow(false) : setShowRightArrow(true);
  };

  const handleList = async (index, item) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const searchVideoIds = [];

    const data = await fetch(GET_SEARCH_VIDEOS_API(item, API_KEY));
    const json = await data.json();
    json.items.map((video) => searchVideoIds.push(video.id.videoId));

    const videosData = await fetch(GET_VIDEO_LIST_BY_IDS(searchVideoIds, API_KEY));
    const videosJson = await videosData.json();
    dispatch(setVideosList(videosJson.items));
    setIsActive(index);
  };

  const buttonList = [
    "All",
    "Live",
    "Mufti Rashid Mehmood Razvi",
    "Muhammad Owais Raza Qadri",
    "JavaScript",
    "News",
    "IDS",
    "Ala Hazrat",
    "Qasida",
    "Data Type",
    "Code",
    "Watched",
    "Programming",
    "Recently Uploaded",
    "Allama Farooq Razvi",
  ];

  return (
    <div className="relative flex items-center">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          className="absolute left-0 p-1 z-10 bg-gray-500 rounded-full hover:bg-gray-700"
          onClick={() => handleScroll("left")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 font-bold text-gray-50"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}

      {/* Button List */}
      <div
        className="flex space-x-3  overflow-x-auto"
        ref={scrollRef}
        style={{
          scrollBehavior: "smooth",
          msOverflowStyle: "none", // IE and Edge
          scrollbarWidth: "none", // Firefox
        }}
      >
        {buttonList.map((item, index) => (
          <button
            key={index}
            className={`px-4 py-1 whitespace-nowrap font-semibold text-sm rounded-lg  ${
              isActive === index ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
            onClick={() => handleList(index, item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          className="absolute right-0 p-1 z-10  bg-gray-500 rounded-full hover:bg-gray-700"
          onClick={() => handleScroll("right")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 font-bold text-gray-50"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SuggestionButtonList;
