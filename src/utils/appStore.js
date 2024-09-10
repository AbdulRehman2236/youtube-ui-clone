import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebarSlice";

const appStore = configureStore({
  reducer: {
    sidebar: sidebarSlice,
  },
});

export default appStore;
