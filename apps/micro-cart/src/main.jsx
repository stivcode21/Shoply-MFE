import { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { createCartMock } from "@microfront/contracts/cart";
import "./index.css";
import App from "./App.jsx";

const normalizePrice = (price) => {
  if (typeof price === "number") return price;
  const parsed = Number(String(price ?? "").replace(/[^0-9.]/g, ""));
  return Number.isNaN(parsed) ? 0 : parsed;
};

function StandaloneRoot() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  const totals = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        const price = normalizePrice(item.price);
        acc.totalAmount += price * item.cartQuantity;
        acc.totalQty += item.cartQuantity;
        return acc;
      },
      { totalAmount: 0, totalQty: 0 }
    );
  }, [items]);

  const cart = useMemo(
    () =>
      createCartMock({
        isOpen,
        items,
        totalAmount: totals.totalAmount,
        totalQty: totals.totalQty,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        clearCart: () => setItems([]),
        addItem: (item) =>
          setItems((prev) => {
            const index = prev.findIndex((entry) => entry.id === item.id);
            if (index >= 0) {
              const next = [...prev];
              next[index] = {
                ...next[index],
                cartQuantity: next[index].cartQuantity + 1,
              };
              return next;
            }
            return [
              ...prev,
              {
                ...item,
                price: normalizePrice(item.price),
                cartQuantity: 1,
              },
            ];
          }),
        increaseItem: (item) =>
          setItems((prev) => {
            const index = prev.findIndex((entry) => entry.id === item.id);
            if (index < 0) return prev;
            const next = [...prev];
            next[index] = {
              ...next[index],
              cartQuantity: next[index].cartQuantity + 1,
            };
            return next;
          }),
        decreaseItem: (item) =>
          setItems((prev) => {
            const index = prev.findIndex((entry) => entry.id === item.id);
            if (index < 0) return prev;
            const current = prev[index];
            if (current.cartQuantity <= 1) return prev;
            const next = [...prev];
            next[index] = {
              ...current,
              cartQuantity: current.cartQuantity - 1,
            };
            return next;
          }),
        removeItem: (item) =>
          setItems((prev) => prev.filter((entry) => entry.id !== item.id)),
      }),
    [isOpen, items, totals.totalAmount, totals.totalQty]
  );

  return <App cart={cart} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StandaloneRoot />
  </StrictMode>
);
