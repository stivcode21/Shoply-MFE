import { Suspense, lazy, useEffect, useState } from "react";
import { ArrowDownUp, LayoutGrid } from "lucide-react";
import AuthModal from "../components/AuthModal.jsx";
import GlobalLoader from "../components/GlobalLoader.jsx";
import ErrorBoundary from "../utils/ErrorBoundary.jsx";
import MainLayout from "../templates/MainLayout.jsx";
import Header from "../components/Header.jsx";
import { useAuth } from "../auth/useAuth.js";
import { useAuthContract } from "../auth/useAuthContract.js";
import CategorySection from "../templates/CategorySection.jsx";
import { useSidebarContract } from "../store/sidebar/useSidebarContract.js";

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
  const authAdapter = useAuthContract();
  const sidebarAdapter = useSidebarContract();
  const { activeCategory } = sidebarAdapter;

  useEffect(() => {
    if (session) {
      setIsAuthOpen(false);
    }
  }, [session]);

  return (
    <>
      <MainLayout
        header={<Header onLoginClick={() => setIsAuthOpen(true)} />}
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
              <RemoteSidebar auth={authAdapter} sidebar={sidebarAdapter} />
            </Suspense>
          </ErrorBoundary>
        }
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">
                Home / {activeCategory}
              </div>
              <div className="text-lg font-semibold text-[#0f172a]">
                {activeCategory} destacados
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

          <CategorySection />
        </div>
      </MainLayout>

      <AuthModal open={isAuthOpen} onClose={() => setIsAuthOpen(false)}>
        <Suspense fallback={<GlobalLoader label="Cargando login..." />}>
          <RemoteLogin auth={authAdapter} />
        </Suspense>
      </AuthModal>
    </>
  );
}

export default Home;
