import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { Toaster } from "./components/ui/toaster";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import About from "./pages/About";
import { useEffect } from "react";
import { useAuth } from "./utils/hooks/AuthContext";
function App() {
  const { loggedIn } = useAuth();

  useEffect(() => {
    if (loggedIn?.token) {
      localStorage.setItem("accessToken", JSON.stringify(loggedIn.token));
    }
    if (loggedIn?.refreshToken) {
      localStorage.setItem(
        "refreshToken",
        JSON.stringify(loggedIn.refreshToken)
      );
    }
    if (loggedIn?.adminToken) {
      localStorage.setItem("adminToken", JSON.stringify(loggedIn.adminToken));
      console.log("LOGGED IN AS ADMIN!", loggedIn);
    }
    if (loggedIn?.adminRefresh) {
      localStorage.setItem(
        "adminRefresh",
        JSON.stringify(loggedIn.adminRefresh)
      );
    }
  }, [loggedIn]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {loggedIn?.adminToken && (
          <Route
            path="/admin"
            element={loggedIn?.adminToken ? <Admin /> : <Navigate to="/" />}
          ></Route>
        )}
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
