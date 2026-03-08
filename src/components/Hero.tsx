import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(210, 100%, 56%, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(210, 100%, 56%, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="section-container w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text - Full Width */}
          <div className="animate-fade-up max-w-2xl">
            <p className="text-secondary font-medium mb-4 text-sm tracking-widest uppercase">Welcome to my portfolio</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Hi, I'm{" "}
              <span className="gradient-text">Mubarak Sharif</span>
            </h1>
            <p className="text-xl font-display font-semibold text-foreground/80 mb-4">Aspiring Data Analyst</p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
              I transform raw data into meaningful insights using Excel, SQL, Tableau, and Power BI. My goal is to build data-driven solutions that help organizations make smarter decisions and solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <a href="#projects">
                  <ArrowDown size={18} className="mr-2 group-hover:translate-y-0.5 transition-transform" />
                  View Projects
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="group border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <a href="#contact">
                  <Mail size={18} className="mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
    </section>
  );
};

export default Hero;
