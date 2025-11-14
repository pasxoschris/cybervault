export default function About() {
  return (
    <div className="pt-28 pb-20 px-6 bg-[#0c111a] text-slate-300">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Title */}
        <header className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-white">Σχετικά με την CyberVault</h1>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Η CyberVault δημιουργήθηκε για να προσφέρει σταθερότητα, ασφάλεια 
            και άμεση τεχνική υποστήριξη σε επιχειρήσεις που λειτουργούν 
            καθημερινά χωρίς περιθώριο για καθυστερήσεις.
          </p>
        </header>

        {/* Mission */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Αποστολή μας</h2>
          <p className="text-slate-400 leading-relaxed">
            Να εξασφαλίζουμε ότι κάθε επιχείρηση που συνεργάζεται μαζί μας 
            λειτουργεί χωρίς διακοπές. Η τεχνική υποστήριξη δεν είναι απλώς μια υπηρεσία· 
            είναι η υπόσχεση ότι υπάρχει πάντα κάποιος δίπλα σας όταν χρειάζεται.
                    </p>
      <br></br>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li><span className="text-white font-medium">Αξιοπιστία:</span> Υποστήριξη που απαντάει — όχι όταν προλάβει.</li>
            <li><span className="text-white font-medium">Σαφήνεια:</span> Ξεκάθαρες εξηγήσεις, χωρίς τεχνικά “μαύρα κουτιά”.</li>
            <li><span className="text-white font-medium">Συνέπεια:</span> Άμεση ανταπόκριση και πραγματικές λύσεις.</li>
            <li><span className="text-white font-medium">Ασφάλεια:</span> Προστασία δικτύου, δεδομένων και λειτουργίας.</li>
          </ul>
         <p className="text-slate-400 leading-relaxed">
            Κάθε επιχείρηση είναι διαφορετική. Μελετάμε τον χώρο, εντοπίζουμε 
            τις αδυναμίες και διαμορφώνουμε λύσεις που ταιριάζουν πραγματικά στις ανάγκες σας.
            Είμαστε δίπλα σας από την εγκατάσταση έως την καθημερινή υποστήριξη.
          </p>
        </section>

        {/* Who We Serve */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Με ποιους συνεργαζόμαστε</h2>
          <p className="text-slate-400 leading-relaxed">
            Υποστηρίζουμε χώρους όπου η λειτουργία δεν μπορεί να σταματήσει:
          </p>
          <ul className="text-slate-400 list-disc list-inside space-y-1">
            <li>Εστιατόρια, καφέ & bars</li>
            <li>Καταστήματα με εκτυπωτές και tablets</li>
            <li>Μικρές & μεσαίες επιχειρήσεις</li>
            <li>Χώρους με ανάγκη σταθερού WiFi & δικτύου</li>
            <li>Επιχειρήσεις που χρειάζονται 4G/5G/Starlink λύσεις</li>
          </ul>
        </section>

      
        {/* CTA */}
        <div className="text-center pt-6">
          <a
            href="/contact"
            className="inline-block px-8 py-3 text-base font-medium rounded-md
                       bg-cyan-400 text-slate-900 hover:bg-cyan-300
                       transition-all shadow-lg hover:shadow-cyan-400/40">
            Επικοινωνήστε Μαζί Μας
          </a>
          <p className="mt-2 text-slate-500 text-sm">
            Θέλουμε η επιχείρησή σας να λειτουργεί χωρίς άγχος — κάθε μέρα.
          </p>
        </div>

      </div>
    </div>
  );
}
