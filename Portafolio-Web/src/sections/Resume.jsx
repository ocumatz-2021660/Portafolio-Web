import { motion } from "framer-motion"
import personal from "../data/personal"
import useScrollAnimation from "../hooks/useScrollAnimation"
import useTilt from "../hooks/useTilt"
import NeumorphicButton from "../components/NeumorphicButton"
import { SURFACE, RAISED } from "../styles/neumorphism"

export default function Resume() {
  const [ref, isVisible] = useScrollAnimation()
  const { ref: tiltRef, rotateX, rotateY } = useTilt()

  return (
    <section
      id="resume"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      <div
        className="absolute -left-32 top-1/4 w-96 h-96 blur-3xl opacity-10 -z-10"
        style={{
          background:
            "radial-gradient(at 50% 50%, rgb(251, 191, 36), rgb(249, 115, 22))",
        }}
      />

      <div className="w-full max-w-3xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-stone-100 mb-3">
            Currículum
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          ref={tiltRef}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl p-8 md:p-10 space-y-6"
          style={{
            backgroundColor: SURFACE,
            boxShadow: RAISED,
          }}
        >
          <div className="space-y-2">
            <h3 className="font-display text-3xl text-stone-100">
              {personal.name}
            </h3>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-400 font-medium">
              {personal.role}
            </p>
          </div>

          <div className="border-t border-stone-700/30" />

          <div>
            <h4 className="font-semibold text-stone-200 mb-2">Perfil</h4>
            <p className="text-stone-400 text-sm leading-relaxed">
              {personal.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-stone-200 mb-3">Educación</h4>
            <div className="flex gap-4">
              <div
                className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #ea580c, #fbbf24)",
                }}
              />
              <div>
                <p className="text-stone-100 text-sm font-medium">
                  Técnico Superior Universitario en Informática
                </p>
                <p className="text-stone-500 text-xs mt-0.5">
                  Universidad Tecnológica — 3er semestre
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-stone-200 mb-3">
              Tecnologías clave
            </h4>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "React", "Python", "Node.js", "SQL", "Git"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-stone-300 px-3 py-1.5 rounded-full border border-orange-600/30 bg-orange-600/5"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="border-t border-stone-700/30 pt-6 text-center">
            <NeumorphicButton href="#" variant="primary">
              Descargar CV (PDF)
            </NeumorphicButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
