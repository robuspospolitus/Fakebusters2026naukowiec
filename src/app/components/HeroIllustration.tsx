export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg viewBox="0 0 400 300" fill="none" className="w-full h-auto">
        {/* Background elements */}
        <circle cx="320" cy="80" r="60" fill="#F3E8FF" opacity="0.5" />
        <circle cx="80" cy="220" r="40" fill="#FECDD3" opacity="0.5" />

        {/* Main shield/protection icon */}
        <g transform="translate(150, 80)">
          <path
            d="M50 10 L90 30 L90 70 C90 100, 70 120, 50 130 C30 120, 10 100, 10 70 L10 30 Z"
            fill="url(#shieldGradient)"
            stroke="#7C3AED"
            strokeWidth="3"
          />

          {/* Checkmark inside shield */}
          <path
            d="M35 65 L45 75 L70 50"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* Floating icons representing digital safety */}
        <g transform="translate(80, 60)">
          <circle cx="0" cy="0" r="20" fill="white" stroke="#E0E7FF" strokeWidth="2" />
          <path d="M-8 0 L-3 5 L8 -6" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" fill="none" />
        </g>

        <g transform="translate(280, 180)">
          <circle cx="0" cy="0" r="20" fill="white" stroke="#FED7E2" strokeWidth="2" />
          <path d="M-6 -6 L6 6 M6 -6 L-6 6" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g transform="translate(320, 220)">
          <circle cx="0" cy="0" r="18" fill="white" stroke="#E0E7FF" strokeWidth="2" />
          <circle cx="0" cy="0" r="6" fill="#7C3AED" />
        </g>

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
