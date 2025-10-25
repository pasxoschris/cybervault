import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Guides from "./pages/Guides.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div>
      {/* Spotlight-style navbar */}
      <nav className="bg-black/20 backdrop-blur-lg text-white px-6 py-4 flex justify-center gap-8 text-sm font-medium border-b border-white/10">
        <Link to="/" className="hover:text-white/70">Αρχική</Link>
        <Link to="/guides" className="hover:text-white/70">Οδηγίες</Link>
        <Link to="/contact" className="hover:text-white/70">Επικοινωνία</Link>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
