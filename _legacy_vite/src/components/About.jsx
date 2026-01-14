import React from 'react';
import { content } from '../data/content';

const About = () => {
  return (
    <section id="about" className="section container">
      <div style={{ paddingBottom: '3rem', borderBottom: '1px solid var(--border-color)', marginBottom: '3rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>{content.hero.name}</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{content.hero.title}</p>
        <p style={{ color: 'var(--text-muted)' }}>{content.hero.tagline}</p>
        
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
          <a href={content.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${content.contact.email}`}>Email</a>
        </div>
      </div>

      <h2>About</h2>
      <p style={{ maxWidth: '700px' }}>{content.about}</p>
    </section>
  );
};

export default About;
