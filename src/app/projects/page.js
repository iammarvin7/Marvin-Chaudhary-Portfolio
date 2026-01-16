import { content } from '../../data/content';
import PageWrapper from '../../components/PageWrapper';
import ProjectCard from '../../components/ProjectCard';

export const metadata = {
    title: 'Marvin Chaudhary | Projects',
};

export default function Projects() {
    return (
        <PageWrapper className="container section">

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {content.projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </PageWrapper>
    );
}
