import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TracedFrame from "./TracedFrame"
import { INSET_SURFACE, SUNKEN, SUNKEN_CHIP } from "../styles/neumorphism"

const RADIUS = 18
const SLIDE_MS = 4200 // avance automático, hasta que el usuario tome el control
const DRAG_THRESHOLD = 60 // px que hay que arrastrar para cambiar de captura

/* botones excavados en la superficie de la tarjeta */
const BTN_BG = "#1e1b18"
const BTN_PRESSED =
  "inset 3px 3px 7px rgba(0,0,0,0.8), inset -3px -3px 7px rgba(120,113,108,0.13)"
const BTN_CLASS =
  "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"

function GithubMark({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function ExternalMark({ size = 15 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 4h6v6M20 4l-8.5 8.5" />
      <path d="M18.5 14.5V19a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V7A1.5 1.5 0 0 1 5 5.5h4.5" />
    </svg>
  )
}

function ArrowButton({ side, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 -translate-y-1/2 ${
        side === "left" ? "left-3" : "right-3"
      } w-9 h-9 rounded-full flex items-center justify-center text-stone-200 hover:text-white transition-colors z-10`}
      style={{ backgroundColor: "rgba(15,14,12,0.72)", boxShadow: SUNKEN_CHIP }}
    >
      {side === "left" ? "←" : "→"}
    </button>
  )
}

export default function ProjectCard({ project, index }) {
  const images = project.images ?? []
  const total = images.length
  const [slide, setSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [direction, setDirection] = useState(1)

  /* el avance automático se apaga en cuanto el usuario toca el carrusel: a
     partir de ahí manda él */
  useEffect(() => {
    if (!autoPlay || total < 2) return undefined
    const id = setInterval(() => {
      setDirection(1)
      setSlide((s) => (s + 1) % total)
    }, SLIDE_MS)
    return () => clearInterval(id)
  }, [autoPlay, total])

  const go = (dir) => {
    setAutoPlay(false)
    setDirection(dir)
    setSlide((s) => (s + dir + total) % total)
  }

  const jumpTo = (i) => {
    setAutoPlay(false)
    setDirection(i > slide ? 1 : -1)
    setSlide(i)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="relative p-5 sm:p-6 border-chase"
      style={{
        backgroundColor: INSET_SURFACE,
        boxShadow: SUNKEN,
        borderRadius: RADIUS,
      }}
    >
      <TracedFrame radius={RADIUS} />

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* ---------- capturas ---------- */}
        <div
          className="relative w-full lg:w-[56%] shrink-0 rounded-xl overflow-hidden h-[220px] sm:h-[300px] lg:h-[330px]"
          style={{ backgroundColor: "#15120f" }}
        >
          {total > 0 ? (
            <>
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={slide}
                  src={images[slide].src}
                  alt={images[slide].alt}
                  custom={direction}
                  className="absolute inset-0 w-full h-full object-cover object-top select-none cursor-grab active:cursor-grabbing"
                  initial={{ opacity: 0, x: direction * 48 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -48 }}
                  transition={{ duration: 0.65, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -DRAG_THRESHOLD) go(1)
                    else if (info.offset.x > DRAG_THRESHOLD) go(-1)
                  }}
                  draggable={false}
                />
              </AnimatePresence>

              {total > 1 && (
                <>
                  <ArrowButton
                    side="left"
                    onClick={() => go(-1)}
                    label="Captura anterior"
                  />
                  <ArrowButton
                    side="right"
                    onClick={() => go(1)}
                    label="Siguiente captura"
                  />

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {images.map((image, i) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => jumpTo(i)}
                        aria-label={`Ir a la captura ${i + 1}`}
                        className="w-2 h-2 rounded-full transition-all"
                        style={{
                          backgroundColor: i === slide ? "#f97316" : "#78716c",
                          transform: i === slide ? "scale(1.35)" : "scale(1)",
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-stone-600 text-xs uppercase tracking-[0.2em]">
              Sin capturas
            </div>
          )}
        </div>

        {/* ---------- información, centrada junto a las capturas ---------- */}
        <div className="flex-1 min-w-0 flex flex-col justify-center gap-5">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-display text-stone-100 leading-tight">
              {project.title}
            </h3>
            <div className="h-1 w-14 rounded-full bg-gradient-to-r from-orange-600 to-amber-500" />
          </div>

          <p className="text-sm text-stone-400 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium text-amber-200/85 px-3 py-1.5 rounded-full"
                style={{ boxShadow: SUNKEN_CHIP }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BTN_CLASS} text-stone-300 hover:text-white`}
              style={{ backgroundColor: BTN_BG, boxShadow: BTN_PRESSED }}
            >
              <GithubMark />
              Código
            </a>

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_CLASS} text-amber-200/90 hover:text-amber-100`}
                style={{ backgroundColor: BTN_BG, boxShadow: BTN_PRESSED }}
              >
                <ExternalMark />
                Demo
              </a>
            ) : (
              <span
                title="Aún no publicado"
                className={`${BTN_CLASS} text-stone-600 cursor-not-allowed`}
                style={{ backgroundColor: BTN_BG, boxShadow: BTN_PRESSED }}
              >
                <ExternalMark />
                Demo
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
