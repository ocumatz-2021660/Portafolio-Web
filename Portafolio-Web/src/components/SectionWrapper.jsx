import { motion } from "framer-motion"
import useScrollAnimation from "../hooks/useScrollAnimation"

/* `overlay` se pinta a sangre, fuera del contenedor centrado: sirve para
   degradados de transición entre secciones. */
export default function SectionWrapper({
  id,
  children,
  className = "",
  overlay = null,
}) {
  const [ref, isVisible] = useScrollAnimation({ repeat: true })

  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center py-[4.25rem] px-4 ${className}`}
    >
      {overlay}
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
