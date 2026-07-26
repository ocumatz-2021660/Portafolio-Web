import { useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import useActiveSection from "../hooks/useActiveSection"
import { SURFACE, RAISED, PRESSED } from "../styles/neumorphism"

const LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Experiencia", href: "#resume" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
]

function MagneticLink({ link, isActive }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })
  const scale = useSpring(1, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.25)
    y.set((e.clientY - cy) * 0.25)
    scale.set(1.18)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    scale.set(1)
  }

  return (
    <motion.a
      ref={ref}
      href={link.href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
        scale,
        display: "inline-block",
        boxShadow: isActive ? PRESSED : "none",
        background: isActive
          ? "linear-gradient(90deg, #ea580c, #f97316, #fbbf24)"
          : "transparent",
        color: isActive ? "transparent" : "#a8a29e",
        WebkitBackgroundClip: isActive ? "text" : "unset",
        backgroundClip: isActive ? "text" : "unset",
      }}
      className="text-sm font-medium px-4 py-2 rounded-full transition-colors"
    >
      {link.label}
    </motion.a>
  )
}

export default function Navbar() {
  const active = useActiveSection()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div className="flex justify-center pt-4 px-4">
        {/* Desktop pill navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden sm:flex gap-1 px-4 py-2 rounded-full pointer-events-auto"
          style={{
            backgroundColor: SURFACE,
            boxShadow: RAISED,
          }}
        >
          {LINKS.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <MagneticLink key={link.href} link={link} isActive={isActive} />
            )
          })}
        </motion.div>

      </div>

      {/* Móvil — botón flotante "+" abajo a la derecha con su menú desplegable */}
      <div className="sm:hidden fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              className="origin-bottom-right rounded-2xl p-2 min-w-44 pointer-events-auto"
              style={{
                backgroundColor: SURFACE,
                boxShadow: RAISED,
              }}
            >
              {LINKS.map((link) => {
                const isActive = active === link.href.slice(1)
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="block text-sm font-medium text-right px-4 py-2.5 rounded-xl transition-all"
                    style={{
                      boxShadow: isActive ? PRESSED : "none",
                      background: isActive
                        ? "linear-gradient(90deg, #ea580c, #f97316, #fbbf24)"
                        : "transparent",
                      color: isActive ? "transparent" : "#a8a29e",
                      WebkitBackgroundClip: isActive ? "text" : "unset",
                      backgroundClip: isActive ? "text" : "unset",
                    }}
                  >
                    {link.label}
                  </a>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          onClick={() => setMenuOpen((o) => !o)}
          className="pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center active:scale-95 transition-transform"
          style={{
            backgroundColor: SURFACE,
            boxShadow: menuOpen ? PRESSED : RAISED,
          }}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <motion.svg
            animate={{ rotate: menuOpen ? 135 : 0 }}
            transition={{ duration: 0.25 }}
            className="w-7 h-7 text-orange-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            viewBox="0 0 24 24"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </motion.svg>
        </motion.button>
      </div>
    </nav>
  )
}
