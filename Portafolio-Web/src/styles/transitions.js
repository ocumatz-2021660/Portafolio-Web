/* Costura entre el Hero y "Sobre mí".

   La clave para que no se vea el corte es que el color en el borde sea
   EXACTAMENTE el mismo por arriba y por abajo: el Hero termina en SEAM y
   "Sobre mí" empieza en SEAM, y de ahí se disuelve hacia el negro del sitio.
   Por eso los dos degradados viven aquí juntos y no sueltos en cada sección. */

export const SEAM = "#150d09" // rgb(21,13,9): negro con el rescoldo del Hero

/* Muchas paradas en vez de dos: una rampa lineal de alfa se percibe como un
   escalón: repartirlas imita una curva suave y evita el bandeado. */
export const HERO_FADE_OUT = [
  "linear-gradient(to bottom,",
  "rgba(21,13,9,0) 0%,",
  "rgba(21,13,9,0.10) 24%,",
  "rgba(21,13,9,0.30) 46%,",
  "rgba(21,13,9,0.58) 66%,",
  "rgba(21,13,9,0.84) 84%,",
  `${SEAM} 100%)`,
].join(" ")

export const ABOUT_FADE_IN = [
  "linear-gradient(to bottom,",
  `${SEAM} 0%,`,
  "rgba(21,13,9,0.80) 16%,",
  "rgba(21,13,9,0.48) 38%,",
  "rgba(21,13,9,0.20) 62%,",
  "rgba(21,13,9,0.05) 82%,",
  "rgba(21,13,9,0) 100%)",
].join(" ")
