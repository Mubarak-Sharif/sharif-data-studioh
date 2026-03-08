import { Database, BarChart3, Code, Sparkles, FileSpreadsheet, PieChart, LayoutDashboard, Table } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Excel", level: 90, icon: FileSpreadsheet },
  { name: "SQL", level: 85, icon: Database },
  { name: "Power BI", level: 80, icon: BarChart3 },
  { name: "Tableau", level: 75, icon: PieChart },
  { name: "Data Cleaning", level: 85, icon: Table },
  { name: "Data Visualization", level: 80, icon: LayoutDashboard },
  { name: "Dashboard Development", level: 78, icon: Sparkles },
  { name: "Python", level: 55, icon: Code },
];

const CircularProgress = ({ level, name, icon: Icon }: { level: number; name: string; icon: React.ElementType }) => {
  const [animated, setAnimated] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = () => {
            start += 1;
            if (start <= level) {
              setAnimated(start);
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  const circumference = 2 * Math.PI * 42;
  const offset = circumference - (animated / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center group cursor-pointer">
      <div className="relative w-28 h-28 mb-3">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--muted))" strokeWidth="6" />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-100"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon className="text-primary mb-0.5 group-hover:scale-110 transition-transform" size={20} />
          <span className="font-display font-bold text-foreground text-sm">{animated}%</span>
        </div>
      </div>
      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
        {name}
      </span>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="text-primary font-medium text-sm tracking-wide uppercase text-center mb-2">What I know</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Skills</h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <AnimateOnScroll key={skill.name} delay={i * 80}>
              <CircularProgress level={skill.level} name={skill.name} icon={skill.icon} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
