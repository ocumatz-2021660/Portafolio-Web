import { useState } from "react"
import { motion } from "framer-motion"
import personal from "../data/personal"
import projects from "../data/projects"
import useScrollAnimation from "../hooks/useScrollAnimation"
import Panel from "../components/Panel"
import { BriefcaseIcon, CapIcon, CodeIcon } from "../components/InfoIcons"
import { SUNKEN_CHIP } from "../styles/neumorphism"

const STAT_BG = "#1b1815" // caja excavada dentro del panel, un tono más honda

function Stat({ value, label }) {
  return (
    <div
      className="rounded-xl px-4 py-4 text-center"
      style={{ backgroundColor: STAT_BG, boxShadow: SUNKEN_CHIP }}
    >
      <p className="text-3xl font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
        {value}
      </p>
      <p className="text-[10px] uppercase tracking-[0.15em] text-stone-500 mt-2">
        {label}
      </p>
    </div>
  )
}

/* Botón de descarga: se levanta al pasar el cursor apoyado en su propia
   sombra y se hunde al pulsar. El foco de teclado usa los mismos estados que
   el hover para que no quede invisible al tabular. */
function DownloadCV({ href = "#" }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)

  return (
    <a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsActive(false)
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => {
        setIsHovered(false)
        setIsActive(false)
      }}
      style={{
        color: isHovered ? "#e7e5e4" : "rgba(231, 229, 228, 0.72)",
        padding: "10px 15px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px",
        textShadow: "0 1px 3px rgba(0,0,0,0.6)",
        background: isHovered
          ? "linear-gradient(to bottom, rgba(168,162,158,0.32), rgba(68,64,60,0.45))"
          : "rgba(120, 113, 108, 0.16)",
        fontSize: "0.9rem",
        fontWeight: 600,
        borderRadius: "5px",
        border: "1px solid transparent",
        borderColor: isHovered ? "rgba(214,211,209,0.45)" : "transparent",
        margin: "0 5px",
        overflow: "hidden",
        transition: "0.2s",
        boxShadow:
          !isActive && isHovered ? "0 3px rgba(120,113,108,0.65)" : "none",
        transform: isActive
          ? "translateY(1px)"
          : isHovered
            ? "translateY(-3px)"
            : "none",
      }}
    >
      <svg
        viewBox="0 0 256 256"
        height="32"
        width="38"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12"
          fill="currentColor"
        />
      </svg>
      Descargar CV
    </a>
  )
}

/* etiqueta de columna, como el rótulo que encabeza cada bloque */
function ColumnLabel({ children }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500 mb-4 px-1">
      {children}
    </p>
  )
}

export default function Resume() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      id="resume"
      className="relative min-h-screen flex items-center justify-center py-24 px-4 overflow-hidden"
      /* si el contenido llega a ser más alto que la pantalla, el centrado
         normal lo desborda por arriba y el título acaba bajo el menú fijo */
      style={{ alignItems: "safe center" }}
    >
      <div className="w-full max-w-5xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-stone-100 mb-3">
            Experiencia
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-6 items-start"
        >
          {/* columna izquierda — experiencia y capacidades */}
          <div>
            <ColumnLabel>Experiencia profesional</ColumnLabel>

            <div className="space-y-6">
              <Panel className="p-6 space-y-5">
                <div className="flex items-start gap-3">
                  <BriefcaseIcon size={20} className="text-stone-500 mt-0.5" />
                  <div>
                    <p className="text-base font-medium text-stone-200">
                      {personal.experiencia.estado}
                    </p>
                    <p className="text-xs text-amber-200/80 mt-1">
                      {personal.experiencia.nota}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  <Stat
                    value={`${personal.experiencia.aniosProgramando} años`}
                    label="Programando"
                  />
                  <Stat value={projects.length} label="Proyectos" />
                </div>
              </Panel>

              <Panel className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <CodeIcon size={17} className="text-stone-500" />
                  <h3 className="text-base font-semibold text-stone-100">
                    Capacidades
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {personal.capacidades.map((cap) => (
                    <span
                      key={cap}
                      className="text-xs font-medium text-amber-200/85 px-3 py-1.5 rounded-full"
                      style={{ boxShadow: SUNKEN_CHIP }}
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </Panel>

              <div className="text-center pt-1">
                <DownloadCV href="#" />
              </div>
            </div>
          </div>

          {/* columna derecha — formación académica */}
          <div>
            <ColumnLabel>Formación académica</ColumnLabel>

            <div className="space-y-6">
              {personal.educacion.map((edu) => (
                <Panel key={edu.titulo} className="p-6 space-y-2">
                  <CapIcon size={22} className="text-amber-400/80 mb-2" />
                  <h4 className="text-base font-semibold text-stone-100">
                    {edu.titulo}
                  </h4>
                  <p className="text-xs text-stone-500">{edu.institucion}</p>
                  <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
                    {edu.periodo}
                  </p>
                  <p className="text-sm text-stone-400 leading-relaxed pt-1">
                    {edu.descripcion}
                  </p>
                </Panel>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
