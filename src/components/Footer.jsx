import { Link } from "react-router-dom";
import ServiceBlocks from "../components/ServiceBlocks";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#0c111a] text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Logo & tagline */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-cyan-400 tracking-wide">
            CYBER-VAULT
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Network Infrastructure & IT Support
          </p>
        </div>
      <ServiceBlocks />

       

        {/* Divider line */}
        <div className="mt-8 border-t border-white/5"></div>

        {/* Contact Info */}
        <div className="mt-6 text-center text-sm text-slate-500">
          <p>Email:{" "}
            <a
              href="mailto:info@cyber-vault.gr"
              className="text-slate-300 hover:text-blue-400 transition-colors"> 
              info@cyber-vault.gr       
              </a>
          </p>
          
          <p className="mt-1">
            Τηλέφωνο:{" "}
            <a href="tel:+302104449000" className="text-slate-300 hover:text-cyan-400 transition-colors" > 
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
        </div>

        

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} CYBER-VAULT — All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
