import React from 'react';
import './About.css';

const stats = [
  { value: '8.21', label: 'B.Tech CGPA' },
  { value: '2+', label: 'Projects Built' },
  { value: '5+', label: 'Certifications' },
  { value: '6mo', label: 'Training' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        <div className="section-title-line fade-in" />
        <div className="about-grid">
          <div className="about-card slide-in-left">
            <div className="about-icon-wrap">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h3>Who I Am</h3>
            <p>
              I'm <strong>Pathan Ismail Khan</strong>, a passionate Backend Developer and
              recent Computer Science graduate (B.Tech, 2025) from Madanapalle Institute
              of Technology & Science.
            </p>
            <p>
              I have a strong foundation in Java, Spring Boot, REST APIs, and database
              management with MySQL. I love building clean, efficient, and scalable
              backend systems.
            </p>
          </div>

          <div className="about-card slide-in-right">
            <div className="about-icon-wrap">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h3>My Objective</h3>
            <p>
              Enthusiastic and detail-oriented Computer Science graduate with a strong
              foundation in Java programming. Seeking an opportunity to apply my skills
              and grow in a challenging software development environment.
            </p>
            <p>
              I am an <strong>immediate joiner</strong> and ready to contribute from
              day one. I thrive in collaborative environments and love solving
              complex engineering challenges.
            </p>
          </div>

          <div className="about-card slide-in-left">
            <div className="about-icon-wrap">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3>What I Do</h3>
            <p>
              I specialize in building RESTful APIs and backend services using Java and
              Spring Boot. My experience spans the full development lifecycle — from
              designing database schemas to deploying and testing applications.
            </p>
            <div className="about-interests">
              <span className="tag">Full Stack Web Development</span>
              <span className="tag">Software Development</span>
              <span className="tag">Software Engineering</span>
            </div>
          </div>

          <div className="about-card slide-in-right">
            <div className="about-icon-wrap">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>Contact Info</h3>
            <ul className="about-contact-list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:ismailpathan182@gmail.com">ismailpathan182@gmail.com</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+918074827544">+91-8074827544</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                <a href="https://github.com/ismail1945" target="_blank" rel="noopener noreferrer">github.com/ismail1945</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="stats-row fade-in">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
