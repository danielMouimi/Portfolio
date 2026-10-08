import { useState } from 'react'
import { profile } from '../data/profile'
import { Reveal, Section } from './ui'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Mensaje desde tu portfolio — ${form.name}`
  )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`

  const submit = (e) => {
    e.preventDefault()
    window.location.href = mailto
    setSent(true)
  }

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  return (
    <Section
      id="contacto"
      eyebrow="Hablemos"
      title="¿Trabajamos juntos?"
      subtitle="Estoy disponible para oportunidades laborales, proyectos freelance o simplemente para saludar."
    >
      <div className="contact-grid">
        <Reveal className="contact-info">
          <div className="card contact-card">
            <h3>Información de contacto</h3>
            <ul className="contact-list">
              <li>
                <span className="ci">📧</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <span className="ci">📱</span>
                <a href={`tel:+34${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
              </li>
              <li>
                <span className="ci">📍</span>
                <span>{profile.location}</span>
              </li>
              <li>
                <span className="ci">🐙</span>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  github.com/{profile.githubUser}
                </a>
              </li>
            </ul>
            <a href={profile.cvFile} className="btn btn-primary btn-block" download>
              ⬇ Descargar CV
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="contact-form-wrap">
          <form className="card contact-form" onSubmit={submit}>
            <label>
              Nombre
              <input
                type="text"
                required
                placeholder="Tu nombre"
                value={form.name}
                onChange={set('name')}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                required
                placeholder="tu@email.com"
                value={form.email}
                onChange={set('email')}
              />
            </label>
            <label>
              Mensaje
              <textarea
                rows="5"
                required
                placeholder="Cuéntame en qué puedo ayudarte..."
                value={form.message}
                onChange={set('message')}
              />
            </label>
            <button type="submit" className="btn btn-primary btn-block">
              Enviar mensaje ✉️
            </button>
            {sent && (
              <p className="form-ok">
                ✅ Se ha abierto tu cliente de correo. ¡Gracias por escribir!
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
