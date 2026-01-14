import { content } from '../../data/content';
import PageWrapper from '../../components/PageWrapper';
import ProjectCard from '../../components/ProjectCard';

export const metadata = {
    title: 'Marvin Chaudhary | Projects',
};

export default function Projects() {
    return (
        <PageWrapper className="container section">
            <h1 style={{ marginBottom: '3rem' }}>Selected Work</h1>
            <div className="grid-2">
                {content.projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </PageWrapper>
    );
}
