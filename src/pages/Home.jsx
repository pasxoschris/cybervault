import Hero from "../components/Hero";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <SEO
        title="CYBERVAULT | Τεχνική Υποστήριξη για Επιχειρήσεις Εστίασης"
        description="Τεχνική υποστήριξη και IT λύσεις για επιχειρήσεις εστίασης και καφέ: SpotlighPOS, CCTV, δίκτυα, ιστοσελίδες"
        canonicalPath="/"
      />

      {/* HERO includes the page H1 */}
      <Hero />

      {/* INTRO (use H2 to avoid duplicate H1) */}
      <section className="max-w-5xl mx-auto px-6 mt-16 text-slate-300">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
        Υποστήριξη{" "}
        <a href="https://www.spotlightpos.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
          SpotlightPOS
        </a>
        {" "} & ΙΤ support για Επιχειρήσεις Εστίασης και Καφέ
      </h2>

        <p className="text-slate-400 leading-relaxed">
          Η <strong>CYBERVAULT</strong> παρέχει εξειδικευμένη τεχνική υποστήριξη σε
          επιχειρήσεις εστίασης, μπαρ και καφέ.
        </p>

        <p className="mt-4 text-slate-400 leading-relaxed">
        <strong>Είμστε επίσημοι συνεργάτες</strong> της{" "}
        <a 
          href="https://www.ox.one/"           
          target="_blank"           rel="noopener noreferrer"                     className="text-cyan-400 hover:text-cyan-300 transition-colors"        >
          OX.ONE         
        </a>
        {" "}για την <strong> υποστήριξη της πλατφόρμας</strong>{" "}
        <a 
          href="https://www.spotlightpos.com/"
          target="_blank"           rel="noopener noreferrer"           className="text-cyan-400 hover:text-cyan-300 transition-colors"         >
          SpotlightPOS 
        </a>
        </p>

        <p className="mt-4 text-slate-400 leading-relaxed">
          Παράλληλα, αναλαμβάνουμε ανεξάρτητα τον σχεδιασμό, την εγκατάσταση και τη συντήρηση ολοκληρωμένων IT υποδομών
          (Κάμερες, ιστοσελίδες, δίκτυα, ΙΤ εξοπλισμός), ώστε η επιχείρησή σας να λειτουργεί
          απρόσκοπτα, χωρίς διακοπές και τεχνικά προβλήματα.
        </p>

      </section>

      {/* SERVICES OVERVIEW */}
      <section className="max-w-5xl mx-auto px-6 mt-12 text-slate-400">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          Υπηρεσίες που υποστηρίζουν την καθημερινή λειτουργία σας
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li>Εγκατάσταση και παραμετροποίηση εξοπλισμού Spotlight</li>
          <li>Εκπαίδευση χρηστών</li>
          <li>Aπομακρυσμένη και on-site τεχνική υποστήριξη</li>
          <li>Εγκατάσταση καμερών για την εποπτεια στον χώρο του ταμείου</li>
          <li>Δημιουργία ιστοσελίδας</li>
          <li>Εγκατάσταση και παραμετροποίηση δικτύων & Wi-Fi εξοπλισμού</li>
        </ul>

        <p className="mt-4">
          <Link
            to="/services"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Δείτε αναλυτικά τις υπηρεσίες μας →
          </Link>
        </p>
      </section>

      {/* WHY US */}
      <section className="max-w-5xl mx-auto px-6 mt-16 text-slate-400">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          Γιατί να επιλέξετε την CYBERVAULT
        </h2>

        <p className="leading-relaxed">
          Γνωρίζουμε τις ανάγκες της εστίασης και την απαίτηση για{" "}
          <strong>άμεση και αξιόπιστη τεχνική υποστήριξη</strong>. Δουλεύουμε
          προληπτικά, ώστε τα προβλήματα να λύνονται πριν επηρεάσουν τη λειτουργία
          της επιχείρησής σας.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 mt-16 mb-24 text-center">
        <Link
          to="/contact"
          className="inline-block bg-cyan-400 hover:bg-cyan-300 text-[#0c111a] font-semibold px-6 py-3 rounded-lg transition"
        >
          Επικοινωνήστε μαζί μας
        </Link>
      </section>
    </>
  );
}
