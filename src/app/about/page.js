import { content } from '../../data/content';
import PageWrapper from '../../components/PageWrapper';

export const metadata = {
    title: 'Marvin Chaudhary | About',
};

export default function About() {
    return (
        <PageWrapper className="container section">
            {/* Split Layout: Text & Photos */}
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start', marginBottom: '4rem' }}>

                {/* Left Column: Text */}
                <div style={{ flex: '1 1 500px' }}>
                    <h1 style={{ marginBottom: '1.5rem' }}>About Me</h1>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-main)', opacity: 0.9, whiteSpace: 'pre-line' }}>
                        {content.about}
                    </p>
                </div>

                {/* Right Column: Photos Composition */}
                <div style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '450px', isolation: 'isolate' }}>

                        {/* Base Image (Horse) */}
                        <div style={{
                            width: '85%',
                            marginLeft: 'auto',
                            aspectRatio: '0.8',
                            borderRadius: '24px',
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
                            bottom: '20px',
                            left: '0',
                            width: '55%',
                            aspectRatio: '1',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                            border: '6px solid var(--background-color, #ffffff)',
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
            <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>Some of my awards include:</h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {content.achievements.map((item, index) => (
                        <div key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{
                                minWidth: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                background: '#dbeafe', // light blue
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '4px'
                            }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{item.title}</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ padding: '2rem', background: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: '6px' }}>
                <h3>Find me on</h3>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <a href={content.contact.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                    <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
                </div>
            </div>
        </PageWrapper>
    );
}
