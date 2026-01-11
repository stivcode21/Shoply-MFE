import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/CartStore.js";
import sidebarReducer from "./sidebar/SidebarStore.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    sidebar: sidebarReducer,
  },
});

export default store;
