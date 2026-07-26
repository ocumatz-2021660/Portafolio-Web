import { useLayoutEffect, useRef, useState } from "react"

/* Disolución por píxeles al cargar: un lienzo opaco del color del fondo se va
   borrando por bloques siguiendo una matriz Bayer 8×8 — el mismo dithering
   ordenado que usaban los juegos de 8/16 bits para fundir pantallas. */

const BG = "#0f0e0c" // mismo fondo que el body: parece que la página se dibuja sola
const FLASH = "rgba(249,115,22,0.55)" // naranja de la marca en el frente de avance
const BLOCK = 14 // lado del "píxel" en px
const DURATION = 1150 // ms
const LEAD = 0.07 // porción de bloques que queda encendida antes de apagarse
const JITTER = 0.12 // ruido sobre el umbral Bayer para romper el patrón perfecto
const SEEN_KEY = "pixel-intro-seen"

// prettier-ignore
const BAYER = [
  [ 0, 32,  8, 40,  2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44,  4, 36, 14, 46,  6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [ 3, 35, 11, 43,  1, 33,  9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47,  7, 39, 13, 45,  5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
]

function shouldPlay() {
  if (typeof window === "undefined") return false
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return false
  try {
    return window.sessionStorage.getItem(SEEN_KEY) !== "1"
  } catch {
    return true // modo privado sin storage: se reproduce igual
  }
}

export default function PixelIntro() {
  const [active, setActive] = useState(shouldPlay)
  const canvasRef = useRef(null)

  useLayoutEffect(() => {
    if (!active) return undefined

    try {
      window.sessionStorage.setItem(SEEN_KEY, "1")
    } catch {
      /* sin storage la intro se repite: no es motivo para romper nada */
    }

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const w = window.innerWidth
    const h = window.innerHeight

    canvas.width = Math.ceil(w * dpr)
    canvas.height = Math.ceil(h * dpr)
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    ctx.scale(dpr, dpr)

    /* el lienzo se pinta en el mismo commit que el montaje, así que el color
       de respaldo del elemento ya no hace falta y sí estorbaría al borrar */
    ctx.fillStyle = BG
    ctx.fillRect(0, 0, w, h)
    canvas.style.backgroundColor = "transparent"

    const cols = Math.ceil(w / BLOCK)
    const rows = Math.ceil(h / BLOCK)
    const cells = new Array(cols * rows)

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const threshold = BAYER[row % 8][col % 8] / 64
        cells[row * cols + col] = {
          x: col * BLOCK,
          y: row * BLOCK,
          order: threshold * (1 - JITTER) + Math.random() * JITTER,
        }
      }
    }
    cells.sort((a, b) => a.order - b.order)

    const lead = Math.round(cells.length * LEAD)
    let lit = 0 // bloques ya encendidos en naranja
    let cleared = 0 // bloques ya borrados (dejan ver la página)
    let start = 0
    let raf = 0

    const frame = (now) => {
      if (!start) start = now
      const p = Math.min(1, (now - start) / DURATION)
      const eased = p * p * (3 - 2 * p) // smoothstep: arranca y termina suave
      const target = Math.round(eased * cells.length)

      ctx.fillStyle = FLASH
      for (; lit < target; lit += 1) {
        const cell = cells[lit]
        ctx.fillRect(cell.x, cell.y, BLOCK, BLOCK)
      }

      /* el borrado va un poco por detrás: deja un frente de píxeles
         encendidos, como el barrido de un monitor viejo */
      const clearTarget = p < 1 ? Math.max(0, target - lead) : cells.length
      for (; cleared < clearTarget; cleared += 1) {
        const cell = cells[cleared]
        // +1 px cubre las costuras que deja el redondeo del dpr
        ctx.clearRect(cell.x, cell.y, BLOCK + 1, BLOCK + 1)
      }

      if (p < 1) {
        raf = requestAnimationFrame(frame)
      } else {
        setActive(false)
      }
    }

    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [active])

  if (!active) return null

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ backgroundColor: BG }}
    />
  )
}
