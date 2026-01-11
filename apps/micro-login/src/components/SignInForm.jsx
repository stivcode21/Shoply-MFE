import { useState } from "react";
import { useAuth } from "shell/useAuth";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signInWithPassword } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();

    setIsSubmitting(true);
    const { error: signInError } = await signInWithPassword({
      email: normalizedEmail,
      password: normalizedPassword,
    });
    setIsSubmitting(false);

    if (signInError) {
      setError(signInError.message || "Credenciales invalidas.");
      return;
    }

    setError("");
    setPassword("");
  };

  return (
    <div className="mt-4">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#64748b]">
          Correo electronico
          <input
            className="rounded-lg border border-[#e6e8eb] bg-white px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
            type="email"
            autoComplete="email"
            placeholder="tucorreo@ejemplo.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label className="flex flex-col gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#64748b]">
          Contrasena
          <input
            className="rounded-lg border border-[#e6e8eb] bg-white px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
            type="password"
            autoComplete="current-password"
            placeholder="Tu clave"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <button
          className="rounded-lg bg-[#111827] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_18px_rgba(17,24,39,0.18)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          type="submit"
          disabled={isSubmitting}
        >
          Entrar
        </button>
      </form>

      {error ? (
        <div className="mt-4 rounded-lg border border-[#fecaca] bg-[#fee2e2] px-3 py-2 text-sm text-[#b91c1c]">
          {error}
        </div>
      ) : null}

      {/* <div className="mt-4 flex flex-col gap-2 text-xs text-[#4b5563]">
        <button
          className="text-left text-xs font-semibold text-[#111827]"
          type="button"
        >
          Olvide mi contrasena
        </button>
      </div> */}
    </div>
  );
}

export default SignInForm;
