import { Database, BarChart3, Code, Sparkles } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const categories = [
  {
    title: "Data Analysis & Reporting",
    icon: Database,
    skills: ["Excel", "SQL"],
  },
  {
    title: "Data Visualization",
    icon: BarChart3,
    skills: ["Power BI", "Tableau"],
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Basic Python for Data Analysis"],
  },
  {
    title: "Other Skills",
    icon: Sparkles,
    skills: ["Data Cleaning", "Dashboard Development"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="text-primary font-medium text-sm tracking-wide uppercase text-center mb-2">What I know</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Skills</h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <AnimateOnScroll key={cat.title} delay={i * 100}>
              <div className="card-hover bg-card rounded-2xl p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <cat.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-3">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span key={s} className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
