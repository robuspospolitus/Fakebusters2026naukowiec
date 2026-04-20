export function SheepCharacter({ size = "large" }: { size?: "small" | "large" }) {
  const scale = size === "large" ? 1 : 0.6;

  return (
    <div className="inline-block" style={{ transform: `scale(${scale})` }}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        {/* Body - fluffy cloud shape */}
        <ellipse cx="60" cy="70" rx="35" ry="30" fill="white" />
        <circle cx="45" cy="60" r="18" fill="white" />
        <circle cx="75" cy="60" r="18" fill="white" />
        <circle cx="40" cy="75" r="15" fill="white" />
        <circle cx="80" cy="75" r="15" fill="white" />

        {/* Head */}
        <ellipse cx="60" cy="40" rx="20" ry="22" fill="white" />

        {/* Ears */}
        <ellipse cx="48" cy="28" rx="8" ry="12" fill="white" />
        <ellipse cx="72" cy="28" rx="8" ry="12" fill="white" />
        <ellipse cx="48" cy="30" rx="4" ry="8" fill="#FFB6C1" />
        <ellipse cx="72" cy="30" rx="4" ry="8" fill="#FFB6C1" />

        {/* Face */}
        <circle cx="52" cy="38" r="3" fill="#333" />
        <circle cx="68" cy="38" r="3" fill="#333" />

        {/* Cute blush */}
        <circle cx="45" cy="45" r="4" fill="#FFB6C1" opacity="0.4" />
        <circle cx="75" cy="45" r="4" fill="#FFB6C1" opacity="0.4" />

        {/* Smile */}
        <path d="M 55 48 Q 60 52 65 48" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Legs */}
        <rect x="45" y="92" width="8" height="20" rx="4" fill="white" stroke="#DDD" strokeWidth="1" />
        <rect x="67" y="92" width="8" height="20" rx="4" fill="white" stroke="#DDD" strokeWidth="1" />
      </svg>
    </div>
  );
}
