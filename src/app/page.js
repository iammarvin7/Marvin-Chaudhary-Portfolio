'use client';

import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import WelcomeAnimation from '../components/WelcomeAnimation';

export default function Home() {
    return (
        <>
            <style jsx>{`
            @media (min-width: 768px) {
              .hero-split {
                flex-direction: row !important;
                text-align: left !important;
                gap: 4rem !important;
                justify-content: center;
              }
              .hero-text {
                align-items: flex-start !important;
              }
            }
            .social-img {
              width: 45px; /* 0.9x of 50px */
              height: 45px;
              transition: transform 0.2s ease;
              opacity: 1 !important; /* Active by default */
              object-fit: contain;
              display: block;
              margin-bottom: 0.5rem; /* Space between icon and text */
            }
            .social-img:hover {
              transform: scale(1.1);
            }
            .social-link {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-decoration: none;
                transition: transform 0.2s ease;
            }
            .social-link:hover {
                transform: scale(1.05); /* Gentle hover effect for the whole block */
            }
            .social-label {
                font-size: 0.9rem;
                color: var(--text-muted);
                font-weight: 500;
            }
            .photo-bubble {
              width: 405px; /* 0.9x of 450px */
              height: 405px;
              border-radius: 60% 40% 55% 45% / 50% 55% 45% 50%;
              overflow: hidden;
              border: 3px solid rgba(0,0,0,0.1);
              box-shadow: 0 25px 50px rgba(0,0,0,0.1);
              margin-top: 2.4rem; /* 1.2x of 2rem */
              transform: translateX(-20px); /* Shift left a bit */
            }
            @media (max-width: 768px) {
                .photo-bubble {
                    width: 300px; /* Keep smaller on mobile */
                    height: 300px;
                    transform: translateX(0); /* Reset shift on mobile */
                }
            }
          `}</style>

            {/* Hero Section */}
            <WelcomeAnimation style={{
                // Reduced height to make rooms for footer on same screen if possible
                minHeight: 'calc(100vh - 50px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '30px 2rem 0 2rem', // Reduced top padding to 30px as requested
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem', // Reduced gap
                    textAlign: 'center',
                    maxWidth: '1100px',
                    width: '100%',
                }} className="hero-split">

                    {/* Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{ flexShrink: 0 }}
                    >
                        <div className="photo-bubble">
                            <img
                                src="/main-photo.jpeg"
                                alt="Marvin Chaudhary"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                            />
                        </div>
                    </motion.div>

                    {/* Text */}
                    <div className="hero-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <motion.h1
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                lineHeight: 1.2,
                                marginBottom: '1rem',
                                fontWeight: 700,
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Hi, I'm Marvin Chaudhary!
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.5, maxWidth: '500px' }}
                        >
                            I aspire to turn complex problems into simple, dependable software.
                        </motion.p>
                    </div>

                </div>
            </WelcomeAnimation>

            {/* Let's Connect Section - Replaced Contact Form */}
            <section style={{
                minHeight: '20vh', // Reduced height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem 2rem 3rem 2rem',
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        width: '100%',
                        maxWidth: '1000px', /* Increased maxWidth to fit labels */
                        textAlign: 'center'
                    }}
                >
                    <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Let's Connect</h2>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '3.6rem', /* 1.2x of 3rem */
                        flexWrap: 'wrap', // Responsive wrapping
                        alignItems: 'flex-start' /* Align to top so texts line up */
                    }}>
                        <a href="https://linkedin.com/in/marvin-chaudhary" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-link">
                            <img src="/linkedin.png" alt="LinkedIn" className="social-img" />
                            <span className="social-label">/marvin-chaudhary</span>
                        </a>
                        <a href="https://github.com/iammarvin7" target="_blank" rel="noopener noreferrer" title="GitHub: iammarvin7" className="social-link">
                            <img src="/github.png" alt="GitHub iammarvin7" className="social-img" />
                            <span className="social-label">/iammarvin7</span>
                        </a>
                        <a href="https://github.com/Marvyn007" target="_blank" rel="noopener noreferrer" title="GitHub: Marvyn007" className="social-link">
                            <img src="/github.png" alt="GitHub Marvyn007" className="social-img" />
                            <span className="social-label">/Marvyn007</span>
                        </a>
                        <a href="mailto:mchaudhary1s@semo.edu" title="Email" className="social-link">
                            <img src="/email.png" alt="Email" className="social-img" />
                            <span className="social-label">mchaudhary1s@semo.edu</span>
                        </a>
                        <a href="https://www.instagram.com/marvyn__x/" target="_blank" rel="noopener noreferrer" title="Instagram" className="social-link">
                            <img src="/instagram.png" alt="Instagram" className="social-img" />
                            <span className="social-label">/marvyn__x</span>
                        </a>
                    </div>
                </motion.div>
            </section>
        </>
    );
}
