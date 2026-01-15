'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function LinkPreview({ url, manualImage }) {
    const [data, setData] = useState(manualImage ? { image: manualImage } : null);
    const [loading, setLoading] = useState(!manualImage);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (manualImage || !url) return;

        async function fetchPreview() {
            try {
                // Encode the URL properly for the query parameter
                const res = await fetch(`/api/link-preview?url=${encodeURIComponent(url)}`);
                if (!res.ok) throw new Error('Failed to fetch preview');
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchPreview();
    }, [url, manualImage]);

    if (loading) {
        return (
            <div style={{
                height: '160px',
                background: 'rgba(0,0,0,0.03)',
                borderRadius: '12px',
                width: '280px',
                animation: 'pulse 1.5s infinite ease-in-out'
            }} />
        );
    }

    if (error || !data) return null;

    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="link-preview-card"
            style={{
                display: 'block',
                textDecoration: 'none',
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                width: '280px', // Bigger width
                height: '160px', // Bigger height
                flexShrink: 0,
                position: 'relative',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
            }}
            whileHover={{
                y: -4,
                boxShadow: '0 12px 24px rgba(0,0,0,0.08)'
            }}
        >
            {/* Image Section - Full Cover */}
            <div style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${data.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} />
        </motion.a>
    );
}
