import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isSidebarOpen: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeMenu: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { toggleSidebar, closeMenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;
