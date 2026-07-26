/* Iconos de línea para los datos personales: sin fondo ni relleno, heredan el
   color y se alinean con el texto, como si fueran un carácter más. */

function Glyph({ size = 15, children }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function AgeIcon(props) {
  return (
    <Glyph {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.2" />
      <path d="M8 2.8v4.4M16 2.8v4.4M3.5 10h17" />
    </Glyph>
  )
}

export function LocationIcon(props) {
  return (
    <Glyph {...props}>
      <path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </Glyph>
  )
}

export function MailIcon(props) {
  return (
    <Glyph {...props}>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2.2" />
      <path d="m3.8 7.4 7.1 5a2 2 0 0 0 2.2 0l7.1-5" />
    </Glyph>
  )
}

export function LanguageIcon(props) {
  return (
    <Glyph {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z" />
    </Glyph>
  )
}
