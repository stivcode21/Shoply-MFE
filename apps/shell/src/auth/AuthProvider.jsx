import { createContext, useEffect, useMemo, useState } from "react";
import { supabase } from "./supabaseClient.js";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    // Al iniciar, preguntamos a Supabase si ya existe una sesion activa.
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      const nextSession = data?.session ?? null;
      setSession(nextSession);
      setUser(nextSession?.user ?? null);
      setLoading(false);
      console.log(
        "[auth] sesion inicial",
        nextSession ? "activa" : "no hay sesion",
        nextSession?.access_token ? "(con token)" : "(sin token)"
      );
    });

    // Nos suscribimos para mantener el estado sincronizado con login/logout.
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, nextSession) => {
        setSession(nextSession);
        setUser(nextSession?.user ?? null);
        setLoading(false);
        console.log(
          "[auth] cambio de sesion",
          nextSession ? "activa" : "no hay sesion",
          nextSession?.access_token ? "(con token)" : "(sin token)"
        );
      }
    );

    return () => {
      mounted = false;
      listener?.subscription?.unsubscribe();
    };
  }, []);

  const value = useMemo(
    () => ({
      session,
      user,
      loading,
      // Wrappers para que los consumidores no importen el cliente directo.
      signInWithPassword: (credentials) =>
        supabase.auth.signInWithPassword(credentials),
      signUp: (credentials) => supabase.auth.signUp(credentials),
      signOut: () => supabase.auth.signOut(),
      supabase,
    }),
    [session, user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext };
export default AuthProvider;
