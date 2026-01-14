import React from 'react';
import { content } from '../data/content';

const Contact = () => {
  return (
    <section id="contact" className="section container" style={{ marginBottom: '4rem' }}>
      <h2>Contact</h2>
      <p>Feel free to reach out for opportunities or collaborations.</p>
      
      <div className="contact-links">
        <a href={`mailto:${content.contact.email}`} className="contact-link">
          Email
        </a>
        <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
          LinkedIn
        </a>
        <a href={content.contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
