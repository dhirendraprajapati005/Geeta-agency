import {  Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import WaterBottle from "./pages/WaterBottle";
import Cleaning from "./pages/Cleaning";
import Decor from "./pages/Decor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/water-bottle" element={<WaterBottle />} />
        <Route path="/cleaning-products" element={<Cleaning />} />
        <Route path="/home-decor" element={<Decor />} />
      </Routes>
      <Footer/>
    </>
  );
}
export default App;