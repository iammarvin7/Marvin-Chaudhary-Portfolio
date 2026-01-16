'use client';

import PageWrapper from '../../components/PageWrapper';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Resume() {
    return (
        <PageWrapper
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '110px 1rem 4rem',
            }}
        >
            <style jsx>{`
                .resume-container {
                    width: 100%;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .button-bar {
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 1.5rem;
                }
                .resume-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.6rem 1.25rem;
                    background: #000;
                    color: #fff;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    font-weight: 500;
                    cursor: pointer;
                    text-decoration: none;
                    transition: opacity 0.2s;
                }
                .resume-btn:hover {
                    opacity: 0.85;
                }
                .pdf-container-unused {
                    /* Moved to globals.css as .resume-pdf-container to handle motion component issues */
                    display: none;
                }
            `}</style>

            <div className="resume-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="resume-pdf-container"
                >
                    <iframe
                        src="/resume.pdf"
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                        }}
                        title="Resume PDF"
                    />
                </motion.div>

                <div className="button-bar">
                    <a href="/resume.pdf" download className="resume-btn">
                        <Download size={18} />
                        Download PDF
                    </a>
                </div>
            </div>
        </PageWrapper>
    );
}
