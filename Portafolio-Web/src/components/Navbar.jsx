import useActiveSection from "../hooks/useActiveSection"

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="text-lg font-bold text-indigo-600">
          Portafolio
        </a>
        <div className="hidden sm:flex gap-6">
          {LINKS.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-600 hover:text-indigo-500"
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
