'use client'

const links = [
  { label: 'aarynjwarrior@gmail.com', href: 'mailto:aarynjwarrior@gmail.com', icon: '✉️' },
  { label: 'a0warrior', href: 'https://github.com/a0warrior', icon: '🐙' },
  { label: 'smartflavr.com', href: 'https://smartflavr.com', icon: '🌐' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '5rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(180deg, transparent 0%, var(--purple-light) 100%)',
      }}
    >
      <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '0.5rem' }}>Say hello</div>
      <h2 style={{ fontSize: '28px', fontWeight: 500, color: 'var(--text)', marginBottom: '1rem' }}>Let&apos;s connect</h2>
      <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Open to internships, research roles, freelance work, and interesting collaborations.
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {links.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 20px', borderRadius: '12px',
              border: '0.5px solid var(--border)', background: 'var(--bg)',
              fontSize: '13px', color: 'var(--text)', textDecoration: 'none',
              transition: 'background 0.15s, transform 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg-secondary)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <span>{icon}</span> {label}
          </a>
        ))}
      </div>
    </section>
  )
}
