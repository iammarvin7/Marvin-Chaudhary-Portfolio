import fs from 'fs';
import path from 'path';
import { imageSize } from 'image-size';
import PageWrapper from '../../components/PageWrapper';
import MasonryGrid from '../../components/MasonryGrid';

export const metadata = {
    title: 'Marvin Chaudhary | Gallery',
};

// Vibrant color palette matching MasonryGrid
const VIBRANT_COLORS = [
    '#E07B39', '#4CAF50', '#9C27B0', '#FF5722', '#2196F3',
    '#FFEB3B', '#E91E63', '#00BCD4', '#8BC34A', '#FF9800',
];

// Helper to generate a 1x1 pixel base64 image of a specific color
function generateColorPlaceholder(color) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1"><rect width="1" height="1" fill="${color}"/></svg>`;
    return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

export default function Gallery() {
    // Server-side auto-discovery
    const photosDir = path.join(process.cwd(), 'public', 'photos');
    let photos = [];

    try {
        if (fs.existsSync(photosDir)) {
            const files = fs.readdirSync(photosDir);
            const imageFiles = files.filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));

            // Sort naturally
            imageFiles.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

            // Map to rich objects with dimensions and placeholders
            photos = imageFiles.map((file, index) => {
                try {
                    const filePath = path.join(photosDir, file);
                    const buffer = fs.readFileSync(filePath);
                    const dimensions = imageSize(buffer);
                    const color = VIBRANT_COLORS[index % VIBRANT_COLORS.length];

                    return {
                        src: `/photos/${file}`,
                        name: file,
                        width: dimensions.width,
                        height: dimensions.height,
                        blurDataURL: generateColorPlaceholder(color),
                    };
                } catch (err) {
                    console.error(`Failed to process image: ${file}`, err);
                    return null; // Skip this file
                }
            }).filter(Boolean); // Remove nulls
        }
    } catch (error) {
        console.error('Error reading photos directory:', error);
    }

    return (
        <PageWrapper className="container section">
            <MasonryGrid photos={photos} />
        </PageWrapper>
    );
}
