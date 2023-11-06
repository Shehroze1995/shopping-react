import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const globalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { showLoading, hideLoading } = globalStateSlice.actions;

export default globalStateSlice.reducer;
