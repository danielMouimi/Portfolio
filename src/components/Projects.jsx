import { useEffect, useState } from 'react'
import { fallbackProjects, profile } from '../data/profile'
import { Reveal, Section } from './ui'

const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Vue: '#41b883',
  PHP: '#4F5D95',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  Python: '#3572A5',
}

function RepoCard({ repo, index }) {
  const lang = repo.language || 'Code'
  const color = LANG_COLORS[repo.language] || '#8b949e'
  const topics = (repo.topics || []).slice(0, 4)

  return (
    <Reveal delay={index * 90} className="repo-wrap">
      <a
        className="repo card"
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
      >
        <div className="repo-top">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
          </svg>
          <span className="repo-name">{repo.name}</span>
          <span className="repo-arrow">↗</span>
        </div>
        <p className="repo-desc">
          {repo.description || 'Repositorio sin descripción. Explóralo en GitHub.'}
        </p>
        {topics.length > 0 && (
          <div className="repo-topics">
            {topics.map((t) => (
              <span className="tag tag-mini" key={t}>
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="repo-meta">
          <span className="repo-lang">
            <i className="dot-lang" style={{ background: color }} /> {lang}
          </span>
          <span title="Estrellas">⭐ {repo.stargazers_count ?? 0}</span>
          <span title="Actualizado">
            🕓 {new Date(repo.pushed_at || Date.now()).toLocaleDateString('es-ES')}
          </span>
        </div>
      </a>
    </Reveal>
  )
}

export default function Projects() {
  const [repos, setRepos] = useState(null) // null = cargando
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=12`, {
      signal: controller.signal,
    })
      .then((r) => {
        if (!r.ok) throw new Error('Error en la API')
        return r.json()
      })
      .then((data) => {
        const list = Array.isArray(data)
          ? data.filter((r) => !r.fork).sort((a, b) => b.stargazers_count - a.stargazers_count)
          : []
        setRepos(list.length ? list : fallbackProjects)
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        setError(true)
        setRepos(fallbackProjects)
      })
    return () => controller.abort()
  }, [])

  return (
    <Section
      id="proyectos"
      eyebrow="Trabajo en GitHub"
      title="Proyectos"
      subtitle="Repositorios actualizados en tiempo real desde mi perfil de GitHub.
      aunque la mayoria estan privados."
      className="section-alt"
    >
      {repos === null && (
        <div className="repos loading">
          {[0, 1, 2].map((i) => (
            <div className="repo skeleton" key={i}>
              <div className="sk-line w60" />
              <div className="sk-line w100" />
              <div className="sk-line w80" />
            </div>
          ))}
        </div>
      )}

      {repos && (
        <>
          <div className="repos">
            {repos.map((r, i) => (
              <RepoCard key={r.id} repo={r} index={i} />
            ))}
          </div>
          {error && (
            <p className="muted center">
              No se pudo conectar con GitHub ahora mismo; te muestro una selección estática.
            </p>
          )}
          <Reveal className="center mt-2">
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              Ver todos mis repositorios →
            </a>
          </Reveal>
        </>
      )}
    </Section>
  )
}
