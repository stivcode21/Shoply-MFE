import { Info, X } from "lucide-react";
import { useEffect } from "react";

function AuthModal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return undefined;

    const handleKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1220]/60 px-4 py-8 backdrop-blur"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute left-4 right-4 top-4 z-10 flex items-start gap-3 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm text-[#1e3a8a] shadow-[0_16px_36px_rgba(15,23,42,0.18)] backdrop-blur sm:left-10 sm:right-auto sm:top-10 sm:max-w-md">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1d4ed8] text-white shadow-[0_8px_18px_rgba(29,78,216,0.35)]">
          <Info className="h-4 w-4" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#1d4ed8]">
            Demo access
          </div>
          <div className="text-sm text-[#0f172a]">
            Inicia sesion para probar la demo.
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#1d4ed8]">
            <span className="rounded-full bg-white px-2 py-1 font-semibold shadow-[0_6px_14px_rgba(30,64,175,0.12)]">
              Email: test@gmail.com
            </span>
            <span className="rounded-full bg-white px-2 py-1 font-semibold shadow-[0_6px_14px_rgba(30,64,175,0.12)]">
              Clave: 12345678
            </span>
          </div>
        </div>
      </div>
      <button
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        aria-label="Cerrar modal"
      />
      <div className="relative z-10 w-full max-w-xl border border-white/30 rounded-xl bg-linear-to-br from-white to-[#eef2ff] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.35)] backdrop-blur">
        <div className="flex items-start justify-between gap-4">
          <button
            className="border border-[#38404f] rounded-lg px-2 py-2 text-xs font-semibold text-[#111827]"
            type="button"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}

export default AuthModal;
