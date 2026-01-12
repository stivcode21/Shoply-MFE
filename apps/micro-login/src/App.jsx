import SignInForm from "./components/SignInForm.jsx";

function App() {
  return (
    <div className="w-full rounded-2xl bg-linear-to-br from-white to-[#eef2ff] p-6 text-[#111827] animate-fade">
      <div className="inline-flex w-fit rounded-lg bg-[#111827] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[#f8fafc]">
        Sign in
      </div>
      <h2 className="mt-3 text-2xl">
        Ingresa a tu cuenta
      </h2>
      <p className="text-sm text-[#4b5563]">
        Gestiona tu perfil y tus compras desde cualquier dispositivo.
      </p>
      <SignInForm />
      <div className="mt-8 flex items-center justify-center text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">
        Registro temporalmente deshabilitado
      </div>
    </div>
  );
}

export default App;
