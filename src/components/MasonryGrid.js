'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function MasonryGrid({ photos }) {
    const [columns, setColumns] = useState([]);

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
                newColumns[index % numCols].push(photo);
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
                    {colPhotos.map((photo, photoIndex) => (
                        <motion.div
                            key={photo}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: (colIndex * 0.1) + (photoIndex * 0.05), duration: 0.5, ease: "easeOut" }}
                        >
                            <img
                                src={`/photos/${photo}`}
                                alt="Gallery"
                                loading="lazy"
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '4px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            ))}
        </div>
    );
}
