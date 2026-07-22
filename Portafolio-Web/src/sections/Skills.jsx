import { motion } from "framer-motion"
import skills from "../data/skills"
import SkillBar from "../components/SkillBar"
import useScrollAnimation from "../hooks/useScrollAnimation"

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-gray-50"
    >
      <div className="w-full max-w-4xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Habilidades
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Tecnologías y herramientas con las que he trabajado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <SkillBar name={skill.name} percentage={skill.percentage} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
