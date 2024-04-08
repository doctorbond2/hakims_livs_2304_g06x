import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import CategoryManager from "./components/admin/categoryManager/CategoryManager";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<CategoryManager></CategoryManager>}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
