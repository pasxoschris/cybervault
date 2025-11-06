export default function About() {
  return (
    <div className="pt-28 pb-20 px-6 bg-[#0c111a] text-slate-300">
      <div className="max-w-4xl mx-auto space-y-12">

        <h1 className="text-3xl font-bold text-white text-center">Σχετικά με εμάς</h1>

        <p className="text-slate-400 text-center leading-relaxed">
          Η υποστήριξη δεν είναι απλώς μια επίσκεψη. Είναι η καθημερινή σιγουριά ότι
          υπάρχει κάποιος που απαντάει όταν χρειάζεται. Θέλουμε η επιχείρησή σας να 
          λειτουργεί ομαλά και χωρίς άγχος.
        </p>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Πώς δουλεύουμε</h2>
          <p className="text-slate-400 leading-relaxed">
            Προτεραιότητα σε πραγματικά προβλήματα, καθαρή επικοινωνία με ρεαλιστικές λύσεις ανάλογα με τον χώρο.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Σε ποιους απευθυνόμαστε</h2>
          <p className="text-slate-400 leading-relaxed">
            Σε χώρους που βασίζονται στην καθημερινή λειτουργία:
          </p>
          <ul className="text-slate-400 list-disc list-inside text-sm space-y-1">
            <li>Εστιατόρια,</li>
              <li> Καφέ & Bar</li>
            
            <li>Μικρές & μεσαίες επιχειρήσεις</li>
            <li>Χώροι που χρειάζονται σταθερό WiFi</li>
          </ul>
        </section>

        <blockquote className="text-center text-slate-400 italic pt-6">
          «Να ξέρετε ότι δεν είστε μόνοι όταν κάτι δεν δουλεύει.»
        </blockquote>

        <div className="text-center pt-6">
          <a
            href="/contact"
            className="inline-block px-8 py-3 text-base font-medium rounded-md
                       bg-cyan-400 text-slate-900 hover:bg-cyan-300
                       transition-all shadow-lg hover:shadow-cyan-400/40">
            Επικοινωνήστε Μαζί Μας
          </a>
          <p className="mt-2 text-slate-500 text-sm">
            Μιλάμε απλά, ξεκάθαρα και ανθρώπινα.
          </p>
        </div>

      </div>
    </div>
  );
}
