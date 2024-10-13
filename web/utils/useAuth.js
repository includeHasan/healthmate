'use client';
import { createContext, useContext, useEffect, useState } from 'react';

// Create a context to manage the authentication state
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    setIsLoggedIn(!!userData); // Set to true if userData is not null or undefined
  }, []);


  

  // Function to log out
  const logout = () => {
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logout  }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the authentication context
export const useAuth = () => useContext(AuthContext);
