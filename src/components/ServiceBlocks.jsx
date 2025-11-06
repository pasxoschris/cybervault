export default function ServiceBlocks() {
  const items = [
    {
      icon: "🛠️",
      title: "Τεχνική Υποστήριξη",
      text: "Επί τόπου & απομακρυσμένη βοήθεια όταν τη χρειάζεστε. Σταθερή λειτουργία χωρίς διακοπές."
    },
    {
      icon: "📶",
      title: "Δικτύωση & WiFi Υποδομές",
      text: "Κάλυψη σε όλο τον χώρο, χωρίς αποσυνδέσεις. WiFi Mesh, Multi-WAN, VLANs για σταθερότητα & ασφάλεια."
    },
    {
      icon: "🛰️",
      title: "Starlink & Backup Internet",
      text: "Λειτουργία ακόμα και χωρίς σταθερή γραμμή. Εγκατάσταση Starlink & ρύθμιση failover."
    }
  ];

  return (
    <section className="py-20 bg-[#0c111a]">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3 text-center">
        {items.map((item) => (
          <div key={item.title} className="space-y-3">
            <div className="text-4xl">{item.icon}</div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
