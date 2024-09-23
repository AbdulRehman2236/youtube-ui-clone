import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/slices/sidebarSlice";
import { useGetVideoDetails } from "../utils/hooks/useGetVideoDetails";
import WatchVideoDescription from "./WatchVideoDescription";
import { getFormattedCount } from "../utils/helpers";
import { useGetVideoComments } from "../utils/hooks/useGetVideoComments";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import WatchVideoDropdown from "./WatchVideoDropdown";

const WatchVideo = () => {
  const [videoId] = useSearchParams();
  const dispatch = useDispatch();
  const [isVideoLike, setIsVideoLike] = useState(false);
  const [isVideoDislike, setIsVideoDislike] = useState(false);
  const [isMoreOptionsShowing, setIsMoreOptionsShowing] = useState(false);
  const videoDetails = useGetVideoDetails(videoId.get("v"));
  useGetVideoComments(videoId.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  if (videoDetails.length === 0) return;
  const { snippet, statistics } = videoDetails[0];
  const { title, channelTitle, publishedAt } = snippet;

  let numberOfLikes = getFormattedCount(statistics.likeCount);

  const handleIsVideoLike = () => {
    setIsVideoLike(!isVideoLike);
    setIsVideoDislike(false);
    isVideoLike ? (numberOfLikes += 1) : (numberOfLikes -= 1);
  };

  const handleIsVideoDislike = () => {
    setIsVideoDislike(true);
    setIsVideoLike(false);
  };

  const MySwal = withReactContent(Swal);

  const handleDownload = () => {
    MySwal.fire({
      title: (
        <div className="flex items-center space-x-2">
          <img src="src/assets/favicon.ico" alt="Premium Logo" className="size-5" />
          <span className="font-bold text-2xl text-black">Premium</span>
        </div>
      ),
      html: (
        <div className="text-left">
          <p className="text-base font-semibold mb-2 text-black">Download restricted by music owner</p>
          <p className="text-base font-semibold mb-2 text-gray-800">
            Get YouTube Premium to download this video, use YouTube ad-free, and more.
          </p>
          <div className="space-y-3 text-base mt-8 font-semibold">
            <div>
              <input type="radio" id="highQuality" className="mr-2" disabled />
              <label htmlFor="highQuality">High (720p)</label>
            </div>
            <div>
              <input type="radio" id="standardQuality" className="mr-2" defaultChecked />
              <label className="standardQuality">Standard (480p)</label>
            </div>
          </div>
          <p className="text-sm mt-6">
            By tapping "Try it free", you are agreeing to these{" "}
            <a href="#" className="text-blue-600 underline">
              terms
            </a>
            . See the{" "}
            <a href="#" className="text-blue-600 underline">
              privacy statement
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 underline">
              restrictions
            </a>
            .
          </p>
        </div>
      ),
      didOpen: () => {
        const confirmButton = Swal.getConfirmButton();
        confirmButton.disabled = true;
        confirmButton.classList.add("cursor-not-allowed");
      },
      showCancelButton: true,
      confirmButtonText: "Try it free",
      cancelButtonText: "Not now",
      customClass: {
        popup: "max-w-md",
        confirmButton: "bg-blue-600 text-white px-4 py-1 rounded",
        cancelButton: "bg-gray-300 text-gray-700 px-4 py-1 rounded hover:bg-gray-400 hover:text-white ml-2",
      },
      buttonsStyling: false,
    });
  };

  const handleShare = () => {
    MySwal.fire({
      title: (
        <div className="flex justify-center items-center">
          <span className="font-semibold text-center text-xl text-black">Share in a post</span>
        </div>
      ),
      html: (
        <>
          <button
            type="button"
            className="text-sm px-4 mt-1 ml-4 font-semibold rounded-3xl bg-black text-white py-0 h-9 cursor-not-allowed"
            disabled
          >
            Create post
          </button>
          <span className="flex justify-center mt-4 items-center text-sm mb-2 text-black">No subscribers</span>

          <div className="space-y-4 text-left mt-10 max-w-">
            {/* Input with copy button */}
            <div className="flex items-center border border-gray-300 rounded-2xl p-2">
              <input
                type="text"
                id="clipboard-input"
                value={window.location.href}
                className="flex-grow pl-2 text-sm bg-transparent focus:outline-none"
              />
              <button
                className="bg-blue-600 text-xs text-white font-bold px-3 py-2 rounded-full ml-2"
                onClick={() => copyToClipboard()}
              >
                Copy
              </button>
            </div>
          </div>
        </>
      ),
      didOpen: () => {},
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        popup: "max-w-md",
      },
      buttonsStyling: false,
    });
  };

  const copyToClipboard = () => {
    const input = document.querySelector("[id='clipboard-input']");
    input.select();
    document.execCommand("copy");

    Swal.fire({
      icon: "success",
      title: "Copied!",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <>
      <div className="rounded-xl">
        <iframe
          src={"https://www.youtube.com/embed/" + videoId.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-2xl w-[853px] h-[480px]"
        ></iframe>
      </div>

      <h3 className="text-xl font-bold mt-2">{title}</h3>

      <div className="flex mt-4 w-full">
        <div className="flex w-full">
          <img
            src="https://yt3.ggpht.com/CuOWVYxYp6iHd2QbDRnFZ81PZw7pCAwWBGU8QQfXlbIJV6RP8ZPKRLNoxKiBZm-kGtCCLaudrfI=s68-c-k-c0x00ffffff-no-rj"
            alt="channel icon"
            className="size-10 rounded-full mt-0.5"
          />

          <div className="mx-4">
            <p className="text-slate-800 font-bold text-balance">{channelTitle}</p>
            <p className="text-sm">242K subscribers</p>
          </div>

          <button
            type="button"
            className="text-sm px-4 mt-1 ml-4 font-semibold rounded-3xl bg-black text-white py-0 leading-none h-9"
          >
            Subscribe
          </button>
        </div>

        <div className="flex w-full justify-end space-x-3 mt-0.5">
          <div className="flex items-center space-x-2 bg-gray-100 px-4 py-1 rounded-2xl shadow-md h-9">
            {/* Like Button */}
            <button className="flex items-center text-gray-700 space-x-2" onClick={handleIsVideoLike}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isVideoLike ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
              <span>{numberOfLikes}</span>
            </button>

            {/* Divider */}
            <span className="border-l border-gray-400 h-7"></span>

            {/* Dislike Button */}
            <button className="flex items-center text-gray-700 space-x-2" onClick={handleIsVideoDislike}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isVideoDislike ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                />
              </svg>
            </button>
          </div>

          <button
            type="button"
            className="flex items-center text-sm px-4 h-9 font-bold rounded-3xl bg-gray-200 text-gray-800 py-0 leading-none"
            onClick={handleShare}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mr-2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
            </svg>
            Share
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="flex items-center text-sm px-4 font-bold rounded-3xl bg-gray-200 text-gray-800 leading-none h-9"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mr-2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 15-6 6m0 0-6-6m6 6V9a6 6 0 0 1 12 0v3" />
            </svg>
            Download
          </button>

          <button
            type="button"
            className="flex items-center text-sm px-2 font-bold rounded-3xl bg-gray-200 text-gray-800 leading-none h-9"
            onMouseEnter={() => setIsMoreOptionsShowing(true)}
            onMouseLeave={() => setIsMoreOptionsShowing(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {isMoreOptionsShowing && <WatchVideoDropdown />}
          </button>
        </div>
      </div>

      {/* Description */}
      <WatchVideoDescription
        statistics={statistics}
        publishedAt={publishedAt}
        tags={snippet.tags}
        description={snippet.description}
      />

      {/* Comments heading */}
      <div className="my-6">
        <h1 className="font-sans font-bold text-xl">{Number(statistics?.commentCount).toLocaleString()} Comments</h1>
      </div>
    </>
  );
};

export default WatchVideo;
