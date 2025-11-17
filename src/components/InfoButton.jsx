import React, { useState } from "react";

export default function InfoButton({ onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative flex items-center">
      {/* Tooltip */}
      {hover && (
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap 
                     bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded-lg shadow-lg 
                     border border-slate-700 z-20"
        >
          Προβολή οδηγιών
        </div>
      )}

      {/* Indicator icon */}
      <button
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="w-6 h-6 flex items-center justify-center rounded-full 
                   bg-cyan-400 text-blue-900 font-bold text-sm 
                   hover:bg-cyan-300 transition-all"
      >
        i
      </button>
    </div>
  );
}
