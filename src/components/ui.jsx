import { useEffect, useRef, useState } from 'react'

/** Añade la clase "visible" cuando el elemento entra en pantalla. */
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

/** Sección envuelta en animación de aparición al hacer scroll. */
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

/** Sección envuelta en animación de aparición al hacer scroll. */
export function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
