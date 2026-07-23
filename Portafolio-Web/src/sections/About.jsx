import { motion } from "framer-motion"
import personal from "../data/personal"
import useScrollAnimation from "../hooks/useScrollAnimation"
import SectionWrapper from "../components/SectionWrapper"
import { SURFACE, RAISED } from "../styles/neumorphism"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function About() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <SectionWrapper id="about" className="relative overflow-hidden">
      <div
        className="absolute -top-40 right-0 w-96 h-96 blur-3xl opacity-10 -z-10"
        style={{
          background:
            "radial-gradient(at 50% 50%, rgb(249, 115, 22), rgb(251, 191, 36))",
        }}
      />

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
        className="space-y-12"
      >
        <motion.div variants={item} className="text-center">
          <h2 className="font-display text-4xl md:text-5xl text-stone-100 mb-3">
            Sobre mí
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div variants={item} className="lg:col-span-2 space-y-6">
            <div
              className="rounded-xl p-6 space-y-3"
              style={{
                backgroundColor: SURFACE,
                boxShadow: RAISED,
              }}
            >
              <h3 className="text-lg font-semibold text-stone-100">
                Trayectoria
              </h3>
              <p className="text-stone-400 leading-relaxed text-sm">
                {personal.description}
              </p>
            </div>

            <div
              className="rounded-xl p-6 space-y-3"
              style={{
                backgroundColor: SURFACE,
                boxShadow: RAISED,
              }}
            >
              <h3 className="text-lg font-semibold text-stone-100">
                Metas y aspiraciones
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-3">
                {personal.aspiraciones}
              </p>
              <ul className="space-y-2">
                {personal.metas.map((meta, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-400 text-sm">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400 mt-0.5">
                      ▸
                    </span>
                    {meta}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-xl p-6 space-y-3"
              style={{
                backgroundColor: SURFACE,
                boxShadow: RAISED,
              }}
            >
              <h3 className="text-lg font-semibold text-stone-100 mb-3">
                Capacidades
              </h3>
              <div className="flex flex-wrap gap-2">
                {personal.capacidades.map((cap, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-stone-300 px-3 py-1.5 rounded-full border border-orange-600/30 bg-orange-600/5"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <div
              className="rounded-xl p-6 space-y-4 sticky top-24"
              style={{
                backgroundColor: SURFACE,
                boxShadow: RAISED,
              }}
            >
              <h3 className="text-lg font-semibold text-stone-100">
                Datos personales
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-500">Edad</span>
                  <span className="text-stone-200 font-medium">
                    {personal.datosPersonales.edad}
                  </span>
                </div>
                <div className="border-t border-stone-700/30" />
                <div className="flex justify-between">
                  <span className="text-stone-500">Ubicación</span>
                  <span className="text-stone-200 font-medium">
                    {personal.datosPersonales.ubicacion}
                  </span>
                </div>
                <div className="border-t border-stone-700/30" />
                <div className="flex justify-between">
                  <span className="text-stone-500">Email</span>
                  <span className="text-stone-200 font-medium text-xs truncate ml-2">
                    {personal.datosPersonales.email}
                  </span>
                </div>
                <div className="border-t border-stone-700/30" />
                <div className="flex justify-between">
                  <span className="text-stone-500">Idiomas</span>
                  <span className="text-stone-200 font-medium text-xs text-right">
                    {personal.datosPersonales.idiomas.join(" / ")}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
