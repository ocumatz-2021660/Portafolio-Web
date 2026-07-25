import { motion } from "framer-motion"
import personal from "../data/personal"
import contact from "../data/contact"
import NeumorphicButton from "../components/NeumorphicButton"
import cumatz from "../assets/cumatz-cut.png"
import cumatzSonrie from "../assets/CumatzSonrie.jpeg"



function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.66c0-1.35-.03-3.08-1.9-3.08-1.9 0-2.2 1.46-2.2 2.98V21h-4V9Z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden pt-20"
    >
      {/* Fondo original: resplandor cálido (se mantiene) */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-15"
        style={{
          background:
            "radial-gradient(at 30% 50%, rgb(249, 115, 22), rgb(251, 191, 36))",
        }}
      />

      {/* Capa 0 — Retrato de fondo (mismo recorte, difuminado suave y centrado) */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
        <img
          src={cumatz}
          alt=""
          aria-hidden="true"
          className="h-[82vh] w-auto max-w-none object-contain opacity-[0.16] select-none"
          style={{ filter: "saturate(0.9)" }}
        />
      </div>

      {/* Capa 1 — Retrato frontal, nítido, a la derecha junto al texto */}
      <div className="hidden lg:flex absolute inset-y-0 right-0 z-10 items-center justify-end pointer-events-none">
        {/* Halo cálido de luz detrás del retrato */}
        <div
          className="absolute bottom-0 right-0 w-[46vw] h-[85vh]"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 62% 45%, rgba(251,146,60,0.35), rgba(234,88,12,0.12) 55%, transparent 75%)",
          }}
        />
        <div className="relative mr-35">
          <div className="rounded-2xl border-2 border-stone-600/50 bg-stone-800/80 p-[3px] shadow-[inset_0_1px_0_rgba(168,162,158,0.15),0_8px_32px_rgba(0,0,0,0.6)]">
            <div className="rounded-2xl bg-stone-950 overflow-hidden">
              <img
                src={cumatzSonrie}
                alt="Oscar Cumatz"
                className="rounded-2xl w-64 h-80 object-cover object-top select-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Capa 2 — Texto (portada), centrado */}
      <div className="relative z-20 min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
          style={{ textShadow: "0 4px 22px rgba(0,0,0,0.7)" }}
        >
          <span className="font-script text-4xl md:text-4xl text-amber-100 leading-none -mb-1 md:-mb-1">
            Hola soy
          </span>

          <h1 className="font-condensed uppercase text-amber-50 text-5xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)]">
            {personal.name}
          </h1>

          <p className="mt-2 text-lg md:text-2xl text-stone-200 font-display">
            {personal.role}
          </p>

          <p className="mt-3 max-w-md text-sm md:text-base text-stone-300/90 leading-relaxed">
            {personal.tagline}
          </p>

          <div className="pt-6">
            <NeumorphicButton href="#about" variant="primary">
              Conóceme
            </NeumorphicButton>
          </div>
        </motion.div>
      </div>

      {/* Componente izquierdo — Encuéntrame + redes + stack de tecnologías */}
      <motion.div
        initial={false}
        className="absolute bottom-8 left-6 md:left-10 z-30 flex flex-col gap-4"
      >
        <div className="flex items-center gap-3">
          <span className="text-sm text-stone-400">Encuéntrame</span>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full bg-stone-900/70 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-orange-400 hover:border-orange-600/50 transition-colors backdrop-blur-sm"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={contact.linkedin || "#contact"}
            target={contact.linkedin ? "_blank" : undefined}
            rel="noreferrer"
            className="w-9 h-9 rounded-full bg-stone-900/70 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-orange-400 hover:border-orange-600/50 transition-colors backdrop-blur-sm"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </div>
      </motion.div>

      {/* Componente derecho — tarjeta Stack + barras de progreso */}
      <motion.div
        initial={false}
        className="hidden md:flex absolute bottom-8 right-6 md:right-10 z-30 flex-col gap-3 w-72"
      >
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-stone-900/70 border border-stone-700/80 backdrop-blur-md shadow-xl">
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-600 to-amber-500 flex items-center justify-center text-stone-950">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
              <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
              <path d="m3 12 9 4.5L21 12" />
              <path d="m3 16.5 9 4.5 9-4.5" />
            </svg>
          </span>
          <div className="leading-tight">
            <p className="text-[11px] uppercase tracking-wide text-stone-400">Stack</p>
            <p className="text-sm font-semibold text-stone-100">Full Stack Developer</p>
          </div>
        </div>

      </motion.div>

      {/* Indicador de scroll */}
      <motion.a
        href="#about"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-xs font-medium text-stone-500 hover:text-orange-500 transition-colors flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Conoce más
        <span className="text-lg">↓</span>
      </motion.a>
    </section>
  )
}
