import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-[100dvh] flex items-center justify-center pt-32 pb-20 lg:pt-20 lg:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg font-medium">Data Analyst / MIS Executive</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter">
                Mamta
                <br />
                <span className="text-gradient">Ande</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Commerce graduate with strong hands-on experience in Excel-based reporting, dashboards, and data handling.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Power BI", "Excel", "SQL", "Data Analysis", "Reporting", "Visualization"].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 cursor-pointer hover:shadow-md transition-shadow"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10 group"
                  asChild
                >
                  <a href="/Mamta-Ande-FlowCV-Resume-20260111 (2).pdf" download="Mamta_Ande_Resume.pdf">
                    Download CV
                    <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-50 animate-pulse-slow" />
              <motion.img
                whileHover={{ scale: 1.02, rotate: 1 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.1}
                src={heroImage}
                alt="Mamta Ande - Data Analyst"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-[3/4] cursor-grab active:cursor-grabbing"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              drag
              dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
              whileHover={{ scale: 1.1, rotate: -2 }}
              className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-card p-4 sm:p-6 rounded-xl shadow-lg border border-border cursor-grab active:cursor-grabbing z-20"
            >
              <p className="text-sm text-muted-foreground pointer-events-none">Since</p>
              <p className="text-3xl font-bold text-primary pointer-events-none">2024</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
