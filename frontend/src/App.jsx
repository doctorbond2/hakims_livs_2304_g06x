import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import CategoryManager from "./components/admin/categoryManager/CategoryManager";
import Checkout from "./pages/Checkout";
import { useAuth } from "./utils/hooks/AuthContext";
import { useEffect } from "react";
function App() {
  const { loggedIn } = useAuth();

  // useEffect(() => {

  // },[loggedIn])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={"Who knows what lies beyond?"}></Route>
        <Route
          path="/admin"
          element={loggedIn?.admin_access ? <Admin /> : <Navigate to="/" />}
        ></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
