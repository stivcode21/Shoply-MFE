import { createSlice } from "@reduxjs/toolkit";

const storageKey = "cart";

const readStorage = () => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(storageKey);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const writeStorage = (items) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(items));
  } catch {
    // Ignore storage failures (private mode, quota).
  }
};

const toNumberPrice = (price) => {
  if (typeof price === "number") return price;
  const parsed = Number(String(price).replace(/[^0-9.]/g, ""));
  return Number.isNaN(parsed) ? 0 : parsed;
};

const initialState = {
  cartState: false,
  cartItems: readStorage(),
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

const CartStore = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    setOpenCart: (state) => {
      state.cartState = true;
    },
    setCloseCart: (state) => {
      state.cartState = false;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const itemQuantity = {
          ...action.payload,
          price: toNumberPrice(action.payload.price),
          cartQuantity: 1,
        };
        state.cartItems.push(itemQuantity);
      }

      writeStorage(state.cartItems);
    },
    setRemoveItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      writeStorage(state.cartItems);
    },
    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      }

      writeStorage(state.cartItems);
    },
    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0 && state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }

      writeStorage(state.cartItems);
    },
    setClearCartItems: (state) => {
      state.cartItems = [];
      writeStorage(state.cartItems);
    },
    setGetTotals: (state) => {
      const { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const itemPrice = toNumberPrice(cartItem.price);
          const totalPrice = itemPrice * cartItem.cartQuantity;
          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += cartItem.cartQuantity;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQTY;
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
  setGetTotals,
} = CartStore.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQuantity;

export default CartStore.reducer;
