import React, { useRef, useState } from "react";

const SuggestionButtonList = () => {
  const scrollRef = useRef(null);
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

  const buttonList = [
    "All",
    "News",
    "Mufti Rashid Mehmood Razvi",
    "Muhammad Owais Raza Qadri",
    "Live",
    "JavaScript",
    "IDS",
    "Ala Hazrat",
    "Qasida",
    "Data Type",
    "Code",
    "Programming",
    "Recently Uploaded",
    "Watched",
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
        {/* Hide scrollbars in WebKit browsers like Chrome, Safari, etc */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {buttonList.map((item, index) => (
          <button
            key={index}
            className="px-4 py-1 whitespace-nowrap text-gray-900 font-semibold text-sm bg-gray-100 rounded-lg hover:bg-gray-200"
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
