import { motion } from "framer-motion"
import projects from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import useScrollAnimation from "../hooks/useScrollAnimation"

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      <div
        className="absolute right-0 bottom-1/4 w-96 h-96 blur-3xl opacity-12 -z-10"
        style={{
          background:
            "radial-gradient(at 50% 50%, rgb(249, 115, 22), rgb(217, 119, 6))",
        }}
      />

      <div className="w-full max-w-5xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-stone-100 mb-3">
            Proyectos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto rounded-full" />
          <p className="text-stone-400 mt-4">
            Algunos de los proyectos que he desarrollado
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
