import { createContext, useMemo } from "react";

const AuthContext = createContext(null);

function AuthProvider({ auth, children }) {
  const value = useMemo(() => auth, [auth]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext };
export default AuthProvider;
