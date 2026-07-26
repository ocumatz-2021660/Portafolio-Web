import { motion } from "framer-motion"
import projects from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import useScrollAnimation from "../hooks/useScrollAnimation"
import SectionBackground from "../components/SectionBackground"

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation({ repeat: true })

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center py-[4.25rem] px-4 overflow-hidden"
    >
      <SectionBackground position="center" color="rgba(200,65,12,0.18)" />
      <div className="w-full max-w-5xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-stone-100 mb-3">
            Proyectos Desarrollados
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto rounded-full" />
        </motion.div>

        {/* una fila completa por proyecto */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
