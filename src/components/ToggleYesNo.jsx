import React from "react";

export default function ToggleYesNo({ value, onChange }) {
  const isYes = value === "yes";

  return (
    <button
      type="button"
      onClick={() => onChange(isYes ? "no" : "yes")}
      className={`
        relative w-20 h-8 rounded-full flex items-center text-xs font-bold
        transition-all duration-300 select-none overflow-hidden
        ${isYes ? "bg-cyan-400 text-blue-900" : "bg-slate-600 text-slate-200"}
      `}
    >

      {/* ΝΑΙ / ΟΧΙ */}
      <span
        className={`
          w-full z-10 pointer-events-none
          ${isYes ? "text-left pl-2" : "text-right pr-2"}
        `}
      >
        {isYes ? "ΝΑΙ" : "ΟΧΙ"}
      </span>

      {/* Ball */}
      <span
        className={`
          absolute top-1 left-1 w-6 h-6 rounded-full shadow flex items-center justify-center
          text-white text-[10px] bg-blue-900
          transition-transform duration-300
          ${isYes ? "translate-x-[48px]" : "translate-x-0"}
        `}
      >
        {isYes ? "✓" : "✖"}
      </span>
    </button>
  );
}
