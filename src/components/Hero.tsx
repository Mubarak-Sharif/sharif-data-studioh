import profileImg from "@/assets/profile.png";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
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
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.8 + 0.8,
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

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(210, 100%, 56%, ${0.08 * (1 - dist / 130)})`;
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
      {/* Ambient gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-[28rem] h-[28rem] bg-secondary/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="section-container w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-fade-up max-w-2xl">
            {/* Availability pill */}
            <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-card/60 backdrop-blur-md border border-border/60 text-xs font-medium text-muted-foreground hover:border-secondary/50 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </span>
              Available for new projects
            </div>

            <p className="text-secondary font-medium mb-4 text-xs tracking-[0.25em] uppercase flex items-center gap-2">
              <Sparkles size={14} /> Welcome to my portfolio
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.05] mb-5 tracking-tight">
              Hi, I'm{" "}
              <span className="text-primary inline-block hover:scale-105 hover:drop-shadow-[0_0_18px_hsl(var(--neon-blue)/0.6)] transition-all duration-300 cursor-pointer">Mubarak</span>{" "}
              <span className="text-secondary inline-block hover:scale-105 hover:drop-shadow-[0_0_18px_hsl(var(--neon-teal)/0.6)] transition-all duration-300 cursor-pointer">Sharif</span>
            </h1>

            <p className="text-lg sm:text-xl font-display font-medium text-foreground/85 mb-5">
              Aspiring <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">Data Analyst</span>
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
              I transform raw data into meaningful insights using Excel, SQL, Tableau, and Power BI — building data-driven solutions that help organizations make smarter decisions.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button asChild size="lg" className="group shadow-[0_0_30px_hsl(var(--neon-blue)/0.25)] hover:shadow-[0_0_40px_hsl(var(--neon-blue)/0.5)] transition-all duration-300">
                <a href="#projects">
                  <ArrowDown size={18} className="mr-2 group-hover:translate-y-0.5 transition-transform" />
                  View Projects
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="group border-secondary/60 text-secondary hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_0_30px_hsl(var(--neon-teal)/0.4)]">
                <a href="#contact">
                  <Mail size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Mini stats */}
            <div className="flex items-center gap-6 sm:gap-8 pt-6 border-t border-border/40">
              <div>
                <p className="font-display text-2xl font-bold text-foreground">10+</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Projects</p>
              </div>
              <div className="h-8 w-px bg-border/60" />
              <div>
                <p className="font-display text-2xl font-bold text-foreground">5+</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Tools mastered</p>
              </div>
              <div className="h-8 w-px bg-border/60" />
              <div>
                <p className="font-display text-2xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Dedication</p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="hidden md:flex justify-center animate-slide-in-right">
            <div className="relative group">
              {/* Rotating gradient ring */}
              <div className="absolute -inset-3 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "conic-gradient(from 0deg, hsl(var(--neon-blue)), hsl(var(--neon-teal)), hsl(var(--neon-blue)))",
                  filter: "blur(14px)",
                  animation: "spin-slow 8s linear infinite",
                }}
              />
              {/* Inner solid ring */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-[2px] bg-gradient-to-br from-primary via-primary/30 to-secondary">
                <div className="w-full h-full rounded-full overflow-hidden bg-card">
                  <img
                    src={profileImg}
                    alt="Mubarak Sharif - Data Analyst"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-card/90 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-lg border border-primary/30 hover:border-primary/60 hover:shadow-[0_0_25px_hsl(var(--neon-blue)/0.3)] transition-all duration-300">
                <span className="text-sm font-medium text-primary flex items-center gap-1.5">📊 Data Analyst</span>
              </div>

              {/* Floating top tag */}
              <div className="absolute -top-2 -left-4 bg-card/90 backdrop-blur-md rounded-xl px-3 py-2 shadow-lg border border-secondary/30 hover:border-secondary/60 hover:shadow-[0_0_25px_hsl(var(--neon-teal)/0.3)] transition-all duration-300">
                <span className="text-xs font-medium text-secondary flex items-center gap-1.5">⚡ SQL · Power BI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground/60 animate-bounce-slow">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-muted-foreground/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
