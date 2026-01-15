/*
  Antigravity Bubble Particles Worklet
  ------------------------------------
  Renders a cohesive "water bubble" field of particles.
  - Tiny, sparse particles near cursor.
  - Larger, denser particles at the outer rim.
  - Organic, fluid motion.
*/

class BubbleParticles {
    static get inputProperties() {
        return [
            '--bubble-x',
            '--bubble-y',
            '--bubble-radius',
            '--bubble-color',
            '--bubble-tick'
        ];
    }

    paint(ctx, geom, properties) {
        const xPos = parseFloat(properties.get('--bubble-x').toString()) || 50;
        const yPos = parseFloat(properties.get('--bubble-y').toString()) || 50;
        const radius = parseFloat(properties.get('--bubble-radius').toString()) || 300;
        const colorStr = properties.get('--bubble-color').toString().trim() || 'black';
        const tick = parseFloat(properties.get('--bubble-tick').toString()) || 0;

        const width = geom.width;
        const height = geom.height;

        // Center of the bubble (cursor position)
        const cx = (xPos / 100) * width;
        const cy = (yPos / 100) * height;

        // Use a seeded random for stability if we aren't animating positions heavily,
        // but for fluid motion we might want some noise.
        // For now, let's generate a fixed set of particles and animate their offsets.
        // Since worklets are stateless per frame (mostly), we use a pseudo-random generator
        // seeded by the index to keep particles stable across frames.

        const count = 450; // Increased density by 1.5x (was 300)
        const seed = 12345;

        // Helper for pseudo-random numbers
        function random(seed) {
            let x = Math.sin(seed++) * 10000;
            return x - Math.floor(x);
        }

        for (let i = 0; i < count; i++) {
            const r1 = random(seed + i);
            const r2 = random(seed + i + count);
            const r3 = random(seed + i * 2);

            // Distribute particles:
            // We want fewer in the center, more at the edge.
            // Using sqrt(r1) gives uniform area distribution.
            // To bias towards edge: use higher power or map radius differently.

            // Normalized distance from center (0 to 1)
            // Bias heavily towards edge -> e.g. Math.pow(r1, 0.5) is uniform.
            // Math.pow(r1, 0.2) pushes out? No, lower power pushes out?
            // Let's try uniform first, then tweak.
            // Actually, user wants "tiny, sparse near cursor... denser toward outer rim".
            // Let's explicitly map distance.

            let distNorm = Math.sqrt(r1); // Uniform distribution in circle
            // Shift distribution outwards slightly to create a "hole" or sparseness in center
            distNorm = 0.2 + (distNorm * 0.8);

            const angle = r2 * Math.PI * 2;

            // Animate angle slightly for drift (fluid motion)
            // Use tick (time) to rotate or wiggle
            const drift = Math.sin(tick * 0.002 + r3 * 10) * 0.1;
            const finalAngle = angle + drift;

            // Calculate position relative to cursor
            // Radius creates the boundary
            const dist = distNorm * radius;

            const px = cx + Math.cos(finalAngle) * dist;
            const py = cy + Math.sin(finalAngle) * dist;

            // Size: 
            // Tiny in center (distNorm near 0), larger at edge (distNorm near 1).
            // Base size * distNorm
            const sizeBase = 2;
            const sizeVariation = r3 * 1.5;
            // Make particles at the very center extremely tiny or invisible
            const sizeFactor = Math.max(0.2, Math.pow(distNorm, 2));

            // Static size (removed breathing effect)
            const size = (sizeBase + sizeVariation) * sizeFactor;

            // Color/Alpha
            // Fade out slightly at the very edge for softness
            // Fade out at very center
            ctx.fillStyle = colorStr;
            // Check if color is hex or name, if so we can't easily modify alpha without parsing.
            // Assuming globalAlpha works.

            const alphaEdge = 1 - Math.pow(distNorm, 8); // Fade at abstract edge
            const alphaCenter = Math.min(1, distNorm * 2); // Fade in from center
            ctx.globalAlpha = alphaEdge * alphaCenter * 0.8;

            ctx.beginPath();
            ctx.arc(px, py, size, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}

registerPaint('bubble-particles', BubbleParticles);
