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
            Email: <span className="text-slate-200 font-medium">info@cyber-support.gr</span>
          </p>
          <p className="text-slate-400">
            Τηλέφωνο: <span className="text-slate-200 font-medium">(+30) 69XXXXXXXX</span>
          </p>
          
        </div>

        <p className="text-slate-400 italic">
          Μιλάμε απλά, ξεκάθαρα και ανθρώπινα.
        </p>

      </div>
    </div>
  );
}
