import { motion } from "framer-motion"
import contact from "../data/contact"
import useScrollAnimation from "../hooks/useScrollAnimation"
import SectionBackground from "../components/SectionBackground"

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-[4.25rem] px-4 overflow-hidden"
    >
      <SectionBackground position="bottom-left" color="rgba(210,90,15,0.22)" />

      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16" ref={ref}>

        {/* Columna izquierda - Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-stone-100 mb-3 leading-tight">
            ¿Quieres contactarme?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full mb-6" />

          <p className="text-stone-400 text-sm md:text-base max-w-md mb-6">
            ¡¡Escríbeme a cumatzsebastian123@gmail.com o encuéntrame en mis redes profesionales para comunicarnos!!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span className="text-orange-500 font-medium text-sm md:text-base">Contáctanos en</span>
          </motion.div>
        </motion.div>

        {/* Columna derecha - Iconos de redes sociales */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <style>{`
            .sc-main { display:flex; flex-direction:column; gap:0.5em; }
            .sc-up { display:flex; flex-direction:row; gap:0.5em; }
            .sc-down { display:flex; flex-direction:row; gap:0.5em; }
            .sc-card-wrapper {
              width:80px; height:80px; position:relative;
            }
            .sc-card-wrapper::before {
              content:''; position:absolute; inset:-2px;
              background: conic-gradient(from var(--angle,0deg), transparent 0%, transparent 35%, #f97316 50%, transparent 65%, transparent 100%);
              border-radius: inherit;
              animation: spinBorder 3s linear infinite;
            }
            .sc-card-wrapper::after {
              content:''; position:absolute; inset:0;
              background:#1a0f0a; border-radius:inherit; z-index:1;
            }
            .sc-card-wrapper.sc-w1 { border-radius:70px 5px 5px 5px; }
            .sc-card-wrapper.sc-w2 { border-radius:5px 70px 5px 5px; }
            .sc-card-wrapper.sc-w3 { border-radius:5px 5px 5px 70px; }
            .sc-card-wrapper.sc-w4 { border-radius:5px 5px 70px 5px; }
            .sc-card-wrapper.sc-w1::before { border-radius:70px 5px 5px 5px; }
            .sc-card-wrapper.sc-w2::before { border-radius:5px 70px 5px 5px; }
            .sc-card-wrapper.sc-w3::before { border-radius:5px 5px 5px 70px; }
            .sc-card-wrapper.sc-w4::before { border-radius:5px 5px 70px 5px; }
            .sc-card-wrapper.sc-w1::after { border-radius:70px 5px 5px 5px; }
            .sc-card-wrapper.sc-w2::after { border-radius:5px 70px 5px 5px; }
            .sc-card-wrapper.sc-w3::after { border-radius:5px 5px 5px 70px; }
            .sc-card-wrapper.sc-w4::after { border-radius:5px 5px 70px 5px; }
            @keyframes spinBorder {
              to { --angle: 360deg; }
            }
            @property --angle {
              syntax: '<angle>';
              initial-value: 0deg;
              inherits: false;
            }
            .sc-card {
              width:80px; height:80px; outline:none; border:none;
              box-shadow: rgba(0,0,0,0.4) 0px 4px 12px;
              transition: all 0.2s ease-in-out; cursor:pointer;
              display:flex; align-items:center; justify-content:center;
              position:relative; z-index:2;
            }
            .sc-card1 { background:#1a0f0a; border-radius:70px 5px 5px 5px; }
            .sc-card2 { background:#1a0f0a; border-radius:5px 70px 5px 5px; }
            .sc-card3 { background:#1a0f0a; border-radius:5px 5px 5px 70px; }
            .sc-card4 { background:#1a0f0a; border-radius:5px 5px 70px 5px; }
            .sc-card1:hover { scale:1.1; background:#cc39a4; }
            .sc-card2:hover { scale:1.1; background:#0A66C2; }
            .sc-card3:hover { scale:1.1; background:#333; }
            .sc-card4:hover { scale:1.1; background:#EA4335; }
            .sc-card1:hover svg { fill:#fff; }
            .sc-card2:hover svg { fill:#fff; }
            .sc-card3:hover svg { fill:#fff; }
            .sc-card4:hover svg { fill:#fff; }
          `}</style>

          <div className="sc-main">
            <div className="sc-up">
              {/* Instagram */}
              <div className="sc-card-wrapper sc-w1">
                <a href={contact.instagram || "https://instagram.com/"} target="_blank" rel="noreferrer" className="sc-card sc-card1" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="28px" height="28px" fill="#cc39a4">
                    <g transform="scale(8,8)">
                      <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"/>
                    </g>
                  </svg>
                </a>
              </div>
              {/* LinkedIn */}
              <div className="sc-card-wrapper sc-w2">
                <a href={contact.linkedin || "https://www.linkedin.com/"} target="_blank" rel="noreferrer" className="sc-card sc-card2" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28px" height="28px" fill="#0A66C2">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.66c0-1.35-.03-3.08-1.9-3.08-1.9 0-2.2 1.46-2.2 2.98V21h-4V9Z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="sc-down">
              {/* GitHub */}
              <div className="sc-card-wrapper sc-w3">
                <a href={contact.github} target="_blank" rel="noreferrer" className="sc-card sc-card3" aria-label="GitHub">
                  <svg viewBox="0 0 30 30" width="28px" height="28px" fill="#a8a29e">
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
                  </svg>
                </a>
              </div>
              {/* Email */}
              <div className="sc-card-wrapper sc-w4">
                <a href={`mailto:${contact.email}`} className="sc-card sc-card4" aria-label="Email">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28px" height="28px" fill="#EA4335">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
