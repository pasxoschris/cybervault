import { Link } from "react-router-dom";
import logo from "../assets/CyberVault_logo.png";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#0c111a] text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* LOGO */}
        <div className="flex justify-center">
          <Link to="/" aria-label="CYBERVAULT Home">
            <img
              src={logo}
              alt="CYBERVAULT – Τεχνική Υποστήριξη & Δίκτυα"
              className="w-40 sm:w-64 h-auto object-contain opacity-90 hover:opacity-100 transition"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Short services tagline (trust + SEO) */}
        <p className="mt-3 text-center text-sm text-slate-400">
          Τεχνική Υποστήριξη για επιχειρήσεις εστίασης και καφέ
        </p>

        {/* Contact Info (semantic) */}
        <address className="mt-6 text-center text-sm text-slate-500 not-italic">
          <p>
            Email:{" "}
            <a
              href="mailto:info@cyber-vault.gr"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              info@cyber-vault.gr
            </a>
          </p>

          <p className="mt-1">
            Τηλέφωνο:{" "}
            <a
              href="tel:+302104449000"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              210 444-9000
            </a>
          </p>

          <p className="mt-1">
            Μήνυμα μέσω{" "}
            <a
              href="viber://chat?number=%2B306970967734"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Viber
            </a>
                    </p>
        </address>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} CYBERVAULT — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
