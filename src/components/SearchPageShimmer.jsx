import React from "react";

const SearchPageShimmer = () => {
  return (
    <div className="flex">
      <div className="flex-1 grid grid-cols-1 gap-4 p-4">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex items-center rounded shadow-md w-full animate-pulse space-x-4">
            <div className="w-96 h-60 bg-gray-300 rounded"></div>

            <div className="flex-1 h-60 pt-8 pl-8 pr-4 py-2 space-y-5 bg-gray-50">
              <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
              <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
              <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
              <div className="w-full h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPageShimmer;
