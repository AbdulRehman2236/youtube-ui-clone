import React, { useEffect, useState } from "react";
import SearchVideoCard from "./SearchVideoCard";
import { useSelector } from "react-redux";
import { GET_SEARCH_VIDEOS_API, GET_VIDEO_LIST_BY_IDS } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";

const SearchResultsPage = () => {
  const [searchKeyword] = useSearchParams();
  const [searchList, setSearchList] = useState([]);
  const isSidebarOpen = useSelector((store) => store.sidebar.isSidebarOpen);

  const getSearchList = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const searchVideoIds = [];

    const data = await fetch(GET_SEARCH_VIDEOS_API(searchKeyword.get("search_query"), API_KEY));
    const json = await data.json();
    json.items.map((video) => searchVideoIds.push(video.id.videoId));

    const videosData = await fetch(GET_VIDEO_LIST_BY_IDS(searchVideoIds, API_KEY));
    const videosJson = await videosData.json();
    setSearchList(videosJson);
  };

  useEffect(() => {
    getSearchList();
  }, []);

  if (searchList.length === 0) return;

  return (
    <div className={`${isSidebarOpen ? "col-span-10" : "col-span-12"} mt-6 px-4`}>
      {searchList.items.map((item) => (
        <Link key={item.id} to={"/watch?v=" + item.id}>
          <SearchVideoCard item={item} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResultsPage;
