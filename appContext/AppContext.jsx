import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState("home");
  const [postCreate, setPostCreate] = useState(false);

  return (
    <AppContext value={{ state, setState, postCreate, setPostCreate }}>
      {children}
    </AppContext>
  );
};
