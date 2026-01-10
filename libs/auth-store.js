import { create } from "zustand";
const globalKey = "__MF_AUTH_STORE__";
const storageKey = "mf-auth-state";

const readStorage = () => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(storageKey);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const writeStorage = (state) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  } catch {
    // Ignore storage failures in private mode.
  }
};

const createAuthStore = () => {
  const saved = readStorage();

  return create((set) => ({
    token: saved?.token ?? null,
    setToken: (token) => {
      set({ token });
      writeStorage({ token });
    },
    clearToken: () => {
      set({ token: null });
      writeStorage({ token: null });
    },
  }));
};

const useAuthStore =
  typeof window !== "undefined" && window[globalKey]
    ? window[globalKey]
    : createAuthStore();

if (typeof window !== "undefined") {
  window[globalKey] = useAuthStore;
}

export { useAuthStore };
