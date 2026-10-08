import { useEffect, useState } from 'react'
import { profile, highlights } from '../data/profile'
import { Reveal } from './ui'

const TYPED = ['React', 'Vue', 'Angular', 'PHP', 'Laravel', 'JavaScript', 'CI/CD']

function Typewriter() {
  const [text, setText] = useState('')
  const [word, setWord] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = TYPED[word % TYPED.length]
    const delay = deleting ? 45 : 110

    const t = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length + 1 === current.length) setDeleting(true)
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length - 1 === 0) {
          setDeleting(false)
          setWord((w) => w + 1)
        }
      }
    }, delay)

    return () => clearTimeout(t)
  }, [text, deleting, word])

  return (
    <span className="typed">
      {text}
      <span className="caret">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
        <div className="grid-overlay" />
      </div>

      <div className="container hero-inner">
        <div className="hero-text">
          <Reveal>
            <p className="hero-hello">👋 Hola, soy</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="hero-name">
              Daniel Amin
              <br />
              <span className="gradient-text">Mouimi Romero</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <h2 className="hero-role">
              {profile.role} · <Typewriter />
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="hero-summary">{profile.summary}</p>
          </Reveal>
          <Reveal delay={320}>
            <div className="hero-actions">
              <a href="#proyectos" className="btn btn-primary" onClick={(e) => {
                e.preventDefault()
                document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                Ver proyectos
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                GitHub
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-ghost">
                Contacto
              </a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <ul className="hero-meta">
              <li>📍 {profile.location}</li>
              <li>📧 {profile.email}</li>
              <li>📱 {profile.phone}</li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="hero-card-wrap">
          <div className="hero-card">
            <div className="hero-card-glow" />
            <div className="avatar">
              <span>{profile.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}</span>
            </div>
            <p className="hero-card-name">{profile.shortName}</p>
            <p className="hero-card-role">{profile.role}</p>
            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <pre className="terminal-body">
{`$ whoami
daniel mouimi
$ cat stack.txt
${profile.intro.replace('Conocimiento de varios frameworks y lenguajes: ', '')}
$ status
available for hire ✅`}
              </pre>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container stats">
        {profile.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="stat">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </Reveal>
        ))}
      </div>

      <div className="container highlights">
        {highlights.map((h, i) => (
          <Reveal key={h.title} delay={i * 120} className="highlight">
            <span className="highlight-icon">{h.icon}</span>
            <div>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
