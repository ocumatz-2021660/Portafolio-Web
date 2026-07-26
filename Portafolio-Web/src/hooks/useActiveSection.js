import { useEffect, useState } from "react"

const SECTIONS = [
  "hero",
  "about",
  "skills",
  "resume",
  "certifications",
  "projects",
  "contact",
]

export default function useActiveSection() {
  const [active, setActive] = useState("hero")

  useEffect(() => {
    /* se guarda cuánto se ve de cada sección y gana la que más ocupa la
       pantalla: con varias cruzando el umbral a la vez, quedarse con la
       última del lote dejaba fuera a las secciones intermedias */
    const ratios = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0
          )
        }

        let bestId = null
        let bestRatio = 0
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        }

        if (bestId) setActive(bestId)
      },
      {
        threshold: [0, 0.15, 0.3, 0.5, 0.7, 0.9, 1],
        rootMargin: "-80px 0px 0px 0px",
      }
    )

    for (const id of SECTIONS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return active
}
