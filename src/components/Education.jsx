import './Education.css'

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Electronics & Telecommunication Engineering',
    institution: 'MIT Academy of Engineering, Pune',
    period: '08/2023 – 05/2027',
    grade: 'CGPA: 8.04 / 10',
    icon: '🎓',
    highlights: [
      'REST API Design',
      'AWS Cloud Services',
      'Database Systems',
      'Computer Networks',
      'Operating Systems',
      'DevOps Practices',
    ],
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    field: 'Science – Class 12th',
    institution: 'Maharashtra State Board',
    period: '2021 – 2023',
    grade: 'Score: 79%',
    icon: '📚',
    highlights: [
      'Physics & Mathematics',
      'Computer Science',
      'Analytical Thinking',
    ],
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    field: 'Science – Class 10th',
    institution: 'Maharashtra State Board',
    period: '2020 – 2021',
    grade: 'Score: 76%',
    icon: '🏫',
    highlights: [
      'Mathematics',
      'Science',
      'Problem Solving',
    ],
  },
]

const certifications = [
  { name: 'AWS Cloud Practitioner Essentials', org: 'Amazon Web Services', year: '2024', icon: '☁️' },
  { name: 'AWS Cloud Quest: Practitioner Badge', org: 'AWS Skill Builder', year: '2024', icon: '🏆' },
  { name: 'Node.js & Express Backend', org: 'Self-Project: Hodor AI', year: '2026', icon: '🟢' },
  { name: '3-Tier AWS Architecture', org: 'AWS EC2 + S3 + RDS', year: '2026', icon: '🏗️' },
]

const achievements = [
  { icon: '🥉', title: '3rd Place – Inter-College Hackathon', sub: 'Indira College, competing against multiple institutions' },
  { icon: '🇮🇳', title: 'Smart India Hackathon – Internal Rounds', sub: 'Cleared SIH internal rounds twice at MIT AOE' },
  { icon: '👥', title: 'Team Lead – 4-5 Member Teams', sub: 'Led multi-sprint academic & hackathon projects, improving delivery ~30%' },
]

export default function Education() {
  return (
    <section className="section edu" id="education">
      <div className="edu__bg-accent" />
      <div className="container">
        <div className="reveal">
          <p className="section-label">Background</p>
          <h2 className="section-title">Education &amp; <span className="gradient-text">Achievements</span></h2>
        </div>

        {/* Degree cards */}
        <div className="edu__cards">
          {education.map((edu, i) => (
            <div className="glass-card edu__card reveal" key={`${edu.institution}-${i}`} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="edu__card-header">
                <span className="edu__icon">{edu.icon}</span>
                <div className="edu__badge">{edu.period}</div>
              </div>
              <div className="edu__card-body">
                <h3 className="edu__degree">{edu.degree}</h3>
                <p className="edu__field">{edu.field}</p>
                <p className="edu__institution">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
                  {edu.institution}
                </p>
                <div className="edu__grade">{edu.grade}</div>
                <div className="edu__highlights">
                  {edu.highlights.map(h => <span className="tag" key={h}>{h}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="edu__certs reveal" style={{ transitionDelay: '0.3s' }}>
          <h3 className="edu__certs-title">Certifications</h3>
          <div className="edu__certs-grid">
            {certifications.map((cert) => (
              <div className="glass-card edu__cert" key={cert.name}>
                <span className="edu__cert-icon">{cert.icon}</span>
                <div className="edu__cert-info">
                  <p className="edu__cert-name">{cert.name}</p>
                  <p className="edu__cert-org">{cert.org} · {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="edu__achievements reveal" style={{ transitionDelay: '0.45s' }}>
          <h3 className="edu__certs-title">Key Achievements</h3>
          <div className="edu__ach-grid">
            {achievements.map(({ icon, title, sub }) => (
              <div className="glass-card edu__ach-card" key={title}>
                <span className="edu__ach-icon">{icon}</span>
                <div>
                  <p className="edu__ach-title">{title}</p>
                  <p className="edu__ach-sub">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
