'use client'
import { useEffect, useState } from 'react'

const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact']

export default function ScrollNav() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = sections.indexOf(e.target.id)
            if (i !== -1) setActive(i)
          }
        })
      },
      { threshold: 0.35 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        right: '1.5rem',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        zIndex: 20,
      }}
    >
      {sections.map((id, i) => (
        <button
          key={id}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
          title={id}
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: i === active ? 'var(--purple)' : 'var(--border)',
            border: 'none',
            cursor: 'pointer',
            transform: i === active ? 'scale(1.4)' : 'scale(1)',
            transition: 'background 0.2s, transform 0.2s',
            padding: 0,
          }}
        />
      ))}
    </div>
  )
}
