export default function Services() {
  return (
    <div className="pt-28 pb-20 px-6 bg-[#0c111a] text-slate-300">
      <div className="max-w-5xl mx-auto space-y-16">

        <header className="text-center">
          <h1 className="text-3xl font-bold text-white">Υπηρεσίες</h1>
          <p className="mt-3 text-slate-400">
            Λύσεις που βοηθούν την επιχείρησή σας να λειτουργεί χωρίς άγχος και χωρίς διακοπές.
          </p>
        </header>

        {/* 1) Τεχνική Υποστήριξη */}
        <section>
          <h2 className="text-xl font-semibold text-white">Τεχνική Υποστήριξη Επιχειρήσεων</h2>
          <p className="mt-2 text-slate-400">
            Επί τόπου & απομακρυσμένη βοήθεια, με άμεση ανταπόκριση και ξεκάθαρη επικοινωνία.
          </p>
          <ul className="mt-4 space-y-1 text-sm list-disc list-inside text-slate-400">
            <li>Επίλυση προβλημάτων σε Η/Υ & περιφερειακά</li>
            <li>Ρυθμίσεις και βελτιστοποίηση συστημάτων</li>
            <li>Υποστήριξη προσωπικού στον χώρο</li>
            <li>Προγραμματισμένες επισκέψεις συντήρησης</li>
          </ul>
        </section>

        {/* 2) Wifi & Δίκτυα */}
        <section>
          <h2 className="text-xl font-semibold text-white">Δικτύωση & WiFi Υποδομές</h2>
          <p className="mt-2 text-slate-400">
            Ρυθμίζουμε το δίκτυο ώστε να υπάρχει σταθερότητα και κάλυψη σε όλο τον χώρο.
          </p>
          <ul className="mt-4 space-y-1 text-sm list-disc list-inside text-slate-400">
            <li>WiFi Mesh για ομοιόμορφη κάλυψη</li>
            <li>Multi-WAN routers για ασφαλή σύνδεση</li>
            <li>Διαχωρισμός δικτύου προσωπικού / πελατών / συστημάτων</li>
            <li>Έλεγχος & βελτιστοποίηση σήματος</li>
          </ul>
        </section>

        {/* 3) Starlink */}
        <section>
          <h2 className="text-xl font-semibold text-white">Starlink & Backup Internet</h2>
          <p className="mt-2 text-slate-400">
            Η επιχείρηση συνεχίζει να λειτουργεί ακόμη και αν “πέσει” η γραμμή.
          </p>
          <ul className="mt-4 space-y-1 text-sm list-disc list-inside text-slate-400">
            <li>Εγκατάσταση & ευθυγράμμιση Starlink</li>
            <li>Ενσωμάτωση στο υπάρχον δίκτυο</li>
            <li>Αυτόματη εναλλαγή γραμμών (failover)</li>
          </ul>
        </section>

        {/* 4) Κάμερες */}
        <section>
          <h2 className="text-xl font-semibold text-white">Συστήματα Παρακολούθησης & Κάμερες</h2>
          <p className="mt-2 text-slate-400">
            Καθαρή εικόνα και ασφαλής πρόσβαση, χωρίς περιττή πολυπλοκότητα.
          </p>
          <ul className="mt-4 space-y-1 text-sm list-disc list-inside text-slate-400">
            <li>Εγκατάσταση IP κάμερας & NVR</li>
            <li>Ρύθμιση ασφαλούς πρόσβασης από κινητό</li>
            <li>Οργάνωση κάλυψης χώρου & οπτικών πεδίων</li>
          </ul>
        </section>

        {/* 5) Monitoring */}
        <section>
          <h2 className="text-xl font-semibold text-white">Monitoring & Προληπτική Συντήρηση</h2>
          <p className="mt-2 text-slate-400">
            Παρακολουθούμε την κατάσταση του δικτύου και παρεμβαίνουμε πριν παρουσιαστεί πρόβλημα.
          </p>
          <ul className="mt-4 space-y-1 text-sm list-disc list-inside text-slate-400">
            <li>Τακτικός έλεγχος εξοπλισμού</li>
            <li>Αναβαθμίσεις firmware & ρυθμίσεων</li>
            <li>Καταγραφή ενεργειών και παρατηρήσεων</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
