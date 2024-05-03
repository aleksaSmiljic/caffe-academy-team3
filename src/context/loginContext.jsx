import { createContext, useState } from "react";

export const LoginContext = createContext({});

export function LoginContextProvider({ children }) {
  const [login, setLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <LoginContext.Provider value={{ login, setLogin, isAdmin, setIsAdmin }}>
      {children}
    </LoginContext.Provider>
  );
}
