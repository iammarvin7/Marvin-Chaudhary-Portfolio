import { content } from '../../data/content';
import PageWrapper from '../../components/PageWrapper';

export const metadata = {
    title: 'Marvin Chaudhary | About',
};

export default function About() {
    return (
        <PageWrapper className="container section">
            <h1>About Me</h1>
            <p style={{ maxWidth: '700px', fontSize: '1.2rem', marginBottom: '2rem' }}>{content.about}</p>

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
