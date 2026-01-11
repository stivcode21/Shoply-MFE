import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/CartStore.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
