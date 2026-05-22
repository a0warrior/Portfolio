const projects = [
  {
    name: 'SmartFlavr',
    desc: 'AI-powered social recipe cookbook platform built solo. Features gamified "Learn to Cook" lessons (Duolingo-style), collaborator system, explore feed, privacy controls, and Claude API integration throughout. Currently in active development.',
    tags: ['Next.js', 'Claude API', 'MySQL', 'Firebase', 'Cloudinary'],
    wip: true,
    link: null,
    linkLabel: null,
  },
  {
    name: 'UNI 150 Day of Service Routing',
    desc: "Interactive route web map for UNI's 150th Day of Service to optimize mattress delivery routes. Python pipeline splits stops across two origins and shifts, calls the Google Directions API for waypoint-optimized routing, and exports GeoJSON — hosted on GitHub Pages.",
    tags: ['Python', 'Google Directions API', 'GeoJSON', 'Leaflet.js', 'GitHub Pages'],
    wip: false,
    link: 'https://a0warrior.github.io/UNI-150-Day-of-Service-Routing/',
    linkLabel: 'Live map',
  },
]

const fullWidthProject = {
  name: 'Brown Bottle Scheduling App',
  desc: "Led a student team across multiple semesters to build a custom scheduling and management app for The Cedar Falls Brown Bottle restaurant. Designed and built the database and backend from scratch using SQL, TypeScript, and Python, working directly with the client and faculty advisor Dr. Andrew Berns.",
  tags: ['Team lead', 'SQL', 'TypeScript', 'Python', 'Figma', 'Trello'],
  wip: false,
  link: null,
  linkLabel: null,
}

function ProjectCard({ project, fullWidth = false }: { project: typeof projects[0]; fullWidth?: boolean }) {
  return (
    <div
      style={{
        background: 'var(--bg)',
        border: '0.5px solid var(--border)',
        borderRadius: '12px',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.2s',
        gridColumn: fullWidth ? '1 / -1' : undefined,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        (e.currentTarget.querySelector('.project-bar') as HTMLElement).style.transform = 'scaleX(1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        (e.currentTarget.querySelector('.project-bar') as HTMLElement).style.transform = 'scaleX(0)'
      }}
    >
      <div
        className="project-bar"
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
          background: 'linear-gradient(90deg, var(--purple), var(--teal))',
          transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.3s ease',
        }}
      />
      <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {project.name}
        <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>↗</span>
      </div>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '14px' }}>{project.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
        {project.tags.map((tag) => (
          <span key={tag} style={{ fontSize: '11px', padding: '3px 9px', borderRadius: '999px', background: 'var(--purple-light)', color: 'var(--purple-dark)' }}>
            {tag}
          </span>
        ))}
      </div>
      {project.wip && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: 'var(--coral)', background: 'var(--coral-light)', padding: '3px 10px', borderRadius: '999px' }}>
          🔨 In progress
        </span>
      )}
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: 'var(--teal)', background: 'var(--teal-light)', padding: '3px 10px', borderRadius: '999px', textDecoration: 'none' }}>
          🌐 {project.linkLabel}
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '4rem 2rem' }}>
      <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '0.5rem' }}>What I&apos;ve built</div>
      <h2 style={{ fontSize: '28px', fontWeight: 500, color: 'var(--text)', marginBottom: '2rem' }}>Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {projects.map((p) => <ProjectCard key={p.name} project={p} />)}
        <ProjectCard project={fullWidthProject} fullWidth />
      </div>
    </section>
  )
}
