import React from 'react';
import { content } from '../data/content';

const Resume = () => {
  return (
    <section id="resume" className="section container">
      <div className="resume-header">
        <h2>Resume</h2>
        <a href="/resume.pdf" download className="btn">Download PDF</a>
      </div>

      <div className="grid-2">
        <div>
          <h3>Experience</h3>
          {content.experience.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-header">
                <span className="timeline-title">{job.company}</span>
                <span className="timeline-date">{job.date}</span>
              </div>
              <div className="timeline-role">{job.role}</div>
              <ul>
                {job.description.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h3>Education</h3>
          {content.education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-header">
                <span className="timeline-title">{edu.school}</span>
                <span className="timeline-date">{edu.year}</span>
              </div>
              <div className="timeline-role">{edu.degree}</div>
            </div>
          ))}

          <h3>Technical Skills</h3>
          <div>
            {content.skills.map((skill, index) => (
              <span key={index} className="tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
