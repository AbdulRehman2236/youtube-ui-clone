import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/slices/searchSlice";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const suggestedList = [
    "owais raza qadri",
    "samsung S23",
    "mufti rashid mehmood razvi",
    "ids",
    "react hook form",
    "useContext react hooks",
    "frishtay jis k zair hain owais qadri",
    "redux toolkit",
    "debouncing in JS",
    "hum brailey wale hain",
  ];
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(cacheResults({ [searchQuery]: json[1] }));
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
          onBlur={() =>
            setTimeout(() => {
              setShowSuggestions(false);
            }, 100)
          }
        />
        {searchQuery && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="border h-10 w-7"
            onClick={() => setSearchQuery("")}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        )}
        <Link
          to={"/results?search_query=" + searchQuery}
          className="flex items-center px-3  sm:text-sm rounded-r-full bg-gray-300"
        >
          <span className="flex items-center px-3  sm:text-sm rounded-r-full bg-gray-300">
            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-800">
              <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
            </svg>
          </span>
        </Link>
      </div>

      {showSuggestions && (
        <div className="absolute left-56 ml-2 mt-1 z-10 bg-white border w-1/2 h-[430px] border-gray-300 shadow-lg rounded-xl">
          <ul className="mt-6">
            {suggestions.length !== 0
              ? suggestions.map((suggestion, index) => (
                  <Link to={"/results?search_query=" + suggestion}>
                    <div key={index} className="flex mt-4 ml-4 space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        focusable="false"
                        aria-hidden="true"
                        className="size-5"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                      <li className="font-semibold">{suggestion}</li>
                    </div>
                  </Link>
                ))
              : suggestedList.map((suggestion, index) => (
                  <Link to={"/results?search_query=" + suggestion}>
                    <div key={index} className="flex mt-4 ml-4 space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>

                      <li className="font-semibold">{suggestion}</li>
                    </div>
                  </Link>
                ))}
          </ul>
        </div>
      )}
    </fieldset>
  );
};

export default SearchBar;
