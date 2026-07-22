import { motion } from "framer-motion"
import personal from "../data/personal"

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-indigo-600 font-medium text-lg mb-2">
            Hola, soy
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            {personal.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-3">
            {personal.role}
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto mb-8">
            {personal.tagline}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#about"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors"
            >
              Conóceme
            </a>
            <a
              href="#contact"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:border-indigo-300 hover:text-indigo-600 transition-colors"
            >
              Contáctame
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
