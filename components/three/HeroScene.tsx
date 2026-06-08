import { useEffect, useRef } from "react";

const HeroScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3 - 0.1,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.3 + 0.1,
      });
    }

    const drawGrid = () => {
      const gridSize = 60;
      ctx.strokeStyle = "rgba(0,0,0,0.03)";
      ctx.lineWidth = 0.5;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawTorus = () => {
      const cx = canvas.width * 0.85;
      const cy = canvas.height * 0.4;
      const rx = 80 + Math.sin(time * 0.3) * 10;
      const ry = 40 + Math.cos(time * 0.5) * 5;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(time * 0.1);

      ctx.strokeStyle = "rgba(0,0,0,0.06)";
      ctx.lineWidth = 1;

      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + time * 0.05;
        ctx.beginPath();
        ctx.ellipse(
          Math.cos(angle) * rx * 0.3,
          Math.sin(angle) * ry * 0.3,
          rx,
          ry,
          angle * 0.5,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(0,0,0,0.04)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < 24; i++) {
        const angle = (i / 24) * Math.PI * 2 + time * 0.08;
        ctx.beginPath();
        ctx.ellipse(
          Math.cos(angle) * rx * 0.4,
          Math.sin(angle) * ry * 0.4,
          rx * 0.6,
          ry * 0.6,
          angle * 0.3,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }

      ctx.restore();
    };

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      drawTorus();

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,0,0,${p.alpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.7 }}
      aria-hidden="true"
    />
  );
};

export default HeroScene;
