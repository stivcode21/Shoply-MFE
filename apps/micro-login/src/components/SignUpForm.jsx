import { useState } from "react";
import { useAuth } from "shell/useAuth";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signUp } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();
    const normalizedConfirm = confirmPassword.trim();

    if (normalizedPassword !== normalizedConfirm) {
      setError("Las contrasenas no coinciden.");
      return;
    }

    setIsSubmitting(true);
    const { error: signUpError } = await signUp({
      email: normalizedEmail,
      password: normalizedPassword,
    });
    setIsSubmitting(false);

    if (signUpError) {
      setError(signUpError.message || "No se pudo crear la cuenta.");
      return;
    }

    setError("");
    setPassword("");
    setConfirmPassword("");
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
            autoComplete="new-password"
            placeholder="Tu clave"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <label className="flex flex-col gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#64748b]">
          Confirmar contrasena
          <input
            className="rounded-lg border border-[#e6e8eb] bg-white px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
            type="password"
            autoComplete="new-password"
            placeholder="Repite tu clave"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </label>

        <button
          className="rounded-lg bg-[#111827] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_18px_rgba(17,24,39,0.18)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          type="submit"
          disabled={isSubmitting}
        >
          Crear cuenta
        </button>
      </form>

      {error ? (
        <div className="mt-4 rounded-lg border border-[#fecaca] bg-[#fee2e2] px-3 py-2 text-sm text-[#b91c1c]">
          {error}
        </div>
      ) : null}
    </div>
  );
}

export default SignUpForm;
