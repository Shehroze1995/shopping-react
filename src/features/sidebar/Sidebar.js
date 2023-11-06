import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    closeSidebar: (state) => {
      state.isSideBarOpen = false;
    },
  },
});

export const { toggleSidebar, closeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
