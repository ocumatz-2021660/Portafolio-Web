import { motion } from "framer-motion"
import skills from "../data/skills"
import SkillWheel from "../components/SkillWheel"
import useScrollAnimation from "../hooks/useScrollAnimation"
import { SURFACE, RAISED } from "../styles/neumorphism"

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      <div
        className="absolute top-1/2 -right-32 w-96 h-96 blur-3xl opacity-12 -z-10"
        style={{
          background:
            "radial-gradient(at 50% 50%, rgb(249, 115, 22), rgb(217, 119, 6))",
        }}
      />

      <div className="w-full max-w-4xl mx-auto" ref={ref}>
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
          className="rounded-[32px] py-10 px-4 sm:px-10 mx-auto max-w-xl"
          style={{
            backgroundColor: SURFACE,
            boxShadow: RAISED,
          }}
        >
          <SkillWheel skills={skills} />
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -bottom-40 sm:-bottom-56 -translate-x-1/2 w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] rounded-full opacity-[0.08] bg-gradient-to-br from-orange-600 to-amber-500"
      />

      <motion.a
        href="#resume"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-stone-500 hover:text-orange-400 transition-colors flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Currículum
        <span>↓</span>
      </motion.a>
    </section>
  )
}
