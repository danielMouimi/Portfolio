import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Reveal, Section } from './components/ui'
import { profile, softSkills } from './data/profile'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Section
          id="sobre-mi"
          eyebrow="Sobre mí"
          title="Perfil profesional"
          subtitle="Responsable, de aprendizaje rápido y con ganas de construir cosas que funcionen."
        >
          <div className="about-grid">
            <Reveal className="about-text">
              <p className="lead">{profile.summary}</p>
              <p>{profile.intro}</p>
              <p>
                Me desenvuelvo igualmente en el mantenimiento de sistemas y redes como en el
                diseño e implementación de interfaces web modernas, y disfruto automatizando
                procesos para que los equipos trabajen mejor.
              </p>
              <div className="about-actions">
                <a href="#contacto" className="btn btn-primary" onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
                }}>
                  Hablemos
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  Ver GitHub
                </a>
              </div>
            </Reveal>

            <Reveal delay={140} className="about-side">
              {softSkills.map((s) => (
                <div className="card about-chip" key={s.title}>
                  <span className="about-chip-icon">{s.icon}</span>
                  <div>
                    <strong>{s.title}</strong>
                    <p className="muted small">{s.text}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </Section>

        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
