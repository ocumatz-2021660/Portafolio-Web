import { motion } from "framer-motion"
import personal from "../data/personal"
import useScrollAnimation from "../hooks/useScrollAnimation"
import SectionWrapper from "../components/SectionWrapper"
import Panel from "../components/Panel"
import {
  AgeIcon,
  LocationIcon,
  MailIcon,
  LanguageIcon,
} from "../components/InfoIcons"
import { ABOUT_FADE_IN } from "../styles/transitions"
import SectionBackground from "../components/SectionBackground"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const DIVIDER = "#332e2a"

/* Un dato suelto: icono a la izquierda, etiqueta encima del valor. En columna
   el par etiqueta/valor se lee mejor que la fila con el valor a la derecha,
   ahora que el contenedor es ancho. */
function Dato({ icon, label, children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-stone-500 mt-1">{icon}</span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-stone-500 mb-1">
          {label}
        </p>
        <div className="text-base text-stone-200 font-medium break-words">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function About() {
  const [ref, isVisible] = useScrollAnimation()
  const datos = personal.datosPersonales

  return (
    <SectionWrapper
      id="about"
      className="relative overflow-hidden"
      overlay={
        /* arranca exactamente en el color en el que termina el Hero y se
           disuelve: la costura entre ambas secciones deja de existir */
        <div
          className="absolute inset-x-0 top-0 h-[55vh] min-h-[320px] pointer-events-none"
          style={{ background: ABOUT_FADE_IN }}
        />
      }
    >
      <SectionBackground position="top-right" color="rgba(180,60,10,0.22)" />
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
        className="space-y-12"
      >
        <motion.div variants={item} className="text-center">
          <h2 className="font-display text-4xl md:text-5xl text-stone-100 mb-3">
            Sobre mí
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto rounded-full" />
        </motion.div>

        {/* una sola columna: los datos personales van debajo y comparten ancho */}
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div variants={item}>
            <Panel className="p-6 sm:p-7 space-y-3">
              <h3 className="text-xl font-semibold text-stone-100">
                ¿Quién soy?
              </h3>
              <p className="text-stone-300 leading-relaxed text-base">
                {personal.quienSoy}
              </p>
            </Panel>

            {/* Metas y aspiraciones — en pausa
            <Panel className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-stone-100">
                Metas y aspiraciones
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-3">
                {personal.aspiraciones}
              </p>
              <ul className="space-y-2">
                {personal.metas.map((meta, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-400 text-sm">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400 mt-0.5">
                      ▸
                    </span>
                    {meta}
                  </li>
                ))}
              </ul>
            </Panel>
            */}

            {/* Capacidades se mudó a la sección Experiencia */}
          </motion.div>

          <motion.div variants={item}>
            <Panel className="p-6 sm:p-7 space-y-4">
              <h3 className="text-xl font-semibold text-stone-100">
                Datos personales
              </h3>
              <div className="h-px" style={{ backgroundColor: DIVIDER }} />

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 pt-1">
                <Dato icon={<AgeIcon size={17} />} label="Edad">
                  {datos.edad}
                </Dato>

                <Dato icon={<LocationIcon size={17} />} label="Ubicación">
                  {datos.ubicacion}
                </Dato>

                <Dato icon={<MailIcon size={17} />} label="Email">
                  <a
                    href={`mailto:${datos.email}`}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {datos.email}
                  </a>
                </Dato>

                <Dato icon={<LanguageIcon size={17} />} label="Idiomas">
                  {datos.idiomas.map((idioma) => (
                    <p key={idioma}>{idioma}</p>
                  ))}
                </Dato>
              </div>
            </Panel>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
