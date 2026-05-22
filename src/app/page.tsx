import Navbar from '@/components/ui/Navbar'
import ScrollNav from '@/components/ui/ScrollNav'
import CursorGlow from '@/components/ui/CursorGlow'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <CursorGlow />
      <ScrollNav />
      <Navbar />
      <main>
        <Hero />
        <div style={{ height: '0.5px', background: 'var(--border)', margin: '0 2rem' }} />
        <About />
        <Skills />
        <Projects />
        <div style={{ height: '0.5px', background: 'var(--border)', margin: '0 2rem' }} />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  )
}
