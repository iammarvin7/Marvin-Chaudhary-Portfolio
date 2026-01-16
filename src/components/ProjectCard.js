'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

import LinkPreview from './LinkPreview';

export default function ProjectCard({ project, index }) {
    // Prioritize demo link for the preview, otherwise use repo link
    const previewUrl = project.demo || project.link;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="card-master"
        >
            {/* Main Content Row */}
            <div style={{ display: 'flex', gap: '2rem', height: '100%' }}>

                {/* Left Column: Text & Tags */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

                    {/* Header & Desc */}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '0.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', flex: 1 }}>
                                <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>{project.title}</h3>
                            </div>

                            <div style={{ display: 'flex', gap: '0.4rem', flexShrink: 0 }}>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                                        className="btn-icon"
                                        style={{
                                            padding: '0.5rem',
                                            borderRadius: '50%',
                                            background: 'rgba(0,0,0,0.03)',
                                            color: 'var(--text-main)',
                                            transition: 'all 0.2s',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.background = 'black';
                                            e.currentTarget.style.color = 'white';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.background = 'rgba(0,0,0,0.03)';
                                            e.currentTarget.style.color = 'var(--text-main)';
                                        }}
                                    >
                                        <Github size={18} strokeWidth={2} />
                                    </a>
                                )}
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                        className="btn-icon"
                                        style={{
                                            padding: '0.5rem',
                                            borderRadius: '50%',
                                            background: 'rgba(0,0,0,0.03)',
                                            color: 'var(--text-main)',
                                            transition: 'all 0.2s',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.background = 'black';
                                            e.currentTarget.style.color = 'white';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.background = 'rgba(0,0,0,0.03)';
                                            e.currentTarget.style.color = 'var(--text-main)';
                                        }}
                                    >
                                        <ExternalLink size={18} strokeWidth={2} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <p style={{
                            fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                            color: 'var(--text-muted)',
                            marginBottom: '1.5rem',
                            lineHeight: 1.6,
                            fontFamily: 'var(--font-inter)'
                        }}>
                            {project.description}
                        </p>
                    </div>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                        {project.stack.map((tech, i) => (
                            <span key={i} style={{
                                fontSize: '0.8rem',
                                fontWeight: 500,
                                padding: '0.4rem 1rem',
                                borderRadius: '99px',
                                background: 'rgba(0,0,0,0.03)',
                                color: 'var(--text-main)',
                                fontFamily: 'var(--font-mono)',
                                border: '1px solid rgba(0,0,0,0.02)'
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right Column: Preview Image */}
                {previewUrl && (
                    <div style={{
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingLeft: '1rem',
                        borderLeft: '1px solid rgba(0,0,0,0.03)',
                    }} className="project-preview-container">
                        <LinkPreview url={previewUrl} manualImage={project.previewImage} />
                    </div>
                )}
            </div>
        </motion.div>
    );
}
