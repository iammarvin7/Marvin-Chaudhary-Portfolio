'use client';

import PageWrapper from '../components/PageWrapper';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <>
            {/* Hero Section - Truly Centered */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 2rem',
                marginTop: '-80px'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4rem',
                    textAlign: 'center',
                    maxWidth: '1100px',
                    width: '100%',
                }} className="hero-split">

                    <style jsx>{`
            @media (min-width: 768px) {
              .hero-split {
                flex-direction: row !important;
                text-align: left !important;
                gap: 6rem !important;
                justify-content: center;
              }
              .hero-text {
                align-items: flex-start !important;
              }
            }
            .social-img {
              width: 42px;
              height: 42px;
              transition: transform 0.2s ease, opacity 0.2s ease;
              opacity: 0.6;
            }
            .social-img:hover {
              transform: scale(1.1);
              opacity: 1;
            }
            .photo-bubble {
              width: 510px; /* 1.5x bigger (was 340px) */
              height: 510px;
              border-radius: 60% 40% 55% 45% / 50% 55% 45% 50%;
              overflow: hidden;
              border: 3px solid rgba(0,0,0,0.1);
              box-shadow: 0 25px 50px rgba(0,0,0,0.1);
            }
          `}</style>

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
                                fontSize: 'clamp(2rem, 4vw, 3rem)', /* 0.75x smaller */
                                lineHeight: 1.2,
                                marginBottom: '1.5rem',
                                fontWeight: 700,
                                whiteSpace: 'nowrap' /* Single line */
                            }}
                        >
                            Hi, I'm Marvin Chaudhary!
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            style={{ fontSize: '1.35rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '500px' }}
                        >
                            I aspire to turn complex problems into simple, dependable software.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            style={{
                                marginTop: '2rem',
                                display: 'flex',
                                gap: '2.7rem', /* 1.5x bigger (was 1.8rem) */
                                alignItems: 'center'
                            }}
                        >
                            <a href="https://linkedin.com/in/marvin-chaudhary" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <img src="/linkedin.png" alt="LinkedIn" className="social-img" />
                            </a>
                            <a href="https://github.com/iammarvin7" target="_blank" rel="noopener noreferrer" title="GitHub: iammarvin7">
                                <img src="/github.png" alt="GitHub iammarvin7" className="social-img" />
                            </a>
                            <a href="https://github.com/Marvyn007" target="_blank" rel="noopener noreferrer" title="GitHub: Marvyn007">
                                <img src="/github.png" alt="GitHub Marvyn007" className="social-img" />
                            </a>
                            <a href="https://www.instagram.com/marvyn__x/" target="_blank" rel="noopener noreferrer" title="Instagram">
                                <img src="/instagram.png" alt="Instagram" className="social-img" />
                            </a>
                            <a href="mailto:mchaudhary1s@semo.edu" title="Email">
                                <img src="/email.png" alt="Email" className="social-img" />
                            </a>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Contact Section - Simple Form */}
            <section style={{
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '6rem 2rem',
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    style={{
                        width: '100%',
                        maxWidth: '500px',
                    }}
                >
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2rem' }}>Get in Touch</h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1rem' }}>
                        Have a project in mind? Let's build something amazing together.
                    </p>
                    <ContactForm />
                </motion.div>
            </section>
        </>
    );
}
