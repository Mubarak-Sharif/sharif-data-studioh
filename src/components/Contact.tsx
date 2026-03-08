import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimateOnScroll from "./AnimateOnScroll";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const contactLinks = [
  { icon: Mail, label: "Email", value: "mubaraksharif003@gmail.com", href: "mailto:mubaraksharif003@gmail.com", color: "neon-blue" },
  { icon: Phone, label: "Phone", value: "+92 340 516 9129", href: "tel:+923405169129", color: "neon-teal" },
  { icon: Linkedin, label: "LinkedIn", value: "mubarak-sharif", href: "https://www.linkedin.com/in/mubarak-sharif", color: "neon-blue" },
  { icon: Github, label: "GitHub", value: "Mubarak-Sharif", href: "https://github.com/Mubarak-Sharif", color: "neon-teal" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="text-primary font-medium text-sm tracking-wide uppercase text-center mb-2">Get in touch</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">Contact Me</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
            Feel free to reach out for collaborations, freelance work, or data analysis projects.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <div className="space-y-5">
            {contactLinks.map((c, i) => (
              <AnimateOnScroll key={c.label} delay={i * 120}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-4 bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 ${
                    c.color === 'neon-teal'
                      ? 'hover:border-secondary/40 hover:shadow-[0_0_25px_hsl(var(--neon-teal)/0.15)]'
                      : 'hover:border-primary/40 hover:shadow-[0_0_25px_hsl(var(--neon-blue)/0.15)]'
                  }`}
                >
                  <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    c.color === 'neon-teal'
                      ? 'bg-secondary/10 border border-secondary/20 group-hover:bg-secondary group-hover:shadow-[0_0_20px_hsl(var(--neon-teal)/0.4)]'
                      : 'bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:shadow-[0_0_20px_hsl(var(--neon-blue)/0.4)]'
                  }`}>
                    <c.icon className={`transition-all duration-500 group-hover:scale-110 group-hover:text-white ${
                      c.color === 'neon-teal' ? 'text-secondary' : 'text-primary'
                    }`} size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{c.label}</p>
                    <p className="text-foreground font-medium text-sm group-hover:text-foreground transition-colors">{c.value}</p>
                  </div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Form */}
          <AnimateOnScroll delay={200}>
            <form onSubmit={handleSubmit} className="relative bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl p-8 space-y-4 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.1)] overflow-hidden">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
              />
              <Textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
              />
              <Button type="submit" className="w-full group/btn transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--neon-blue)/0.4)]">
                <Send size={16} className="mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                Send Message
              </Button>

              {/* Corner glow */}
              <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-primary/0 hover:bg-primary/5 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;
