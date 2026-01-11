import { Suspense, lazy } from "react";
import AppRouter from "./routing/AppRouter.jsx";
import CartSync from "./components/CartSync.jsx";

const RemoteCartDrawer = lazy(() =>
  import("microCart/CartDrawer").catch(() => ({
    default: () => null,
  }))
);

function App() {
  return (
    <>
      <CartSync />
      <AppRouter />
      <Suspense fallback={null}>
        <RemoteCartDrawer />
      </Suspense>
    </>
  );
}

export default App;
