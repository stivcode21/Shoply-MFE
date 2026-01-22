import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../hooks.js";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setAddItemToCart,
  setClearCartItems,
  setCloseCart,
  setDecreaseItemQTY,
  setGetTotals,
  setIncreaseItemQTY,
  setOpenCart,
  setRemoveItemFromCart,
} from "./CartStore.js";

export const useCartContract = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectCartState);
  const items = useAppSelector(selectCartItems);
  const totalAmount = useAppSelector(selectTotalAmount);
  const totalQty = useAppSelector(selectTotalQTY);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [dispatch, items]);

  return useMemo(
    () => ({
      isOpen,
      items,
      totalAmount,
      totalQty,
      openCart: () => dispatch(setOpenCart()),
      closeCart: () => dispatch(setCloseCart()),
      clearCart: () => dispatch(setClearCartItems()),
      addItem: (item) => dispatch(setAddItemToCart(item)),
      increaseItem: (item) => dispatch(setIncreaseItemQTY(item)),
      decreaseItem: (item) => dispatch(setDecreaseItemQTY(item)),
      removeItem: (item) => dispatch(setRemoveItemFromCart(item)),
    }),
    [dispatch, isOpen, items, totalAmount, totalQty]
  );
};
