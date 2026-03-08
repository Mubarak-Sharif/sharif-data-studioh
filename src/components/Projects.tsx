import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "./AnimateOnScroll";

const projects = [
  {
    title: "Sales Dashboard",
    tools: ["Power BI"],
    desc: "Created an interactive dashboard to track sales trends, regional performance, and key metrics.",
    color: "from-primary/10 to-accent/10",
  },
  {
    title: "Customer Data Analysis",
    tools: ["Excel", "SQL"],
    desc: "Analyzed customer datasets to identify patterns, trends, and insights for better decision-making.",
    color: "from-accent/10 to-primary/10",
  },
  {
    title: "Website Traffic Report",
    tools: ["Tableau"],
    desc: "Built a visualization dashboard to monitor website traffic, user engagement, and conversions.",
    color: "from-primary/10 to-secondary/30",
  },
  {
    title: "Financial Data Cleaning Project",
    tools: ["Excel", "Python"],
    desc: "Cleaned and structured raw financial data to prepare it for analysis and reporting.",
    color: "from-secondary/30 to-accent/10",
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

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <AnimateOnScroll key={p.title} delay={i * 100}>
              <div className="card-hover bg-card rounded-2xl overflow-hidden h-full flex flex-col group relative">
                <div className={`h-40 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                  <span className="font-display text-5xl opacity-30 group-hover:scale-110 transition-transform duration-300">📊</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{p.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tools.map((t) => (
                      <span key={t} className="text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{p.desc}</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <Button variant="secondary" size="lg" asChild>
                    <a href="https://github.com/Mubarak-Sharif" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      View Details
                    </a>
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
