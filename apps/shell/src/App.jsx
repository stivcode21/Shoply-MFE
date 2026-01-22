import { Suspense, lazy } from "react";
import AppRouter from "./routing/AppRouter.jsx";
import CartSync from "./components/CartSync.jsx";
import { useCartContract } from "./store/cart/useCartContract.js";

const RemoteCartDrawer = lazy(() =>
  import("microCart/CartDrawer").catch(() => ({
    default: () => null,
  }))
);

function App() {
  const cartAdapter = useCartContract();

  return (
    <>
      <CartSync />
      <AppRouter />
      <Suspense fallback={null}>
        <RemoteCartDrawer cart={cartAdapter} />
      </Suspense>
    </>
  );
}

export default App;
