import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videosList: [],
  },
  reducers: {
    setVideosList: (state, actions) => {
      state.videosList = actions.payload;
    },
  },
});

export const { setVideosList } = videosSlice.actions;
export default videosSlice.reducer;
