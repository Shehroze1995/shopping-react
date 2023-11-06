import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchbarOpen: false,
};

const searchbarSlice = createSlice({
  name: "searchbar",
  initialState,
  reducers: {
    toggleSearchbar: (state) => {
      state.isSearchbarOpen = !state.isSearchbarOpen;
    },
    closeSearchbar: (state) => {
      state.isSearchbarOpen = false;
    },
  },
});

export const { toggleSearchbar, closeSearchbar } = searchbarSlice.actions;

export default searchbarSlice.reducer;
