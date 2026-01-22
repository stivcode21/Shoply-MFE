import { useMemo } from "react";
import { useAuth } from "./useAuth.js";

const toAuthResult = (result) => ({ error: result?.error ?? null });

export const useAuthContract = () => {
  const { session, userName, loading, signInWithPassword, signOut } = useAuth();

  return useMemo(
    () => ({
      session,
      userName,
      loading,
      signIn: async (payload) => toAuthResult(await signInWithPassword(payload)),
      signOut: async () => toAuthResult(await signOut()),
    }),
    [session, userName, loading, signInWithPassword, signOut]
  );
};
