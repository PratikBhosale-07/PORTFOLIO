import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top" />
      <div className="container footer__inner">
        <div className="footer__logo">
          <span className="footer__logo-bracket">&lt;</span>
          <span>Pratik</span>
          <span className="footer__logo-bracket">/&gt;</span>
        </div>

        <p className="footer__copy">
          Built with ❤️ using React, Three.js & GSAP &nbsp;·&nbsp; © {year} Pratik. All rights reserved.
        </p>

        <div className="footer__links">
          {['#about', '#education', '#skills', '#projects', '#contact'].map(href => (
            <a
              key={href}
              href={href}
              className="footer__link"
              onClick={e => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              {href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
