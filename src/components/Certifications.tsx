import { Award, CheckCircle } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const certs = [
  { title: "WordPress Development Certificate", org: "Ihuner Academy", color: "neon-blue" },
  { title: "Data Analytics Certification", org: "Online Course", color: "neon-teal" },
  { title: "Power BI Certification", org: "Microsoft Learn", color: "neon-blue" },
];

const Certifications = () => {
  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="text-primary font-medium text-sm tracking-wide uppercase text-center mb-2">Credentials</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Certifications</h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certs.map((c, i) => (
            <AnimateOnScroll key={c.title} delay={i * 150}>
              <div className={`group relative bg-background/60 backdrop-blur-md border border-border/50 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                c.color === 'neon-teal'
                  ? 'hover:border-secondary/40 hover:shadow-[0_0_30px_hsl(var(--neon-teal)/0.15)]'
                  : 'hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.15)]'
              }`}>
                {/* Badge icon */}
                <div className={`relative w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-500 ${
                  c.color === 'neon-teal'
                    ? 'bg-secondary/10 border-2 border-secondary/30 group-hover:bg-secondary group-hover:shadow-[0_0_25px_hsl(var(--neon-teal)/0.5)]'
                    : 'bg-primary/10 border-2 border-primary/30 group-hover:bg-primary group-hover:shadow-[0_0_25px_hsl(var(--neon-blue)/0.5)]'
                }`}>
                  <Award className={`transition-all duration-500 group-hover:scale-110 group-hover:text-white ${
                    c.color === 'neon-teal' ? 'text-secondary' : 'text-primary'
                  }`} size={26} />
                </div>

                <h3 className="font-display font-semibold text-sm text-foreground mb-2">{c.title}</h3>
                <div className="flex items-center justify-center gap-1.5 text-muted-foreground text-xs">
                  <CheckCircle size={12} className={c.color === 'neon-teal' ? 'text-secondary' : 'text-primary'} />
                  {c.org}
                </div>

                {/* Top glow on hover */}
                <div className={`absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-3xl transition-all duration-700 ${
                  c.color === 'neon-teal'
                    ? 'bg-secondary/0 group-hover:bg-secondary/10'
                    : 'bg-primary/0 group-hover:bg-primary/10'
                }`} />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
