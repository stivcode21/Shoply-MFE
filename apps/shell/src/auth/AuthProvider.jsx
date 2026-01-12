import { createContext, useEffect, useMemo, useState } from "react";
import { supabase } from "./supabaseClient.js";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!isMounted) return;
      const nextSession = data?.session ?? null;
      const nextUser = nextSession?.user ?? null;
      setSession(nextSession);
      setUser(nextUser);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, nextSession) => {
        const nextUser = nextSession?.user ?? null;
        setSession(nextSession);
        setUser(nextUser);
        setLoading(false);
      }
    );

    return () => {
      isMounted = false;
      listener?.subscription?.unsubscribe();
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    if (!user?.id) {
      setProfile(null);
      return () => {
        isMounted = false;
      };
    }

    supabase
      .from("profiles")
      .select("full_name, avatar_url")
      .eq("id", user.id)
      .maybeSingle()
      .then(({ data, error }) => {
        if (!isMounted) return;
        if (error) {
          setProfile(null);
          return;
        }
        setProfile(data ?? null);
      });

    return () => {
      isMounted = false;
    };
  }, [user?.id]);

  const signInWithPassword = async ({ email, password }) => {
    const normalizedEmail = email?.trim().toLowerCase();
    const normalizedPassword = password ?? "";

    if (!normalizedEmail || !normalizedPassword) {
      return { error: new Error("Credenciales invalidas.") };
    }

    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: normalizedEmail,
      password: normalizedPassword,
    });
    if (error) {
      setLoading(false);
      return { error };
    }
    setLoading(false);
    return { data, error: null };
  };

  const signOut = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    setLoading(false);
    return { error };
  };

  const userName = useMemo(() => {
    if (profile?.full_name) return profile.full_name;
    if (user?.user_metadata?.full_name) return user.user_metadata.full_name;
    return user?.email ?? null;
  }, [profile?.full_name, user?.email, user?.user_metadata?.full_name]);

  const avatarUrl = useMemo(() => {
    return (
      profile?.avatar_url ??
      user?.user_metadata?.avatar_url ??
      null
    );
  }, [profile?.avatar_url, user?.user_metadata?.avatar_url]);

  const value = useMemo(
    () => ({
      session,
      user,
      userName,
      avatarUrl,
      loading,
      signInWithPassword,
      signOut,
    }),
    [session, user, userName, avatarUrl, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext };
export default AuthProvider;
