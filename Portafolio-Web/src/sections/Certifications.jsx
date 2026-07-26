import { motion } from "framer-motion"
import personal from "../data/personal"
import useScrollAnimation from "../hooks/useScrollAnimation"
import Panel from "../components/Panel"
import SectionBackground from "../components/SectionBackground"

/* alto fijo para las dos miniaturas: los diplomas tienen proporciones
   distintas y sin recorte una tarjeta quedaba mucho más alta que la otra */
const THUMB_H = "h-44 sm:h-52"

export default function Certifications() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      id="certifications"
      className="relative min-h-screen flex items-center justify-center py-[5.1rem] px-4 overflow-hidden"
      style={{ alignItems: "safe center" }}
    >
      <SectionBackground position="center" color="rgba(180,70,15,0.20)" />
      <div className="w-full max-w-4xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-stone-100 mb-3">
            Certificaciones
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto rounded-full" />
          <p className="text-stone-400 mt-4">
            Formación complementaria acreditada
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {personal.certificaciones.map((cert) => (
            <Panel key={cert.titulo} className="p-6 flex flex-col gap-5">
              <div>
                <h3 className="text-base font-semibold text-stone-100 leading-snug">
                  {cert.titulo}
                </h3>
                <p className="text-xs text-stone-500 mt-1.5">
                  {cert.emisor} · {cert.fecha}
                </p>
              </div>

              {/* el diploma abre a tamaño completo en otra pestaña */}
              <a
                href={cert.imagen}
                target="_blank"
                rel="noopener noreferrer"
                title="Ver certificado completo"
                className={`block rounded-xl overflow-hidden transition-opacity hover:opacity-90 ${THUMB_H}`}
                style={{ backgroundColor: "#15120f" }}
              >
                <img
                  src={cert.imagen}
                  alt={`Certificado: ${cert.titulo}`}
                  className="w-full h-full object-cover object-top select-none"
                  loading="lazy"
                />
              </a>

              <p className="text-sm text-stone-400 leading-relaxed">
                {cert.descripcion}
              </p>
            </Panel>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
