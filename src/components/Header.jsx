import logo from "../assets/cyber-vault.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path) =>
    pathname === path
      ? "text-cyan-400 underline underline-offset-4"
      : "hover:text-cyan-400";

  // close mobile menu when scrolling
  useEffect(() => {
    const closeOnScroll = () => setOpen(false);
    window.addEventListener("scroll", closeOnScroll);
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0c111a]/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
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
          <Link to="/" className={isActive("/")}>Αρχική</Link>
          <Link to="/services" className={isActive("/services")}>Υπηρεσίες/Ενοικίαση Εξοπλισμού/Ιστοσελίδες</Link>
          <Link to="/about" className={isActive("/about")}>Σχετικά</Link>
         
          <Link to="/categories" className={isActive("/categories")}>Οδηγός Επίλυσης</Link>
          <Link to="/training"  className="hover:text-cyan-400 transition-colors">  Training </Link>
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

      </div>

      {/* MOBILE MENU WRAPPER (prevents layout shift) */}
      <div className="md:hidden">
        {open && (
          <nav className="bg-[#0c111a] border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-slate-300 text-sm">

            <Link onClick={() => setOpen(false)} to="/" className="hover:text-cyan-400">
              Αρχική
            </Link>

            <Link onClick={() => setOpen(false)} to="/services" className="hover:text-cyan-400">
              Υπηρεσίες
            </Link>

            <Link onClick={() => setOpen(false)} to="/rentals" className="hover:text-cyan-400">
              Ενοικίαση Εξοπλισμού
            </Link>

            <Link onClick={() => setOpen(false)} to="/about" className="hover:text-cyan-400">
              Σχετικά
            </Link>

            <Link onClick={() => setOpen(false)} to="/contact" className="hover:text-cyan-400">
              Επικοινωνία
            </Link>

            <Link onClick={() => setOpen(false)} to="/categories" className="hover:text-cyan-400">
              Οδηγός Επίλυσης
            </Link>

          </nav>
        )}
      </div>
    </header>
  );
}
