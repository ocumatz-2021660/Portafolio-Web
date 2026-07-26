import { motion } from "framer-motion"
import personal from "../data/personal"
import useScrollAnimation from "../hooks/useScrollAnimation"
import SectionWrapper from "../components/SectionWrapper"
import Panel from "../components/Panel"
import { SUNKEN_CHIP } from "../styles/neumorphism"
import { ABOUT_FADE_IN } from "../styles/transitions"

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

const DIVIDER = "#332e2a"

export default function About() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <SectionWrapper
      id="about"
      className="relative overflow-hidden"
      overlay={
        /* arranca exactamente en el color en el que termina el Hero y se
           disuelve: la costura entre ambas secciones deja de existir */
        <div
          className="absolute inset-x-0 top-0 h-[55vh] min-h-[320px] pointer-events-none"
          style={{ background: ABOUT_FADE_IN }}
        />
      }
    >
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
            <Panel className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-stone-100">
                Trayectoria
              </h3>
              <p className="text-stone-400 leading-relaxed text-sm">
                {personal.description}
              </p>
            </Panel>

            <Panel className="p-6 space-y-3">
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
            </Panel>

            <Panel className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-stone-100 mb-3">
                Capacidades
              </h3>
              <div className="flex flex-wrap gap-2">
                {personal.capacidades.map((cap, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-amber-200/85 px-3 py-1.5 rounded-full"
                    style={{ boxShadow: SUNKEN_CHIP }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </Panel>
          </motion.div>

          <motion.div variants={item}>
            <Panel className="p-6 space-y-4 sticky top-24">
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
                <div className="h-px" style={{ backgroundColor: DIVIDER }} />
                <div className="flex justify-between">
                  <span className="text-stone-500">Ubicación</span>
                  <span className="text-stone-200 font-medium">
                    {personal.datosPersonales.ubicacion}
                  </span>
                </div>
                <div className="h-px" style={{ backgroundColor: DIVIDER }} />
                <div className="flex justify-between">
                  <span className="text-stone-500">Email</span>
                  <span className="text-stone-200 font-medium text-xs truncate ml-2">
                    {personal.datosPersonales.email}
                  </span>
                </div>
                <div className="h-px" style={{ backgroundColor: DIVIDER }} />
                <div className="flex justify-between">
                  <span className="text-stone-500">Idiomas</span>
                  <span className="text-stone-200 font-medium text-xs text-right">
                    {personal.datosPersonales.idiomas.join(" / ")}
                  </span>
                </div>
              </div>
            </Panel>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
