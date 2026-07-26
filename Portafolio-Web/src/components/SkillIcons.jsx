/* eslint-disable react-refresh/only-export-components -- librería de glifos:
   los componentes son internos y solo se exporta el selector */

// Icon glyphs — drawn as simple, bold marks meant to sit on a solid colored
// badge (see SkillWheel), the way tech-stack icon grids in real apps look: a
// colored circle + a clean glyph. Generic/hand drawn shapes, not pixel copies
// of any brand's official artwork.

function Svg({ size, children, strokeWidth = 1.9 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

function Letters({ size, label, fontSize = 9, letterSpacing = -0.4 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <text
        x="12"
        y="15.6"
        textAnchor="middle"
        fontSize={fontSize}
        fontWeight="800"
        letterSpacing={letterSpacing}
        fill="currentColor"
        fontFamily="Sora, ui-sans-serif, system-ui"
      >
        {label}
      </text>
    </svg>
  )
}

function ReactAtom({ size }) {
  return (
    <Svg size={size}>
      <circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9.4" ry="3.9" strokeWidth="1.7" />
      <ellipse cx="12" cy="12" rx="9.4" ry="3.9" strokeWidth="1.7" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.4" ry="3.9" strokeWidth="1.7" transform="rotate(120 12 12)" />
    </Svg>
  )
}

/* React Native — el mismo átomo, pero encerrado en un marco de teléfono para
   distinguirlo de React a simple vista */
function PhoneAtom({ size }) {
  return (
    <Svg size={size}>
      <rect x="5.6" y="2.4" width="12.8" height="19.2" rx="2.4" strokeWidth="1.8" />
      <path d="M10.4 4.9h3.2" strokeWidth="1.5" />
      <circle cx="12" cy="12.4" r="1.35" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12.4" rx="5" ry="2.1" strokeWidth="1.3" />
      <ellipse cx="12" cy="12.4" rx="5" ry="2.1" strokeWidth="1.3" transform="rotate(60 12 12.4)" />
      <ellipse cx="12" cy="12.4" rx="5" ry="2.1" strokeWidth="1.3" transform="rotate(120 12 12.4)" />
    </Svg>
  )
}

function CodeTag({ size }) {
  return (
    <Svg size={size}>
      <polyline points="8.4 6.2 3 12 8.4 17.8" strokeWidth="2.1" />
      <polyline points="15.6 6.2 21 12 15.6 17.8" strokeWidth="2.1" />
      <path d="M13.4 4.6 10.6 19.4" strokeWidth="1.8" />
    </Svg>
  )
}

function Database({ size }) {
  return (
    <Svg size={size}>
      <ellipse cx="12" cy="6.2" rx="7.4" ry="2.9" strokeWidth="1.9" />
      <path d="M4.6 6.2v5.6c0 1.6 3.3 2.9 7.4 2.9s7.4-1.3 7.4-2.9V6.2" strokeWidth="1.9" />
      <path d="M4.6 11.8v5.6c0 1.6 3.3 2.9 7.4 2.9s7.4-1.3 7.4-2.9v-5.6" strokeWidth="1.9" />
    </Svg>
  )
}

function GitBranch({ size }) {
  return (
    <Svg size={size}>
      <circle cx="6.4" cy="5.4" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="6.4" cy="18.6" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="17.6" cy="9.6" r="2.2" fill="currentColor" stroke="none" />
      <path d="M6.4 7.6v8.8" strokeWidth="2" />
      <path d="M6.4 13.2c0-3.6 2.9-3.6 5.6-3.6h3.4" strokeWidth="2" />
    </Svg>
  )
}

function Waves({ size }) {
  return (
    <Svg size={size}>
      <path d="M2.6 9.2c1.4-2.7 3.2-2.7 4.7 0s3.2 2.7 4.7 0 3.2-2.7 4.7 0 3.2 2.7 4.7 0" strokeWidth="2.1" />
      <path d="M2.6 15.4c1.4-2.7 3.2-2.7 4.7 0s3.2 2.7 4.7 0 3.2-2.7 4.7 0 3.2 2.7 4.7 0" strokeWidth="2.1" />
    </Svg>
  )
}

/* Python — las dos serpientes entrelazadas: dos ganchos idénticos girados
   180° uno respecto del otro, cada uno con su ojo */
function Snakes({ size }) {
  return (
    <Svg size={size}>
      <path d="M15.4 3.4H9.2a3 3 0 0 0-3 3V12h5.8" strokeWidth="2.1" />
      <path d="M8.6 20.6h6.2a3 3 0 0 0 3-3V12h-5.8" strokeWidth="2.1" />
      <circle cx="14.2" cy="5.6" r="1" fill="currentColor" stroke="none" />
      <circle cx="9.8" cy="18.4" r="1" fill="currentColor" stroke="none" />
    </Svg>
  )
}

function CoffeeCup({ size }) {
  return (
    <Svg size={size}>
      <path d="M9 2.4c-1.1 1.4-1.1 2.4 0 3.8" strokeWidth="1.7" />
      <path d="M12.8 2.4c-1.1 1.4-1.1 2.4 0 3.8" strokeWidth="1.7" />
      <path d="M4.6 8.8h11.6v5.1a4.6 4.6 0 0 1-4.6 4.6H9.2a4.6 4.6 0 0 1-4.6-4.6z" strokeWidth="1.9" />
      <path d="M16.4 10.3h1.4a2.4 2.4 0 0 1 0 4.8h-1.4" strokeWidth="1.8" />
      <path d="M3.4 21.2h14" strokeWidth="1.9" />
    </Svg>
  )
}

function Leaf({ size }) {
  return (
    <Svg size={size}>
      <path
        d="M12 21.6c-3.5-2.7-5.3-5.7-5.3-9.1C6.7 8.6 8.5 5.3 12 2.4c3.5 2.9 5.3 6.2 5.3 10.1 0 3.4-1.8 6.4-5.3 9.1Z"
        strokeWidth="1.8"
      />
      <path d="M12 8.2v13.4" strokeWidth="1.7" />
    </Svg>
  )
}

/* Spring Boot — un muelle: espiral abierta que se cierra hacia el centro */
function Spiral({ size }) {
  return (
    <Svg size={size}>
      <path
        d="M20.4 12.6A8.4 8.4 0 1 1 12 3.6c4.2 0 6.6 2.7 6.6 5.6 0 2.6-2 4.5-4.5 4.5-2.1 0-3.7-1.5-3.7-3.3 0-1.5 1.1-2.7 2.6-2.7"
        strokeWidth="2"
      />
    </Svg>
  )
}

/* Node.js — el hexágono de lados verticales con la N dentro */
function Hexagon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2.4 20.2 7v10L12 21.6 3.8 17V7z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <text
        x="12"
        y="15.3"
        textAnchor="middle"
        fontSize="8.6"
        fontWeight="800"
        fill="currentColor"
        fontFamily="Sora, ui-sans-serif, system-ui"
      >
        N
      </text>
    </svg>
  )
}

