'use client';

import { useEffect, useRef } from 'react';

export default function WelcomeAnimation({ children, style, className }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (typeof CSS !== 'undefined' && 'paintWorklet' in CSS) {
            CSS.paintWorklet.addModule('/worklets/bubble-particles.js');
        }

        const $container = containerRef.current;
        if (!$container) return;

        let frameId;
        const startTime = Date.now();

        // Animation loop for fluid motion
        const animate = () => {
            const now = Date.now();
            const tick = now - startTime;
            $container.style.setProperty('--bubble-tick', tick);
            frameId = requestAnimationFrame(animate);
        };
        frameId = requestAnimationFrame(animate);

        const handlePointerMove = (e) => {
            // Update bubble position smoothly
            // We can add some lerping here if we want "lag", 
            // but CSS transition on properties handles that better/easier.
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;

            $container.style.setProperty('--bubble-x', x);
            $container.style.setProperty('--bubble-y', y);
        };

        const handlePointerLeave = () => {
            // Center it again or let it drift? Let's center it.
            $container.style.setProperty('--bubble-x', 50);
            $container.style.setProperty('--bubble-y', 50);
        };

        window.addEventListener('pointermove', handlePointerMove);
        // Using window listener ensures we track cursor even if it leaves the section briefly but is still on page
        // But maybe stick to container for performance? User wanted "cursor-driven confetti", implies global feel?
        // The original code used container listener. Let's switch to window to ensure smooth tracking across the hero.

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('pointermove', handlePointerMove);
        };
    }, []);

    return (
        <section id="welcome" ref={containerRef} style={style} className={className}>
            {children}
        </section>
    );
}
