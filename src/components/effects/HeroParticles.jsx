import { useEffect, useRef } from 'react';

export default function HeroParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const context = canvas.getContext('2d');
    if (!context) return undefined;

    let animationFrame = 0;
    let particles = [];
    let width = 0;
    let height = 0;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const initializeParticles = () => {
      particles = [];
      const count = Math.min(50, Math.floor((width * height) / 24000));
      for (let index = 0; index < count; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          radius: Math.random() * 1.3 + 0.4,
        });
      }
    };

    const resizeCanvas = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      initializeParticles();
      if (reducedMotion) drawFrame(false);
    };

    const drawFrame = (move = true) => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = 'rgba(125, 211, 252, 0.55)';

      particles.forEach((particle) => {
        if (move) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          if (particle.x < 0 || particle.x > width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > height) particle.vy *= -1;
        }
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      });

      context.strokeStyle = 'rgba(125, 211, 252, 0.10)';
      context.lineWidth = 1;
      for (let first = 0; first < particles.length; first += 1) {
        for (let second = first + 1; second < particles.length; second += 1) {
          const dx = particles[first].x - particles[second].x;
          const dy = particles[first].y - particles[second].y;
          if (dx * dx + dy * dy < 130 * 130) {
            context.beginPath();
            context.moveTo(particles[first].x, particles[first].y);
            context.lineTo(particles[second].x, particles[second].y);
            context.stroke();
          }
        }
      }
    };

    const animate = () => {
      drawFrame(true);
      animationFrame = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    if (!reducedMotion) animate();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} id="heroParticles" aria-hidden="true" />;
}
