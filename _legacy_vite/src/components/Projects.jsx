import React from 'react';
import { content } from '../data/content';

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <h2>Projects</h2>
      <div>
        {content.projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">
              <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
            </h3>
            <p className="project-desc">{project.description}</p>
            <div style={{ marginTop: '0.5rem' }}>
              {project.stack.map((tech, i) => (
                <span key={i} className="tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
