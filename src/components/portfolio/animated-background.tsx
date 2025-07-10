import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const geometricRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      const particleCount = 80;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 2;
        const colors = ['primary', 'muted-foreground', 'chart-1', 'chart-2', 'chart-3'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.className = `floating-particle bg-${color}/20`;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 6 + 8) + 's';
        particlesRef.current.appendChild(particle);
      }
    };

    const createGeometricShapes = () => {
      if (!geometricRef.current) return;
      
      const shapeCount = 15;
      
      for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        const shapes = ['triangle', 'hexagon', 'diamond', 'circle'];
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
        const size = Math.random() * 100 + 50;
        
        shape.className = `geometric-shape ${shapeType}`;
        shape.style.width = size + 'px';
        shape.style.height = size + 'px';
        shape.style.left = Math.random() * 100 + '%';
        shape.style.top = Math.random() * 100 + '%';
        shape.style.animationDelay = Math.random() * 10 + 's';
        shape.style.animationDuration = (Math.random() * 15 + 20) + 's';
        geometricRef.current.appendChild(shape);
      }
    };

    createParticles();
    createGeometricShapes();

    return () => {
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
      if (geometricRef.current) {
        geometricRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      {/* Multi-layer animated gradient background */}
      <div className="fixed inset-0 cosmic-bg opacity-40 dark:opacity-40" />
      <div className="fixed inset-0 mesh-gradient opacity-20 dark:opacity-20" />
      
      {/* Geometric shapes layer */}
      <div ref={geometricRef} className="fixed inset-0 pointer-events-none overflow-hidden" />
      
      {/* Floating particles layer */}
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none overflow-hidden" />
      
      {/* Radial gradient overlay */}
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-background/10 to-background/30 pointer-events-none" />
    </>
  );
};

export default AnimatedBackground;
