import profileImg from "@/assets/profile.png";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16" style={{ background: "var(--hero-gradient)" }}>
      <div className="section-container w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 md:order-1 animate-slide-in-left">
            <p className="text-primary font-medium mb-2 text-sm tracking-wide uppercase">Welcome to my portfolio</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Mubarak Sharif</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 font-medium">
              Aspiring Data Analyst
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              I transform raw data into meaningful insights using Excel, SQL, Tableau, and Power BI.
              My goal is to build data-driven solutions that help organizations make smarter decisions
              and solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#projects">
                  <ArrowDown size={18} className="mr-2" />
                  View Projects
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">
                  <Mail size={18} className="mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-secondary overflow-hidden border-4 border-primary/20 shadow-xl">
                <img
                  src={profileImg}
                  alt="Mubarak Sharif - Data Analyst"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-card rounded-xl px-4 py-2 shadow-lg border border-border">
                <span className="text-sm font-medium text-primary">📊 Data Analyst</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
