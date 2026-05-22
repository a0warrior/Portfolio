'use client'
import { useEffect, useRef } from 'react'

const experience = [
  {
    date: 'Feb 2026 – Present',
    role: 'GIS Research Assistant',
    company: 'UNI GeoTREE Center — Cedar Falls, IA',
    bullets: [
      'Assessed lidar imagery to assign land use classifications with proper judgment.',
      'Applied AI and programming skills for black-box testing of ERDAS Imagine software.',
      'Documented steps and decisions to support reproducibility and project transparency.',
    ],
  },
  {
    date: 'May 2024 – Jul 2025',
    role: 'Kitchen Lead',
    company: 'Brown Bottle — Cedar Falls, IA',
    bullets: [
      'Given leadership to manage and direct staff during closing hours.',
      'Excelled in every kitchen position and earned a mark of proficiency.',
      'Used time management to optimize service and relay guidance to staff.',
    ],
  },
  {
    date: 'Aug 2022 – Jan 2026',
    role: 'Venue Dining Assistant',
    company: 'Piazza Dining Center — Cedar Falls, IA',
    bullets: [
      'Trusted in a leadership position when supervisors stepped away.',
      'Coordinated effectively with coworkers to improve productivity.',
      'Operated grills and fryers and planned out preparation efficiently.',
    ],
  },
  {
    date: 'Jan 2021 – Dec 2022',
    role: 'Kitchen Staff',
    company: 'AllyCatz Kitchen — Denver, IA',
    bullets: [
      'Operated fryers and grills, prepared food, and maintained kitchen cleanliness.',
      'Stepped into additional roles during busy periods to cover important stations.',
    ],
  },
]

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const items = listRef.current?.querySelectorAll('.exp-item')
    if (!items) return
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
    items.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experience" style={{ padding: '4rem 2rem' }}>
      <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '0.5rem' }}>Background</div>
      <h2 style={{ fontSize: '28px', fontWeight: 500, color: 'var(--text)', marginBottom: '2rem' }}>Work experience</h2>
      <div ref={listRef}>
        {experience.map((exp) => (
          <div
            key={exp.role}
            className="exp-item"
            style={{
              display: 'grid', gridTemplateColumns: '130px 1fr', gap: '1.5rem',
              padding: '1.5rem 0', borderBottom: '0.5px solid var(--border)',
              opacity: 0, transform: 'translateX(-12px)', transition: 'opacity 0.45s ease, transform 0.45s ease',
            }}
          >
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', paddingTop: '3px', lineHeight: 1.5 }}>{exp.date}</div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)' }}>{exp.role}</div>
              <div style={{ fontSize: '13px', color: 'var(--purple)', margin: '3px 0 8px' }}>{exp.company}</div>
              <ul style={{ paddingLeft: '1rem' }}>
                {exp.bullets.map((b) => (
                  <li key={b} style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '4px' }}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
