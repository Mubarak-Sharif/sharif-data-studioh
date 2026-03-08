import { Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <a href="#home" className="font-display text-xl font-bold text-foreground">
              Mubarak Sharif<span className="text-primary">.</span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            {["Home", "Projects", "Contact"].map((l) => (
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
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Mubarak-Sharif"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
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

        {/* Accent line */}
        <div className="mt-8 mb-4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <p className="text-muted-foreground text-sm text-center">
          © 2026 Mubarak Sharif. Built with ❤️ for data enthusiasts.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
