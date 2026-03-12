import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Web Application',
    description:
      'A full-stack e-commerce platform with secure user authentication, product catalog, and payment integration. Features a responsive front-end with a robust Spring Boot backend.',
    highlights: [
      'Developed using Spring Boot, Java, and SQL for a scalable backend',
      'Designed responsive front-end with HTML, CSS, and JavaScript',
      'Implemented JWT authentication for secure user sessions',
      'Integrated secure payment gateway and RESTful APIs',
    ],
    tech: ['Java', 'Spring Boot', 'SQL', 'JWT', 'REST APIs', 'HTML', 'CSS', 'JavaScript'],
    icon: '🛒',
    color: '#2563eb',
    bgColor: '#eff6ff',
    github: 'https://github.com/ismail1945',
  },
  {
    id: 2,
    title: 'Task Management Application',
    description:
      'A Kanban-style task management system for organizing and tracking tasks. Built with a clean UI and a reliable Spring Boot backend supporting full CRUD operations.',
    highlights: [
      'Created a task management system using Spring Boot and SQL',
      'Designed Kanban-style UI with HTML, CSS, and JavaScript',
      'Implemented CRUD operations with modular, maintainable code',
      'Ensured clean code architecture and separation of concerns',
    ],
    tech: ['Java', 'Spring Boot', 'SQL', 'HTML', 'CSS', 'JavaScript', 'REST APIs'],
    icon: '📋',
    color: '#0891b2',
    bgColor: '#ecfeff',
    github: 'https://github.com/ismail1945',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <h2 className="section-title fade-in">Projects</h2>
        <div className="section-title-line fade-in" />
        <p className="section-subtitle fade-in">
          Applications I've built with a focus on backend logic and clean architecture
        </p>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`project-card ${i % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
            >
              <div
                className="project-icon-header"
                style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}aa)` }}
              >
                <span className="project-icon">{project.icon}</span>
                <div className="project-number">0{project.id}</div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.map((h, idx) => (
                    <li key={idx}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
