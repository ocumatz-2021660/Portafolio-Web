import { motion, AnimatePresence } from "framer-motion"
import { getSkillIcon } from "./SkillIcons"
import { SURFACE, RAISED, PRESSED } from "../styles/neumorphism"

const WHEEL = 420 // diámetro de la rueda completa
const RADIUS = 170 // distancia de cada nodo al centro (cabe dentro de WHEEL)
const WHEEL_TOP = 30 // desplazamiento de la rueda dentro del viewport
const VIEWPORT_H = 360 // alto visible: cubre el arco y el círculo de datos completo
const INFO = 220 // diámetro del círculo de datos
const FADE_BELOW = 45 // los nodos por debajo de esta y se desvanecen en vez de recortarse
const SIDE = 2 // cuántos nodos se ven a cada lado del activo
const ANGLE_STEP = 50 // separación angular fija entre nodos vecinos

const PANEL_BG = SURFACE

export default function SkillWheel({ skills, activeIndex, onSelect }) {
  const total = skills.length
  const active = skills[activeIndex]

  /* distancia cíclica al nodo activo: los que quedan fuera de la ventana
     salen por un lado y vuelven a entrar por el otro */
  const offsetFrom = (i) => {
    const d = (i - activeIndex + total) % total
    return d > total / 2 ? d - total : d
  }

  const setActiveIndex = onSelect
  const go = (dir) => onSelect((activeIndex + dir + total) % total)

  return (
    <div className="flex flex-col items-center">
      {/* la rueda se dibuja siempre con la misma geometría y se escala por
          breakpoint; el margen negativo recupera el alto que sobra al escalar */}
      <div className="origin-top scale-[0.6] sm:scale-[0.8] lg:scale-100 -mb-[144px] sm:-mb-[72px] lg:mb-0">
        <div
          className="relative overflow-hidden"
          style={{ width: WHEEL, height: VIEWPORT_H }}
        >
          <div
            className="absolute left-0"
            style={{ top: WHEEL_TOP, width: WHEEL, height: WHEEL }}
          >
            {skills.map((skill, i) => {
              const diff = offsetFrom(i)
              const angleRad = ((diff * ANGLE_STEP - 90) * Math.PI) / 180
              const x = RADIUS * Math.cos(angleRad)
              const y = RADIUS * Math.sin(angleRad)
              const isActive = i === activeIndex
              const outer = isActive ? 76 : 58
              const inner = Math.round(outer * 0.66)
              const iconColor = skill.dark ? "#3a3226" : "#ffffff"
              /* solo se ve la ventana alrededor del activo; el resto se
                 desvanece fuera del arco en vez de recortarse */
              const hidden = Math.abs(diff) > SIDE || y > FADE_BELOW

              return (
                <motion.button
                  key={skill.name}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Ver ${skill.name}`}
                  aria-hidden={hidden}
                  tabIndex={hidden ? -1 : 0}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-1/2 left-1/2 rounded-full flex items-center justify-center"
                  animate={{
                    x: x - outer / 2,
                    y: y - outer / 2,
                    width: outer,
                    height: outer,
                    opacity: hidden ? 0 : isActive ? 1 : 0.8,
                    boxShadow: isActive ? PRESSED : RAISED,
                  }}
                  transition={{ type: "spring", stiffness: 170, damping: 20 }}
                  style={{
                    backgroundColor: PANEL_BG,
                    pointerEvents: hidden ? "none" : "auto",
                  }}
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
                    {getSkillIcon(skill.code, isActive ? 28 : 22)}
                  </div>
                </motion.button>
              )
            })}

            {/* círculo de datos — vive en el centro exacto de la rueda y cabe
                entero dentro del viewport, así nada se recorta */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center px-5"
              style={{
                width: INFO,
                height: INFO,
                backgroundColor: PANEL_BG,
                boxShadow: PRESSED,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.22 }}
                  className="flex flex-col items-center w-full"
                >
                  {/* la sección a la que pertenece la habilidad se conserva
                      aunque las barras de comparación ya no estén */}
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500 text-center leading-tight">
                    {active.category}
                  </p>
                  <p className="text-sm font-medium uppercase tracking-wide text-stone-300 text-center leading-tight mt-1.5">
                    {active.name}
                  </p>
                  <p
                    className="text-4xl font-bold leading-none mt-2"
                    style={{ color: active.color }}
                  >
                    {active.percentage}%
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* arrow controls */}
      <div className="flex items-center gap-6 mt-2">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Habilidad anterior"
          className="w-9 h-9 rounded-full flex items-center justify-center text-stone-400 hover:text-orange-400 transition-colors"
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
                backgroundColor: i === activeIndex ? active.color : "#57534e",
                transform: i === activeIndex ? "scale(1.6)" : "scale(1)",
              }}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Siguiente habilidad"
          className="w-9 h-9 rounded-full flex items-center justify-center text-stone-400 hover:text-orange-400 transition-colors"
          style={{ backgroundColor: PANEL_BG, boxShadow: RAISED }}
        >
          &#8594;
        </button>
      </div>
    </div>
  )
}
