import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      const y = window.scrollY + 140
      let current = 'inicio'
      for (const link of navLinks) {
        const el = document.getElementById(link.id)
        if (el && el.offsetTop <= y) current = link.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container nav-inner">
        <a href="#inicio" onClick={(e) => go(e, 'inicio')} className="logo">
          <span className="logo-mark">&lt;DM/&gt;</span>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={active === l.id ? 'active' : ''}
                onClick={(e) => go(e, l.id)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a className="btn btn-small" href={`mailto:${profile.email}`}>
              Contrátame
            </a>
          </li>
        </ul>

        <button
          className={`burger ${open ? 'open' : ''}`}
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}
