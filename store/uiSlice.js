import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartVisibilty: false },
  reducers: {
    toggleVisibilty(state) {
      state.cartVisibilty = !state.cartVisibilty;
    },
  },
});
export const uiSliceActions = uiSlice.actions;
export default uiSlice;
