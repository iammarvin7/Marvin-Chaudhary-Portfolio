'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navigation() {
    const pathname = usePathname();
    const [hoveredPath, setHoveredPath] = useState(pathname);

    const navItems = [
        { name: 'About', href: '/about' },
        { name: 'Resume', href: '/resume' },
        { name: 'Projects', href: '/projects' },
        { name: 'Gallery', href: '/gallery' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel"
                style={{
                    padding: '0.5rem 0.6rem',
                    borderRadius: '999px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    background: 'rgba(255, 255, 255, 1)', // Completely opaque
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)', // Keep shadow for depth
                }}
                onMouseLeave={() => setHoveredPath(pathname)}
            >
                {/* Branding */}
                <Link
                    href="/"
                    className="nav-item-brand"
                    style={{
                        padding: '0.5rem 1.2rem',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-space)',
                        whiteSpace: 'nowrap',
                        marginRight: '0.2rem',
                        color: 'var(--text-main)',
                        letterSpacing: '-0.02em',
                        position: 'relative',
                        zIndex: 2,
                    }}
                >
                    Marvin Chaudhary
                </Link>

                <div style={{ width: '1px', height: '16px', background: 'rgba(0,0,0,0.08)', margin: '0 0.2rem' }} />

                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const isHovered = hoveredPath === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onMouseOver={() => setHoveredPath(item.href)}
                            style={{
                                position: 'relative',
                                padding: '0.5rem 1rem',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                color: isActive ? 'white' : 'var(--text-muted)',
                                transition: 'color 0.2s',
                                zIndex: 1,
                                letterSpacing: '-0.01em',
                            }}
                        >
                            {/* Hover Pill (Light Grey) */}
                            {hoveredPath === item.href && !isActive && (
                                <motion.div
                                    layoutId="nav-hover"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'rgba(0,0,0,0.03)',
                                        borderRadius: '999px',
                                        zIndex: -1,
                                    }}
                                />
                            )}

                            {/* Active Pill (Black) */}
                            {isActive && (
                                <motion.div
                                    layoutId="nav-bg"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'var(--text-main)',
                                        borderRadius: '999px',
                                        zIndex: -1,
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                                    }}
                                />
                            )}
                            {item.name}
                        </Link>
                    );
                })}
            </motion.div>
        </nav>
    );
}
