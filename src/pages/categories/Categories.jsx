import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();

  const categories = [
    { name: "Εκτυπωτές", path: "/categories/printers" },
  ];

  return (
    <div className="min-h-screen bg-[#0c111a] flex items-center justify-center px-6 py-20">
      {/* Content panel */}
      <div className="bg-[#0f1522] border border-white/5 rounded-2xl p-10 shadow-lg max-w-lg w-full">

        <h1 className="text-3xl font-bold text-slate-200 mb-10 text-center">
          Επιλέξτε Κατηγορία
        </h1>

        <div className="grid grid-cols-1 gap-6">
          {categories.map((cat) => (
            <button
  key={cat.path}
  onClick={() => navigate(cat.path)}
  className="
    w-full py-4 rounded-xl font-semibold
    bg-white text-blue-900
    shadow-md
    hover:bg-blue-100 hover:shadow-blue-500/20
    transition-all
  "
>
  {cat.name}
</button>
          ))}
        </div>

      </div>
    </div>
  );
}
