import { Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <a href="#home" className="font-display text-xl font-bold text-foreground">
              Mubarak<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground text-sm mt-1">Aspiring Data Analyst</p>
          </div>

          <div className="flex items-center gap-6">
            {["Home", "About", "Skills", "Projects", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/mubarak-sharif"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Mubarak-Sharif"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="#home"
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mubarak Sharif. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
