import { X } from "lucide-react";
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
