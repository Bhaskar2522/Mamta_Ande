import { GraduationCap, Briefcase, Award } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { number: "2+", label: "Years of Learning" },
    { number: "5+", label: "Data & Analytics Tools" },
    { number: "3+", label: "Professional Certifications" },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4 animate-slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              I'm a dedicated Commerce graduate from Punyashlok Ahilyadevi Holkar Solapur University (CGPA 9.06)
              with a strong foundation in data analytics and a passion for extracting actionable insights from complex datasets.
              My main focus is on data visualization, business intelligence, and continuous learning to build efficient, scalable reporting solutions.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 md:p-8 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <p className="text-5xl font-black text-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02 }}
              className="p-6 md:p-8 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-2xl font-bold">Education</h3>
                  <p className="text-lg font-semibold text-primary">B.Com | Commerce (CGPA: 9.06)</p>
                  <p className="text-muted-foreground">Punyashlok Ahilyadevi Holkar Solapur University</p>
                  <p className="text-sm text-muted-foreground">Solapur, Maharashtra</p>
                </div>
              </div>
            </motion.div>

            {/* Internship */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02 }}
              className="p-6 md:p-8 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-2xl font-bold">Virtual Experience</h3>
                  <ul className="space-y-4 mt-4">
                    <li className="space-y-1">
                      <a href="pwc-cert.pdf" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:text-primary transition-colors underline underline-offset-4">
                        PwC Switzerland
                      </a>
                      <p className="text-sm text-muted-foreground">Developed Power BI dashboards for HR KPIs and executive gender balance.</p>
                    </li>
                    <li className="space-y-1">
                      <a href="deloitte-cert.pdf" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:text-primary transition-colors underline underline-offset-4">
                        Deloitte Australia
                      </a>
                      <p className="text-sm text-muted-foreground">Executed data cleaning and anomaly detection for forensic technology.</p>
                    </li>
                    <li className="space-y-1">
                      <a href="tata-cert.pdf" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:text-primary transition-colors underline underline-offset-4">
                        Tata Group
                      </a>
                      <p className="text-sm text-muted-foreground">Designed strategic dashboards to communicate business-driven data storytelling.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certifications Focus */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.01 }}
            className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10 cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary rounded-lg">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-2xl font-bold">Professional Certifications</h3>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full shadow-sm" />
                    <a
                      href="google-data-analytics-cert.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground font-semibold leading-relaxed hover:text-primary transition-colors underline underline-offset-4"
                    >
                      Google Data Analytics
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full shadow-sm" />
                    <span className="text-muted-foreground leading-relaxed"><span className="text-foreground font-semibold">Power BI & Visualization</span> - WsCube Tech</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full shadow-sm" />
                    <span className="text-muted-foreground leading-relaxed"><span className="text-foreground font-semibold">Excel & Analytics</span> - Coursera</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
