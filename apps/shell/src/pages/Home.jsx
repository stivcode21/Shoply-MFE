import { Suspense, lazy, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../../libs/auth-store.js";
import AuthModal from "../components/AuthModal.jsx";
import heroImage from "../assets/auralis-hero.svg";
import shoplyLogo from "../assets/shoply-logo.svg";

const RemoteLogin = lazy(() => import("microLogin/App"));

function Home() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setIsAuthOpen(false);
      navigate("/ecommerce");
    }
  }, [token, navigate]);

  const handleLoginClick = () => {
    setIsAuthOpen(true);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-[#f5f7fb] text-[#111827]">
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute -top-36 -right-24 h-105 w-105 rounded-full bg-[radial-gradient(circle_at_30%_30%,#c7d8ff,#6ecff4_55%,#a7b6ff_80%)] blur-[6px] opacity-70" />
        <span className="absolute -bottom-32 -left-20 h-80 w-[320px] rounded-full bg-[radial-gradient(circle_at_20%_20%,#bff3f2,#60c3ff_55%,#9bd7ff_80%)] blur-[2px] opacity-75" />
        <span className="absolute inset-0 bg-[linear-gradient(transparent_94%,rgba(255,255,255,0.45)),linear-gradient(90deg,transparent_94%,rgba(255,255,255,0.35))] bg-[length:56px_56px] opacity-30" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col gap-10 px-6 py-8 md:px-12 lg:px-16">
        <header className="flex flex-wrap items-center justify-between gap-4 animate-rise">
          <div className="flex items-center gap-3">
            <img
              src={shoplyLogo}
              alt="Logo de Shoply"
              className="h-11 w-11"
              loading="lazy"
            />
            <div>
              <div className="text-lg font-semibold">Shoply</div>
              <div className="text-sm text-[#4b5563]">Ecommerce modular</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full border border-[#111827] px-4 py-2 text-sm font-medium text-[#111827]">
              Ayuda
            </button>
          </div>
        </header>

        <main className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
          <section className="flex flex-col gap-6 lg:max-w-155 animate-rise-delayed">
            <div className="w-fit rounded-full bg-[#e0f2fe] px-4 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#0f172a]">
              Ecommerce de nueva generacion
            </div>
            <h1 className="text-[clamp(2.4rem,3.5vw,3.6rem)] leading-[1.05] tracking-tight">
              Productos curados, checkout express y stock en tiempo real.
            </h1>
            <p className="text-base text-[#4b5563]">
              Disenado para crecer: el login vive en un microfrontend y se carga
              solo cuando el usuario lo necesita.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="rounded-[14px] bg-[#111827] px-6 py-3 text-sm font-semibold text-[#f8fafc] shadow-[0_12px_22px_rgba(17,24,39,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(17,24,39,0.24)]"
                onClick={handleLoginClick}
              >
                Entrar a mi cuenta
              </button>
              <button className="rounded-[14px] border border-[#111827] px-6 py-3 text-sm font-semibold text-[#111827]">
                Ver catalogo
              </button>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              <div>
                <span className="block text-xl font-semibold">2.4k</span>
                <span className="text-xs text-[#6b7280]">
                  productos activos
                </span>
              </div>
              <div>
                <span className="block text-xl font-semibold">98%</span>
                <span className="text-xs text-[#6b7280]">
                  entregas a tiempo
                </span>
              </div>
              <div>
                <span className="block text-xl font-semibold">15k</span>
                <span className="text-xs text-[#6b7280]">clientes felices</span>
              </div>
            </div>
          </section>
          <aside className="flex h-full flex-col justify-center">
            <div className="h-140 overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-white/80 shadow-[0_18px_40px_rgba(37,99,235,0.12)] backdrop-blur">
              <img
                src={heroImage}
                alt="Vista previa del ecommerce"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </aside>
        </main>
      </div>

      <AuthModal open={isAuthOpen} onClose={() => setIsAuthOpen(false)}>
        <Suspense
          fallback={
            <div className="flex min-h-45 items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#111827] animate-bounce" />
              <span className="h-2 w-2 rounded-full bg-[#111827] animate-bounce [animation-delay:150ms]" />
              <span className="h-2 w-2 rounded-full bg-[#111827] animate-bounce [animation-delay:300ms]" />
            </div>
          }
        >
          <RemoteLogin />
        </Suspense>
      </AuthModal>
    </div>
  );
}

export default Home;
