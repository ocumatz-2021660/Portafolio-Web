import certItEssentials from "../assets/cert-it-essentials.png"
import certPowerBi from "../assets/cert-powerbi.png"

const personal = {
  name: "Oscar Cumatz",
  role: "Desarrollador Full-Stack",
  tagline: "Transformando ideas en código, con hambre de aprendizaje en el mundo digital",

  /* vive en public/, así que se sirve tal cual desde la raíz */
  cvUrl: "/curriculum-oscar-cumatz.pdf",
  cvFileName: "Currículum Oscar Cumatz.pdf",

  quienSoy:
    "Desarrollador Full Stack en formación constante, con interés en el desarrollo de aplicaciones web y la creación de interfaces llamativas. Enfocado en escribir código limpio y adaptarme a las innovaciones de la tecnología, aplicando buenas prácticas de desarrollo y fortaleciendo continuamente mis habilidades técnicas.",

  description:
    "Apasionada por la tecnología y el desarrollo de software. Actualmente cursando el tercer semestre de la carrera de Informática, con enfoque en desarrollo web y bases de datos. Me motiva la posibilidad de aprender más habilidades y expandirme en diferentes problemas creando soluciones reales para las personas.",

  metas: [
    "Especializarme en desarrollo de base de datos",
    "Contribuir a proyectos open-source",
    "Liderar equipos de desarrollo eficientemente",
    "Destacar un proyecto personal "
  ],

  aspiraciones:
    "Convertirme en una desarrolladora integral capaz de abordar problemas complejos con soluciones creativas y sostenibles a largo plazo, ser eficiente.",

  capacidades: [
    "Resolución analítica de problemas",
    "Trabajo en equipo y colaboración",
    "Aprendizaje autodidacta continuo",
    "Comunicación técnica efectiva",
  ],

  experiencia: {
    estado: "Sin experiencia formal",
    nota: "En proceso",
    aniosProgramando: 3,
  },

  educacion: [
    {
      titulo: "Educación Básica",
      institucion: "Centro Educativo Técnico Laboral Kinal",
      periodo: "2021 – 2023",
      descripcion:
        "Enfoque en la formación académica, técnica y ética humana, fundamentada en valores como la responsabilidad por medio de trabajos técnicos.",
    },
    {
      titulo: "Perito en Informática",
      institucion: "Centro Educativo Técnico Laboral Kinal",
      periodo: "2024 – 2026 (en proceso)",
      descripcion:
        "Enfoque en desarrollo de software, estructuras de datos, bases de datos y arquitectura de sistemas, análisis profundo y capacidad de resolución de problemas.",
    },
  ],

  certificaciones: [
    {
      titulo: "IT Essentials: PC Hardware and Software",
      emisor: "Cisco Networking Academy",
      fecha: "Agosto 2024",
      descripcion:
        "Fundamentos de hardware y software: ensamblaje y mantenimiento de equipos, instalación de sistemas operativos, redes básicas y diagnóstico de fallas.",
      imagen: certItEssentials,
    },
    {
      titulo: "Estrategias de negocios basadas en datos con Power BI",
      emisor: "Erasmus+ ECOCredGT",
      fecha: "Mayo 2026",
      descripcion:
        "Modelado, análisis y visualización de información con Power BI para convertir datos en decisiones de negocio. Impartido por Fundación Kinal.",
      imagen: certPowerBi,
    },
  ],

  datosPersonales: {
    edad: "18 años",
    ubicacion: "Ciudad de Guatemala",
    email: "cumatzsebastian123@gmail.com",
    idiomas: ["Español (nativo)", "Inglés (intermedio)"],
  },
}

export default personal
