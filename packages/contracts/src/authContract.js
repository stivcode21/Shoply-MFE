const noopAuthResult = async () => ({ error: null });

export const createAuthMock = (overrides = {}) => ({
  session: null,
  userName: null,
  loading: false,
  signIn: noopAuthResult,
  signOut: noopAuthResult,
  ...overrides,
});

export const isAuthContract = (value) => {
  return Boolean(
    value &&
      typeof value.signIn === "function" &&
      typeof value.signOut === "function"
  );
};

export const resolveAuthContract = (value, fallback = createAuthMock()) => {
  return isAuthContract(value) ? value : fallback;
};
