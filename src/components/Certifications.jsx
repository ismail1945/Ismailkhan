import React from 'react';
import './Certifications.css';

const certifications = [
  {
    id: 1,
    title: 'Oracle Cloud Infrastructure Certified Foundation Associate',
    issuer: 'Oracle',
    date: 'Aug 2025',
    icon: '🏅',
    color: '#c2410c',
    bg: '#fff7ed',
    border: '#fed7aa',
  },
  {
    id: 2,
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    date: 'Mar 2025',
    icon: '☁️',
    color: '#92400e',
    bg: '#fffbeb',
    border: '#fde68a',
  },
  {
    id: 3,
    title: 'CCNA Cisco Networking Essentials',
    issuer: 'Cisco',
    date: 'Jul 2024',
    icon: '🌐',
    color: '#065f46',
    bg: '#f0fdf4',
    border: '#bbf7d0',
  },
  {
    id: 4,
    title: 'Certified Java Internship',
    issuer: 'APSCHE',
    date: '2024',
    icon: '☕',
    color: '#1d4ed8',
    bg: '#eff6ff',
    border: '#bfdbfe',
  },
  {
    id: 5,
    title: 'Certified AWS Internship (8 Weeks)',
    issuer: 'APSSDC',
    date: '2024',
    icon: '🎯',
    color: '#6d28d9',
    bg: '#f5f3ff',
    border: '#ddd6fe',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <h2 className="section-title fade-in">Certifications</h2>
        <div className="section-title-line fade-in" />
        <p className="section-subtitle fade-in">
          Professional certifications and credentials
        </p>

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              className="cert-card fade-in"
              style={{ animationDelay: `${i * 0.1}s`, transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className="cert-icon-wrap"
                style={{ background: cert.bg, border: `1.5px solid ${cert.border}` }}
              >
                <span className="cert-icon">{cert.icon}</span>
              </div>
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-meta">
                  <span
                    className="cert-issuer"
                    style={{ color: cert.color }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    {cert.issuer}
                  </span>
                  <span className="cert-date">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {cert.date}
                  </span>
                </div>
              </div>
              <div className="cert-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
