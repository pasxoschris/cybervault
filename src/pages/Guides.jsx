const categories = [
  { name: "Spotlight POS", icon: "💻" },
  { name: "iPads / PDAs", icon: "📱" },
  { name: "Printers", icon: "🖨️" },
  { name: "Network / Switches", icon: "🌐" },
  { name: "5G Routers / Failover", icon: "📶" },
];

export default function Guides() {
  return (
    <div className="min-h-screen bg-spotlight-gradient text-white px-6 py-10">

      <h2 className="text-2xl font-semibold text-center mb-8">
        Οδηγίες & Troubleshooting
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
        {categories.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition"
          >
            <span className="text-3xl">{c.icon}</span>
            <span className="text-lg">{c.name}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
