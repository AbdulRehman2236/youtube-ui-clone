import React from "react";
import VideoComment from "./VideoComment";
import CommentsReply from "./CommentsReply";
import { useSelector } from "react-redux";
import CommentReplyList from "./CommentReplyList";

const CommentsThread = () => {
  const comments = useSelector((store) => store.reply.commentsList);

  if (comments.length === 0) return;

  return (
    <div>
      {comments?.items.map((comment, index) => (
        <>
          <VideoComment comment={comment?.snippet?.topLevelComment?.snippet} />
          <CommentsReply
            totalReplies={comment?.snippet?.totalReplyCount}
            index={index}
            commentId={comment?.snippet?.topLevelComment?.id}
          />
          <CommentReplyList index={index} />
        </>
      ))}
    </div>
  );
};

export default CommentsThread;
