'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Marvin Chaudhary', isName: true },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/resume', label: 'Resume' },
    { href: '/gallery', label: 'Gallery' },
];

export default function Navigation() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Handle responsive detection
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            <nav>
                {/* Desktop Navigation - Glass Pill */}
                {!isMobile && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="glass-panel"
                        style={{
                            display: 'flex',
                            gap: '0.5rem',
                            padding: '0.5rem',
                            borderRadius: '99px',
                            alignItems: 'center',
                        }}
                    >
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href && !link.isName; // Name link never shows as active
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    style={{
                                        position: 'relative',
                                        padding: link.isName ? '0.6rem 1.4rem' : '0.6rem 1.2rem',
                                        borderRadius: '99px',
                                        fontSize: link.isName ? '1.1rem' : '0.9rem',
                                        fontWeight: link.isName ? 400 : 500,
                                        fontFamily: link.isName ? 'var(--font-bebas)' : 'var(--font-space)',
                                        letterSpacing: link.isName ? '0.05em' : 'normal',
                                        textTransform: link.isName ? 'uppercase' : 'none',
                                        color: isActive ? 'white' : 'var(--text-main)',
                                        background: isActive ? 'var(--text-main)' : 'transparent',
                                        transition: 'all 0.2s ease',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </motion.div>
                )}

                {/* Mobile Hamburger Button */}
                {isMobile && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="glass-panel"
                        style={{
                            position: 'fixed',
                            top: '20px',
                            left: '20px',
                            zIndex: 10001,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            border: '1px solid rgba(0,0,0,0.08)',
                            cursor: 'pointer',
                            background: isOpen ? 'var(--text-main)' : 'var(--surface-color)',
                            color: isOpen ? 'white' : 'var(--text-main)',
                            transition: 'all 0.2s ease',
                        }}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </motion.button>
                )}
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && isMobile && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'fixed',
                                inset: 0,
                                background: 'rgba(0,0,0,0.3)',
                                backdropFilter: 'blur(4px)',
                                zIndex: 9998,
                            }}
                        />

                        {/* Slide-in Menu */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                width: '280px',
                                maxWidth: '80vw',
                                background: 'var(--bg-color)',
                                zIndex: 9999,
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '100px 2rem 2rem',
                                boxShadow: '4px 0 30px rgba(0,0,0,0.1)',
                            }}
                        >
                            {navLinks.map((link, index) => {
                                const isActive = pathname === link.href && !link.isName; // Name link never shows as active
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            style={{
                                                display: 'block',
                                                padding: '1rem 0',
                                                fontSize: link.isName ? '1.8rem' : '1.5rem',
                                                fontWeight: link.isName ? 400 : 600,
                                                fontFamily: link.isName ? 'var(--font-bebas)' : 'var(--font-space)',
                                                letterSpacing: link.isName ? '0.05em' : 'normal',
                                                textTransform: link.isName ? 'uppercase' : 'none',
                                                color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                                                textDecoration: 'none',
                                                borderBottom: '1px solid var(--border-color)',
                                                transition: 'color 0.2s ease',
                                            }}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            {/* Social Links in Mobile Menu */}
                            <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                                    Connect with me
                                </p>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href="https://linkedin.com/in/marvin-chaudhary" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>
                                        LinkedIn
                                    </a>
                                    <a href="https://github.com/iammarvin7" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
