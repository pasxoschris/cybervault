export default function Rentals() {
  return (
    <div className="pt-28 pb-20 px-6 bg-[#0c111a] text-slate-300">
      <div className="max-w-5xl mx-auto space-y-16">

        <header className="text-center">
          <h1 className="text-3xl font-bold text-white">Ενοικίαση Εξοπλισμού</h1>
          <p className="mt-3 text-slate-400 leading-relaxed">
            Για εποχικές επιχειρήσεις ή χώρους που χρειάζονται λύσεις χωρίς αγορά εξοπλισμού.
            Ο εξοπλισμός παρέχεται έτοιμος, ρυθμισμένος και με υποστήριξη.
          </p>
        </header>

        {/* AP / WiFi */}
        <section>
          <h2 className="text-xl font-semibold text-white">WiFi Access Points (Mesh)</h2>
          <p className="mt-2 text-slate-400">
            Σταθερή και ομοιόμορφη κάλυψη WiFi σε όλο τον χώρο. Ιδανικό για μαγαζιά με τραπέζια σε εξωτερικούς χώρους.
          </p>
        </section>

        {/* Switches */}
        <section>
          <h2 className="text-xl font-semibold text-white">PoE Switches</h2>
          <p className="mt-2 text-slate-400">
            Οργανωμένη δικτύωση χωρίς πρόχειρες λύσεις. Τροφοδοσία καμερών & access points από ένα σημείο.
          </p>
        </section>

        {/* NanoStation */}
        <section>
          <h2 className="text-xl font-semibold text-white">Ubiquiti NanoStation PtP</h2>
          <p className="mt-2 text-slate-400">
            Σύνδεση 2 χώρων ασύρματα σε μεγάλες αποστάσεις.  
            Για μπαρ, beach bars ή κουζίνα που βρίσκεται μακριά από το δίκτυο.
          </p>
        </section>

        {/* Cameras */}
        <section>
          <h2 className="text-xl font-semibold text-white">IP Κάμερες & NVR</h2>
          <p className="mt-2 text-slate-400">
            Κάμερες με καθαρή εικόνα, καταγραφή και πρόσβαση από κινητό.  
            Όχι “τυχαίες” τοποθετήσεις — πάντα μελετημένη κάλυψη χώρου.
          </p>
        </section>

        {/* Starlink */}
        <section>
          <h2 className="text-xl font-semibold text-white">Starlink Kit (Δορυφορική Σύνδεση)</h2>
          <p className="mt-2 text-slate-400">
            Ιδανικό για beach bars, εκδηλώσεις ή περιοχές με ασταθές δίκτυο.
            Συνεχίζετε να λειτουργείτε ακόμη και χωρίς σταθερή γραμμή Internet.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block px-8 py-3 text-base font-medium rounded-md
                       bg-cyan-400 text-slate-900 hover:bg-cyan-300 transition-all
                       shadow-lg hover:shadow-cyan-400/40">
            Επικοινωνήστε Μαζί Μας
          </a>
          <p className="mt-3 text-slate-500 text-sm">
            Θα σας προτείνουμε τον κατάλληλο εξοπλισμό ανάλογα με τον χώρο σας.
          </p>
        </div>

      </div>
    </div>
  );
}
