import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="min-h-screen bg-spotlight-gradient text-white flex flex-col justify-center items-center text-center px-8">
      <h2 className="text-3xl font-semibold mb-4">Επικοινωνία</h2>

      <p className="text-white/80 mb-6 leading-relaxed">
        Για τεχνική υποστήριξη επικοινωνήστε με:
        <br /><br />
        📞 Τηλέφωνο: <b>+30 6977007492</b><br />
        ✉️ Email: <b>support@cyber-support.gr</b>
      </p>

      <Link to="/" className="text-white/70 underline">
        Επιστροφή στην Αρχική
      </Link>
    </div>
  );
}
