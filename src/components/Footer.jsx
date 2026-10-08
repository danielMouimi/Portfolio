import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())
  const [top, setTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <button
        className={`to-top ${top ? 'show' : ''}`}
        aria-label="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="logo-mark small">&lt;DM/&gt;</span>
          <p>
            {profile.name} · {profile.location}
          </p>
          <div className="footer-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={`mailto:${profile.email}`}>
              Email
            </a>
            <a href={`tel:+34${profile.phone.replace(/\s/g, '')}`}>Teléfono</a>
          </div>
          <p className="muted small">
            © {year} — Hecho con React + Vite, mucho café y atención al detalle.
          </p>
        </div>
      </footer>
    </>
  )
}
