// src/components/FloralOrnament.tsx
// Ilustrasi bunga & dedaunan orisinal (SVG) dipakai berulang di beberapa section

interface FloralOrnamentProps {
  className?: string;
  flip?: boolean;
}

export function FloralBouquet({ className = "", flip = false }: FloralOrnamentProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`pointer-events-none ${className}`}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      fill="none"
    >
      {/* tangkai */}
      <path d="M60 112 C 55 92, 50 74, 44 54" stroke="#8AA084" strokeWidth="1.6" opacity="0.6" />
      <path d="M60 112 C 66 96, 72 82, 80 62" stroke="#8AA084" strokeWidth="1.6" opacity="0.6" />
      <path d="M60 112 C 60 98, 60 84, 60 68" stroke="#8AA084" strokeWidth="1.4" opacity="0.5" />

      {/* daun */}
      <ellipse cx="50" cy="68" rx="7" ry="3.2" fill="#8AA084" opacity="0.7" transform="rotate(-35 50 68)" />
      <ellipse cx="72" cy="74" rx="7" ry="3.2" fill="#8AA084" opacity="0.7" transform="rotate(30 72 74)" />
      <ellipse cx="60" cy="86" rx="6" ry="3" fill="#8AA084" opacity="0.6" transform="rotate(-10 60 86)" />

      {/* bunga mawar (lapis lingkaran) */}
      <circle cx="44" cy="52" r="11" fill="#8A1F35" opacity="0.9" />
      <circle cx="44" cy="52" r="6" fill="#B24B5C" opacity="0.9" />
      <circle cx="34" cy="46" r="7.5" fill="#B24B5C" opacity="0.85" />
      <circle cx="34" cy="46" r="4" fill="#D98A93" opacity="0.9" />
      <circle cx="52" cy="40" r="6" fill="#D98A93" opacity="0.9" />

      <circle cx="80" cy="60" r="10" fill="#B24B5C" opacity="0.9" />
      <circle cx="80" cy="60" r="5" fill="#D98A93" opacity="0.9" />
      <circle cx="90" cy="53" r="6.5" fill="#8A1F35" opacity="0.85" />
      <circle cx="90" cy="53" r="3.2" fill="#D98A93" opacity="0.9" />
      <circle cx="70" cy="50" r="5" fill="#C9A875" opacity="0.9" />

      {/* bunga kecil pengisi */}
      <circle cx="58" cy="58" r="2.4" fill="#C9A875" opacity="0.8" />
      <circle cx="66" cy="64" r="2" fill="#B24B5C" opacity="0.7" />
    </svg>
  );
}

export function FloralSprig({ className = "" }: FloralOrnamentProps) {
  return (
    <svg viewBox="0 0 60 60" className={`pointer-events-none ${className}`} fill="none">
      <path d="M4 4 C 16 8, 26 18, 30 32" stroke="#8AA084" strokeWidth="1.2" opacity="0.6" />
      <ellipse cx="18" cy="14" rx="4" ry="2" fill="#8AA084" opacity="0.6" transform="rotate(20 18 14)" />
      <circle cx="10" cy="9" r="4.5" fill="#B24B5C" opacity="0.85" />
      <circle cx="10" cy="9" r="2.2" fill="#D98A93" opacity="0.9" />
      <circle cx="20" cy="6" r="3" fill="#C9A875" opacity="0.85" />
      <circle cx="26" cy="18" r="2.6" fill="#8A1F35" opacity="0.8" />
    </svg>
  );
}