'use client';

import { content } from '../../data/content';
import PageWrapper from '../../components/PageWrapper';

export default function About() {
    return (
        <PageWrapper className="container section">
            {/* Mobile-first responsive styles */}
            <style jsx>{`
                .about-layout {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    margin-bottom: 3rem;
                }
                @media (min-width: 768px) {
                    .about-layout {
                        flex-direction: row;
                        gap: 4rem;
                        align-items: flex-start;
                    }
                }
                .about-text {
                    flex: 1 1 100%;
                }
                @media (min-width: 768px) {
                    .about-text {
                        flex: 1 1 500px;
                    }
                }
                .about-photos {
                    flex: 1 1 100%;
                    display: flex;
                    justify-content: center;
                }
                @media (min-width: 768px) {
                    .about-photos {
                        flex: 1 1 350px;
                    }
                }
                .photo-composition {
                    position: relative;
                    width: 100%;
                    max-width: 320px;
                }
                @media (min-width: 768px) {
                    .photo-composition {
                        max-width: 450px;
                    }
                }
                .achievements-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.25rem;
                }
                @media (min-width: 640px) {
                    .achievements-grid {
                        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                        gap: 1.5rem;
                    }
                }
                .about-title {
                    font-size: clamp(2rem, 6vw, 4rem);
                    margin-bottom: 1rem;
                }
                .about-description {
                    font-size: clamp(1rem, 2.5vw, 1.2rem);
                    line-height: 1.8;
                }
            `}</style>

            {/* Split Layout: Text & Photos */}
            <div className="about-layout">
                {/* Left Column: Text */}
                <div className="about-text">
                    <h1 className="about-title">About Me</h1>
                    <p className="about-description" style={{ color: 'var(--text-main)', opacity: 0.9, whiteSpace: 'pre-line' }}>
                        {content.about}
                    </p>
                </div>

                {/* Right Column: Photos Composition */}
                <div className="about-photos">
                    <div className="photo-composition" style={{ isolation: 'isolate' }}>
                        {/* Base Image (Horse) */}
                        <div style={{
                            width: '85%',
                            marginLeft: 'auto',
                            aspectRatio: '0.8',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <img
                                src="/images/about/horse.jpg"
                                alt="Marvin with Horse"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Overlay Image (Portrait) */}
                        <div style={{
                            position: 'absolute',
                            bottom: '15px',
                            left: '0',
                            width: '50%',
                            aspectRatio: '1',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                            border: '4px solid var(--bg-color, #ffffff)',
                            zIndex: 2
                        }}>
                            <img
                                src="/images/about/portrait.jpg"
                                alt="Marvin Portrait"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Achievements Section */}
            <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ marginBottom: '1.25rem', fontSize: 'clamp(1.25rem, 4vw, 1.8rem)' }}>Some of my awards include:</h3>
                <div className="achievements-grid">
                    {content.achievements.map((item, index) => (
                        <div key={index} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <div style={{
                                minWidth: '22px',
                                height: '22px',
                                borderRadius: '50%',
                                background: '#dbeafe',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '3px',
                                flexShrink: 0
                            }}>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <div>
                                <h4 style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', marginBottom: '0.25rem' }}>{item.title}</h4>
                                <p style={{ fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Find Me On Section */}
            <div style={{ padding: '1.5rem', background: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}>Find me on</h3>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                    <a href={content.contact.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                    <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
                </div>
            </div>
        </PageWrapper>
    );
}

