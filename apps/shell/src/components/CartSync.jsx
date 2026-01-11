import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks.js";
import { selectCartItems, setGetTotals } from "../store/cart/CartStore.js";

function CartSync() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [dispatch, items]);

  return null;
}

export default CartSync;
