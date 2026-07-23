// Icon glyphs — drawn as simple, bold, filled marks meant to sit on a
// solid colored badge (see SkillWheel), the way tech-stack icon grids in
// real apps look: a colored circle + a clean white glyph. Generic/hand
// drawn shapes, not pixel copies of any brand's official artwork.

function Svg({ size, children, viewBox = "0 0 24 24" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

function Letters({ size, label, fontSize = 8.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <text
        x="12"
        y="15.5"
        textAnchor="middle"
        fontSize={fontSize}
        fontWeight="700"
        fill="currentColor"
        fontFamily="ui-sans-serif, system-ui"
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
      <ellipse cx="12" cy="12" rx="9.5" ry="4" strokeWidth="1.7" />
      <ellipse cx="12" cy="12" rx="9.5" ry="4" strokeWidth="1.7" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="4" strokeWidth="1.7" transform="rotate(120 12 12)" />
    </Svg>
  )
}

function CodeBrackets({ size }) {
  return (
    <Svg size={size}>
      <polyline points="9 6 3 12 9 18" strokeWidth="2.1" />
      <polyline points="15 6 21 12 15 18" strokeWidth="2.1" />
    </Svg>
  )
}

function Database({ size }) {
  return (
    <Svg size={size}>
      <ellipse cx="12" cy="6.2" rx="7.5" ry="2.8" strokeWidth="1.9" />
      <path d="M4.5 6.2v5.6c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8V6.2" strokeWidth="1.9" />
      <path d="M4.5 11.8v5.6c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8v-5.6" strokeWidth="1.9" />
    </Svg>
  )
}

function GitBranch({ size }) {
  return (
    <Svg size={size}>
      <circle cx="6" cy="5.5" r="2.1" fill="currentColor" stroke="none" />
      <circle cx="6" cy="18.5" r="2.1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="9.5" r="2.1" fill="currentColor" stroke="none" />
      <path d="M6 7.6v8.9" strokeWidth="2" />
      <path d="M6 12c0-3.6 3.2-5.2 9-5.2" strokeWidth="2" />
    </Svg>
  )
}

function Waves({ size }) {
  return (
    <Svg size={size}>
      <path d="M2.5 9.5c1.4-2.6 3.1-2.6 4.5 0s3.1 2.6 4.5 0 3.1-2.6 4.5 0 3.1 2.6 4.5 0" strokeWidth="2.1" />
      <path d="M2.5 15.5c1.4-2.6 3.1-2.6 4.5 0s3.1 2.6 4.5 0 3.1-2.6 4.5 0 3.1 2.6 4.5 0" strokeWidth="2.1" />
    </Svg>
  )
}

export function getSkillIcon(code, size = 22) {
  switch (code) {
    case "REACT":
      return <ReactAtom size={size} />
    case "HTML":
      return <CodeBrackets size={size} />
    case "SQL":
      return <Database size={size} />
    case "GIT":
      return <GitBranch size={size} />
    case "TW":
      return <Waves size={size} />
    case "NODE":
      return <Letters size={size} label="N" fontSize={11} />
    case "PY":
      return <Letters size={size} label="Py" fontSize={9} />
    case "JS":
    default:
      return <Letters size={size} label="JS" fontSize={9} />
  }
}
