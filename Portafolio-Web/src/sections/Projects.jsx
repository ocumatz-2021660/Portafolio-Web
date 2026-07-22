import { motion } from "framer-motion"
import projects from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import useScrollAnimation from "../hooks/useScrollAnimation"

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-gray-50"
    >
      <div className="w-full max-w-5xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Proyectos
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
          <p className="text-gray-500 mt-4">
            Algunos de los proyectos que he desarrollado
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
