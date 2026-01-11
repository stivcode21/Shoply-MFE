import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: "camisas",
};

const SidebarStore = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setActiveCategory } = SidebarStore.actions;

export const selectActiveCategory = (state) => state.sidebar.activeCategory;

export default SidebarStore.reducer;
