export default function Rentals() {
  return (
    <div className="pt-28 pb-20 px-6 bg-[#0c111a] text-slate-300">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-white">Ενοικίαση Εξοπλισμού</h1>
          <p className="mt-3 text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Ιδανικό για εποχικές επιχειρήσεις, beach bars, εκδηλώσεις ή χώρους χωρίς σταθερή γραμμή Internet.
            Ο εξοπλισμός παρέχεται έτοιμος, ρυθμισμένος και με υποστήριξη.
          </p>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* 4G/5G Routers */}
          <section className="bg-[#0f1522] border border-white/5 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/20 transition">
            <div className="text-cyan-400 text-3xl mb-3">📶</div>
            <h2 className="text-xl font-semibold text-white">4G/5G Modem Routers</h2>
            <p className="mt-2 text-slate-400">
              Λύση για χώρους χωρίς σταθερή γραμμή Internet.
              Ιδανικό για beach bars, events και απομακρυσμένες περιοχές.
            </p>
          </section>

          {/* Starlink */}
          <section className="bg-[#0f1522] border border-white/5 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/20 transition">
            <div className="text-cyan-400 text-3xl mb-3">🛰️</div>
            <h2 className="text-xl font-semibold text-white">Starlink Kit</h2>
            <p className="mt-2 text-slate-400">
              Δορυφορική σύνδεση υψηλής αξιοπιστίας όταν το δίκτυο κινητής δεν επαρκεί.
              Για εκδηλώσεις, απομακρυσμένες επιχειρήσεις ή backup Internet.
            </p>
          </section>

          {/* WiFi Mesh */}
          <section className="bg-[#0f1522] border border-white/5 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/20 transition">
            <div className="text-cyan-400 text-3xl mb-3">📡</div>
            <h2 className="text-xl font-semibold text-white">WiFi Access Points (Mesh)</h2>
            <p className="mt-2 text-slate-400">
              Ομοιόμορφη και σταθερή κάλυψη σε όλο τον χώρο.
              Ιδανικό για εξωτερικούς χώρους, τραπεζοκαθίσματα και beach bars.
            </p>
          </section>

          {/* NanoStation */}
          <section className="bg-[#0f1522] border border-white/5 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/20 transition">
            <div className="text-cyan-400 text-3xl mb-3">🔗</div>
            <h2 className="text-xl font-semibold text-white">
              Ubiquiti NanoStation PtP / Extenders
            </h2>
            <p className="mt-2 text-slate-400">
              Ασύρματη σύνδεση δύο σημείων σε μεγάλες αποστάσεις.
              Ιδανικό για μπαρ – κουζίνα, αποθήκες ή απομακρυσμένα POS.
            </p>
          </section>

        </div>

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
