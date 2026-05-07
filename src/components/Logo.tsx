type LogoProps = { className?: string };

export default function Logo({ className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Otiz Labs"
    >
      <defs>
        <linearGradient id="otiz-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
        <filter
          id="otiz-glow"
          filterUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="40"
          height="40"
        >
          <feGaussianBlur stdDeviation="0.9" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle
        cx="20"
        cy="20"
        r="14"
        fill="rgba(20,184,166,0.06)"
        stroke="url(#otiz-ring)"
        strokeWidth="2.4"
        filter="url(#otiz-glow)"
      />

      <polyline
        points="14,15.5 18.5,20 14,24.5"
        fill="none"
        stroke="#2dd4bf"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#otiz-glow)"
      />

      <line
        x1="20.5"
        y1="24.5"
        x2="26.5"
        y2="24.5"
        stroke="#2dd4bf"
        strokeWidth="2"
        strokeLinecap="round"
        filter="url(#otiz-glow)"
      />
    </svg>
  );
}
