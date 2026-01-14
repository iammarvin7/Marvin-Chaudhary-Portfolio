'use client';

import PageWrapper from '../../components/PageWrapper';
import { motion } from 'framer-motion';

export default function Resume() {
    return (
        <PageWrapper
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '100px 2rem 4rem',
            }}
        >
            {/* Top Bar with Download Button */}
            <div style={{
                width: '100%',
                maxWidth: '1050px', /* 1.5x wider (was 700px) */
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: '1.5rem'
            }}>
                <motion.a
                    href="/resume.pdf"
                    download
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.8rem 1.5rem',
                        background: '#000',
                        color: '#fff',
                        borderRadius: '8px',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                    }}
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7,10 12,15 17,10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download PDF
                </motion.a>
            </div>

            {/* Resume PDF Card - 1.5x wider */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5, boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}
                style={{
                    width: '100%',
                    maxWidth: '1050px', /* 1.5x wider */
                    margin: '0 auto',
                    aspectRatio: '8.5 / 11',
                    background: '#fff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.06)',
                    position: 'relative'
                }}
            >
                <iframe
                    src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        display: 'block'
                    }}
                    title="Resume PDF"
                />
            </motion.div>
        </PageWrapper>
    );
}
