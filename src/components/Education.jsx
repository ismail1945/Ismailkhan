import React from 'react';
import './Education.css';

const education = [
  {
    id: 1,
    degree: 'B.Tech – Computer Science & Engineering',
    institution: 'Madanapalle Institute of Technology & Science',
    location: 'Madanapalle',
    score: '8.21 CGPA',
    period: '2021 – 2025',
    icon: '🎓',
    color: '#2563eb',
  },
  {
    id: 2,
    degree: 'Intermediate (MPC)',
    institution: 'CN Raju Junior College',
    location: 'Rayachoti',
    score: '7.35 CGPA',
    period: '2019 – 2021',
    icon: '📚',
    color: '#0891b2',
  },
  {
    id: 3,
    degree: '10th Standard',
    institution: 'Indian E.M High School',
    location: 'Rayachoti',
    score: '9.2 CGPA',
    period: '2018 – 2019',
    icon: '🏫',
    color: '#7c3aed',
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Education</h2>
        <div className="section-title-line fade-in" />
        <p className="section-subtitle fade-in">
          Academic journey and qualifications
        </p>

        <div className="education-timeline">
          {education.map((edu, i) => (
            <div
              key={edu.id}
              className={`edu-item ${i % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
            >
              <div className="edu-connector">
                <div
                  className="edu-dot"
                  style={{ background: `linear-gradient(135deg, ${edu.color}, ${edu.color}cc)` }}
                >
                  <span>{edu.icon}</span>
                </div>
                {i < education.length - 1 && <div className="edu-line" />}
              </div>
              <div className="edu-card">
                <div className="edu-period-badge" style={{ color: edu.color, borderColor: edu.color + '30', background: edu.color + '10' }}>
                  {edu.period}
                </div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <div className="edu-institution">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  {edu.institution}, {edu.location}
                </div>
                <div className="edu-score">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <strong>{edu.score}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
