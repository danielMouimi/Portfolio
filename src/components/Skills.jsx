import { useEffect, useMemo, useRef, useState } from 'react'
import { skills } from '../data/profile'
import { Reveal, Section } from './ui'

function SkillBar({ skill, visible }) {
  return (
    <div className="skill" title={`${skill.name}: ${skill.level}%`}>
      <div className="skill-head">
        <span className="skill-name">
          <span className="skill-icon">{skill.icon}</span> {skill.name}
        </span>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ width: visible ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

function SkillGroup({ title, items }) {
  const [ref, visible] = useRevealOnce()
  return (
    <div className={`skill-group ${visible ? 'visible' : ''}`} ref={ref}>
      <h3 className="skill-group-title">{title}</h3>
      <div className="skill-list">
        {items.map((s) => (
          <SkillBar key={s.name} skill={s} visible={visible} />
        ))}
      </div>
    </div>
  )
}

function useRevealOnce() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

export default function Skills() {
  const categories = useMemo(
    () => ['Todos', ...Array.from(new Set(skills.map((s) => s.category)))],
    []
  )
  const [filter, setFilter] = useState('Todos')
  const visible = filter === 'Todos' ? skills : skills.filter((s) => s.category === filter)

  const grouped = useMemo(() => {
    const map = new Map()
    visible.forEach((s) => {
      if (!map.has(s.category)) map.set(s.category, [])
      map.get(s.category).push(s)
    })
    return Array.from(map.entries())
  }, [visible])

  return (
    <Section
      id="skills"
      eyebrow="Lo que sé hacer"
      title="Tecnologías & Habilidades"
      subtitle="Un stack amplio que va desde el frontend hasta la infraestructura y los pipelines de despliegue."
      className="section-alt"
    >
      <Reveal className="filters">
        {categories.map((c) => (
          <button
            key={c}
            className={`chip ${filter === c ? 'active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </Reveal>

      <div className="skills-grid" key={filter}>
        {grouped.map(([cat, items]) => (
          <SkillGroup key={cat} title={cat} items={items} />
        ))}
      </div>
    </Section>
  )
}
