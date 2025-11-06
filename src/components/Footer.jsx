import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#0c111a] text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Logo & tagline */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-cyan-400 tracking-wide">
            CYBERVAULT
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Network Infrastructure & IT Support
          </p>
        </div>

        {/* Menu Links */}
        <nav className="mt-8 flex justify-center gap-6 text-sm">
          <Link to="/" className="hover:text-cyan-400 transition">Αρχική</Link>
          <Link to="/services" className="hover:text-cyan-400 transition">Υπηρεσίες</Link>
          <Link to="/rentals" className="hover:text-cyan-400 transition">Ενοικίαση</Link>
          <Link to="/about" className="hover:text-cyan-400 transition">Σχετικά</Link>
          <Link to="/contact" className="hover:text-cyan-400 transition">Επικοινωνία</Link>
        </nav>

        {/* Divider line */}
        <div className="mt-8 border-t border-white/5"></div>

        {/* Contact Info */}
        <div className="mt-6 text-center text-sm text-slate-500">
          <p>Email: <span className="text-slate-300">info@cyber-support.gr</span></p>
          <p className="mt-1">Τηλέφωνο: <span className="text-slate-300">(+30) ………</span></p>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} CYBERVAULT — All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
