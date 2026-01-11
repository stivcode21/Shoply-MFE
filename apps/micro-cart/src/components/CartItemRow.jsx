import { Trash2 } from "lucide-react";

function CartItemRow({ item, onDecrease, onIncrease, onRemove }) {
  const itemTotal = item.price * item.cartQuantity;

  return (
    <div className="flex items-center gap-4 border-b border-[#e2e8f0] pb-4">
      <div className="h-16 w-16 overflow-hidden rounded-lg bg-[#f8fafc]">
        {item.image ? (
          <img
            src={item.image}
            alt={item.alt || item.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : null}
      </div>
      <div className="flex-1">
        <div className="text-sm font-semibold text-[#0f172a]">{item.name}</div>
        <div className="text-xs text-[#64748b]">{item.subtitle}</div>
        <div className="mt-2 flex items-center gap-2 text-xs text-[#0f172a]">
          <button
            className="ux-interactive rounded-md border border-[#0f172a] px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em]"
            type="button"
            onClick={onDecrease}
          >
            -
          </button>
          <span className="min-w-6 text-center text-sm font-semibold">
            {item.cartQuantity}
          </span>
          <button
            className="ux-interactive rounded-md border border-[#0f172a] px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em]"
            type="button"
            onClick={onIncrease}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className="text-sm font-semibold text-[#0f172a]">
          ${itemTotal.toFixed(2)}
        </span>
        <button
          className="font-semibold uppercase p-2 text-[#ef4444]"
          type="button"
          onClick={onRemove}
        >
          <span className="flex items-center gap-2 ux-interactive">
            <Trash2 className="h-6 w-6" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default CartItemRow;
