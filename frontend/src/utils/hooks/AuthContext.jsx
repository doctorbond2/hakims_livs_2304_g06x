import React, { useContext, createContext, useState, ReactNode } from "react";
import { POST_REQUEST } from "../helpers/request.helper";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const logout = () => {
    setLoggedIn(false);
  };
  const register = async (registerData) => {
    console.log("registered!");
  };
  const login = async (loginData) => {
    if (loginData) {
      try {
        const response = await POST_REQUEST("/api/auth/login", loginData);
        if (response) {
          setLoggedIn(true);
          console.log("LOGIN SUCCESS: Logged in as customer");
        }
        // access: true,
        // admin_access: false,
        // id: response.data.user,
        // token: null,
        // refreshToken: null
      } catch (err) {
        console.error("Invalid login", err.message);
      }
    }
  };
  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
