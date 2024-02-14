import React, { useState, useContext } from 'react';

const AuthContext = React.createContext();
 
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Function to handle login
  const login = (userData) => {
    // setIsLoggedIn(true);
    // setUser(userData);
    //WorkFlow: get userData from database via user input username 
    //and then compare user-input password vs data password.
    //testing
    if(userData.username === 'angelvu' && userData.password === '123456'){
        setIsLoggedIn(true);
        setUser(userData);
        console.log("Logined");
        return true;
    } else {
        console.log("Wrong username or password");
        return false;
    }
  };

  // Function to handle logout
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};