import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Resume from "./sections/Resume"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
