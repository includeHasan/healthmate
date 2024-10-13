'use client';
import { createContext, useContext, useEffect, useState } from 'react';

// Create a context to manage the authentication state
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType,setUserType] = useState('');

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    setIsLoggedIn(!!userData); // Set to true if userData is not null or undefined
  }, []);


  useEffect(() => {
    // This code will only run on the client side
    const data = localStorage.getItem("userData");
    if (data) {
      const parsedData = JSON.parse(data).userType;
      setUserType(parsedData); // Set the user type state
    }
    
  }, []);
  // Function to log in
  const login = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
    setIsLoggedIn(true);
  };

  // Function to log out
  const logout = () => {
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout , userType }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the authentication context
export const useAuth = () => useContext(AuthContext);
