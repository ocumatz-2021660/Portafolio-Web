export const SURFACE = "#1c1917"

export const RAISED = "8px 8px 18px rgba(0,0,0,0.6), -8px -8px 18px rgba(87,83,78,0.25)"

export const PRESSED = "inset 6px 6px 12px rgba(0,0,0,0.8), inset -6px -6px 12px rgba(120,113,108,0.15)"

export const GLOW = "0 0 20px rgba(249,115,22,0.25)"

/* Capa interior de los contenedores hundidos: un punto más clara que el fondo
   del sitio (#0f0e0c), para que se lea como una superficie por debajo. */
export const INSET_SURFACE = "#231f1c"

/* Hundido suave para paneles grandes: sombra interior marcada arriba-izquierda
   y luz tenue abajo-derecha. Sin sombra exterior: nada de halos difuminados. */
export const SUNKEN =
  "inset 7px 7px 15px rgba(0,0,0,0.75), inset -7px -7px 15px rgba(120,113,108,0.11)"

/* La misma idea a escala de pastilla, para badges y etiquetas */
export const SUNKEN_CHIP =
  "inset 2px 2px 5px rgba(0,0,0,0.65), inset -2px -2px 5px rgba(120,113,108,0.10)"
