import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={"hej"}></Route>
      </Routes>
      <Footer />


    </>
  );
}

export default App;
