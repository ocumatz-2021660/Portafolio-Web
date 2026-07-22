import { motion } from "framer-motion"

export default function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.techs.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.a>
  )
}
