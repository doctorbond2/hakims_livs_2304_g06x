import React, {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import {
  GET_REQUEST,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  POST_REQUEST,
  START_REQUEST,
  admin_START_REQUEST,
} from "../helpers/request.helper";
import { clear } from "localforage";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
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
        console.log("RESPONSE:", response.firstName);
        if (response) {
          if (response.tokens.adminAccess) {
            setLoggedIn({
              firstName: response.firstName,
              token: response.tokens.access,
              refreshToken: response.tokens.refresh,
              adminToken: response.tokens.adminAccess,
              adminRefresh: response.tokens.adminRefresh,
            });
          } else if (response.tokens.access) {
            setLoggedIn({
              firstName: response.firstName,
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
        setLoggedIn(null);
      }
    } catch (err) {
      console.log(err.message);
    }
    setLoggedIn(null);
  };
  const pageRefresh = async () => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    const adminToken = JSON.parse(localStorage.getItem("adminToken"));
    const adminRefresh = JSON.parse(localStorage.getItem("adminRefresh"));

    try {
      if (accessToken && refreshToken && adminRefresh && adminToken) {
        const response = await admin_START_REQUEST(
          accessToken,
          refreshToken,
          adminToken,
          adminRefresh
        );
        console.log("TRIED ADMIN:", response);
        if (response) {
          setLoggedIn(response);
        }
      } else if (accessToken && refreshToken) {
        const response = await START_REQUEST(accessToken, refreshToken);
        console.log("TRIED REFRESH:", response);
        if (response) {
          setLoggedIn(response);
        }
      }
    } catch (err) {
      console.error(err.message);
      logout();
      alert("Du behöver logga in igen.");
    }
  };
  useEffect(() => {
    pageRefresh();
  }, []);
  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
//KOLLA PÅ SENARE TOKEN GARBAGE
// if (accessToken) {
//   console.log("ACCESSTOKEN:", accessToken);
//   const fetchUserInfo = async () => {
//     try {
//       const response = await START_REQUEST(accessToken);
//       if (response) {
//         console.log(response);
//         setLoggedIn({ ...loggedIn, firstName: response.firstName });
//       }
//     } catch (err) {
//       console.error("Error getting userinfo", err.message);
//     }
//   };
//   fetchUserInfo();
// }
