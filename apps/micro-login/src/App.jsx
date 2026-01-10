import { useState } from "react";
import { useAuthStore } from "../../../libs/auth-store.js";
import users from "../../../libs/mock-users.json";

const base64UrlEncode = (value) =>
  btoa(value).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

const createMockToken = (user) => {
  const header = { alg: "HS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    sub: String(user.id),
    name: user.name,
    role: user.role,
    iat: now,
    exp: now + 60 * 60,
  };

  return [
    base64UrlEncode(JSON.stringify(header)),
    base64UrlEncode(JSON.stringify(payload)),
    "mock",
  ].join(".");
};

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setToken = useAuthStore((state) => state.setToken);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();

    const match = users.find(
      (item) =>
        item.email.toLowerCase() === normalizedEmail &&
        item.password === normalizedPassword
    );

    if (!match) {
      setError("Credenciales invalidas.");
      return;
    }

    const tokenValue = createMockToken(match);
    setToken(tokenValue);
    setError("");
    setPassword("");
  };

  return (
    <div className="w-full rounded-2xl border border-[#e2e8f0] bg-linear-to-br from-white to-[#eef2ff] p-6 text-[#111827] shadow-[0_16px_30px_rgba(37,99,235,0.12)] animate-fade">
      <div className="inline-flex w-fit rounded-full bg-[#111827] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#f8fafc]">
        Acceso seguro
      </div>
      <h2 className="mt-3 text-2xl">Ingresa a tu cuenta</h2>
      <p className="text-sm text-[#4b5563]">
        Gestiona tu perfil y tus compras desde cualquier dispositivo.
      </p>

      <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.08em] text-[#4b5563]">
          Correo electronico
          <input
            className="rounded-xl border border-[#dbe3f1] bg-white/70 px-4 py-3 text-sm font-normal uppercase tracking-normal text-[#111827] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
            type="email"
            autoComplete="email"
            placeholder="tucorreo@ejemplo.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.08em] text-[#4b5563]">
          Contrasena
          <input
            className="rounded-xl border border-[#dbe3f1] bg-white/70 px-4 py-3 text-sm font-normal uppercase tracking-normal text-[#111827] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
            type="password"
            autoComplete="current-password"
            placeholder="Tu clave"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <button
          className="rounded-xl bg-[#111827] px-4 py-3 text-sm font-semibold text-[#f8fafc] shadow-[0_10px_18px_rgba(17,24,39,0.2)] transition hover:-translate-y-0.5"
          type="submit"
        >
          Entrar
        </button>
        <button
          className="rounded-xl border border-[#111827] px-4 py-3 text-sm font-semibold text-[#111827]"
          type="button"
        >
          Crear cuenta
        </button>
      </form>

      {error ? (
        <div className="mt-4 rounded-xl border border-[#fecaca] bg-[#fee2e2] px-3 py-2 text-sm text-[#b91c1c]">
          {error}
        </div>
      ) : null}

      <div className="mt-4 flex flex-col gap-2 text-xs text-[#4b5563]">
        <span>Acceso rapido con QR desde la app movil.</span>
        <button
          className="text-left text-xs font-semibold text-[#111827]"
          type="button"
        >
          Olvide mi contrasena
        </button>
      </div>
    </div>
  );
}

export default App;
