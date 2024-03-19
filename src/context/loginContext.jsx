import { createContext, useState } from "react";

export const LoginContext = createContext({});

export function LoginContextProvider({ children }) {
  const [login, setLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
}
