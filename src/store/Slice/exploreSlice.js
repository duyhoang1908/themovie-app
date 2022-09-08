import { createSlice } from "@reduxjs/toolkit";

export const exploreSlice = createSlice({
  name: "explore",
  initialState: { list: [] },

  reducers: {
    setList: (state, action) => {
      state.list = [...state.list, ...action.payload];
    },
  },
});
