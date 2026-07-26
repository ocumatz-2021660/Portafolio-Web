import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const ROW = 64 // alto fijo
const VISIBLE = 7 // filas visibles a la vez
const VIEW_H = ROW * VISIBLE
const PAD = 2  

const FADE =
  "linear-gradient(to bottom, transparent 0%, #000 14%, #000 86%, transparent 100%)"

export default function SkillPercentChart({ skills, activeIndex, onSelect }) {
  const total = skills.length
  const active = skills[activeIndex]
  const [virtual, setVirtual] = useState(activeIndex)
  const prevActive = useRef(activeIndex)

  useEffect(() => {
    const prev = prevActive.current
    if (prev === activeIndex) return

    let step = (activeIndex - prev + total) % total
    if (step > total / 2) step -= total

    prevActive.current = activeIndex
    setVirtual((v) => v + step)
  }, [activeIndex, total])

  const half = Math.ceil(VISIBLE / 2) + PAD
  const slots = []
  for (let p = virtual - half; p <= virtual + half; p += 1) {
    slots.push({ position: p, index: ((p % total) + total) % total })
  }

  return (
    <div className="flex flex-col w-full">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500 mb-3 text-center lg:text-left">
        Porcentajes
      </p>

      <div
        className="relative overflow-hidden"
        style={{
          height: VIEW_H,
          maskImage: FADE,
          WebkitMaskImage: FADE,
        }}
      >
        <motion.div
          className="absolute inset-x-0 top-0"
          animate={{ y: VIEW_H / 2 - ROW / 2 - virtual * ROW }}
          transition={{ type: "spring", stiffness: 190, damping: 26 }}
        >
          {slots.map(({ position, index }) => {
            const skill = skills[index]
            const isActive = index === activeIndex

            return (
              <button
                key={position}
                type="button"
                onClick={() => onSelect(index)}
                onFocus={() => onSelect(index)}
                aria-label={`${skill.name}: ${skill.percentage} por ciento`}
                aria-current={isActive}
                className="absolute inset-x-0 text-left px-3 flex flex-col justify-center rounded-xl transition-colors"
                style={{
                  top: position * ROW,
                  height: ROW,
                  backgroundColor: isActive ? `${active.color}12` : "transparent",
                }}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className="flex-1 min-w-0 truncate text-sm font-medium transition-colors"
                    style={{ color: isActive ? "#e7e5e4" : "#a8a29e" }}
                  >
                    {skill.name}
                  </span>

                  <span
                    className="flex-none text-sm font-semibold tabular-nums"
                    style={{
                      color: active.color,
                      opacity: isActive ? 1 : 0.65,
                    }}
                  >
                    {skill.percentage}%
                  </span>
                </div>
                <div
                  className="mt-2 h-1.5 rounded-full overflow-hidden"
                  style={{ backgroundColor: "rgba(120,113,108,0.22)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${skill.percentage}%`,
                      opacity: isActive ? 1 : 0.55,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{ backgroundColor: active.color }}
                  />
                </div>

                <span className="block mt-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                  {skill.category}
                </span>
              </button>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
