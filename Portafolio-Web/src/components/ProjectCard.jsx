import { motion } from "framer-motion"
import useTilt from "../hooks/useTilt"
import TracedFrame from "./TracedFrame"
import { INSET_SURFACE, SUNKEN, SUNKEN_CHIP } from "../styles/neumorphism"

const RADIUS = 18

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
        className="relative block p-6 group"
        style={{
          backgroundColor: INSET_SURFACE,
          boxShadow: SUNKEN,
          borderRadius: RADIUS,
        }}
      >
        <TracedFrame radius={RADIUS} />

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
              className="text-xs font-medium text-amber-200/85 px-2.5 py-1 rounded-full"
              style={{ boxShadow: SUNKEN_CHIP }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.a>
    </motion.div>
  )
}
