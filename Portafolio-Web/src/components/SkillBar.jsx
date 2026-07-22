import { motion } from "framer-motion"

export default function SkillBar({ name, percentage }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm font-medium">
        <span className="text-gray-700">{name}</span>
        <span className="text-indigo-600">{percentage}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
