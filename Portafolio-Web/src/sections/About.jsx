import { motion } from "framer-motion"
import personal from "../data/personal"
import useScrollAnimation from "../hooks/useScrollAnimation"
import SectionWrapper from "../components/SectionWrapper"

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
    <SectionWrapper id="about">
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
        className="space-y-12"
      >
        <motion.div variants={item} className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Sobre mí
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div variants={item} className="space-y-5">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Trayectoria
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {personal.description}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Metas y aspiraciones
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                {personal.aspiraciones}
              </p>
              <ul className="space-y-1.5">
                {personal.metas.map((meta, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <span className="text-indigo-500 mt-1">&#8226;</span>
                    {meta}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Capacidades
              </h3>
              <div className="flex flex-wrap gap-2">
                {personal.capacidades.map((cap, i) => (
                  <span
                    key={i}
                    className="bg-indigo-50 text-indigo-700 text-sm px-3 py-1.5 rounded-full"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Datos personales
            </h3>
            <div className="bg-gray-50 rounded-xl p-6 space-y-3 border border-gray-100">
              <div className="flex justify-between">
                <span className="text-gray-500">Edad</span>
                <span className="text-gray-800 font-medium">
                  {personal.datosPersonales.edad}
                </span>
              </div>
              <div className="border-t border-gray-200" />
              <div className="flex justify-between">
                <span className="text-gray-500">Ubicación</span>
                <span className="text-gray-800 font-medium">
                  {personal.datosPersonales.ubicacion}
                </span>
              </div>
              <div className="border-t border-gray-200" />
              <div className="flex justify-between">
                <span className="text-gray-500">Email</span>
                <span className="text-gray-800 font-medium">
                  {personal.datosPersonales.email}
                </span>
              </div>
              <div className="border-t border-gray-200" />
              <div className="flex justify-between">
                <span className="text-gray-500">Idiomas</span>
                <span className="text-gray-800 font-medium">
                  {personal.datosPersonales.idiomas.join(" / ")}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
