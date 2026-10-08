import { useState } from 'react'
import { experience, education, softSkills, learningPath } from '../data/profile'
import { Reveal, Section } from './ui'

export default function Experience() {
  const [tab, setTab] = useState('experiencia')
  const isExp = tab === 'experiencia'

  return (
    <Section
      id="experiencia"
      eyebrow="Mi recorrido"
      title="Experiencia & Formación"
      subtitle="De los sistemas y el soporte técnico a la automatización de despliegues y el desarrollo web."
    >
      <Reveal className="tabs">
        <button className={`tab ${isExp ? 'active' : ''}`} onClick={() => setTab('experiencia')}>
          💼 Experiencia
        </button>
        <button className={`tab ${!isExp ? 'active' : ''}`} onClick={() => setTab('formacion')}>
          🎓 Formación
        </button>
      </Reveal>

      {isExp ? (
        <div className="timeline" key="exp">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 120} className="timeline-item">
              <div className="timeline-dot" />
              <div className="card">
                <div className="card-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="card-sub">
                      <strong>{job.company}</strong> · {job.place} · {job.type}
                    </p>
                  </div>
                  <span className="period">{job.period}</span>
                </div>
                <ul className="task-list">
                  {job.tasks.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="tags">
                  {job.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={240} className="timeline-item">
            <div className="timeline-dot soft" />
            <div className="card card-soft">
              <h3>🎯 Soft Skills</h3>
              <div className="soft-grid">
                {softSkills.map((s) => (
                  <div className="soft" key={s.title}>
                    <span className="soft-icon">{s.icon}</span>
                    <div>
                      <strong>{s.title}</strong>
                      <p>{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      ) : (
        <div className="timeline" key="edu" id="formacion">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 120} className="timeline-item">
              <div className={`timeline-dot ${e.current ? 'current' : ''}`} />
              <div className="card">
                <div className="card-head">
                  <div>
                    <h3>{e.title}</h3>
                    <p className="card-sub">
                      <strong>{e.school}</strong> · {e.place}
                    </p>
                  </div>
                  <span className={`period ${e.current ? 'now' : ''}`}>{e.period}</span>
                </div>
                <p className="card-text">{e.detail}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={300} className="timeline-item">
            <div className="timeline-dot soft" />
            <div className="card card-soft">
              <h3>🚀 Trayectoria</h3>
              <ol className="path">
                {learningPath.map((p) => (
                  <li key={p.year}>
                    <span className="path-year">{p.year}</span>
                    <div>
                      <strong>{p.title || p.text}</strong>
                      {p.title && <p>{p.text}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      )}
    </Section>
  )
}
