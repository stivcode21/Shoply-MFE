function GlobalLoader({ label = "Cargando...", className = "" }) {
  return (
    <div
      className={`flex min-h-45 flex-col items-center justify-center gap-3 text-[#0f172a] ${className}`}
    >
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-[#0f172a] border-t-transparent" />
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#64748b]">
        {label}
      </span>
    </div>
  );
}

export default GlobalLoader;
