import { GraduationCap, Briefcase, Lightbulb } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="text-primary font-medium text-sm tracking-wide uppercase text-center mb-2">Get to know me</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">About Me</h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimateOnScroll delay={100}>
            <div className="card-hover bg-background rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-primary" size={28} />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">Education</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                BS Computer Science<br />
                NED University of Engineering & Technology<br />
                <span className="text-primary font-medium">Class of 2025</span>
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="card-hover bg-background rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-primary" size={28} />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">Experience</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Entry-level Data Analyst building practical projects in data analysis using Excel, SQL, Tableau, and Power BI for hands-on experience.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="card-hover bg-background rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-primary" size={28} />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">Passion</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Driven by analytical thinking and a passion for turning complex data into actionable insights that power smarter decisions.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
