'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            style={{
                padding: '2rem',
                borderRadius: '8px',
                backgroundColor: 'var(--surface-color)',
                border: '1px solid var(--border-color)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.2s',
            }}
            className="project-card-hover"
        >
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>{project.title}</h3>
                    <div style={{ display: 'flex', gap: '0.8rem' }}>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ opacity: 0.6, hover: { opacity: 1 } }}>
                                <Github size={20} />
                            </a>
                        )}
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ opacity: 0.6, hover: { opacity: 1 } }}>
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    {project.description}
                </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.stack.map((tech, i) => (
                    <span key={i} className="tag" style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
