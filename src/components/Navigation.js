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
            <div
                className="nav-glass-container"
                style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(12px)',
                    padding: '0.4rem',
                    borderRadius: '99px', // Reverting to pill 99px for container or 20px? User said "page selector should be darker". 
                    // Let's stick to the pill shape they liked but focus on the active tab color.
                    borderRadius: '30px',
                    border: '1px solid rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center', // Align items
                    gap: '0.5rem',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                }}
                onMouseLeave={() => setHoveredPath(pathname)}
            >
                {/* Branding: Marvin Chaudhary */}
                <Link
                    href="/"
                    className="nav-item"
                    style={{
                        padding: '0.6rem 1.2rem',
                        fontWeight: 700,
                        fontSize: '1rem',
                        fontFamily: 'var(--font-space)',
                        whiteSpace: 'nowrap',
                        marginRight: '0.5rem'
                    }}
                >
                    Marvin Chaudhary
                </Link>

                <div style={{ width: '1px', height: '24px', background: 'rgba(0,0,0,0.1)', marginRight: '0.5rem' }} />

                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    // const isHovered = hoveredPath === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onMouseOver={() => setHoveredPath(item.href)}
                            style={{
                                position: 'relative',
                                padding: '0.6rem 1.2rem',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                color: isActive ? 'white' : 'var(--text-muted)', // White text on black pill
                                transition: 'color 0.2s',
                                zIndex: 1
                            }}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-bg"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: '#000000', // Black active pill
                                        borderRadius: '30px',
                                        zIndex: -1,
                                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                                    }}
                                />
                            )}
                            {item.name}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
