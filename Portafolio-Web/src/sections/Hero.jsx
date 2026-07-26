import { useState } from "react"
import { motion } from "framer-motion"
import personal from "../data/personal"
import contact from "../data/contact"
import NeumorphicButton from "../components/NeumorphicButton"
import cumatz from "../assets/cumatz-cut.png"
import cumatzSonrie from "../assets/CumatzSonrie.jpeg"
import { HERO_FADE_OUT } from "../styles/transitions"
import { SURFACE, RAISED } from "../styles/neumorphism"



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

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function GmailIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457Z" />
    </svg>
  )
}

/* Tarjeta Stack — se reutiliza bajo la foto (lg) y abajo a la derecha (md) */
function StackCard({ className = "" }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-2xl bg-stone-900/70 border border-stone-700/80 backdrop-blur-md shadow-xl ${className}`}
    >
      <span className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-orange-600 to-amber-500 flex items-center justify-center text-stone-950">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
          <path d="m3 12 9 4.5L21 12" />
          <path d="m3 16.5 9 4.5 9-4.5" />
        </svg>
      </span>
      <div className="leading-tight text-left">
        <p className="text-[11px] uppercase tracking-wide text-stone-400">Stack</p>
        <p className="text-sm font-semibold text-stone-100">Full Stack Developer</p>
      </div>
    </div>
  )
}

/* Retrato enmarcado + tarjeta Stack — a la derecha en lg, en flujo debajo del texto en pantallas pequeñas */
function PortraitBlock({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-2xl border-2 border-stone-600/50 bg-stone-800/80 p-[3px] shadow-[inset_0_1px_0_rgba(168,162,158,0.15),0_8px_32px_rgba(0,0,0,0.6)]">
        <div className="rounded-2xl bg-stone-950 overflow-hidden">
          <img
            src={cumatzSonrie}
            alt="Oscar Cumatz"
            className="rounded-2xl w-56 h-[19rem] sm:w-72 sm:h-[24rem] lg:w-80 lg:h-[26rem] object-cover object-top select-none"
          />
        </div>
      </div>

      {/* Tarjeta Stack pegada debajo de la foto */}
      <StackCard className="mt-4" />
    </div>
  )
}

/* Redes de contacto — abajo a la izquierda en lg, centradas en pantallas pequeñas */
function SocialLinks({ className = "" }) {
  return (
    <div className={`flex flex-nowrap items-center gap-2 sm:gap-3 ${className}`}>

      {/* GitHub - blanco */}
      <a
        href={contact.github}
        target="_blank"
        rel="noreferrer"
        className="shrink-0 p-3 sm:p-4 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 group relative overflow-hidden"
        aria-label="GitHub"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        <div className="relative z-10">
          <GithubIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-white/90 transition-colors duration-300" />
        </div>
      </a>

      {/* LinkedIn - azul */}
      <a
        href={contact.linkedin || "#contact"}
        target={contact.linkedin ? "_blank" : undefined}
        rel="noreferrer"
        className="shrink-0 p-3 sm:p-4 rounded-full backdrop-blur-lg border border-blue-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/50 group relative overflow-hidden"
        aria-label="LinkedIn"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        <div className="relative z-10">
          <LinkedinIcon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
        </div>
      </a>

      {/* Instagram - rosa */}
      <a
        href={contact.instagram || "#contact"}
        target={contact.instagram ? "_blank" : undefined}
        rel="noreferrer"
        className="shrink-0 p-3 sm:p-4 rounded-full backdrop-blur-lg border border-pink-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-pink-500/30 hover:scale-110 hover:-rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-pink-500/50 group relative overflow-hidden"
        aria-label="Instagram"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        <div className="relative z-10">
          <InstagramIcon className="w-6 h-6 sm:w-7 sm:h-7 text-pink-500 group-hover:text-pink-400 transition-colors duration-300" />
        </div>
      </a>

      {/* Gmail - rojo */}
      <a
        href={`mailto:${contact.email}`}
        className="shrink-0 p-3 sm:p-4 rounded-full backdrop-blur-lg border border-red-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-red-500/30 hover:scale-110 hover:-rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-red-500/50 group relative overflow-hidden"
        aria-label="Gmail"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        <div className="relative z-10">
          <GmailIcon className="w-6 h-6 sm:w-7 sm:h-7 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
        </div>
      </a>

    </div>
  )
}

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  const handleDownloadCV = () => {
    const cvUrl = "/cv-oscar-cumatz.pdf"
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = "CV-Oscar-Cumatz.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden pt-20"
    >
      {/* Fondo base: centro rojizo oscuro → bordes superior morado-negro */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: [
            "radial-gradient(ellipse 80% 80% at 50% 75%, #1a0400 0%, #0d0201 60%, #0d0005 100%)",
          ].join(", "),
        }}
      />

      {/* Llama izquierda: rojo-naranja subiendo desde abajo a la izquierda */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: [
            "radial-gradient(ellipse 35% 70% at 8% 95%, rgba(192,56,10,0.8) 0%, rgba(224,64,16,0.5) 30%, rgba(255,85,0,0.2) 55%, transparent 75%)",
            "radial-gradient(ellipse 20% 50% at 5% 100%, rgba(255,85,0,0.6) 0%, rgba(192,56,10,0.3) 40%, transparent 70%)",
          ].join(", "),
        }}
      />

      {/* Llama derecha: rojo-naranja subiendo desde abajo a la derecha */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: [
            "radial-gradient(ellipse 35% 70% at 92% 95%, rgba(192,56,10,0.8) 0%, rgba(224,64,16,0.5) 30%, rgba(255,85,0,0.2) 55%, transparent 75%)",
            "radial-gradient(ellipse 20% 50% at 95% 100%, rgba(255,85,0,0.6) 0%, rgba(192,56,10,0.3) 40%, transparent 70%)",
          ].join(", "),
        }}
      />

      {/* Resplandor cálido central: naranja-ámbar suave desde atrás */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 45% 50% at 50% 75%, rgba(212,96,10,0.35) 0%, rgba(192,56,10,0.12) 45%, transparent 75%)",
        }}
      />

      {/* Oscurecimiento superior: bordes negros con tinte morado */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(13,0,5,0.9) 0%, rgba(13,0,5,0.4) 38%, transparent 60%)",
        }}
      />

      {/* Bruma inferior: base oscura que ancla las llamas */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(26,4,0,0.7) 0%, rgba(26,4,0,0.2) 0%, transparent 25%)",
        }}
      />

      {/* En pantallas pequeñas la barra de navegación no se muestra y arriba
          queda un hueco: este rótulo lo ocupa, con la misma píldora del menú */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sm:hidden absolute top-15 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap"
        style={{ backgroundColor: SURFACE, boxShadow: RAISED }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
          Portafolio
        </span>
        <span className="w-1 h-1 rounded-full bg-stone-600" />
        <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
          {personal.name}
        </span>
      </motion.div>

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
      <div className="hidden lg:flex absolute top-20 bottom-0 right-0 z-10 items-center justify-end pointer-events-none">
        {/* Halo cálido de luz detrás del retrato */}
        <div
          className="absolute bottom-0 right-0 w-[46vw] h-[85vh]"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 62% 45%, rgba(251,146,60,0.35), rgba(234,88,12,0.12) 55%, transparent 75%)",
          }}
        />
        <PortraitBlock className="mr-24" />
      </div>

      {/* Transición hacia "Sobre mí": el fondo se apaga a lo largo de media
          pantalla y aterriza en el color de costura que continúa abajo */}
      <div
        className="absolute inset-x-0 bottom-0 h-[42vh] min-h-[240px] z-10 pointer-events-none"
        style={{ background: HERO_FADE_OUT }}
      />

      {/* Capa 2 — Texto (portada), centrado */}
      <div className="relative z-20 min-h-[calc(100vh-5rem)] flex flex-col items-center lg:items-start justify-center text-center lg:text-left px-4 lg:pl-40 py-14 pb-28 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start"
          style={{ textShadow: "0 4px 22px rgba(0,0,0,0.7)" }}
        >
          <span className="font-script text-3xl sm:text-4xl text-amber-100 leading-none mb-2 md:mb-3">
            Hola soy
          </span>

          <h1 className="font-condensed uppercase text-amber-50 text-4xl sm:text-5xl md:text-7xl leading-[0.9] tracking-tight drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)]">
            {personal.name}
          </h1>

          <p className="mt-2 text-lg md:text-2xl text-stone-200 font-display">
            {personal.role}
          </p>

          <p className="mt-3 max-w-sm text-sm md:text-base text-stone-300/90 leading-relaxed">
            {personal.tagline}
          </p>

          <div className="mt-14 md:mt-16 w-full flex items-center gap-6 sm:gap-8 justify-center lg:justify-start">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <style>{`
                .nb-notebook { width:64px; height:72px; position:relative; cursor:pointer; }
                .nb-page3 { position:absolute; bottom:48px; left:12px; right:8px; height:16px; background:linear-gradient(135deg,#e8e2d4,#e0dace); border-radius:3px 3px 0 0; transition:bottom 0.3s ease 0.1s; }
                .nb-page2 { position:absolute; bottom:50px; left:10px; right:6px; height:20px; background:linear-gradient(135deg,#f0ebe0,#e8e2d4); border-radius:3px 3px 0 0; box-shadow:1px -1px 4px rgba(0,0,0,0.15); transition:bottom 0.3s ease 0.05s; }
                .nb-page { position:absolute; bottom:52px; left:8px; right:4px; height:24px; background:linear-gradient(135deg,#faf7f0,#f0ebe0); border-radius:3px 3px 0 0; transform-origin:bottom center; transform:rotateX(0deg); transition:transform 0.35s cubic-bezier(.25,.8,.25,1), bottom 0.35s ease, box-shadow 0.35s ease; box-shadow:1px -1px 6px rgba(0,0,0,0.2); display:flex; align-items:center; justify-content:flex-end; padding-right:4px; }
                .nb-notebook:hover .nb-page { bottom:72px; box-shadow:2px -4px 14px rgba(0,0,0,0.35); transform:rotateX(-8deg); }
                .nb-notebook:hover .nb-page2 { bottom:64px; }
                .nb-notebook:hover .nb-page3 { bottom:58px; }
                .nb-body { position:absolute; bottom:0; left:4px; right:0; height:60px; background:linear-gradient(135deg,#f5f0e8,#ede8dc); border-radius:3px; box-shadow:2px 3px 10px rgba(0,0,0,0.5); }
                .nb-spiral { position:absolute; left:0; top:4px; bottom:4px; width:8px; display:flex; flex-direction:column; justify-content:space-around; align-items:center; }
                .nb-ring { width:7px; height:7px; border:1.5px solid #c0a060; border-radius:50%; background:#1a0200; }
                .nb-lines { position:absolute; bottom:10px; left:14px; right:8px; display:flex; flex-direction:column; gap:5px; }
                .nb-line { height:1.5px; background:rgba(100,80,60,0.25); border-radius:1px; }
                .nb-line:nth-child(1){width:85%}
                .nb-line:nth-child(2){width:70%}
                .nb-line:nth-child(3){width:80%}
              `}</style>

              <div
                className="nb-notebook"
                title="Descargar CV"
                onClick={() => {
                  const cvUrl = "/cv-oscar-cumatz.pdf"
                  const link = document.createElement("a")
                  link.href = cvUrl
                  link.download = "CV-Oscar-Cumatz.pdf"
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                <div className="nb-page3" />
                <div className="nb-page2" />
                <div className="nb-page">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 2v6M4.5 6L7 8.5 9.5 6" stroke="#c05008" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.5 10.5h9" stroke="#c05008" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="nb-body">
                  <div className="nb-spiral">
                    <div className="nb-ring" />
                    <div className="nb-ring" />
                    <div className="nb-ring" />
                    <div className="nb-ring" />
                    <div className="nb-ring" />
                  </div>
                  <div className="nb-lines">
                    <div className="nb-line" />
                    <div className="nb-line" />
                    <div className="nb-line" />
                  </div>
                </div>
              </div>

              <span style={{ color: "rgba(200,170,130,0.75)", fontSize: "11px", letterSpacing: "1px", fontWeight: "600" }}>
              </span>
            </div>

            <NeumorphicButton
              href="#about"
              variant="primary"
              className="group relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 active:scale-95 duration-300 ease-out"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <span className="relative z-10">Conóceme</span>
            </NeumorphicButton>
          </div>

        </motion.div>

        {/* Pantallas pequeñas: el retrato y las redes pasan al flujo, debajo del texto */}
        <div className="lg:hidden mt-14 flex flex-col items-center gap-8 self-center">
          <PortraitBlock />
          <SocialLinks />
        </div>
      </div>

      {/* Redes de contacto — ancladas abajo a la izquierda solo en lg */}
      <motion.div
        initial={false}
        className="hidden lg:flex absolute bottom-8 lg:left-40 z-30 flex-col gap-4"
      >
        <SocialLinks />
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
