"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;

  constructor(canvasWidth: number, canvasHeight: number, isDark: boolean) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    // Parallax effect: larger particles appear closer
    this.size = Math.random() * 2 + 0.5; 
    
    // Slighly random X drift, but mostly falling straight down
    this.speedX = (Math.random() - 0.5) * 0.2;
    // Speed depends on size: larger (closer) = faster falling
    this.speedY = (this.size * 0.6) + Math.random() * 0.2; 
    
    this.color = isDark ? "rgba(99, 102, 241, 0.4)" : "rgba(99, 102, 241, 0.2)";
  }

  update(canvasWidth: number, canvasHeight: number, mouse: {x: number, y: number, radius: number}, ctx: CanvasRenderingContext2D) {
    this.x += this.speedX;
    this.y += this.speedY;

    // Wrap horizontally
    if (this.x > canvasWidth) this.x = 0;
    else if (this.x < 0) this.x = canvasWidth;
    
    // Matrix effect: when a particle hits the bottom, loop it to the top
    if (this.y > canvasHeight) {
      this.y = -10; // Start slightly above the viewport
      this.x = Math.random() * canvasWidth;
    }

    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < mouse.radius) {
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const force = (mouse.radius - distance) / mouse.radius;
      const pushX = forceDirectionX * force * 1.5;
      const pushY = forceDirectionY * force * 1.5;
      
      this.x -= pushX;
      this.y -= pushY;
    }

    this.draw(ctx);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 150,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const initParticles = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 12000;
      const isDark = resolvedTheme === "dark" || !resolvedTheme;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle(canvas.width, canvas.height, isDark));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height, mouse, ctx);

        // Connect particles to each other and to mouse
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            const isDark = resolvedTheme === "dark" || !resolvedTheme;
            const opacity = 1 - distance / 120;
            ctx.strokeStyle = isDark ? `rgba(139, 92, 246, ${opacity * 0.15})` : `rgba(139, 92, 246, ${opacity * 0.15})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        
        // Connect distinctly to mouse
        const mouseDx = particles[i].x - mouse.x;
        const mouseDy = particles[i].y - mouse.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
        
        if (mouseDistance < mouse.radius) {
            ctx.beginPath();
            const mouseOpacity = 1 - mouseDistance / mouse.radius;
            const isDark = resolvedTheme === "dark" || !resolvedTheme;
            ctx.strokeStyle = isDark ? `rgba(56, 189, 248, ${mouseOpacity * 0.5})` : `rgba(56, 189, 248, ${mouseOpacity * 0.6})`; // Light blue for mouse connections
            ctx.lineWidth = 1.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-background">
      {/* Absolute dark premium background in dark mode, light in light mode */}
      <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#07070A] transition-colors duration-500" />
      
      {/* Deep spotlight mesh in background */}
      <div className="absolute top-[-20%] left-[-10vw] w-[60vw] h-[60vw] rounded-full blur-[150px] opacity-30 dark:bg-indigo-900/40 pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10vw] w-[60vw] h-[60vw] rounded-full blur-[150px] opacity-30 dark:bg-sky-900/40 pointer-events-none" />

      {/* The Interactive Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-80"
      />
    </div>
  );
};
