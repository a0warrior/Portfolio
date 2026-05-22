import IowaGisLayers from '../ui/IowaGisLayers'

const csSkills = [
  { name: 'Next.js', level: 'App Router · SSR', icon: '⚡' },
  { name: 'TypeScript', level: 'Strong typing', icon: '📘' },
  { name: 'Python', level: 'Scripts · Data · GIS', icon: '🐍' },
  { name: 'SQL / MySQL', level: 'Schema design', icon: '🗄️' },
  { name: 'Claude API', level: 'AI · Prompting', icon: '🤖' },
  { name: 'Firebase', level: 'Auth · Storage', icon: '🔥' },
  { name: 'Git / GitHub', level: 'Version control', icon: '🌿' },
]

const gisSkills = [
  { name: 'ArcGIS Pro', level: 'Analysis · Mapping', icon: '🗺️' },
  { name: 'ArcGIS Online', level: 'Web maps · Sharing', icon: '🌐' },
  { name: 'ERDAS Imagine', level: 'Remote sensing · Lidar', icon: '📡' },
  { name: 'GIS Scripting', level: 'Python · API calls', icon: '📍' },
  { name: 'GeoJSON / KML', level: 'Spatial data formats', icon: '📐' },
  { name: 'Leaflet.js', level: 'Interactive web maps', icon: '🍃' },
]

const toolSkills = [
  { name: 'Figma', level: 'UI design · Prototyping', icon: '🎨' },
  { name: 'Trello', level: 'Project management', icon: '📋' },
]

const cardStyle = (hoverColor: string): React.CSSProperties => ({
  background: 'var(--bg)',
  border: '0.5px solid var(--border)',
  borderRadius: '12px',
  padding: '1.25rem 1rem',
  textAlign: 'center',
  cursor: 'default',
  transition: 'transform 0.2s, border-color 0.2s',
})

function SkillCard({ name, level, icon, hoverColor }: { name: string; level: string; icon: string; hoverColor: string }) {
  return (
    <div
      style={cardStyle(hoverColor)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.borderColor = hoverColor
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'var(--border)'
      }}
    >
      <div style={{ fontSize: '20px', marginBottom: '10px' }}>{icon}</div>
      <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>{name}</div>
      <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '3px' }}>{level}</div>
    </div>
  )
}

function CategoryTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
      {children}
      <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)', padding: '4rem 2rem' }}>
      <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '0.5rem' }}>What I work with</div>
      <h2 style={{ fontSize: '28px', fontWeight: 500, color: 'var(--text)', marginBottom: '2rem' }}>Skills &amp; tools</h2>

      {/* CS Banner */}
      <div style={{ background: 'var(--bg)', border: '0.5px solid var(--border)', borderRadius: '12px', padding: '1.75rem 2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '2rem', overflow: 'hidden' }}>
        <div style={{ flexShrink: 0, width: '160px', height: '100px', background: 'var(--bg-secondary)', borderRadius: '8px', border: '0.5px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '20px', background: 'var(--purple-light)', display: 'flex', alignItems: 'center', padding: '0 8px', gap: '4px', borderBottom: '0.5px solid var(--border)' }}>
            {['#D85A30', '#EF9F27', '#1D9E75'].map((c) => (
              <div key={c} style={{ width: '6px', height: '6px', borderRadius: '50%', background: c }} />
            ))}
          </div>
          <div style={{ flex: 1, padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div style={{ height: '7px', borderRadius: '999px', background: 'var(--purple-light)', width: '60%', animation: 'shimmer 2s ease-in-out infinite' }} />
            <div style={{ height: '7px', borderRadius: '999px', background: 'var(--border)', animation: 'shimmer 2s ease-in-out infinite' }} />
            <div style={{ height: '7px', borderRadius: '999px', background: 'var(--border)', width: '45%', animation: 'shimmer 2s ease-in-out infinite' }} />
            <div style={{ display: 'flex', gap: '5px', marginTop: '2px' }}>
              <div style={{ height: '14px', borderRadius: '8px', background: 'var(--purple)', flex: 1, animation: 'shimmer 2s 0.3s ease-in-out infinite' }} />
              <div style={{ height: '14px', borderRadius: '8px', background: 'transparent', border: '0.5px solid var(--border)', flex: 1 }} />
            </div>
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '6px' }}>Full-stack &amp; AI development</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>Building production apps end-to-end — from database schema and API routes to AI-powered features and polished UIs. Comfortable across the entire stack in TypeScript, Python, and SQL.</p>
        </div>
      </div>

      <CategoryTitle>Computer science</CategoryTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '2rem' }}>
        {csSkills.map((s) => <SkillCard key={s.name} {...s} hoverColor="var(--purple)" />)}
      </div>

      {/* GIS Banner */}
      <div style={{ background: 'var(--bg)', border: '0.5px solid var(--border)', borderRadius: '12px', padding: '1.75rem 2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '2rem', overflow: 'hidden' }}>
        <IowaGisLayers />
        <div>
          <h3 style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '6px' }}>GIS &amp; geospatial analysis</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>Experienced with ArcGIS Pro, ArcGIS Online, ERDAS Imagine, and Python-based GIS scripting — working with raster, vector, and lidar data to produce spatial analyses, automated pipelines, and interactive web maps.</p>
        </div>
      </div>

      <CategoryTitle>GIS &amp; geospatial</CategoryTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '2rem' }}>
        {gisSkills.map((s) => <SkillCard key={s.name} {...s} hoverColor="var(--teal)" />)}
      </div>

      <CategoryTitle>Design &amp; project tools</CategoryTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
        {toolSkills.map((s) => <SkillCard key={s.name} {...s} hoverColor="var(--coral)" />)}
      </div>
    </section>
  )
}
