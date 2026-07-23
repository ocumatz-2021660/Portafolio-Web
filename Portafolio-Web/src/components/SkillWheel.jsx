import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { getSkillIcon } from "./SkillIcons"
import { SURFACE, RAISED, PRESSED } from "../styles/neumorphism"

const RADIUS = 140 // px, distance of each node from the wheel's center
const PANEL_BG = SURFACE

export default function SkillWheel({ skills }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = skills.length
  const angleStep = 360 / total
  const active = skills[activeIndex]

  const go = (dir) => setActiveIndex((i) => (i + dir + total) % total)

  return (
    <div className="flex flex-col items-center">
      {/* clipped viewport — only the top half of the wheel is visible, but the
          wheel itself keeps its full width/diameter, so it occupies the same
          horizontal footprint as a full circle would */}
      <div className="relative w-[300px] sm:w-[340px] h-[188px] sm:h-[212px] overflow-hidden scale-90 sm:scale-100">
        {/* the full circle lives here; only its top portion falls inside the
            viewport above, the rest is cropped away */}
        <div className="absolute left-0 top-[26px] w-[300px] sm:w-[340px] h-[300px] sm:h-[340px]">
          <motion.div
            key={active.color}
            className="absolute inset-0 rounded-full blur-3xl -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.22 }}
            transition={{ duration: 0.6 }}
            style={{ backgroundColor: active.color }}
          />

          {skills.map((skill, i) => {
            const diff = i - activeIndex
            const angleRad = ((diff * angleStep - 90) * Math.PI) / 180
            const x = RADIUS * Math.cos(angleRad)
            const y = RADIUS * Math.sin(angleRad)
            const isActive = i === activeIndex
            const outer = isActive ? 72 : 54
            const inner = Math.round(outer * 0.66)
            const iconColor = skill.dark ? "#3a3226" : "#ffffff"

            return (
              <motion.button
                key={skill.name}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Ver ${skill.name}`}
                whileTap={{ scale: 0.9 }}
                className="absolute top-1/2 left-1/2 rounded-full flex items-center justify-center"
                animate={{
                  x: x - outer / 2,
                  y: y - outer / 2,
                  width: outer,
                  height: outer,
                  opacity: isActive ? 1 : 0.8,
                  boxShadow: isActive ? PRESSED : RAISED,
                }}
                transition={{ type: "spring", stiffness: 170, damping: 20 }}
                style={{ backgroundColor: PANEL_BG }}
              >
                <div
                  className="rounded-full flex items-center justify-center transition-transform"
                  style={{
                    width: inner,
                    height: inner,
                    backgroundColor: skill.color,
                    color: iconColor,
                    boxShadow: isActive
                      ? "0 1px 3px rgba(0,0,0,0.12)"
                      : "0 3px 8px rgba(0,0,0,0.16)",
                    transform: isActive ? "scale(0.94)" : "scale(1)",
                  }}
                >
                  {getSkillIcon(skill.code, isActive ? 26 : 20)}
                </div>
              </motion.button>
            )
          })}

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25 }}
                className="text-center px-4"
              >
                <p className="text-sm font-semibold text-gray-700">
                  {active.name}
                </p>
                <p className="text-2xl font-bold" style={{ color: active.color }}>
                  {active.percentage}%
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* arrow controls */}
      <div className="flex items-center gap-6 mt-2">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Habilidad anterior"
          className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:text-indigo-600 transition-colors"
          style={{ backgroundColor: PANEL_BG, boxShadow: RAISED }}
        >
          &#8592;
        </button>
        <div className="flex gap-1.5">
          {skills.map((skill, i) => (
            <button
              key={skill.name}
              type="button"
              aria-label={`Ir a ${skill.name}`}
              onClick={() => setActiveIndex(i)}
              className="w-1.5 h-1.5 rounded-full transition-all"
              style={{
                backgroundColor: i === activeIndex ? active.color : "#c9c5dd",
                transform: i === activeIndex ? "scale(1.6)" : "scale(1)",
              }}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Siguiente habilidad"
          className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:text-indigo-600 transition-colors"
          style={{ backgroundColor: PANEL_BG, boxShadow: RAISED }}
        >
          &#8594;
        </button>
      </div>
    </div>
  )
}
