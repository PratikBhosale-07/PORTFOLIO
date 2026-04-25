import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Hodor AI – E-Commerce Shopping Assistant',
    desc: 'A B2B SaaS conversational shopping assistant combining dual AI models (Kimi K2 for reasoning, Qwen for image recognition) with a structured rule-based execution engine for multi-store product discovery.',
    longDesc: [
      'Built RESTful APIs for real-time product discovery and multi-store price comparison across 3+ SaaS platforms.',
      'Engineered Python scraper layer; integrated MySQL (AWS RDS) and SQL session store for user auth — reducing manual data lookup by ~60%.',
      'Deployed full stack on AWS using DevOps practices (S3, EC2, RDS); implemented STT/TTS voice I/O and image-based product search.',
    ],
    tags: ['Node.js', 'Express', 'MySQL', 'AWS', 'Python', 'REST API', 'AI Integration'],
    category: 'Backend',
    period: 'Jan 2026 – Apr 2026',
    color: 'from-violet-500 to-purple-700',
    accent: '#a78bfa',
    gradient: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
    github: 'https://github.com/PratikBhosale-07',
    icon: '🤖',
  },
  {
    id: 2,
    title: 'AWS 3-Tier Scalable Web Application',
    desc: 'Production-grade 3-tier web application on AWS supporting 100+ concurrent requests, with standardized IAM security policies and infrastructure scripts reducing deployment overhead by ~40%.',
    longDesc: [
      'Architected presentation, logic, and data tiers: EC2 backend, S3 static hosting, RDS database.',
      'Configured IAM least-privilege security policies eliminating broad-access credentials.',
      'Reduced manual deployment overhead by ~40% through standardized infrastructure scripts.',
    ],
    tags: ['AWS S3', 'AWS EC2', 'AWS RDS', 'IAM', 'JavaScript', 'DevOps'],
    category: 'Cloud',
    period: 'Mar 2026 – Apr 2026',
    color: 'from-orange-400 to-amber-600',
    accent: '#ff9900',
    gradient: 'linear-gradient(135deg, #ff9900, #e65c00)',
    github: 'https://github.com/PratikBhosale-07',
    icon: '☁️',
  },
  {
    id: 3,
    title: 'Responsive Developer Portfolio Website',
    desc: 'Mobile-first responsive portfolio with 90+ Lighthouse performance score, built and deployed with clean HTML5, CSS3, and JavaScript.',
    longDesc: [
      'Designed and deployed mobile-first responsive layout with clean semantic HTML5 and CSS3.',
      'Optimized load speed achieving 90+ Lighthouse performance score.',
      'Implemented smooth scroll, interactive UI, and cross-browser compatibility.',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Performance'],
    category: 'Frontend',
    period: 'Jun 2024 – Jul 2024',
    color: 'from-cyan-400 to-blue-600',
    accent: '#22d3ee',
    gradient: 'linear-gradient(135deg, #22d3ee, #0284c7)',
    github: 'https://github.com/PratikBhosale-07',
    icon: '🌐',
    live: '#',
  },
]

const categories = ['All', 'Backend', 'Cloud', 'Frontend']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="reveal">
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        </div>

        {/* Filter */}
        <div className="projects__filters reveal" style={{ transitionDelay: '0.1s' }}>
          {categories.map(cat => (
            <button key={cat}
              className={`projects__filter ${activeFilter === cat ? 'projects__filter--active' : ''}`}
              onClick={() => setActiveFilter(cat)}>
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="projects__grid">
          {filtered.map((proj, i) => (
            <div key={proj.id}
              className={`glass-card project-card reveal ${expanded === proj.id ? 'project-card--expanded' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}>

              {/* Color bar */}
              <div className="project-card__bar" style={{ background: proj.gradient }} />

              <div className="project-card__body">
                {/* Header */}
                <div className="project-card__head">
                  <div className="project-card__meta">
                    <span className="project-card__category" style={{ color: proj.accent }}>
                      {proj.category}
                    </span>
                    <span className="project-card__period">{proj.period}</span>
                  </div>
                  <span className="project-card__icon">{proj.icon}</span>
                </div>

                <h3 className="project-card__title">{proj.title}</h3>
                <p className="project-card__desc">{proj.desc}</p>

                {/* Expanded bullet points */}
                {expanded === proj.id && (
                  <ul className="project-card__bullets">
                    {proj.longDesc.map((b, j) => (
                      <li key={j}>
                        <span className="project-card__bullet-dot" style={{ background: proj.accent }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tags */}
                <div className="project-card__tags">
                  {proj.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>

                {/* Actions */}
                <div className="project-card__actions">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer"
                    className="project-card__link">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noopener noreferrer"
                      className="project-card__link">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live
                    </a>
                  )}
                  <button className="project-card__toggle"
                    onClick={() => setExpanded(expanded === proj.id ? null : proj.id)}>
                    {expanded === proj.id ? '▲ Less' : '▼ Details'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="projects__cta reveal" style={{ transitionDelay: '0.4s' }}>
          <a href="https://github.com/PratikBhosale-07" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
