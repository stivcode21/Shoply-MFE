import { createContext, useMemo } from "react";

const SidebarContext = createContext(null);

function SidebarProvider({ sidebar, children }) {
  const value = useMemo(() => sidebar, [sidebar]);
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export { SidebarContext };
export default SidebarProvider;
