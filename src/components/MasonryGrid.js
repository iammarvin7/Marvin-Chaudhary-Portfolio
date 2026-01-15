'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Extract photo name from filename (e.g., "photo 1.JPG" -> "photo 1")
function getPhotoName(filename) {
    return filename.replace(/\.[^/.]+$/, ''); // Remove extension
}

// Vibrant color palette (opaque, inspired by Amy Lombard's site)
const VIBRANT_COLORS = [
    '#E07B39', // Burnt Orange
    '#4CAF50', // Green
    '#9C27B0', // Purple
    '#FF5722', // Deep Orange
    '#2196F3', // Blue
    '#FFEB3B', // Yellow
    '#E91E63', // Pink
    '#00BCD4', // Cyan
    '#8BC34A', // Light Green
    '#FF9800', // Orange
];

function getColorForIndex(index) {
    return VIBRANT_COLORS[index % VIBRANT_COLORS.length];
}

export default function MasonryGrid({ photos }) {
    const [columns, setColumns] = useState([]);
    const [hoveredPhoto, setHoveredPhoto] = useState(null);

    // Algorithm to distribute photos into columns
    useEffect(() => {
        if (!photos) return;

        const calculateColumns = () => {
            const width = window.innerWidth;
            let numCols = 1;

            // Reverted to 3 columns on desktop as requested
            if (width >= 1024) numCols = 3;
            else if (width >= 640) numCols = 2;

            // Initialize columns
            const newColumns = Array.from({ length: numCols }, () => []);

            // Distribution Algorithm: Round Robin
            photos.forEach((photo, index) => {
                newColumns[index % numCols].push({ name: photo, originalIndex: index });
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
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            {columns.map((colPhotos, colIndex) => (
                <div key={colIndex} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {colPhotos.map((photoData, photoIndex) => {
                        const photo = photoData.name;
                        const photoName = getPhotoName(photo);
                        const isHovered = hoveredPhoto === photo;
                        const overlayColor = getColorForIndex(photoData.originalIndex);

                        return (
                            <motion.div
                                key={photo}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: (colIndex * 0.1) + (photoIndex * 0.05), duration: 0.5, ease: "easeOut" }}
                                onMouseEnter={() => setHoveredPhoto(photo)}
                                onMouseLeave={() => setHoveredPhoto(null)}
                                style={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: '4px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                    cursor: 'pointer'
                                }}
                            >
                                <img
                                    src={`/photos/${photo}`}
                                    alt={photoName}
                                    loading="lazy"
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        height: 'auto',
                                        transition: 'transform 0.3s ease'
                                    }}
                                />

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
