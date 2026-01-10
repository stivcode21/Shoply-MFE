import shoplyLogo from "./assets/shoply-logo.svg";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#111827]">
      <div className="mx-auto flex h-screen max-w-6xl flex-col gap-6 px-6 py-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={shoplyLogo}
              alt="Logo de Shoply"
              className="h-10 w-10"
              loading="lazy"
            />
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2563eb]">
                Shoply
              </div>
              <h1 className="mt-2 text-3xl">Panel principal del ecommerce</h1>
              <p className="mt-1 text-sm text-[#4b5563]">
                Control total de ventas, pedidos y experiencias en tiempo real.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-full border border-[#111827] px-4 py-2 text-xs font-semibold">
              Descargar reporte
            </button>
            <button className="rounded-full bg-[#111827] px-4 py-2 text-xs font-semibold text-[#f8fafc]">
              Crear campana
            </button>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-[#e2e8f0] bg-white/80 p-6 shadow-[0_18px_40px_rgba(37,99,235,0.12)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                  Resumen de la semana
                </p>
                <h2 className="mt-2 text-2xl font-semibold">$48,920</h2>
                <p className="text-sm text-[#4b5563]">Ventas netas</p>
              </div>
              <span className="rounded-full bg-[#e0f2fe] px-3 py-1 text-xs font-semibold text-[#0f172a]">
                +14.2%
              </span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#e2e8f0] bg-white/70 p-4">
                <p className="text-xs text-[#6b7280]">Pedidos hoy</p>
                <p className="mt-2 text-lg font-semibold">348</p>
              </div>
              <div className="rounded-2xl border border-[#e2e8f0] bg-white/70 p-4">
                <p className="text-xs text-[#6b7280]">Ticket medio</p>
                <p className="mt-2 text-lg font-semibold">$64</p>
              </div>
              <div className="rounded-2xl border border-[#e2e8f0] bg-white/70 p-4">
                <p className="text-xs text-[#6b7280]">Conversion</p>
                <p className="mt-2 text-lg font-semibold">3.8%</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-[#e2e8f0] bg-linear-to-br from-[#e0f2fe] to-[#eef2ff] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0f172a]">
                Insight
              </p>
              <p className="mt-2 text-sm text-[#1e293b]">
                Los bundles de verano superan en un 28% el promedio del
                catalogo.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-[#e2e8f0] bg-white/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                Operaciones
              </p>
              <div className="mt-3 space-y-3 text-sm text-[#4b5563]">
                <div className="flex items-center justify-between">
                  <span>Envios express</span>
                  <span className="text-[#111827]">82%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Ordenes automatizadas</span>
                  <span className="text-[#111827]">64%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Clientes recurrentes</span>
                  <span className="text-[#111827]">51%</span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-[#e2e8f0] bg-[#111827] p-5 text-[#f8fafc]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#38bdf8]">
                Proxima accion
              </p>
              <h3 className="mt-3 text-lg font-semibold">
                Lanza la nueva coleccion
              </h3>
              <p className="mt-2 text-sm text-[#cbd5f5]">
                Configura descuentos por early access y activa notificaciones.
              </p>
              <button className="mt-4 rounded-full bg-[#f8fafc] px-4 py-2 text-xs font-semibold text-[#111827]">
                Programar lanzamiento
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-[1fr_1fr_1fr]">
          {[
            {
              title: "Drop Lunar",
              price: "$240",
              subtitle: "Inventario critico",
            },
            {
              title: "Aurora Kit",
              price: "$180",
              subtitle: "Rotacion alta",
            },
            {
              title: "Nectar Pack",
              price: "$95",
              subtitle: "Nuevo lanzamiento",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-3xl border border-[#e2e8f0] bg-white/80 p-5 shadow-[0_16px_32px_rgba(15,23,42,0.08)]"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                  Trending
                </p>
                <h4 className="mt-2 text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-[#4b5563]">{item.subtitle}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-semibold">{item.price}</span>
                <button className="rounded-full border border-[#111827] px-3 py-1 text-xs font-semibold">
                  Ver detalle
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
