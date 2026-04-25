import { useEffect, useRef } from 'react'
import './Hero.css'

const ROLES = [
  'Backend Developer',
  'API Architect',
  'Node.js Engineer',
  'AWS Cloud Builder',
  'Problem Solver',
]

export default function Hero() {
  const typingRef = useRef(null)

  useEffect(() => {
    let roleIdx = 0, charIdx = 0, deleting = false, timeout
    function type() {
      const current = ROLES[roleIdx]
      if (!typingRef.current) return
      if (!deleting) {
        typingRef.current.textContent = current.slice(0, charIdx + 1)
        charIdx++
        if (charIdx === current.length) { deleting = true; timeout = setTimeout(type, 1800); return }
      } else {
        typingRef.current.textContent = current.slice(0, charIdx - 1)
        charIdx--
        if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % ROLES.length }
      }
      timeout = setTimeout(type, deleting ? 60 : 100)
    }
    timeout = setTimeout(type, 800)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const hero = document.querySelector('.hero')
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30
      const y = (e.clientY / window.innerHeight - 0.5) * 30
      document.querySelectorAll('.hero__blob').forEach((blob, i) => {
        blob.style.transform = `translate(${x * (i + 1) * 0.3}px, ${y * (i + 1) * 0.3}px)`
      })
    }
    hero?.addEventListener('mousemove', onMove)
    return () => hero?.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />
      <div className="hero__grid" />

      <div className="container hero__inner">
        {/* ── Left: text ── */}
        <div className="hero__content">
          <div className="hero__top reveal" style={{ transitionDelay: '0.1s' }}>
            <span className="hero__greeting">
              <span className="hero__greeting-dot" />
              Available for opportunities
            </span>
          </div>

          <h1 className="hero__name reveal" style={{ transitionDelay: '0.2s' }}>
            Hi, I'm <span className="gradient-text">Pratik</span>
          </h1>

          <div className="hero__role reveal" style={{ transitionDelay: '0.3s' }}>
            <span className="hero__role-prefix">{'< '}</span>
            <span ref={typingRef} className="hero__typing" />
            <span className="hero__cursor">|</span>
            <span className="hero__role-suffix">{' />'}</span>
          </div>

          <p className="hero__bio reveal" style={{ transitionDelay: '0.4s' }}>
            Electronics &amp; Telecommunication Engineering student at{' '}
            <strong>MIT Academy of Engineering</strong> skilled in building RESTful APIs,
            SQL databases, and deploying scalable SaaS systems on AWS. Proven collaboration
            through academic team leadership and competitive hackathons.
          </p>

          <div className="hero__cta reveal" style={{ transitionDelay: '0.5s' }}>
            <a href="#projects" className="btn-primary"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="5,3 19,12 5,21" /></svg>
              View My Work
            </a>
            <a href="#contact" className="btn-outline"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Get In Touch
            </a>
          </div>

          <div className="hero__stats reveal" style={{ transitionDelay: '0.6s' }}>
            {[
              { num: '3rd', label: 'Hackathon Place' },
              { num: '3+', label: 'Projects Built' },
              { num: '8.04', label: 'CGPA' },
              { num: 'AWS', label: 'Certified' },
            ].map(({ num, label }) => (
              <div className="hero__stat" key={label}>
                <span className="hero__stat-num gradient-text">{num}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Profile Photo ── */}
        <div className="hero__photo-wrap reveal-right" style={{ transitionDelay: '0.3s' }}>
          <div className="hero__photo-ring hero__photo-ring--outer" />
          <div className="hero__photo-ring hero__photo-ring--inner" />
          <div className="hero__photo-glow" />
          <div className="hero__photo-frame">
            <img
              src="/Profile.png"
              alt="Pratik Bhosale – Backend Developer"
              className="hero__photo"
              loading="eager"
            />
          </div>

          {/* Floating badge chips */}
          <div className="hero__badge hero__badge--node">Node.js</div>
          <div className="hero__badge hero__badge--aws">AWS</div>
          <div className="hero__badge hero__badge--api">REST API</div>
          <div className="hero__badge hero__badge--db">SQL</div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-mouse"><div className="hero__scroll-wheel" /></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
