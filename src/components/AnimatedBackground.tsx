import React, { useEffect, useRef } from 'react';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    let time = 0;

    const animate = () => {
      if (!ctx) return;
      
      // Dark background
      ctx.fillStyle = '#09090b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (!prefersReducedMotion) {
        // Draw grid
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.05)'; // emerald-500 very faint
        ctx.lineWidth = 1;
        
        const gridSize = 40;
        const offsetX = (time * 0.5) % gridSize;
        const offsetY = (time * 0.5) % gridSize;

        ctx.beginPath();
        for (let x = offsetX; x < canvas.width; x += gridSize) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
        }
        for (let y = offsetY; y < canvas.height; y += gridSize) {
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
        }
        ctx.stroke();

        // Draw some moving "data packets"
        ctx.fillStyle = 'rgba(16, 185, 129, 0.3)';
        for (let i = 0; i < 20; i++) {
          const px = ((Math.sin(time * 0.01 + i) * 0.5 + 0.5) * canvas.width);
          const py = ((Math.cos(time * 0.015 + i * 2) * 0.5 + 0.5) * canvas.height);
          
          // Snap to grid
          const snappedX = Math.floor(px / gridSize) * gridSize + offsetX;
          const snappedY = Math.floor(py / gridSize) * gridSize + offsetY;
          
          ctx.fillRect(snappedX - 2, snappedY - 2, 4, 4);
        }
      }

      time++;
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      aria-hidden="true"
    />
  );
};
