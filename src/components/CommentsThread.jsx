import React from "react";
import VideoComment from "./VideoComment";
import CommentsReply from "./CommentsReply";
import CommentReplyList from "./CommentReplyList";
import { useGetVideoComments } from "../utils/hooks/useGetVideoComments";

const CommentsThread = ({ videoId }) => {
  const comments = useGetVideoComments(videoId);
  if (comments.length === 0) return;

  return (
    <div>
      {comments?.items.map((comment, index) => (
        <React.Fragment key={index}>
          <VideoComment comment={comment?.snippet?.topLevelComment?.snippet} />
          <CommentsReply
            totalReplies={comment?.snippet?.totalReplyCount}
            index={index}
            commentId={comment?.snippet?.topLevelComment?.id}
          />
          <CommentReplyList index={index} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default CommentsThread;
