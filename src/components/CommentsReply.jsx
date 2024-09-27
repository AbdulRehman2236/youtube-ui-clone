import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCommentRepliesList, setCurrentComment, showReplies } from "../utils/slices/replySlice";
import { GET_VIDEO_COMMENTS_REPLIES } from "../utils/constants";

const CommentsReply = ({ totalReplies, index, commentId }) => {
  const dispatch = useDispatch();
  const currentComment = useSelector((store) => store.reply.currentComment);
  const isReplyShowing = useSelector((store) => store.reply.isShowReply);

  const handleReplies = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const data = await fetch(GET_VIDEO_COMMENTS_REPLIES(commentId, API_KEY));
    const json = await data.json();

    dispatch(setCommentRepliesList(json.items));
    isReplyShowing && index === currentComment ? dispatch(showReplies(false)) : dispatch(showReplies(true));
    dispatch(setCurrentComment(index));
  };

  return (
    <div className="ml-9 sm:ml-14 mt-2 mb-4">
      {totalReplies !== 0 && (
        <button
          className="flex text-blue-800 py-1 px-3 font-semibold text-sm hover:bg-blue-200 rounded-full"
          onClick={() => handleReplies()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="blue"
            className="size-4 mr-1 my-0.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          {totalReplies} {totalReplies === 1 ? "Reply" : "Replies"}
        </button>
      )}
    </div>
  );
};

export default CommentsReply;
