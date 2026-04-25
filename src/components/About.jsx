import './About.css'

const ServerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
    <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
    <circle cx="6" cy="6" r="1" fill="currentColor" stroke="none"/>
    <circle cx="6" cy="18" r="1" fill="currentColor" stroke="none"/>
  </svg>
)
const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
)
const TeamIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)
const DevOpsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
    <polyline points="16,3 21,3 21,8"/><line x1="4" y1="20" x2="21" y2="3"/>
    <polyline points="21,16 21,21 16,21"/><line x1="15" y1="15" x2="21" y2="21"/>
    <line x1="4" y1="4" x2="9" y2="9"/>
  </svg>
)

const highlights = [
  { icon: <ServerIcon />, title: 'B2B SaaS Backend', desc: 'Built RESTful APIs for conversational SaaS platforms with dual AI model integration.' },
  { icon: <CloudIcon />, title: 'AWS Cloud Native', desc: 'Deployed production-grade apps on EC2, S3, RDS — architected 3-tier scalable systems.' },
  { icon: <TeamIcon />, title: 'Team Lead', desc: 'Led cross-functional teams of 4-5 across multi-sprint academic and hackathon projects.' },
  { icon: <DevOpsIcon />, title: 'DevOps Practitioner', desc: 'Standardized CI/CD workflows and IAM policies, reducing deployment overhead by ~40%.' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about__layout">
          {/* Left – Text */}
          <div className="about__text reveal-left">
            <p className="section-label">Who I am</p>
            <h2 className="section-title about__title">
              Crafting the<br />
              <span className="gradient-text">Invisible Engine</span><br />
              Behind Great Apps
            </h2>
            <div className="about__body">
              <p>
                I'm <strong>Pratik Maruti Bhosale</strong>, an Electronics &amp; Telecommunication
                Engineering student at <strong>MIT Academy of Engineering, Pune</strong> (2023–2027).
                I'm passionate about backend engineering and building scalable SaaS systems on AWS.
              </p>
              <p>
                I specialize in <em>RESTful API design</em>, <em>Node.js &amp; Express development</em>,
                and <em>AWS cloud deployments</em>. From architecting 3-tier web applications to
                integrating AI models into B2B platforms, I love turning complex problems into
                clean, production-grade solutions.
              </p>
              <p>
                I've led teams through hackathons, cleared Smart India Hackathon internal rounds
                twice, and won <strong>3rd place</strong> at Indira College Inter-College Hackathon
                competing against teams from multiple institutions ☕.
              </p>
            </div>

            <div className="about__links">
              <a href="https://github.com/PratikBhosale-07" target="_blank" rel="noopener noreferrer" className="about__social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://linkedin.com/in/linkedin-pratik-bhosale" target="_blank" rel="noopener noreferrer" className="about__social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href="mailto:pratikbhosale056@gmail.com" className="about__social-link" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                pratikbhosale056@gmail.com
              </a>
              <a href="tel:+918308646678" className="about__social-link" aria-label="Phone">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14 19.79 19.79 0 0 1 1.61 5.5 2 2 0 0 1 3.6 3.34h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +91 8308646678
              </a>
            </div>
          </div>

          {/* Right – Cards */}
          <div className="about__cards reveal-right">
            {highlights.map(({ icon, title, desc }) => (
              <div className="glass-card about__card" key={title}>
                <span className="about__card-icon">{icon}</span>
                <div>
                  <h3 className="about__card-title">{title}</h3>
                  <p className="about__card-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
