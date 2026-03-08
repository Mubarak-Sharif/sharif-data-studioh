import { ExternalLink, BarChart3, Users, Globe, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "./AnimateOnScroll";

const projects = [
  {
    title: "Sales Dashboard",
    tools: ["Power BI"],
    desc: "Created an interactive dashboard to track sales trends, regional performance, and key metrics.",
    icon: BarChart3,
    gradient: "from-[hsl(210,100%,56%)] to-[hsl(220,100%,58%)]",
  },
  {
    title: "Customer Data Analysis",
    tools: ["Excel", "SQL"],
    desc: "Analyzed customer datasets to identify patterns, trends, and insights for better decision-making.",
    icon: Users,
    gradient: "from-[hsl(160,72%,46%)] to-[hsl(165,100%,50%)]",
  },
  {
    title: "Website Traffic Report",
    tools: ["Tableau"],
    desc: "Built a visualization dashboard to monitor website traffic, user engagement, and conversions.",
    icon: Globe,
    gradient: "from-[hsl(220,100%,58%)] to-[hsl(210,100%,56%)]",
  },
  {
    title: "Financial Data Cleaning Project",
    tools: ["Excel", "Python"],
    desc: "Cleaned and structured raw financial data to prepare it for analysis and reporting.",
    icon: DollarSign,
    gradient: "from-[hsl(165,100%,50%)] to-[hsl(160,72%,46%)]",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="text-primary font-medium text-sm tracking-wide uppercase text-center mb-2">My work</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Projects</h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <AnimateOnScroll key={p.title} delay={i * 150}>
              <div className="group relative bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.15)]">
                {/* Gradient header with icon */}
                <div className={`relative h-44 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
                  <p.icon className="w-16 h-16 text-white/80 group-hover:scale-110 group-hover:text-white transition-all duration-500" />
                  {/* Decorative dots */}
                  <div className="absolute top-4 right-4 grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, j) => (
                      <div key={j} className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    ))}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{p.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tools.map((t) => (
                      <span key={t} className="badge-neon-hover text-xs font-medium bg-secondary/20 text-secondary border border-secondary/30 px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{p.desc}</p>
                  <Button variant="outline" size="sm" className="w-fit group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" asChild>
                    <a href="https://github.com/Mubarak-Sharif" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      View Details
                    </a>
                  </Button>
                </div>

                {/* Corner glow effect on hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/0 group-hover:bg-primary/10 rounded-full blur-3xl transition-all duration-700" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
