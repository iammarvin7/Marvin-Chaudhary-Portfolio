import fs from 'fs';
import path from 'path';
import PageWrapper from '../../components/PageWrapper';
import MasonryGrid from '../../components/MasonryGrid';

export const metadata = {
    title: 'Marvin Chaudhary | Gallery', // Specific request: "Marvin Chaudhary | Gallery"
};

export default function Gallery() {
    // Server-side auto-discovery
    const photosDir = path.join(process.cwd(), 'public', 'photos');
    let photos = [];

    try {
        if (fs.existsSync(photosDir)) {
            const files = fs.readdirSync(photosDir);
            photos = files.filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));

            // Sort naturally (photo1, photo2, photo10)
            photos.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
        }
    } catch (error) {
        console.error('Error reading photos directory:', error);
    }

    return (
        <PageWrapper className="container section">
            {/* Heading removed as requested */}
            <MasonryGrid photos={photos} />
        </PageWrapper>
    );
}
