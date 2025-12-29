import { useState } from "react";

const sections = [
  {
    id: "installation",
    title: "Εγκατάσταση Εφαρμογής",
    content: (
      <div className="space-y-3 text-slate-300">
        <p>
          Η εφαρμογή είναι διαθέσιμη μόνο για{" "}
          <strong>iOS συσκευές</strong>.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Ανοίξτε το <strong>App Store</strong> στη συσκευή.</li>
          <li>
            Αναζητήστε <strong>&quot;Spotlight POS&quot;</strong> και
            εγκαταστήστε την εφαρμογή.
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: "first-login",
    title: "Σύνδεση Χρήστη (1η φορά)",
    content: (
      <div className="space-y-3 text-slate-300">
        <p className="font-semibold text-slate-200">
          ΠΡΙΝ από την πρώτη σύνδεση στο iPad / iPhone:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Στο <strong>secure (διαχειριστικό)</strong> πρέπει να έχουν
            δημιουργηθεί οι <strong>χρήστες</strong>.
          </li>
          <li>
            Πρέπει να έχουν δηλωθεί οι <strong>συσκευές POS</strong> για τους
            χρήστες (π.χ. iPad σερβιτόρου).
          </li>
        </ul>

        <p className="font-semibold text-slate-200">
          Στην οθόνη σύνδεσης της εφαρμογής Spotlight:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Επιλέγετε το <strong>Κατάστημα – Συσκευή χρήστη</strong> (αν δεν
            έχει συνδεθεί ακόμα σε κατάστημα, πρέπει πρώτα να γίνει ρύθμιση από
            το secure).
          </li>
          <li>
            Συμπληρώνετε <strong>Όνομα Χρήστη</strong> και{" "}
            <strong>Κωδικό χρήστη</strong>.
          </li>
          <li>
            Ελέγχετε την <strong>Έκδοση Εφαρμογής</strong> (να είναι ενημερωμένη).
          </li>
          <li>
            Μπορεί να γίνει σύνδεση μέσω <strong>QR καταστήματος</strong>, αν
            έχει δοθεί.
          </li>
        </ul>

        <p className="italic text-sm text-slate-400">
          Μπορούν να δημιουργηθούν πολλοί χρήστες και πολλές συσκευές χρηστών,
          αλλά οι ταυτόχρονες συνδέσεις εξαρτώνται από τον αριθμό των αδειών
          που έχετε αγοράσει.
        </p>
      </div>
    ),
  },
  {
    id: "next-logins",
    title: "Σύνδεση Χρήστη (μετά την 1η φορά)",
    content: (
      <div className="space-y-3 text-slate-300">
        <p>
          Μετά την πρώτη ρύθμιση (χρήστης + συσκευή + κατάστημα), η σύνδεση
          γίνεται πιο απλά:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Ανοίγετε την εφαρμογή Spotlight POS.</li>
          <li>
            Επιβεβαιώνετε ότι φαίνεται το σωστό <strong>Κατάστημα</strong> και
            η σωστή <strong>Συσκευή χρήστη</strong>.
          </li>
          <li>
            Εισάγετε μόνο <strong>Όνομα Χρήστη</strong> και{" "}
            <strong>Κωδικό</strong> (αν δεν είναι αποθηκευμένα).
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "create-order",
    title: "Δημιουργία Παραγγελίας",
    content: (
      <div className="space-y-3 text-slate-300">
        <p>
          Η διαδικασία δημιουργίας παραγγελίας ξεκινάει από την επιλογή
          τραπεζιού ή πελάτη (ανάλογα με τη ρύθμιση του καταστήματος).
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Επιλέγετε το τραπέζι ή τον πελάτη.</li>
          <li>
            Προσθέτετε προϊόντα από τον <strong>κατάλογο</strong> (κατηγορίες,
            υποκατηγορίες, κ.λπ.).
          </li>
          <li>
            Ελέγχετε τα <strong>στοιχεία παραγγελίας</strong> (ποσότητες,
            σχόλια, παρατηρήσεις κουζίνας κ.λπ.).
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: "order-details",
    title: "Στοιχεία Παραγγελίας",
    content: (
      <div className="space-y-3 text-slate-300">
        <p>Στα στοιχεία παραγγελίας μπορείτε να δείτε / αλλάξετε:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Προϊόντα</strong> (προσθήκη / αφαίρεση / αλλαγή ποσότητας).
          </li>
          <li>
            <strong>Σχόλια</strong> για την κουζίνα ή το μπαρ (π.χ. χωρίς
            πάγο, χωρίς αλάτι).
          </li>
          <li>
            <strong>Τραπεζομάντηλο</strong> – αλλαγή τραπεζιού / μεταφορά
            παραγγελίας (αν υποστηρίζεται).
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "payment",
    title: "Πληρωμή",
    content: (
      <div className="space-y-3 text-slate-300">
        <p>
          Όταν ολοκληρωθεί η παραγγελία, προχωράτε στην{" "}
          <strong>οθόνη πληρωμής</strong>.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Επιλογή τρόπου πληρωμής (μετρητά, κάρτα, κ.λπ.).</li>
          <li>
            Έλεγχος συνολικού ποσού πριν την έκδοση απόδειξης / τιμολογίου.
          </li>
          <li>
            Δυνατότητα <strong>split</strong> ή <strong>έκπτωσης</strong>, αν
            είναι ενεργοποιημένα.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "split",
    title: "Split λογαριασμού",
    content: (
      <div className="space-y-3 text-slate-300">
        <p>
          Η λειτουργία <strong>Split</strong> επιτρέπει να μοιράσετε τον
          λογαριασμό:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Ανά <strong>άτομο</strong> (π.χ. κάθε πελάτης πληρώνει τα δικά του).
          </li>
          <li>
            Ανά <strong>ποσό</strong> (π.χ. 50€ σε κάρτα, 30€ σε μετρητά).
          </li>
        </ul>
        <p className="italic text-sm text-slate-400">
          Οι διαθέσιμες επιλογές split εξαρτώνται από τις ρυθμίσεις του
          καταστήματος στο διαχειριστικό.
        </p>
      </div>
    ),
  },
  {
    id: "discount",
    title: "Έκπτωση",
    content: (
      <div className="space-y-3 text-slate-300">
        <p>
          Μπορεί να εφαρμοστεί <strong>έκπτωση</strong> πριν την τελική έκδοση
          παραστατικού:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Έκπτωση σε <strong>ολικό ποσό</strong> λογαριασμού.
          </li>
          <li>
            Έκπτωση <strong>ανά γραμμή/προϊόν</strong> (αν είναι ενεργοποιημένο).
          </li>
        </ul>
        <p className="italic text-sm text-slate-400">
          Πρέπει στις πίσω ρυθμίσεις να έχει ενεργοποιηθεί η δυνατότητα
          έκπτωσης για τον συγκεκριμένο χρήστη / ρόλο.
        </p>
      </div>
    ),
  },
  {
    id: "invoice",
    title: "Έκδοση Τιμολογίου",
    content: (
      <div className="space-y-3 text-slate-300">
        <p>
          Εκτός από απλή απόδειξη, η εφαρμογή μπορεί να εκδώσει{" "}
          <strong>Τιμολόγιο</strong>, εφόσον:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Είναι ενεργοποιημένη η λειτουργία τιμολόγησης στις{" "}
            <strong>πίσω ρυθμίσεις</strong>.
          </li>
          <li>
            Έχουν καταχωρηθεί τα <strong>στοιχεία πελάτη</strong> (ΑΦΜ,
            επωνυμία κ.λπ.).
          </li>
        </ul>
        <p>
          Στην οθόνη πληρωμής:
        </p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Επιλέγετε <strong>Έκδοση Τιμολογίου</strong>.</li>
          <li>
            Ελέγχετε / συμπληρώνετε τα στοιχεία τιμολογίου του πελάτη.
          </li>
          <li>Οριστικοποιείτε την έκδοση.</li>
        </ol>
      </div>
    ),
  },
];

export default function Training() {
  const [openId, setOpenId] = useState("installation");

  const toggleSection = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <main className="min-h-screen bg-slate-950/90 pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <header className="mb-10">
          <p className="text-sm uppercase tracking-widest text-cyan-400/80">
            Training Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-50 mt-2">
            Spotlight – Οδηγός Εκπαίδευσης
          </h1>
          <p className="mt-3 text-slate-300 max-w-2xl">
            Διαδραστικός οδηγός για την εγκατάσταση της εφαρμογής, τη σύνδεση
            χρηστών και τη διαδικασία παραγγελιών, πληρωμών και τιμολόγησης.
            Άνοιξε την ενότητα που σε ενδιαφέρει.
          </p>
        </header>

        {/* Collapsible sections */}
        <div className="space-y-3">
          {sections.map((section) => {
            const isOpen = openId === section.id;
            return (
              <section
                key={section.id}
                className="border border-white/5 rounded-xl bg-slate-900/60 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between px-4 md:px-6 py-3 md:py-4 text-left hover:bg-slate-900/80 transition"
                >
                  <div>
                    <h2 className="text-base md:text-lg font-semibold text-slate-50">
                      {section.title}
                    </h2>
                  </div>
                  <span
                    className={`ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-xs text-slate-200 transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  >
                    ▶
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 md:px-6 pb-5 pt-1 border-t border-white/5 text-sm md:text-base">
                    {section.content}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
