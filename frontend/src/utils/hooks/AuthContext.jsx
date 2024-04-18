import React, {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  POST_REQUEST,
} from "../helpers/request.helper";
import { clear } from "localforage";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const register = async (registerData) => {
    if (!registerData) {
      throw err;
    }
    try {
      const response = await POST_REQUEST("/api/auth/register", registerData);
      if (response) {
        console.log("Registered new user, try to login!");
        setLoggedIn({
          access: true,
          admin_access: false,
          id: response._id,
          token: response.tokens.access,
          refreshToken: response.tokens.refresh,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };
  const login = async (loginData) => {
    if (loginData) {
      try {
        const response = await LOGIN_REQUEST("/api/auth/login/", loginData);
        if (response) {
          if (response.tokens.adminAccess) {
            setLoggedIn({
              access: true,
              admin_access: true,
              id: response._id,
              token: response.tokens.access,
              refreshToken: response.tokens.refresh,
              adminToken: response.tokens.adminAccess,
              adminRefresh: response.tokens.adminRefresh,
            });
          } else if (response.tokens.access) {
            setLoggedIn({
              access: true,
              admin_access: false,
              id: response._id,
              token: response.tokens.access,
              refreshToken: response.tokens.refresh,
            });
          }
          console.log("LOGIN SUCCESS: Logged in as customer");
          return true;
        }
      } catch (err) {
        console.error("Invalid login", err.message);
        return false;
      }
    }
  };
  const clearLocalStorageTokens = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminRefresh");
  };
  const logout = async () => {
    try {
      const response = await LOGOUT_REQUEST(
        "/api/auth/logout/",
        loggedIn.token
      );
      if (response) {
        clearLocalStorageTokens();
      }
    } catch (err) {
      console.log(err.message);
    }
    setLoggedIn(null);
  };
  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    const adminToken = JSON.parse(localStorage.getItem("adminToken"));
    const adminRefresh = JSON.parse(localStorage.getItem("adminRefresh"));

    if (accessToken && refreshToken && adminRefresh && adminToken) {
      setLoggedIn({
        access: true,
        admin_access: true,
        token: accessToken,
        refreshToken: refreshToken,
        adminToken: adminToken,
        adminRefresh: adminRefresh,
      });
    } else if (accessToken && refreshToken) {
      setLoggedIn({
        access: true,
        admin_access: false,
        token: accessToken,
        refreshToken: refreshToken,
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
