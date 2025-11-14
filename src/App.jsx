import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Rentals from "./pages/Rentals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categories from "./pages/categories/Categories";
import Printers from "./pages/categories/Printers";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Υπάρχουσες σελίδες */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Νέες σελίδες Κατηγοριών */}
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/printers" element={<Printers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
