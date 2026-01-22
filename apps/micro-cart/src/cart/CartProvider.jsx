import { createContext, useMemo } from "react";

const CartContext = createContext(null);

function CartProvider({ cart, children }) {
  const value = useMemo(() => cart, [cart]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext };
export default CartProvider;
