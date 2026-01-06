import DomeCameraIcon from "../components/icons/DomeCameraIcon.jsx";

export default function Services() {
  const services = [
    {
      icon: <span aria-hidden>🛠️</span>,
      title: "Official SpotlightPOS support",
      desc: "Επίσημοι συνεργάτες OXINUS HELLAS",
      bullets: [
        "Εξειδικευμένη υποστήριξη για επιχειρήσεις εστίασης και καφέ",
        "Εγκατάσταση νέου εξοπλισμού",
        "On-site υποστήριξη",
        "Εκπαίδευση χρηστών",
        "Απομακρυσμένη τεχνική υποστήριξη",
        "Παροχή συμβουλών για θέματα συστημάτων και λογισμικού",
      ],
    },
    {
      icon: <span aria-hidden>📶</span>,
      title: "Δικτύωση & WiFi Υποδομές",
      desc: "Σταθερά δίκτυα, σωστή κάλυψη και διαχωρισμός κατηγοριών χρηστών.",
      bullets: [
        "Multi-WAN routers για ασφαλή σύνδεση",
        "VLAN: προσωπικό / πελάτες / συστήματα",
        "WiFi Mesh για ομοιόμορφη κάλυψη",
        "Έλεγχος & βελτιστοποίηση σήματος",
      ],
    },

    {
      icon: <span aria-hidden>🛰️</span>,
      title: "Starlink & 4G/5G Internet (SIM) — Backup & Failover",
      desc: "Συνεχής λειτουργία με εναλλακτική σύνδεση όταν η κύρια γραμμή πέσει ή υποβαθμιστεί.",
      bullets: [
        "Εγκατάσταση & ευθυγράμμιση Starlink",
        "4G/5G modem routers με SIM (κύρια ή εφεδρική σύνδεση)",
        "Αυτόματη εναλλαγή γραμμών (failover) σε multi-WAN router",
        "Βελτιστοποίηση σήματος με εξωτερικές κεραίες",
        "Στατική IP μέσω VPN για επιχειρησιακές εφαρμογές",
        "Ενσωμάτωση στο υπάρχον δίκτυο χωρίς διακοπές",
      ],
    },

    // ✅ ΔΗΜΙΟΥΡΓΙΑ ΙΣΤΟΣΕΛΙΔΩΝ
    {
      icon: <span aria-hidden>🌐</span>,
      title: "Δημιουργία Ιστοσελίδων",
      desc: "Μοντέρνες ιστοσελίδες για επιχειρήσεις με έμφαση στην ταχύτητα, τη λειτουργικότητα και το SEO.",
      bullets: [
        "Εταιρική παρουσίαση (one-page ή multi-page)",
        "Responsive design για κινητά / tablet / desktop",
        "Φόρμα επικοινωνίας & σύνδεση με email",
        "SEO βασικής δομής (τίτλοι, meta, δομή περιεχομένου)",
        "Σύνδεση με Google Maps & Social (Instagram κ.λπ.)",
        "Φιλοξενία/Domain/DNS ρυθμίσεις (κατόπιν ανάγκης)",
      ],
    },

    {
      icon: <DomeCameraIcon size={32} color="#22d3ee" />,
      title: "Συστήματα Παρακολούθησης & Κάμερες",
      desc: "Καθαρή εικόνα, ασφάλεια και πρόσβαση από οπουδήποτε.",
      bullets: [
        "Εγκατάσταση IP κάμερας & NVR",
        "Ρύθμιση ασφαλούς πρόσβασης από κινητό",
        "Οργάνωση κάλυψης & οπτικών πεδίων",
      ],
    },
  ];

  return (
    <div className="pt-28 pb-20 px-6 bg-[#0c111a] text-slate-300">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white">Υπηρεσίες</h1>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-lg">
            Λύσεις για σταθερά δίκτυα, αξιόπιστη λειτουργία και άμεση τεχνική υποστήριξη.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((srv, i) => (
            <div
              key={i}
              className="bg-[#0f1522] border border-white/5 rounded-2xl p-8 shadow-xl hover:shadow-cyan-500/10 transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center
                           bg-cyan-500/10 text-cyan-400 border border-cyan-400/10 mb-4"
                aria-hidden="true"
              >
                <div className="text-2xl leading-none">{srv.icon}</div>
              </div>

              <h2 className="text-2xl font-semibold text-white">{srv.title}</h2>
              <p className="mt-2 text-slate-400">{srv.desc}</p>

              <ul className="mt-4 space-y-2 text-sm list-disc list-inside text-slate-400">
                {srv.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block px-8 py-3 text-base font-medium rounded-md
                       bg-cyan-400 text-slate-900 hover:bg-cyan-300 transition-all
                       shadow-lg hover:shadow-cyan-400/40"
          >
            Επικοινωνήστε Μαζί Μας
          </a>
          <p className="mt-3 text-slate-500 text-sm">
            Θα βρούμε την κατάλληλη λύση για τις ανάγκες της επιχείρησής σας.
          </p>
        </div>
      </div>
    </div>
  );
}
