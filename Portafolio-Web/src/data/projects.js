import dashboardBanco from "../assets/Dashboard-Banco.jpeg"
import transferenciaBanco from "../assets/Transferencia-Banco.png"
import depositoBanco from "../assets/Deposito-Banco.png"
import adminCuentasBanco from "../assets/Admin-cuentas-Banco.png"
import adminUsuariosBanco from "../assets/Admin-usuarios-Banco.jpeg"
import perfilBanco from "../assets/Perfil-Banco.jpeg"
import loginRestaurante from "../assets/Login-Restaurante.jpeg"
import dashboardRestaurante from "../assets/Dashboard-Restaurante.jpeg"
import estanciaRestaurante from "../assets/Restaurante-Estancia-Restaurante.jpeg"
import menuRestaurante from "../assets/Menu-Restaurante.jpeg"
import ofertasRestaurante from "../assets/Ofertas-Restaurante.jpeg"
import gerentesRestaurante from "../assets/Gerentes-Restaurante.jpeg"
import videojuegosLaboratorio from "../assets/Videojuegos-Laboratorio.png"
import menuLaboratorio from "../assets/Menu-Laboratorio.png"
import biografiaLaboratorio from "../assets/Biografia-Laboratorio.png"
import kinalDosLaboratorio from "../assets/Kinal-dos-Laboratorio.png"
import kinaLaboratorio from "../assets/Kina-Laboratorio.png"
import kinalTresLaboratorio from "../assets/Kinal-tres-Laboratorio.png"

/* `images` alimenta el carrusel de la cara frontal de la tarjeta y `demoUrl`
   puede quedarse en null mientras el proyecto no esté publicado. */
const projects = [
  {
    title: "CyberVault - Gestor Bancario",
    description:
      "Aplicación web orientada al manejo monetario, procesos de transacciones, retiros y depósitos con registro constante de cada movimiento registrado independiente por el usuario.",
    githubUrl: "https://github.com/ocumatz-2021660/CyberVault-Movil.git",
    demoUrl: "https://sistema-bancario-bay.vercel.app/",
    techs: ["React", "CSS Modules", "localStorage"],
    images: [
      { src: dashboardBanco, alt: "Panel principal del gestor bancario" },
      { src: transferenciaBanco, alt: "Pantalla de transferencias" },
      { src: depositoBanco, alt: "Pantalla de depósitos" },
      { src: adminCuentasBanco, alt: "Administración de cuentas" },
      { src: adminUsuariosBanco, alt: "Administración de usuarios" },
      { src: perfilBanco, alt: "Perfil de usuario" },
    ],
  },
  {
    title: "Buen Provecho - Gestión de restaurantes",
    description:
      "Central de organización de restaurantes, con diferentes áreas asignadas, desde sucursales, empleados, elaboración y distribución de productos.",
    githubUrl: "https://github.com/iperez-2024003/Gestion-Restaurantes.git",
    demoUrl: "https://buen-provecho-app.vercel.app/",
    techs: ["Node.js", "Express", "Redis"],
    images: [
      { src: loginRestaurante, alt: "Pantalla de inicio de sesión" },
      { src: dashboardRestaurante, alt: "Panel principal de la gestión" },
      { src: estanciaRestaurante, alt: "Vista de una sucursal" },
      { src: menuRestaurante, alt: "Menú de productos" },
      { src: ofertasRestaurante, alt: "Gestión de ofertas" },
      { src: gerentesRestaurante, alt: "Administración de gerentes" },
    ],
  },
  {
    title: "Laboratorio Personal",
    description:
      "Primer laboratorio personal, para destacar gustos personales, información y recreación personal de página Kinal.Academy.",
    githubUrl: "https://github.com/ocumatz-2021660/Laboratorio1PaginaWeb.git",
    demoUrl: "https://about-me-laboratorio.netlify.app/",
    techs: ["HTML", "CSS"],
    images: [
      { src: videojuegosLaboratorio, alt: "Sección de videojuegos favoritos" },
      { src: menuLaboratorio, alt: "Menú de navegación" },
      { src: biografiaLaboratorio, alt: "Sección de biografía personal" },
      { src: kinalDosLaboratorio, alt: "Vista de Kinal.Academy parte 2" },
      { src: kinaLaboratorio, alt: "Vista principal de Kinal.Academy" },
      { src: kinalTresLaboratorio, alt: "Vista de Kinal.Academy parte 3" },
    ],
  },
]

export default projects
