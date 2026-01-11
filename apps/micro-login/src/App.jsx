import { useState } from "react";
import SignInForm from "./components/SignInForm.jsx";
import SignUpForm from "./components/SignUpForm.jsx";

function App() {
  const [mode, setMode] = useState("signin");

  return (
    <div className="w-full rounded-2xl bg-linear-to-br from-white to-[#eef2ff] p-6 text-[#111827] animate-fade">
      <div className="inline-flex w-fit rounded-lg bg-[#111827] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[#f8fafc]">
        {mode === "signin" ? "Sign in" : "Sign up"}
      </div>
      <h2 className="mt-3 text-2xl">
        {mode === "signin" ? "Ingresa a tu cuenta" : "Crea tu cuenta"}
      </h2>
      <p className="text-sm text-[#4b5563]">
        Gestiona tu perfil y tus compras desde cualquier dispositivo.
      </p>
      {mode === "signin" ? <SignInForm /> : <SignUpForm />}
      <div className="mt-8 flex items-center justify-center text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">
        {mode === "signin" ? (
          <button
            className="inline-flex items-center gap-2 rounded-lg border border-[#111827]/10 bg-white/70 px-4 py-2 text-[#111827] transition hover:-translate-y-0.5"
            type="button"
            onClick={() => setMode("signup")}
          >
            Crear cuenta
          </button>
        ) : (
          <button
            className="inline-flex items-center gap-2 rounded-full border border-[#111827]/10 bg-white/70 px-4 py-2 text-[#111827] transition hover:-translate-y-0.5"
            type="button"
            onClick={() => setMode("signin")}
          >
            Ya tienes cuenta
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
