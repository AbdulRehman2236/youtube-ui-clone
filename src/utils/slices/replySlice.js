import { createSlice } from "@reduxjs/toolkit";

const replySlice = createSlice({
  name: "reply",
  initialState: {
    isShowReply: false,
    commentsList: [],
    commentRepliesList: [],
    currentComment: 0,
  },
  reducers: {
    setCommentsList: (state, action) => {
      state.commentsList = action.payload;
    },
    setCommentRepliesList: (state, action) => {
      state.commentRepliesList = action.payload;
    },
    showReplies: (state, action) => {
      state.isShowReply = action.payload;
    },
    setCurrentComment: (state, action) => {
      state.currentComment = action.payload;
    },
  },
});

export const { setCommentsList, setCommentRepliesList, showReplies, setCurrentComment } = replySlice.actions;
export default replySlice.reducer;