/* Express — doble chevron: el gesto universal de "rápido / directo" */
function FastForward({ size }) {
  return (
    <Svg size={size}>
      <polyline points="4.6 5.8 10.8 12 4.6 18.2" strokeWidth="2.2" />
      <polyline points="12.4 5.8 18.6 12 12.4 18.2" strokeWidth="2.2" />
    </Svg>
  )
}

function Whale({ size }) {
  return (
    <Svg size={size}>
      <rect x="5.4" y="9.2" width="3.5" height="3.3" rx="0.4" strokeWidth="1.5" />
      <rect x="9.6" y="9.2" width="3.5" height="3.3" rx="0.4" strokeWidth="1.5" />
      <rect x="13.8" y="9.2" width="3.5" height="3.3" rx="0.4" strokeWidth="1.5" />
      <rect x="9.6" y="5.5" width="3.5" height="3.3" rx="0.4" strokeWidth="1.5" />
      <path d="M2.2 14.4h19c0 3.4-2.5 5.6-6 5.6H8.2c-3.5 0-6-2.2-6-5.6Z" strokeWidth="1.8" />
      <path d="M19.6 12.2c.9-.8 1.9-.7 2.6.2" strokeWidth="1.6" />
    </Svg>
  )
}

export function getSkillIcon(code, size = 22) {
  switch (code) {
    case "REACT":
      return <ReactAtom size={size} />
    case "RN":
      return <PhoneAtom size={size} />
    case "HTML":
      return <CodeTag size={size} />
    case "SQL":
      return <Database size={size} />
    case "GIT":
      return <GitBranch size={size} />
    case "TW":
      return <Waves size={size} />
    case "PY":
      return <Snakes size={size} />
    case "JAVA":
      return <CoffeeCup size={size} />
    case "MONGO":
      return <Leaf size={size} />
    case "SPRING":
      return <Spiral size={size} />
    case "NODE":
      return <Hexagon size={size} />
    case "EXPRESS":
      return <FastForward size={size} />
    case "DOCKER":
      return <Whale size={size} />
    case "CS":
      return <Letters size={size} label="C#" fontSize={9.5} />
    case "JS":
    default:
      return <Letters size={size} label="JS" fontSize={9.5} />
  }
}
