import React from 'react';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Experience</h2>
        <div className="section-title-line fade-in" />
        <p className="section-subtitle fade-in">
          Hands-on training and professional development
        </p>

        <div className="experience-timeline">
          <div className="exp-card fade-in">
            <div className="exp-dot" />
            <div className="exp-content">
              <div className="exp-header">
                <div className="exp-company-logo">
                  <span>TA</span>
                </div>
                <div className="exp-header-text">
                  <h3 className="exp-role">Full Stack Java Development Training</h3>
                  <div className="exp-company">Tap Academy</div>
                  <div className="exp-meta">
                    <span className="exp-date">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      Jan 2025 – Jun 2025
                    </span>
                    <span className="exp-type">Training</span>
                  </div>
                </div>
              </div>

              <ul className="exp-points">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Completed hands-on training in <strong>Java, SQL, HTML, CSS, JavaScript, Spring Boot, REST APIs,</strong> and Agile SDLC.
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Practiced debugging, optimization, unit testing, and clean code writing in a structured environment.
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Built and deployed mini-projects covering both <strong>front-end and back-end</strong> development.
                </li>
              </ul>

              <div className="exp-tech-tags">
                {['Java', 'Spring Boot', 'SQL', 'REST APIs', 'HTML/CSS', 'JavaScript', 'Agile'].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
