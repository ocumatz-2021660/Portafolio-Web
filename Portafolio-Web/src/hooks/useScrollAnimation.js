import { useEffect, useRef, useState } from "react"

export default function useScrollAnimation(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (!options.repeat) observer.unobserve(element)
        } else if (options.repeat) {
          setIsVisible(false)
        }
      },
      { threshold: options.threshold ?? 0.15, ...options }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [options.threshold, options.repeat])

  return [ref, isVisible]
}
