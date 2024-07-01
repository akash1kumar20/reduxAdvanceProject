import { createSlice, configureStore } from "@reduxjs/toolkit";

const reducerinitalState = {
  cartVisibilty: false,
  items: [],
  totalQuantity: 0,
};
const productSlice = createSlice({
  name: "ReduxSlice",
  initialState: reducerinitalState,
  reducers: {
    toggleVisibilty(state) {
      state.cartVisibilty = !state.cartVisibilty;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;

      const existItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existItem.quantity++;
        existItem.totalPrice = existItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existItem.quantity--;
        existItem.totalPrice = existItem.totalPrice - existItem.price;
      }
    },
  },
});
const store = configureStore({
  reducer: {
    reduxReducer: productSlice.reducer,
  },
});
export const productSliceActions = productSlice.actions;
export default store;
