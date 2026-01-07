export default function DomeCameraIcon({ size = 80, color = "#22d3ee" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]"
    >
      {/* Dome housing */}
      <path
        d="M64 256c0-106 86-192 192-192s192 86 192 192"
        stroke={color}
        strokeWidth="16"
        strokeLinecap="round"
      />

      {/* Base */}
      <rect
        x="96"
        y="256"
        width="320"
        height="96"
        rx="24"
        stroke={color}
        strokeWidth="16"
      />

      {/* Inner dome */}
      <circle
        cx="256"
        cy="256"
        r="56"
        stroke={color}
        strokeWidth="16"
      />

      {/* Lens */}
      <circle
        cx="256"
        cy="256"
        r="28"
        fill={color}
        opacity="0.7"
      />
    </svg>
  );
}
