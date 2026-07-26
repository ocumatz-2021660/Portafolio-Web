import { useState } from "react"
import { motion } from "framer-motion"
import skills from "../data/skills"
import SkillWheel from "../components/SkillWheel"
import SkillPercentChart from "../components/SkillPercentChart"
import useScrollAnimation from "../hooks/useScrollAnimation"
import TracedFrame from "../components/TracedFrame"
import { INSET_SURFACE, SUNKEN } from "../styles/neumorphism"
import SectionBackground from "../components/SectionBackground"

const RADIUS = 32

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation()
  /* la rueda y el gráfico de porcentajes comparten la selección */
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center py-[4.25rem] px-4 overflow-hidden"
    >
      <SectionBackground position="center-left" color="rgba(212,96,10,0.20)" />
      <div className="w-full max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-stone-100 mb-3">
            Habilidades
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto rounded-full" />
          <p className="text-stone-400 mt-4 max-w-lg mx-auto">
            Toca una habilidad o usa las flechas para girar la rueda
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative py-10 px-4 sm:px-8 mx-auto max-w-md sm:max-w-xl lg:max-w-none border-chase"
          style={{
            backgroundColor: INSET_SURFACE,
            boxShadow: SUNKEN,
            borderRadius: RADIUS,
          }}
        >
          <TracedFrame radius={RADIUS} />

          {/* rueda a la izquierda, gráfico de porcentajes a la derecha */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-6 xl:gap-10">
            <div className="w-full lg:w-auto lg:flex-none">
              <SkillWheel
                skills={skills}
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
              />
            </div>

            <div
              className="hidden lg:block w-px self-stretch"
              style={{ backgroundColor: "rgba(120,113,108,0.25)" }}
            />

            <div className="w-full lg:flex-1 lg:min-w-0 max-w-xl mx-auto lg:mx-0">
              <SkillPercentChart
                skills={skills}
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#resume"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-stone-500 hover:text-orange-400 transition-colors flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Experiencia
        <span>↓</span>
      </motion.a>
    </section>
  )
}
