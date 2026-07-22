import { motion } from "framer-motion"
import personal from "../data/personal"
import useScrollAnimation from "../hooks/useScrollAnimation"

export default function Resume() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      id="resume"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="w-full max-w-3xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Currículum
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          }}
          className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-10 space-y-6"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {personal.name}
            </h3>
            <p className="text-indigo-600 font-medium">{personal.role}</p>
          </div>

          <div className="border-t border-gray-200" />

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Perfil</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {personal.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Educación</h4>
            <p className="text-gray-600 text-sm">
              <span className="font-medium">Técnico Superior Universitario en Informática</span>
              <br />
              Universidad Tecnológica — 3er semestre
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Tecnologías clave
            </h4>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "React", "Python", "Node.js", "SQL", "Git"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 text-center">
            <a
              href="#"
              className="inline-block bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Descargar CV (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
