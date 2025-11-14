import logo from "../assets/cyber-vault.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
<header className="fixed top-0 w-full z-50 bg-[#0c111a]/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
<Link to="/" className="flex items-center gap-3">
  <img 
    src={logo} 
    alt="CYBERVAULT Logo" 
    className="w-8 h-8 object-contain opacity-90" 
  />
  <span className="text-xl font-bold tracking-wide text-cyan-400">
    CYBER-VAULT
  </span>
</Link>


        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-slate-300 text-sm">
          <Link to="/" className="hover:text-cyan-400 transition">Αρχική</Link>
          <Link to="/services" className="hover:text-cyan-400 transition">Υπηρεσίες</Link>
          <Link to="/rentals" className="hover:text-cyan-400 transition">Ενοικίαση Εξοπλισμού</Link>
          <Link to="/about" className="hover:text-cyan-400 transition">Σχετικά</Link>
          <Link to="/contact" className="hover:text-cyan-400 transition">Επικοινωνία</Link>
          <Link to="/categories" className="hover:text-cyan-400 transition">  Οδηγός Επίλυσης</Link>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-slate-300 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <nav className="md:hidden bg-[#0c111a] border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-slate-300 text-sm">
          <Link onClick={() => setOpen(false)} to="/" className="hover:text-cyan-400">Αρχική</Link>
          <Link onClick={() => setOpen(false)} to="/services" className="hover:text-cyan-400">Υπηρεσίες</Link>
          <Link onClick={() => setOpen(false)} to="/rentals" className="hover:text-cyan-400">Ενοικίαση</Link>
          <Link onClick={() => setOpen(false)} to="/about" className="hover:text-cyan-400">Σχετικά</Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="hover:text-cyan-400">Επικοινωνία</Link>
        <Link onClick={() => setOpen(false)} to="/categories" className="hover:text-cyan-400">  Κατηγορίες</Link>

        </nav>
      )}
    </header>
  );
}
