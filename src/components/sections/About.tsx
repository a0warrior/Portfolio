export default function About() {
  return (
    <section id="about" style={{ padding: '4rem 2rem' }}>
      <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '0.5rem' }}>About me</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'start' }}>
        <div>
          <h2 style={{ fontSize: '28px', fontWeight: 500, color: 'var(--text)', marginBottom: '2rem', lineHeight: 1.2 }}>
            Developer, researcher,<br />problem solver.
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
            I&apos;m a CS graduate from the University of Northern Iowa, where I completed a BA in Computer Science (Systems Emphasis), a Geography minor with GIS emphasis, and a GIS Certificate — all in May 2026. I&apos;m heading back to UNI as an incoming graduate student to pursue an MA in Geography.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
            I independently built SmartFlavr, an AI-powered recipe platform, led a student team delivering a custom scheduling app for a real business client, and currently work as a GIS Research Assistant at the UNI GeoTREE Center.
          </p>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, marginTop: '0.5rem' }}>
            Denver CAPS Program alum · UNISEC member · ICDC Defense Competition 2025
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {[
            { num: '3×', lbl: "Dean's List at UNI" },
            { num: '2+', lbl: 'Years full-stack dev' },
            { num: 'GIS', lbl: 'Research assistant' },
            { num: '3', lbl: 'Shipped projects' },
          ].map(({ num, lbl }) => (
            <div key={lbl} style={{ background: 'var(--bg-secondary)', borderRadius: '8px', padding: '1rem 1.25rem' }}>
              <div style={{ fontSize: '26px', fontWeight: 500, color: 'var(--text)' }}>{num}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
