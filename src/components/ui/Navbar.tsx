'use client'

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        borderBottom: '0.5px solid var(--border)',
        position: 'sticky',
        top: 0,
        background: 'var(--bg)',
        zIndex: 10,
      }}
    >
      <div
        style={{
          fontSize: '18px',
          fontWeight: 500,
          background: 'linear-gradient(135deg, var(--purple), var(--teal))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Aaryn Warrior.
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {['about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => scrollTo(section)}
            style={{
              fontSize: '13px',
              color: 'var(--text-muted)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textTransform: 'capitalize',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            {section}
          </button>
        ))}
      </div>
    </nav>
  )
}
