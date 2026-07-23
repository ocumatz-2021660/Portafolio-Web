import { motion } from "framer-motion"
import useTilt from "../hooks/useTilt"
import { SURFACE, RAISED, GLOW } from "../styles/neumorphism"

export default function ProjectCard({ project, index }) {
  const { ref, rotateX, rotateY } = useTilt()
  const isOffsetted = index % 2 !== 0

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={isOffsetted ? "lg:translate-y-8" : ""}
    >
      <motion.a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl p-6 group"
        style={{
          backgroundColor: SURFACE,
          boxShadow: RAISED,
        }}
        whileHover={{
          boxShadow: `${RAISED}, ${GLOW}`,
        }}
      >
        <h3 className="text-lg font-semibold text-stone-100 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-400 transition-all">
          {project.title}
        </h3>
        <p className="text-sm text-stone-400 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-stone-300 px-2.5 py-1 rounded-full border border-orange-600/30 bg-orange-600/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.a>
    </motion.div>
  )
}
