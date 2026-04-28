import React, { useEffect, useRef } from 'react';

const GalaxyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Background stars
    const stars = [];
    const numStars = 800;
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2,
        alpha: Math.random()
      });
    }

    // Solar system planets
    const sun = { radius: 25, color: '#FDB813', glow: '#FF8C00' };
    
    // Scale orbits based on screen size
    const maxOrbit = Math.min(width, height) / 2 * 0.95;
    const step = maxOrbit / 9;

    const planets = [
      { name: 'Mercury', radius: 3, distance: step * 1, speed: 0.008, angle: Math.random() * Math.PI * 2, color: '#A8B8B8' },
      { name: 'Venus',   radius: 5, distance: step * 2, speed: 0.006, angle: Math.random() * Math.PI * 2, color: '#E4CD9A' },
      { name: 'Earth',   radius: 6, distance: step * 3, speed: 0.005, angle: Math.random() * Math.PI * 2, color: '#4B94E6' },
      { name: 'Mars',    radius: 4, distance: step * 4, speed: 0.004, angle: Math.random() * Math.PI * 2, color: '#E27B58' },
      { name: 'Jupiter', radius: 14, distance: step * 5, speed: 0.002, angle: Math.random() * Math.PI * 2, color: '#C88B3A' },
      { name: 'Saturn',  radius: 12, distance: step * 6, speed: 0.0015, angle: Math.random() * Math.PI * 2, color: '#E2C288', hasRings: true },
      { name: 'Uranus',  radius: 8, distance: step * 7, speed: 0.001, angle: Math.random() * Math.PI * 2, color: '#74B1CF' },
      { name: 'Neptune', radius: 8, distance: step * 8, speed: 0.0008, angle: Math.random() * Math.PI * 2, color: '#4560D0' },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background stars
      ctx.fillStyle = '#ffffff';
      stars.forEach(star => {
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        // Subtle twinkling
        star.alpha += (Math.random() - 0.5) * 0.05;
        star.alpha = Math.max(0.1, Math.min(1, star.alpha));
      });
      ctx.globalAlpha = 1; // reset alpha

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw Sun with glow
      ctx.shadowBlur = 60;
      ctx.shadowColor = sun.glow;
      ctx.fillStyle = sun.color;
      ctx.beginPath();
      ctx.arc(centerX, centerY, sun.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0; // reset shadow for other objects

      // Draw Orbits & Planets
      planets.forEach(planet => {
        // Draw orbit path
        ctx.beginPath();
        ctx.arc(centerX, centerY, planet.distance, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Update angle
        planet.angle += planet.speed;

        // Calculate planet position
        const x = centerX + Math.cos(planet.angle) * planet.distance;
        const y = centerY + Math.sin(planet.angle) * planet.distance;

        // Draw planet
        ctx.fillStyle = planet.color;
        ctx.beginPath();
        ctx.arc(x, y, planet.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw Saturn's rings
        if (planet.hasRings) {
          ctx.beginPath();
          ctx.ellipse(x, y, planet.radius * 2.2, planet.radius * 0.6, planet.angle, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(226, 194, 136, 0.5)';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      style={{ background: 'transparent' }}
    />
  );
};

export default GalaxyBackground;
