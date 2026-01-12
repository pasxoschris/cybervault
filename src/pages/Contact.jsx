export default function Contact() {
  return (
    <div className="pt-28 pb-20 px-6 bg-[#0c111a] text-slate-300">
      <div className="max-w-lg mx-auto text-center space-y-8">

        <h1 className="text-3xl font-bold text-white">Επικοινωνία</h1>

        <p className="text-slate-400 leading-relaxed">
          Είμαστε εδώ για να βοηθήσουμε.  
          Στείλτε μας μήνυμα ή καλέστε μας για να συζητήσουμε ό,τι χρειάζεστε.
        </p>

        <div className="space-y-3">

          <p className="text-slate-400">
            Email:{" "}
            <a
              href="mailto:info@cyber-vault.gr"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              info@cyber-vault.gr
            </a>
          </p>

          <p className="text-slate-400">
            Τηλέφωνο:{" "}
            <a
              href="tel:+302104449000"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              210 444-9000
            </a>
          </p>

          <p className="text-slate-400">
            Μήνυμα μέσω{" "}
            <a
              href="viber://chat?number=%2B306970967734"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Viber
            </a>
          </p>

          <p className="text-slate-400">
            Διεύθυνση:{" "}
            <a
              href="https://www.google.com/maps?q=Πανεπιστημίου+64,+10564,+Αθήνα"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Πανεπιστημίου 64, 10564, Αθήνα
            </a>
          </p>

        </div>

        <p className="text-slate-400 italic">
          Μιλάμε απλά, ξεκάθαρα και ανθρώπινα.
        </p>

      </div>
    </div>
  );
}
