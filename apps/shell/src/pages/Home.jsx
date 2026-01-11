import { Suspense, lazy, useEffect, useState } from "react";
import { ArrowDownUp, LayoutGrid } from "lucide-react";
import AuthModal from "../components/AuthModal.jsx";
import GlobalLoader from "../components/GlobalLoader.jsx";
import ProductCard from "../components/ProductCard.jsx";
import products from "../data/products.js";
import ErrorBoundary from "../utils/ErrorBoundary.jsx";
import MainLayout from "../templates/MainLayout.jsx";
import Header from "../components/Header.jsx";
import { useAuth } from "../auth/useAuth.js";

const RemoteSidebar = lazy(() =>
  import("microSidebar/Sidebar").catch(() => ({
    default: () => <GlobalLoader label="Cargando sidebar..." />,
  }))
);
const RemoteLogin = lazy(() =>
  import("microLogin/App").catch(() => ({
    default: () => <GlobalLoader label="Cargando login..." />,
  }))
);

function Home() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { session } = useAuth();
  const token = session?.access_token ?? null;

  useEffect(() => {
    if (token) {
      setIsAuthOpen(false);
    }
  }, [token]);

  return (
    <>
      <MainLayout
        header={
          <Header onProfileClick={() => setIsAuthOpen(true)} token={token} />
        }
        sidebar={
          <ErrorBoundary
            fallback={
              <div className="h-130 border border-[#e2e8f0] bg-white/60 px-4 py-6 text-sm text-[#94a3b8] shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                Sidebar no disponible.
              </div>
            }
          >
            <Suspense
              fallback={
                <div className="h-130 border border-[#e2e8f0] bg-white/60 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                  <GlobalLoader label="Cargando sidebar..." />
                </div>
              }
            >
              <RemoteSidebar />
            </Suspense>
          </ErrorBoundary>
        }
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">
                Home / Clothes
              </div>
              <div className="text-lg font-semibold text-[#0f172a]">
                64 results for clothes
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748b]">
              <button className="ux-interactive flex items-center gap-2 border border-[#e6e8eb] bg-white px-3 py-2 font-semibold text-[#0f172a]">
                <LayoutGrid className="h-4 w-4" />
                Grid
              </button>
              <button className="ux-interactive flex items-center gap-2 border border-[#e6e8eb] bg-white px-3 py-2 font-semibold text-[#0f172a]">
                <ArrowDownUp className="h-4 w-4" />
                Ordenar: Popular
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                subtitle={product.subtitle}
                badge={product.badge}
                image={product.image}
                alt={product.alt}
              />
            ))}
          </div>
        </div>
      </MainLayout>

      <AuthModal open={isAuthOpen} onClose={() => setIsAuthOpen(false)}>
        <Suspense fallback={<GlobalLoader label="Cargando login..." />}>
          <RemoteLogin />
        </Suspense>
      </AuthModal>
    </>
  );
}

export default Home;
