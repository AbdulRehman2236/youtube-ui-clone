import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    getSearchSuggestions();
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  return (
    <fieldset className="w-full relative">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          className="flex w-1/2 px-4 py-1 text-left border rounded-l-full focus:ring-inset focus:outline-none focus:border-violet-900"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <span className="flex items-center px-3  sm:text-sm rounded-r-full bg-gray-300">
          <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-800">
            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
          </svg>
        </span>
      </div>

      {showSuggestions && (
        <div className="absolute left-56 ml-2 mt-1 z-10 bg-white border w-1/2 h-[430px] border-gray-300 shadow-lg rounded-xl">
          <ul className="mt-6">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="flex mt-4 ml-4 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  focusable="false"
                  ariaHidden="true"
                  className="size-5"
                >
                  <path
                    clip-rule="evenodd"
                    d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <li className="font-semibold">{suggestion}</li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </fieldset>
  );
};

export default SearchBar;
