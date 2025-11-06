export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 bg-[#0c111a] overflow-hidden">

      {/* SUBTLE GRID BACKGROUND */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, #38bdf8 1px, transparent 1px)",
          backgroundSize: "26px 26px"
        }}
      />

      {/* TEMPORARY WATERMARK (Μέχρι να βάλουμε καινούριο logo) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60vmin] h-[60vmin] rounded-full border border-cyan-400 opacity-5"></div>
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide">
          CYBERVAULT
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-300">
          Network Infrastructure & IT Support
        </p>

        <p className="mt-3 text-slate-400 leading-relaxed">
          Υποστήριξη & σταθερά δίκτυα για επιχειρήσεις.<br />
          Καλύπτουμε εστίαση, καφέ, beach bars & μικρές μονάδες.
        </p>

        <a
          href="/contact"
          className="inline-block mt-8 px-8 py-3 text-base font-medium rounded-md
                     bg-cyan-400 text-[#0c111a] hover:bg-cyan-300
                     transition-all shadow-lg hover:shadow-cyan-400/40">
          Επικοινωνήστε Μαζί Μας
        </a>
      </div>
    </section>
  );
}
