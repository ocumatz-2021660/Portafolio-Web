import { motion } from "framer-motion"
import useTilt from "../hooks/useTilt"
import { RAISED } from "../styles/neumorphism"

export default function ProfilePhoto({ src = null }) {
  const { ref, rotateX, rotateY } = useTilt()

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="w-64 h-64 rounded-full relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #ea580c, #f97316, #fb923c, #fbbf24, #fcd34d, #ea580c)",
          padding: "3px",
          animation: "spin 8s linear infinite",
        }}
      >
        <div
          className="absolute inset-0 rounded-full bg-stone-900 flex items-center justify-center"
          style={{ boxShadow: RAISED }}
        >
          {src ? (
            <img
              src={src}
              alt="Oscar Cumatz"
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
              OC
            </span>
          )}
        </div>
      </motion.div>

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.div>
  )
}
