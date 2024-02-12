import React from 'react'
import usePersistedState from '../utils/demo/usePersistedState';

// create context
export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = usePersistedState({
    key: "loggedIn",
    defaultValue: false,
  });
  const [accessToken, setAccessToken] = usePersistedState({
    key: "accessToken",
    defaultValue: "",
  });
  const [userData, setUserData] = usePersistedState({
    key: "userData",
    defaultValue: '',
  });


  function loginUser(token, user) {
    setAccessToken(token);
    setIsLoggedIn(true);
    setUserData(user);
  }

  function logoutUser() {
    setAccessToken(null);
    setIsLoggedIn(false);
    setUserData(null);
  }

  // const value = useMemo(
  //   () => ({
  //     isLoggedIn,
  //     accessToken,
  //     userData,
  //     loginUser,
  //     logoutUser,
  //   }),
  //   [setIsLoggedIn]
  // );

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        accessToken,
        userData,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
