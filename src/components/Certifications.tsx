import { Award } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const certs = [
  { title: "WordPress Development Certificate", org: "Ihuner Academy" },
  { title: "Data Analytics Certification", org: "Online Course" },
  { title: "Power BI Certification", org: "Microsoft Learn" },
];

const Certifications = () => {
  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="text-primary font-medium text-sm tracking-wide uppercase text-center mb-2">Credentials</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Certifications</h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {certs.map((c, i) => (
            <AnimateOnScroll key={c.title} delay={i * 100}>
              <div className="card-hover bg-background rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={22} />
                </div>
                <h3 className="font-display font-semibold text-sm text-foreground mb-1">{c.title}</h3>
                <p className="text-muted-foreground text-xs">{c.org}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
