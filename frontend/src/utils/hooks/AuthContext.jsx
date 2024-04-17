import React, {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { LOGIN_REQUEST, LOGOUT_REQUEST } from "../helpers/request.helper";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const register = async (registerData) => {
    console.log("registered!");
  };
  const login = async (loginData) => {
    console.log(loginData);
    if (loginData) {
      try {
        const response = await LOGIN_REQUEST("/api/auth/login/", loginData);
        console.log("RESPONSE: ", response);
        if (response) {
          if (response.admin) {
            setLoggedIn({
              access: true,
              admin_access: true,
              id: response._id,
              token: response.tokens.access,
              refreshToken: response.tokens.refresh,
              adminToken: response.tokens.adminAccess,
              adminRefresh: response.tokens.adminRefresh,
            });
          } else {
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
  const logout = async () => {
    try {
      const response = await LOGOUT_REQUEST(
        "/api/auth/logout/",
        loggedIn.token
      );
      if (response) {
        console.log(response);
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
    } else {
      alert("You need to log in agagin OK? ");
    }
  }, []);
  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
