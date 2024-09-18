import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebarSlice";
import videosSlice from "./slices/videosSlice";
import replySlice from "./slices/replySlice";
import searchSlice from "./slices/searchSlice";

const appStore = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    videos: videosSlice,
    reply: replySlice,
    search: searchSlice,
  },
});

export default appStore;
