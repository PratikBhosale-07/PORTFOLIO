import { useState } from 'react'
import './Contact.css'

const GITHUB_URL  = 'https://github.com/PratikBhosale-07'
const LINKEDIN_URL = 'https://www.linkedin.com/in/pratik-bhosale-a1a545316'
const EMAIL = 'pratikbhosale056@gmail.com'

const socialLinks = [
  {
    name: 'GitHub',
    url: GITHUB_URL,
    handle: 'PratikBhosale-07',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    color: '#a78bfa',
  },
  {
    name: 'LinkedIn',
    url: LINKEDIN_URL,
    handle: 'pratik-bhosale-a1a545316',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: '#22d3ee',
  },
  {
    name: 'Email',
    url: `mailto:${EMAIL}`,
    handle: EMAIL,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    color: '#f472b6',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 20) e.message = 'Message too short (min 20 chars)'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1800))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="section contact" id="contact">
      <div className="contact__bg-blob" />
      <div className="container">
        <div className="reveal">
          <p className="section-label">Let's Talk</p>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="contact__subtitle">
            Open to full-time roles, freelance projects, and interesting collaborations.
            Drop a message and I'll get back within 24 hours.
          </p>
        </div>

        <div className="contact__layout">
          {/* Left – Info */}
          <div className="contact__info reveal-left">
            <div className="contact__info-card glass-card">
              <div className="contact__availability">
                <div className="contact__avail-dot" />
                <div>
                  <p className="contact__avail-title">Available for Work</p>
                  <p className="contact__avail-sub">Open to backend / full-stack roles</p>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              {socialLinks.map(({ name, url, handle, icon, color }) => (
                <a
                  key={name}
                  href={url}
                  target={name === 'Email' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="contact__social glass-card"
                  style={{ '--social-color': color }}
                  aria-label={name}
                >
                  <span className="contact__social-icon">{icon}</span>
                  <div>
                    <p className="contact__social-name">{name}</p>
                    <p className="contact__social-handle">{handle}</p>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" className="contact__social-arrow">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right – Form */}
          <div className="contact__form-wrap reveal-right">
            {status === 'success' ? (
              <div className="contact__success glass-card">
                <div className="contact__success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll reply within 24 hours.</p>
                <button className="btn-primary" onClick={() => setStatus(null)}>Send Another</button>
              </div>
            ) : (
              <form className="contact__form glass-card" onSubmit={handleSubmit} noValidate>
                <div className="contact__form-row">
                  <div className={`contact__field ${errors.name ? 'contact__field--error' : ''}`}>
                    <label htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      autoComplete="name"
                    />
                    {errors.name && <span className="contact__error">{errors.name}</span>}
                  </div>
                  <div className={`contact__field ${errors.email ? 'contact__field--error' : ''}`}>
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      autoComplete="email"
                    />
                    {errors.email && <span className="contact__error">{errors.email}</span>}
                  </div>
                </div>

                <div className={`contact__field ${errors.subject ? 'contact__field--error' : ''}`}>
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <span className="contact__error">{errors.subject}</span>}
                </div>

                <div className={`contact__field ${errors.message ? 'contact__field--error' : ''}`}>
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                  />
                  {errors.message && <span className="contact__error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn-primary contact__submit"
                  disabled={status === 'sending'}
                  id="contact-submit-btn"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="contact__spinner" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22,2 15,22 11,13 2,9"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
