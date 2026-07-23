import { motion } from "framer-motion"
import useActiveSection from "../hooks/useActiveSection"
import { SURFACE, RAISED, PRESSED } from "../styles/neumorphism"

const LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Currículum", href: "#resume" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
]

export default function Navbar() {
  const active = useActiveSection()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 pointer-events-none">
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
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium px-4 py-2 rounded-full transition-all"
              style={{
                boxShadow: isActive ? PRESSED : "none",
                background: isActive
                  ? "linear-gradient(90deg, #ea580c, #f97316, #fbbf24)"
                  : "transparent",
                color: isActive
                  ? "transparent"
                  : "#a8a29e",
                WebkitBackgroundClip: isActive ? "text" : "unset",
                backgroundClip: isActive ? "text" : "unset",
              }}
            >
              {link.label}
            </a>
          )
        })}
      </motion.div>
    </nav>
  )
}
