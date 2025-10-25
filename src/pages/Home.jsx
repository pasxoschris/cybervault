import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-spotlight-gradient text-white flex flex-col justify-center items-center text-center px-8">
      <h1 className="text-4xl font-semibold tracking-tight mb-4">Cyber-Vault</h1>
      <p className="text-white/80 text-lg max-w-xl mb-8">
        Εξειδικευμένη τεχνική υποστήριξη για Spotlight POS, iPads / PDAs, 
        θερμικούς εκτυπωτές, switches και 5G routers. Γρήγορη επίλυση προβλημάτων.
      </p>

      <Link
        to="/guides"
        className="px-6 py-3 rounded-full bg-white/10 border border-white/30 hover:bg-white/20 transition"
      >
        Μετάβαση στις Οδηγίες
      </Link>
    </div>
  );
}
