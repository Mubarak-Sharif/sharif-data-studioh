import profileImg from "@/assets/profile.png";
import AnimateOnScroll from "./AnimateOnScroll";

const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="text-primary font-medium text-sm tracking-wide uppercase text-center mb-2">Get to know me</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">About Me</h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <AnimateOnScroll delay={100}>
            <div className="flex justify-center">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-border shadow-xl transition-transform duration-500 hover:scale-105 hover:rotate-1 cursor-pointer">
                <img
                  src={profileImg}
                  alt="Mubarak Sharif"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll delay={200}>
            <div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-4">
                Aspiring Data Analyst
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm passionate about transforming raw data into meaningful insights. Skilled in Excel, SQL, Tableau, and Power BI, I build data-driven solutions that help organizations make smarter decisions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Currently pursuing my BS in Computer Science at NED University of Engineering & Technology (Class of 2025), I combine my analytical thinking with hands-on project experience to solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Excel", "SQL", "Tableau", "Power BI", "Python"].map((tool) => (
                  <span key={tool} className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
