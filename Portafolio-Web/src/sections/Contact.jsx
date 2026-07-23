import { motion } from "framer-motion"
import contact from "../data/contact"
import useScrollAnimation from "../hooks/useScrollAnimation"
import useTilt from "../hooks/useTilt"
import NeumorphicButton from "../components/NeumorphicButton"
import { SURFACE, RAISED, GLOW } from "../styles/neumorphism"

const socials = [
  {
    label: "GitHub",
    url: contact.github,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Email",
    url: `mailto:${contact.email}`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      <div
        className="absolute -left-32 top-1/3 w-96 h-96 blur-3xl opacity-10 -z-10"
        style={{
          background:
            "radial-gradient(at 50% 50%, rgb(251, 191, 36), rgb(249, 115, 22))",
        }}
      />

      <div className="w-full max-w-2xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-stone-100 mb-3">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-amber-500 mx-auto rounded-full mb-6" />
          <p className="text-stone-400">
            ¿Quieres contactarme? Estoy abierto a nuevas oportunidades
          </p>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <NeumorphicButton href={`mailto:${contact.email}`} variant="primary">
            Enviar email
          </NeumorphicButton>
        </motion.div>

        <div className="text-stone-500 mb-8">o conéctate en</div>

        <motion.div
          className="flex justify-center gap-4"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {socials.map((social) => (
            <SocialButton key={social.label} social={social} />
          ))}
        </motion.div>

        {/* LinkedIn placeholder for future addition */}
        <div className="mt-8 text-stone-600 text-xs">
          {/* LinkedIn will be added here when available */}
        </div>
      </div>
    </section>
  )
}

function SocialButton({ social }) {
  const { ref, rotateX, rotateY } = useTilt()

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <motion.a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center text-stone-300 transition-all"
        style={{
          backgroundColor: SURFACE,
          boxShadow: RAISED,
        }}
        whileHover={{
          boxShadow: `${RAISED}, ${GLOW}`,
        }}
      >
        {social.icon}
      </motion.a>
    </motion.div>
  )
}
