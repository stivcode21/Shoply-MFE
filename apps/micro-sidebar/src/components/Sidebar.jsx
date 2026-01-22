import {
  ArrowUpDown,
  ChefHat,
  ChevronRight,
  Columns2,
  Footprints,
  Glasses,
  Layers,
  LogOut,
  Shirt,
} from "lucide-react";
import { resolveAuthContract } from "@microfront/contracts/auth";
import { resolveSidebarContract } from "@microfront/contracts/sidebar";
import AuthProvider from "../auth/AuthProvider.jsx";
import { useAuth } from "../auth/useAuth.js";
import SidebarProvider from "../sidebar/SidebarProvider.jsx";
import { useSidebar } from "../sidebar/useSidebar.js";

const categories = [
  { id: "camisas", label: "Camisas", icon: Shirt },
  { id: "pantalones", label: "Pantalones", icon: Columns2 },
  { id: "conjuntos", label: "Conjuntos", icon: Layers },
  { id: "zapatos", label: "Zapatos", icon: Footprints },
  { id: "gorras", label: "Gorras", icon: ChefHat },
  { id: "gafas", label: "Gafas", icon: Glasses },
];

const sortOptions = ["Popularidad", "Nuevos", "Precio alto", "Precio bajo"];

function SidebarContent() {
  const { activeCategory, setActiveCategory } = useSidebar();
  const { session, signOut } = useAuth();
  const isAuthenticated = Boolean(session);

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <aside className="flex min-h-[calc(100vh-7rem)] flex-col gap-6 border border-[#e6e8eb] bg-white px-5 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.08)]">
      <div className="space-y-1">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">
          Navegacion
        </div>
        <div className="text-lg font-semibold text-[#0f172a]">
          Filtros rapidos
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">
          Categorias
        </div>
        <div className="grid gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className={`ux-interactive group flex w-full items-center justify-between rounded-lg border px-3 py-2 text-left text-sm font-semibold transition ${
                  isActive
                    ? "border-[#0f172a] bg-[#0f172a] text-white"
                    : "border-[#eef1f4] bg-white text-[#0f172a]"
                }`}
                type="button"
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {category.label}
                </span>
                {!isActive ? (
                  <ChevronRight className="h-4 w-4 text-[#cbd5f5] transition group-hover:text-[#64748b]" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">
          <ArrowUpDown className="h-4 w-4" />
          Ordenar por
        </div>
        <div className="flex flex-wrap gap-2">
          {sortOptions.map((option) => (
            <button
              key={option}
              className="ux-interactive rounded-full border border-[#e2e8f0] bg-white px-4 py-2 text-xs font-semibold text-[#0f172a]"
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">
          Rango de precio
        </div>
        <div className="grid gap-2">
          <input
            className="rounded-lg border border-[#e2e8f0] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none focus:border-[#0f172a]"
            placeholder="Precio minimo"
          />
          <input
            className="rounded-lg border border-[#e2e8f0] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none focus:border-[#0f172a]"
            placeholder="Precio maximo"
          />
        </div>
      </div>

      {isAuthenticated ? (
        <div className="mt-auto border-t border-[#e6e8eb] pt-4">
          <div className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">
            Sesion activa
          </div>
          <button
            className="ux-interactive w-full mt-4 flex items-center gap-2 rounded-lg border border-[#e2e8f0] bg-white px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#0f172a]"
            type="button"
            onClick={handleSignOut}
          >
            <LogOut className="h-4 w-4" />
            Cerrar sesion
          </button>
        </div>
      ) : null}
    </aside>
  );
}

function Sidebar({ auth, sidebar }) {
  const authValue = resolveAuthContract(auth);
  const sidebarValue = resolveSidebarContract(sidebar);

  return (
    <AuthProvider auth={authValue}>
      <SidebarProvider sidebar={sidebarValue}>
        <SidebarContent />
      </SidebarProvider>
    </AuthProvider>
  );
}

export default Sidebar;
