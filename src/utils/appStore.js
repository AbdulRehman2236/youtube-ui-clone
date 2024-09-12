import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebarSlice";
import videosSlice from "./slices/videosSlice";

const appStore = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    videos: videosSlice,
  },
});

export default appStore;
