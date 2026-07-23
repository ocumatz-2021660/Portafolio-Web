import { motion } from "framer-motion"
import personal from "../data/personal"
import ProfilePhoto from "../components/ProfilePhoto"
import NeumorphicButton from "../components/NeumorphicButton"

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-15"
        style={{
          background:
            "radial-gradient(at 30% 50%, rgb(249, 115, 22), rgb(251, 191, 36))",
        }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 font-medium text-lg mb-2">
                Hola, soy
              </p>
              <h1 className="font-display text-5xl md:text-6xl text-stone-100 mb-3">
                {personal.name}
              </h1>
              <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 mb-4">
                {personal.role}
              </p>
            </div>

            <p className="text-base text-stone-400 max-w-md leading-relaxed">
              {personal.tagline}
            </p>

            <div className="flex gap-4 pt-4">
              <NeumorphicButton href="#about" variant="primary">
                Conóceme
              </NeumorphicButton>
              <NeumorphicButton href="#contact" variant="secondary">
                Contáctame
              </NeumorphicButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProfilePhoto />
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-stone-500 hover:text-orange-500 transition-colors flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Conoce más
        <span className="text-lg">↓</span>
      </motion.a>
    </section>
  )
}
