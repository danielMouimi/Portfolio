/**
 * Toda la información del portfolio vive aquí.
 * Cambia cualquier valor y el sitio se actualiza al instante.
 */

export const profile = {
  name: 'Daniel Amin Mouimi Romero',
  shortName: 'Daniel Mouimi',
  role: 'Desarrollador Web & Especialista en Sistemas',
  location: 'Maracena, Granada · España',
  email: 'mouimidaniel@gmail.com',
  phone: '632 007 265',
  github: 'https://github.com/danielMouimi',
  githubUser: 'danielMouimi',
  cvFile: './cv.pdf', // coloca tu PDF en public/cv.pdf para activar la descarga
  summary:
    'Profesional con experiencia en la gestión de equipos informáticos. Destaco por mi responsabilidad, capacidad de aprendizaje rápido y habilidades tanto en la creación como en el diseño y desarrollo web.',
  intro:
    'Conocimiento de varios frameworks y lenguajes: JavaScript, Vue, React, Angular, PHP, Laravel, CSS, Bootstrap  Sass...',
  stats: [
    { value: '5+', label: 'Años en el sector tech' },
    { value: '6+', label: 'Tecnologías dominadas' },
    { value: '2', label: 'Experiencias profesionales' },
    { value: '3', label: 'Titulaciones oficiales' },
  ],
}

export const highlights = [
  {
    icon: '⚡',
    title: 'CI/CD & DevOps',
    text: 'Pipelines con Jenkins, UrbanCode y Clarive; despliegues automatizados en entornos de desarrollo y producción.',
  },
  {
    icon: '🖥️',
    title: 'Full Stack',
    text: 'Creación, diseño y desarrollo web con React, Vue, Angular, PHP y Laravel, desde la idea hasta el despliegue.',
  },
  {
    icon: '👥',
    title: 'Trabajo en equipo',
    text: 'Entorno ágil con Jira y Confluence, gestión de equipos informáticos y liderazgo como entrenador de voleibol.',
  },
]

export const skills = [
  { name: 'JavaScript', level: 90, category: 'Frontend', icon: '🟨' },
  { name: 'React', level: 85, category: 'Frontend', icon: '⚛️' },
  { name: 'Vue', level: 80, category: 'Frontend', icon: '🟢' },
  { name: 'Angular', level: 70, category: 'Frontend', icon: '🔴' },
  { name: 'HTML5 / CSS3', level: 95, category: 'Frontend', icon: '🎨' },
  { name: 'Bootstrap / Sass', level: 85, category: 'Frontend', icon: '🧩' },
  { name: 'PHP', level: 80, category: 'Backend', icon: '🐘' },
  { name: 'Laravel', level: 75, category: 'Backend', icon: '🔺' },
  { name: 'SQL / Bases de datos', level: 80, category: 'Backend', icon: '🗄️' },
  { name: 'WordPress', level: 85, category: 'Backend', icon: '📝' },
  { name: 'Jenkins / UrbanCode / Clarive', level: 80, category: 'DevOps', icon: '🔁' },
  { name: 'Jira / Confluence', level: 85, category: 'DevOps', icon: '📋' },
  { name: 'Redes y sistemas', level: 90, category: 'Sistemas', icon: '🌐' },
  { name: 'Inteligencia Artificial', level: 65, category: 'Sistemas', icon: '🤖' },
]

export const experience = [
  {
    company: 'Kyndryl',
    place: 'Granada',
    period: 'Marzo 2025 – Junio 2025',
    type: 'Prácticas profesionales',
    role: 'Operaciones de TI & Automatización',
    tasks: [
      'Participación en pipelines de CI/CD mediante Jenkins, UrbanCode y Clarive, optimizando procesos de integración y despliegue.',
      'Gestión de tareas y documentación técnica en Jira y Confluence, colaborando en un entorno ágil.',
      'Automatización de despliegues y mantenimiento de entornos de desarrollo y producción.',
    ],
    tags: ['Jenkins', 'UrbanCode', 'Clarive', 'Jira', 'Confluence', 'CI/CD', 'Agile'],
  },
  {
    company: 'Arena Gaming',
    place: 'Granada',
    period: 'Marzo 2023 – Junio 2023',
    type: 'Prácticas profesionales',
    role: 'Soporte técnico & Web',
    tasks: [
      'Mantenimiento de equipos informáticos y soporte técnico.',
      'Creación y gestión de una página web con WordPress.',
      'Administración y actualización constante de bases de datos.',
    ],
    tags: ['Soporte Técnico', 'WordPress', 'SQL', 'Hardware'],
  },
]

export const education = [
  {
    title: 'Curso de especialización en Aprendizaje Automático: gestión de datos y entrenamiento',
    detail:
      'Instalar, configurar, desplegar y mantener herramientas y software en sistemas informáticos de Inteligencia Artificial.',
    school: 'IES Zaidín-Vergeles',
    place: 'Granada',
    period: 'Cursando',
    current: true,
  },
  {
    title: 'Técnico en Desarrollo de Aplicaciones Web',
    detail: 'Programación, configuración y desarrollo web.',
    school: 'IES Francisco Ayala',
    place: 'Granada',
    period: '2025',
    current: false,
  },
  {
    title: 'Técnico en Sistemas Microinformáticos y Redes',
    detail: 'Instalación, configuración y mantenimiento.',
    school: 'IES Francisco Ayala',
    place: 'Granada',
    period: '2023',
    current: false,
  },
]

export const softSkills = [
  { icon: '🏐', title: 'Jugador de voleibol federado', text: 'Desde 2018 — disciplina, trabajo en equipo y compromiso.' },
  { icon: '🎤', title: 'Entrenador de voleibol Nivel II', text: 'Desde 2022 — liderazgo, comunicación y gestión de grupo.' },
]

export const learningPath = [
  { year: '2018', text: 'Inicio de la trayectoria deportiva como jugador federado de voleibol.' },
  { year: '2022', title: 'Entrenador Nivel II', text: 'Certificación de entrenador: liderazgo y gestión de grupo.' },
  { year: '2023', title: 'Sistemas Microinformáticos y Redes', text: 'Primera titulación técnica + prácticas en Arena Gaming.' },
  { year: '2025', title: 'Desarrollo de Aplicaciones Web', text: 'Segunda titulación + prácticas en Kyndryl (CI/CD).' },
  { year: '2026', title: 'Especialización en IA', text: 'Cursando gestión de datos y entrenamiento de modelos.' },
]

/**
 * Proyectos de respaldo (se muestran si la API de GitHub falla).
 * El portfolio carga además tus repos en tiempo real desde la API pública de GitHub.
 */
export const fallbackProjects = [
  {
    id: 'fallback-1',
    name: 'Portfolio',
    description: 'Portfolio profesional desarrollado en React + Vite, responsive y con animaciones.',
    html_url: 'https://github.com/danielMouimi',
    homepage: '',
    language: 'JavaScript',
    stargazers_count: 0,
    topics: ['react', 'vite', 'portfolio'],
  },
]

export const navLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'skills', label: 'Skills' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'formacion', label: 'Formación' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
]
