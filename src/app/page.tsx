import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Events from './components/Events'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">
      <Navbar />
      <section id="home" className="min-h-screen w-full">
        <Hero />
      </section>
      
      <section id="about" className="min-h-screen w-full py-20">
        <About />
      </section>
      
      <section id="skills" className="min-h-screen w-full py-20">
        <Skills />
      </section>
      
      <section id="experience" className="min-h-screen w-full py-20">
        <Experience />
      </section>
      
      <section id="education" className="min-h-screen w-full py-20">
        <Education />
      </section>
      
      <section id="events" className="min-h-screen w-full py-20">
        <Events />
      </section>
      
      <section id="contact" className="min-h-screen w-full py-20">
        <Contact />
      </section>
    </main>
  )
}
