import { useEffect } from "react";
import { X } from "lucide-react";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setDecreaseItemQTY,
  setGetTotals,
  setIncreaseItemQTY,
  setRemoveItemFromCart,
} from "shell/CartStore";
import { useAppDispatch, useAppSelector } from "shell/storeHooks";
import CartItemRow from "./CartItemRow.jsx";

function CartDrawer() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectCartState);
  const items = useAppSelector(selectCartItems);
  const totalAmount = useAppSelector(selectTotalAmount);
  const totalQty = useAppSelector(selectTotalQTY);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [dispatch, items]);

  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <button
        className={`absolute inset-0 bg-[#0b1220]/40 backdrop-blur transition ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        type="button"
        aria-label="Cerrar carrito"
        onClick={() => dispatch(setCloseCart())}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-white/20 bg-white/90 px-6 py-6 text-[#0f172a] shadow-[0_20px_60px_rgba(15,23,42,0.28)] backdrop-blur transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">
              Carrito
            </div>
            <div className="text-lg font-semibold">
              {totalQty} producto{totalQty === 1 ? "" : "s"}
            </div>
          </div>
          <button
            className="ux-interactive rounded-lg border border-[#0f172a] px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em]"
            type="button"
            onClick={() => dispatch(setCloseCart())}
          >
            <span className="flex items-center gap-2">
              <X className="h-4 w-4" />
            </span>
          </button>
        </div>

        <div className="mt-6 flex-1 space-y-4 overflow-y-auto pr-1">
          {items.length === 0 ? (
            <div className="rounded-xl border border-dashed border-[#cbd5f5] bg-white px-4 py-6 text-sm text-[#64748b]">
              Tu carrito esta vacio. Agrega productos para verlos aqui.
            </div>
          ) : (
            items.map((item) => (
              <CartItemRow
                key={item.id}
                item={item}
                onDecrease={() => dispatch(setDecreaseItemQTY(item))}
                onIncrease={() => dispatch(setIncreaseItemQTY(item))}
                onRemove={() => dispatch(setRemoveItemFromCart(item))}
              />
            ))
          )}
        </div>

        <div className="mt-6 border-t border-[#e2e8f0] pt-4">
          <div className="flex items-center justify-between text-sm font-semibold">
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button
              className="ux-interactive flex-1 rounded-lg border border-[#0f172a] px-4 py-3 text-xs font-semibold uppercase tracking-[0.25em]"
              type="button"
              onClick={() => dispatch(setClearCartItems())}
              disabled={items.length === 0}
            >
              Vaciar
            </button>
            <button
              className="ux-interactive flex-1 rounded-lg bg-[#0f172a] px-4 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white"
              type="button"
              disabled={items.length === 0}
            >
              Finalizar
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default CartDrawer;
