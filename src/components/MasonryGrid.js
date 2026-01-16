'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Extract photo name from filename (e.g., "photo 1.JPG" -> "photo 1")
function getPhotoName(filename) {
    return filename.replace(/\.[^/.]+$/, ''); // Remove extension
}

// Vibrant color palette (opaque, inspired by Amy Lombard's site)
const VIBRANT_COLORS = [
    '#E07B39', '#4CAF50', '#9C27B0', '#FF5722', '#2196F3',
    '#FFEB3B', '#E91E63', '#00BCD4', '#8BC34A', '#FF9800',
];

function getColorForIndex(index) {
    return VIBRANT_COLORS[index % VIBRANT_COLORS.length];
}

export default function MasonryGrid({ photos }) {
    const [columns, setColumns] = useState([]);
    const [hoveredPhoto, setHoveredPhoto] = useState(null);
    const [gap, setGap] = useState('2rem');

    // Algorithm to distribute photos into columns
    useEffect(() => {
        if (!photos) return;

        const calculateColumns = () => {
            const width = window.innerWidth;
            let numCols = 2; // Default: 2 columns for mobile

            // 3 columns on desktop, 2 on tablet and mobile
            if (width >= 1024) numCols = 3;
            else numCols = 2;

            // Smaller gap on mobile for tighter 2-column layout
            setGap(width < 640 ? '0.75rem' : '2rem');

            // Initialize columns
            const newColumns = Array.from({ length: numCols }, () => []);

            // Distribution Algorithm: Round Robin
            photos.forEach((photo, index) => {
                // Determine if this photo object is new structure or legacy string
                // (It should be new structure from now on)
                const photoData = typeof photo === 'string'
                    ? { src: `/photos/${photo}`, name: photo, originalIndex: index }
                    : { ...photo, originalIndex: index }; // Assume width/height/name/src are in object

                newColumns[index % numCols].push(photoData);
            });

            setColumns(newColumns);
        };

        calculateColumns();
        window.addEventListener('resize', calculateColumns);
        return () => window.removeEventListener('resize', calculateColumns);
    }, [photos]);

    if (!photos || photos.length === 0) {
        return (
            <div style={{ padding: '4rem', textAlign: 'center', background: 'var(--surface-color)', borderRadius: '8px' }}>
                <p>No photos found in <code>public/photos/</code></p>
                <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>Drop your images there to see them magically appear.</p>
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', gap: gap, alignItems: 'flex-start' }}>
            {columns.map((colPhotos, colIndex) => (
                <div key={colIndex} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: gap }}>
                    {colPhotos.map((photoData, photoIndex) => {
                        // Handle legacy vs new structure for safety
                        const photoName = getPhotoName(photoData.name);
                        const isHovered = hoveredPhoto === photoData.name;
                        const overlayColor = getColorForIndex(photoData.originalIndex);

                        // Priority loading for top items (first 2 rows roughly)
                        const isPriority = photoData.originalIndex < 6;

                        return (
                            <motion.div
                                key={photoData.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: (colIndex * 0.1) + (photoIndex * 0.05), duration: 0.5, ease: "easeOut" }}
                                onMouseEnter={() => setHoveredPhoto(photoData.name)}
                                onMouseLeave={() => setHoveredPhoto(null)}
                                style={{
                                    position: 'relative',
                                    borderRadius: '4px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                    cursor: 'pointer',
                                    // Removed overflow: hidden here to allow proper scaling if needed, 
                                    // but usually safer to keep it for border-radius on images
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
                                    <Image
                                        src={photoData.src}
                                        alt={photoName}
                                        width={photoData.width || 800} // Fallback if width missing
                                        height={photoData.height || 600} // Fallback if height missing
                                        priority={isPriority}
                                        placeholder={photoData.blurDataURL ? "blur" : "empty"}
                                        blurDataURL={photoData.blurDataURL}
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block',
                                        }}
                                    />
                                </div>

                                {/* Hover Overlay - Full coverage, opaque vibrant color */}
                                <motion.div
                                    initial={{ opacity: 0, y: '100%' }}
                                    animate={{
                                        opacity: isHovered ? 1 : 0,
                                        y: isHovered ? '10%' : '100%'  // Slides up, leaves 10% of photo visible at top
                                    }}
                                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: overlayColor,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        pointerEvents: 'none',
                                        zIndex: 10,
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.2)' // Added shadow
                                    }}
                                >
                                    <span style={{
                                        fontFamily: 'var(--font-bebas)', // Cooler font
                                        fontWeight: 400,
                                        fontSize: 'clamp(2rem, 4vw, 3.5rem)', // Larger for impact
                                        color: '#000',
                                        textTransform: 'uppercase', // Bebas is uppercase by default, but ensuring it
                                        letterSpacing: '0.02em',
                                        textAlign: 'center',
                                        padding: '1rem',
                                        lineHeight: 0.9,
                                        textShadow: '0 2px 0 rgba(255,255,255,0.2)' // Subtle highlight
                                    }}>
                                        {photoName}
                                    </span>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
