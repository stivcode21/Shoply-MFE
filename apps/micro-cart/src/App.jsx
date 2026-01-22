import { resolveCartContract } from "@microfront/contracts/cart";
import CartDrawer from "./components/CartDrawer.jsx";

function App({ cart }) {
  const cartValue = resolveCartContract(cart);

  return (
    <div className="min-h-screen bg-[#f7f5f1] px-6 py-10 text-[#111827]">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-4">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">
          Micro Cart
        </div>
        <h1 className="text-3xl font-semibold">Panel de carrito</h1>
        <p className="text-sm text-[#64748b]">
          Este layout es solo para desarrollo. El shell controla el modal real.
        </p>
        <button
          className="ux-interactive rounded-full border border-[#111827]/20 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#111827] shadow-[0_10px_24px_rgba(15,23,42,0.12)] transition hover:-translate-y-0.5"
          type="button"
          onClick={cartValue.openCart}
        >
          Abrir carrito
        </button>
      </div>
      <CartDrawer cart={cartValue} />
    </div>
  );
}

export default App;
