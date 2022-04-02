import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const handleAuthenticate = (value) => {
    setAuthenticated(value);
  };
  const handleUser = (value) => {
    console.log(value);
    setCurrentUser(value);
  };
  return (
    <AppContext.Provider
      value={[authenticated, handleAuthenticate, currentUser, handleUser]}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
