'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const symbols = [
  'import { useState }', 'SELECT * FROM', 'def route_stops():', 'GeoJSON',
  'const map =', '.geojson', 'lidar', 'ST_Distance()', 'git commit',
  'export default', 'polyline', 'async/await', 'shapefile', 'SQL',
]

const badges = [
  'Next.js & TypeScript', 'Claude API', 'SQL & MySQL',
  'Python', 'ArcGIS Pro', 'GeoJSON', 'Figma', 'Firebase',
]

export default function Hero() {
  const symRef = useRef<HTMLDivElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const [photo, setPhoto] = useState<string | null>(null)

  useEffect(() => {
    if (!symRef.current) return
    symbols.forEach((sym, i) => {
      const el = document.createElement('div')
      el.textContent = sym
      el.style.cssText = `
        position:absolute; font-size:13px; font-family:monospace;
        color:var(--purple); opacity:0.1; white-space:nowrap;
        left:${5 + (i * 7) % 90}%;
        top:${20 + (i * 11) % 70}%;
        animation:symFloat ${6 + (i * 1.3) % 6}s ${i * 0.4}s linear infinite;
      `
      symRef.current!.appendChild(el)
    })
  }, [])

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => setPhoto(ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      style={{ padding: '5rem 2rem 4rem', position: 'relative', overflow: 'hidden' }}
    >
      {/* bg glow */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, var(--purple-light) 0%, transparent 70%)',
          animation: 'heroPulse 4s ease-in-out infinite',
        }}
      />
      {/* floating symbols */}
      <div ref={symRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center', position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
        {/* text */}
        <div>
          <div style={{ display: 'inline-block', fontSize: '12px', fontWeight: 500, background: 'var(--teal-light)', color: 'var(--teal)', padding: '4px 14px', borderRadius: '999px', marginBottom: '1.5rem', animation: 'fadeUp 0.6s ease both' }}>
            GIS Researcher · Full-stack Dev · UNI CS Grad ✦
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 500, color: 'var(--text)', lineHeight: 1.15, animation: 'fadeUp 0.6s 0.1s ease both' }}>
            Hi, I&apos;m{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--purple), var(--coral))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Aaryn Warrior
            </span>
            .<br />I build, research, and ship.
          </h1>
          <p style={{ margin: '1.25rem 0 2rem', maxWidth: '460px', fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.7, animation: 'fadeUp 0.6s 0.2s ease both' }}>
            CS graduate from the University of Northern Iowa — building AI-powered web apps, GIS automation tools, and real products for real clients. Incoming MA Geography student.
          </p>
          <div style={{ display: 'flex', gap: '12px', animation: 'fadeUp 0.6s 0.3s ease both' }}>
            <button
              onClick={() => scrollTo('projects')}
              style={{ padding: '10px 24px', borderRadius: '12px', background: 'var(--purple)', color: '#fff', fontSize: '14px', fontWeight: 500, cursor: 'pointer', border: 'none' }}
            >
              See my work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              style={{ padding: '10px 24px', borderRadius: '12px', background: 'transparent', color: 'var(--text)', fontSize: '14px', fontWeight: 500, cursor: 'pointer', border: '0.5px solid var(--border)' }}
            >
              Get in touch
            </button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '2rem', animation: 'fadeUp 0.6s 0.4s ease both' }}>
            {badges.map((b, i) => (
              <span
                key={b}
                style={{
                  fontSize: '12px', padding: '5px 12px', borderRadius: '999px',
                  border: '0.5px solid var(--border)', background: 'var(--bg)',
                  color: 'var(--text-muted)',
                  animation: `floatBadge 3s ${i * 0.3}s ease-in-out infinite`,
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* headshot */}
        <div style={{ flexShrink: 0, animation: 'fadeUp 0.6s 0.15s ease both' }}>
          <div
            onClick={() => fileRef.current?.click()}
            style={{
              width: '200px', height: '200px', borderRadius: '12px',
              border: '2px solid var(--border)', overflow: 'hidden',
              background: 'var(--bg-secondary)', cursor: 'pointer',
              transition: 'border-color 0.2s',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--purple)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            {photo ? (
              <Image src={photo} alt="Aaryn Warrior" width={200} height={200} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center', padding: '0 12px', lineHeight: 1.4 }}>
                  Add headshot
                </span>
              </div>
            )}
          </div>
          <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handlePhoto} />
        </div>
      </div>
    </section>
  )
}
