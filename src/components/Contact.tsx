import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimateOnScroll from "./AnimateOnScroll";
import { useState } from "react";
import { toast } from "sonner";

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
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <a href="mailto:mubaraksharif003@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium text-sm">mubaraksharif003@gmail.com</p>
                </div>
              </a>
              <a href="tel:+923405169129" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium text-sm">+92 340 516 9129</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/mubarak-sharif" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Linkedin className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="text-foreground font-medium text-sm">mubarak-sharif</p>
                </div>
              </a>
              <a href="https://github.com/Mubarak-Sharif" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Github className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="text-foreground font-medium text-sm">Mubarak-Sharif</p>
                </div>
              </a>
            </div>
          </AnimateOnScroll>

          {/* Form */}
          <AnimateOnScroll delay={200}>
            <form onSubmit={handleSubmit} className="card-hover bg-card rounded-2xl p-8 space-y-4">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <Textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
              <Button type="submit" className="w-full">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;
