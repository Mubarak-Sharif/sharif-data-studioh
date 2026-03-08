import { BarChart3, LayoutDashboard, PieChart, FileSpreadsheet, Table } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  { icon: BarChart3, title: "Data Analysis & Reporting", desc: "Extracting insights from complex datasets to drive informed business decisions." },
  { icon: LayoutDashboard, title: "Dashboard Creation", desc: "Building interactive Power BI & Tableau dashboards for real-time monitoring." },
  { icon: PieChart, title: "Data Visualization & Insights", desc: "Creating compelling visual stories that make data easy to understand." },
  { icon: Table, title: "Data Cleaning & Preparation", desc: "Structuring and cleaning raw data to ensure accuracy and reliability." },
  { icon: FileSpreadsheet, title: "Excel-based Business Solutions", desc: "Developing advanced Excel solutions for business analysis and reporting." },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="text-primary font-medium text-sm tracking-wide uppercase text-center mb-2">What I offer</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Services</h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 100}>
              <div className="neon-glow-hover neon-glow-teal bg-background rounded-2xl p-8 h-full group">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
