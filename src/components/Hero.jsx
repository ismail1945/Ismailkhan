import React from 'react';
import './Hero.css';

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>
      <div className="container hero-content">
        <div className="hero-text fade-in">
          <div className="hero-greeting">👋 Hello, I'm</div>
          <h1 className="hero-name">
            Pathan <span className="highlight">Ismail</span> Khan
          </h1>
          <div className="hero-title-wrapper">
            <span className="hero-title">Backend Developer</span>
          </div>
          <p className="hero-tagline">
            Enthusiastic Computer Science graduate with a strong foundation in Java,
            Spring Boot & REST APIs. Ready to build scalable backend solutions and grow
            in a challenging software development environment.
          </p>
          <div className="hero-cta">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => handleScroll(e, '#contact')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="btn btn-outline"
              download
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>
          <div className="hero-socials">
            <a
              href="https://github.com/ismail1945"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="mailto:ismailpathan182@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a
              href="tel:+918074827544"
              className="social-link"
              aria-label="Phone"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-avatar fade-in">
          <div className="avatar-ring">
            <div className="avatar-inner">
              <span className="avatar-initials">IK</span>
            </div>
          </div>
          <div className="avatar-badges">
            <div className="avatar-badge badge-java">
              <span>☕</span> Java
            </div>
            <div className="avatar-badge badge-spring">
              <span>🌱</span> Spring Boot
            </div>
            <div className="avatar-badge badge-db">
              <span>🗄️</span> MySQL
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <a href="#about" onClick={(e) => handleScroll(e, '#about')} aria-label="Scroll to About">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
        </a>
      </div>
    </section>
  );
}
