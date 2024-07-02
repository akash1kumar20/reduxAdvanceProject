import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./cartSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: {
    cart: productSlice.reducer,
    ui: uiSlice.reducer,
  },
});
export default store;
