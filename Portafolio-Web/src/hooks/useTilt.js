import { useRef, useEffect } from "react"
import { useMotionValue, useSpring } from "framer-motion"

export default function useTilt() {
  const ref = useRef(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springRotateX = useSpring(rotateX, { damping: 15, stiffness: 100 })
  const springRotateY = useSpring(rotateY, { damping: 15, stiffness: 100 })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const x = (e.clientX - centerX) / (rect.width / 2)
      const y = (e.clientY - centerY) / (rect.height / 2)

      rotateX.set(y * 15)
      rotateY.set(x * 15)
    }

    const handleMouseLeave = () => {
      rotateX.set(0)
      rotateY.set(0)
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [rotateX, rotateY])

  return { ref, rotateX: springRotateX, rotateY: springRotateY }
}
