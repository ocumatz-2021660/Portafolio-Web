import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollProgress from "./components/ScrollProgress"
import PixelIntro from "./components/PixelIntro"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Resume from "./sections/Resume"
import Certifications from "./sections/Certifications"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="scroll-smooth">
      <PixelIntro />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
