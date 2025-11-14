import DomeCameraIcon from "../components/icons/DomeCameraIcon";

export default function Services() {
  const services = [
    {
      icon: "🛠️",
      title: "Τεχνική Υποστήριξη Επιχειρήσεων",
      desc: "Άμεση επίλυση προβλημάτων σε Η/Υ, συστήματα και εξοπλισμό.",
      bullets: [
        "Επίλυση προβλημάτων σε Η/Υ & περιφερειακά",
        "Ρυθμίσεις και βελτιστοποίηση συστημάτων",
        "Υποστήριξη προσωπικού στον χώρο",
        "Προγραμματισμένες επισκέψεις συντήρησης",
      ],
    },
    {
      icon: "📶",
      title: "Δικτύωση & WiFi Υποδομές",
      desc: "Σταθερά δίκτυα, σωστή κάλυψη και διαχωρισμός κατηγοριών χρηστών.",
      bullets: [
        "WiFi Mesh για ομοιόμορφη κάλυψη",
        "Multi-WAN routers για ασφαλή σύνδεση",
        "VLAN: προσωπικό / πελάτες / συστήματα",
        "Έλεγχος & βελτιστοποίηση σήματος",
      ],
    },
    {
      icon: "🛰️",
      title: "Starlink & Backup Internet",
      desc: "Συνεχίζετε να λειτουργείτε ακόμη και αν “πέσει” η κύρια γραμμή.",
      bullets: [
        "Εγκατάσταση & ευθυγράμμιση Starlink",
        "Ενσωμάτωση στο υπάρχον δίκτυο",
        "Αυτόματη εναλλαγή γραμμών (failover)",
      ],
    },
   {
  icon: "📶",
  title: "4G/5G Internet & Backup",
  desc: "Αξιόπιστο Internet ακόμη και όταν η σταθερή γραμμή παρουσιάζει πρόβλημα.",
  bullets: [
    "Εγκατάσταση 4G/5G modem routers με SIM",
    "Αυτόματη μετάβαση σε mobile Internet (failover)",
    "Βελτιστοποίηση σήματος με εξωτερικές κεραίες",
    "Στατική IP μέσω VPN για επιχειρησιακές εφαρμογές",
  ],
},
 {
  icon: <DomeCameraIcon size={36} color="#22d3ee" />,
  title: "Συστήματα Παρακολούθησης & Κάμερες",
  desc: "Καθαρή εικόνα, ασφάλεια και πρόσβαση από οπουδήποτε.",
  bullets: [
    "Εγκατάσταση IP κάμερας & NVR",
    "Ρύθμιση ασφαλούς πρόσβασης από κινητό",
    "Οργάνωση κάλυψης & οπτικών πεδίων",
  ],
}
   
  ];

  return (
    <div className="pt-28 pb-20 px-6 bg-[#0c111a] text-slate-300">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white">Υπηρεσίες</h1>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-lg">
            Λύσεις για σταθερά δίκτυα, αξιόπιστη λειτουργία και άμεση τεχνική υποστήριξη.
          </p>
        </header>

        {/* GRID OF SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((srv, i) => (
            <div
              key={i}
              className="bg-[#0f1522] border border-white/5 rounded-2xl p-8 shadow-xl hover:shadow-cyan-500/10 transition-all"
            >
              {/* ICON */}
              <div className="text-4xl mb-4 text-cyan-400">{srv.icon}</div>

              {/* TITLE */}
              <h2 className="text-2xl font-semibold text-white">{srv.title}</h2>

              {/* DESCRIPTION */}
              <p className="mt-2 text-slate-400">{srv.desc}</p>

              {/* BULLETS */}
              <ul className="mt-4 space-y-2 text-sm list-disc list-inside text-slate-400">
                {srv.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block px-8 py-3 text-base font-medium rounded-md
                       bg-cyan-400 text-slate-900 hover:bg-cyan-300 transition-all
                       shadow-lg hover:shadow-cyan-400/40">
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
