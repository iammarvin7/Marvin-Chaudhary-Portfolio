'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function ResumeButton() {
    const pathname = usePathname();
    const shouldShow = pathname !== '/resume';

    return (
        <AnimatePresence>
            {shouldShow && (
                <motion.div
                    key="resume-button"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        position: 'fixed',
                        top: '30px',
                        right: '30px',
                        zIndex: 10000, // Highest z-index to be above noise overlay and everything else
                        pointerEvents: 'auto'
                    }}
                >
                    <motion.a
                        href="https://drive.google.com/file/d/1MFDBmlw5LInQD1HJZ-asx6TgBHCyzx4b/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-panel"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            padding: '0.7rem 1.4rem',
                            borderRadius: '99px',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            background: 'var(--surface-color)',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                            cursor: 'pointer',
                            color: 'var(--text-main, #1a1a1a)',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            fontFamily: 'var(--font-space)',
                            transition: 'all 0.2s ease',
                            outline: 'none',
                            textDecoration: 'none',
                            pointerEvents: 'auto' // Explicit pointer events on the anchor
                        }}
                    >
                        <FileText size={18} strokeWidth={2.5} />
                        <span>View Resume</span>
                    </motion.a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
