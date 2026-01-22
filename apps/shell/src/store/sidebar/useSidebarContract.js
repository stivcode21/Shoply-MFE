import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../hooks.js";
import {
  selectActiveCategory,
  setActiveCategory,
} from "./SidebarStore.js";

export const useSidebarContract = () => {
  const dispatch = useAppDispatch();
  const activeCategory = useAppSelector(selectActiveCategory);

  return useMemo(
    () => ({
      activeCategory,
      setActiveCategory: (category) => dispatch(setActiveCategory(category)),
    }),
    [activeCategory, dispatch]
  );
};
