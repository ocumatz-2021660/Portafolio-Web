import { motion } from "framer-motion"
import useScrollAnimation from "../hooks/useScrollAnimation"

export default function SectionWrapper({ id, children, className = "" }) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center py-20 px-4 ${className}`}
    >
      <motion.div
        ref={ref}
        className="w-full max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  )
}
