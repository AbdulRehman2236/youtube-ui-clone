import React from "react";
import { useSelector } from "react-redux";
import VideoComment from "./VideoComment";

const CommentReplyList = ({ index }) => {
  const currentComment = useSelector((store) => store.reply.currentComment);
  const showReply = useSelector((store) => store.reply.isShowReply);
  const replies = useSelector((store) => store.reply.commentRepliesList);

  if (replies.length === 0) return;

  return (
    <div className="ml-14">
      {currentComment === index && showReply && replies?.map((reply) => <VideoComment comment={reply?.snippet} />)}
    </div>
  );
};

export default CommentReplyList;
