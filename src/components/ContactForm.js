'use client';

import { motion } from 'framer-motion';

export default function ContactForm() {
    return (
        <motion.form
            action="https://formspree.io/f/mchaudhary1s@semo.edu"
            method="POST"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                width: '100%',
            }}
        >
            <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-main)' }}>Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    style={{
                        width: '100%',
                        padding: '0.8rem',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        background: '#fff',
                        fontFamily: 'inherit',
                        fontSize: '1rem'
                    }}
                />
            </div>

            <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-main)' }}>Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    style={{
                        width: '100%',
                        padding: '0.8rem',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        background: '#fff',
                        fontFamily: 'inherit',
                        fontSize: '1rem'
                    }}
                />
            </div>

            <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-main)' }}>Message</label>
                <textarea
                    name="message"
                    id="message"
                    rows="4"
                    required
                    style={{
                        width: '100%',
                        padding: '0.8rem',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        background: '#fff',
                        fontFamily: 'inherit',
                        fontSize: '1rem',
                        resize: 'vertical'
                    }}
                />
            </div>

            <button
                type="submit"
                style={{
                    width: '100%',
                    padding: '0.9rem',
                    background: '#000', /* Black button */
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    marginTop: '0.5rem',
                    transition: 'opacity 0.2s'
                }}
            >
                Send Message
            </button>

        </motion.form>
    );
}
