'use client'
import { useEffect, useRef } from 'react'

const education = [
  {
    degree: 'Master of Arts in Geography',
    school: 'University of Northern Iowa — Cedar Falls, IA',
    detail: 'Expected May 2028',
    badges: [{ label: 'Incoming fall 2026', color: 'teal' }],
  },
  {
    degree: 'BA in Computer Science (Systems Emphasis)',
    school: 'University of Northern Iowa — Cedar Falls, IA',
    detail: 'Completed May 2026 · Geography Minor (GIS Emphasis) · GIS Certificate',
    badges: [
      { label: 'Graduated', color: 'purple' },
      { label: "3× Dean's List", color: 'teal' },
    ],
  },
  {
    degree: 'High School Diploma',
    school: 'Denver Senior High School — Denver, IA',
    detail: 'Completed May 2022 · High honor roll every quarter · Academic letter · 3 sports certificates',
    badges: [{ label: 'Denver CAPS Program', color: 'teal' }],
  },
  {
    degree: 'Affiliations & competitions',
    school: 'UNI UNISEC · ICDC Defense Competition 2025',
    detail: 'Active involvement in academic and competitive organizations throughout university career.',
    badges: [],
  },
]

export default function Education() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.edu-card')
    if (!cards) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => {
              (e.target as HTMLElement).style.opacity = '1';
              (e.target as HTMLElement).style.transform = 'none'
            }, i * 110)
          }
        })
      },
      { threshold: 0.15 }
    )
    cards.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const badgeStyle = (color: string): React.CSSProperties => ({
    display: 'inline-block', fontSize: '11px', padding: '2px 8px', borderRadius: '999px',
    background: color === 'teal' ? 'var(--teal-light)' : 'var(--purple-light)',
    color: color === 'teal' ? 'var(--teal)' : 'var(--purple-dark)',
  })

  return (
    <section id="education" style={{ background: 'var(--bg-secondary)', padding: '4rem 2rem' }}>
      <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '0.5rem' }}>Academic background</div>
      <h2 style={{ fontSize: '28px', fontWeight: 500, color: 'var(--text)', marginBottom: '2rem' }}>Education</h2>
      <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="edu-card"
            style={{
              background: 'var(--bg)', border: '0.5px solid var(--border)',
              borderRadius: '12px', padding: '1.5rem',
              opacity: 0, transform: 'translateY(12px)', transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>{edu.degree}</div>
            <div style={{ fontSize: '13px', color: 'var(--purple)', marginBottom: '6px' }}>{edu.school}</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.7 }}>{edu.detail}</div>
            {edu.badges.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                {edu.badges.map((b) => (
                  <span key={b.label} style={badgeStyle(b.color)}>{b.label}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
