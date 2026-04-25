import { useState, useEffect, useRef, Suspense, lazy } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Lazy load 3D scene
const Scene3D = lazy(() => import('./components/Scene3D'))

// Custom cursor hook
function useCustomCursor() {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const smoothPos = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    if (window.innerWidth < 1024) return
    const cursor = cursorRef.current
    const dot = cursorDotRef.current
    if (!cursor || !dot) return

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
    }

    const animate = () => {
      smoothPos.current.x += (pos.current.x - smoothPos.current.x) * 0.12
      smoothPos.current.y += (pos.current.y - smoothPos.current.y) * 0.12
      cursor.style.transform = `translate(${smoothPos.current.x - 20}px, ${smoothPos.current.y - 20}px)`
      raf.current = requestAnimationFrame(animate)
    }

    const onEnter = () => cursor.classList.add('cursor--hover')
    const onLeave = () => cursor.classList.remove('cursor--hover')

    document.addEventListener('mousemove', onMove, { passive: true })
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    raf.current = requestAnimationFrame(animate)
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return { cursorRef, cursorDotRef }
}

// Scroll reveal
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    els.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

// Progress bar hook
function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return progress
}

export default function App() {
  const [theme, setTheme] = useState('dark')
  const { cursorRef, cursorDotRef } = useCustomCursor()

  useScrollReveal()
  const progress = useScrollProgress()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  // Activate hero reveals on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll('.hero .reveal, .hero .reveal-left, .hero .reveal-right').forEach(el => {
        el.classList.add('visible')
      })
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Custom cursor */}
      <div className="cursor" ref={cursorRef} aria-hidden="true" />
      <div className="cursor-dot" ref={cursorDotRef} aria-hidden="true" />

      {/* Scroll progress */}
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      {/* 3D Background */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      {/* App */}
      <div className="app" data-theme={theme}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Back to top */}
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        style={{ opacity: progress > 20 ? 1 : 0, pointerEvents: progress > 20 ? 'auto' : 'none' }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
          <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5,12 12,5 19,12"/>
        </svg>
      </button>
    </>
  )
}
