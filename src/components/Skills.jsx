import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'JavaScript', level: 70 },
      { name: 'HTML/CSS', level: 75 },
    ],
  },
  {
    title: 'Back-End',
    icon: '⚙️',
    skills: [
      { name: 'Spring Boot', level: 85 },
      { name: 'REST APIs', level: 88 },
      { name: 'Hibernate/JPA', level: 80 },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 85 },
    ],
  },
  {
    title: 'Practices & Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git/GitHub', level: 82 },
      { name: 'Agile/SDLC', level: 78 },
      { name: 'OOP', level: 90 },
      { name: 'Unit Testing', level: 75 },
    ],
  },
];

const techBadges = [
  { name: 'Java', color: '#ff6b35', bg: '#fff3ef' },
  { name: 'Spring Boot', color: '#6db33f', bg: '#f0fdf4' },
  { name: 'REST APIs', color: '#2563eb', bg: '#eff6ff' },
  { name: 'Hibernate/JPA', color: '#59666c', bg: '#f8f9fa' },
  { name: 'MySQL', color: '#00758f', bg: '#f0fdff' },
  { name: 'HTML5', color: '#e34f26', bg: '#fff5f2' },
  { name: 'CSS3', color: '#1572b6', bg: '#eff8ff' },
  { name: 'JavaScript', color: '#f7df1e', bg: '#fffce0', textColor: '#92700a' },
  { name: 'Git', color: '#f05032', bg: '#fff3ef' },
  { name: 'SQL', color: '#336791', bg: '#eef3fb' },
  { name: 'Agile', color: '#0891b2', bg: '#ecfeff' },
  { name: 'OOP', color: '#7c3aed', bg: '#f5f3ff' },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title fade-in">Skills & Tech Stack</h2>
        <div className="section-title-line fade-in" />
        <p className="section-subtitle fade-in">
          Technologies and tools I use to build robust backend systems
        </p>

        <div className="tech-badges-wrap fade-in">
          {techBadges.map((badge) => (
            <span
              key={badge.name}
              className="tech-badge"
              style={{
                background: badge.bg,
                color: badge.textColor || badge.color,
                borderColor: badge.color + '40',
              }}
            >
              {badge.name}
            </span>
          ))}
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`skills-card ${i % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
            >
              <div className="skills-card-header">
                <span className="skills-cat-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-bars">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-bar-item">
                    <div className="skill-bar-label">
                      <span>{skill.name}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="soft-skills fade-in">
          <h3 className="soft-skills-title">Soft Skills</h3>
          <div className="soft-skills-list">
            {[
              { icon: '🧩', name: 'Problem-Solving' },
              { icon: '🔍', name: 'Analytical Thinking' },
              { icon: '💬', name: 'Communication' },
              { icon: '🤝', name: 'Team Collaboration' },
            ].map((s) => (
              <div key={s.name} className="soft-skill-item">
                <span className="soft-skill-icon">{s.icon}</span>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
