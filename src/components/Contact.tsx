import { Phone, Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "8956193529",
      href: "tel:8956193529",
    },
    {
      icon: Mail,
      label: "Email",
      value: "andemamta@gmail.com",
      href: "mailto:andemamta@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Solapur, Maharashtra",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
                Let's <span className="text-gradient">Connect</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Feel free to reach out!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  key={index}
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors group cursor-pointer"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground font-semibold hover:text-primary transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-semibold">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-muted-foreground">Follow Me</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.02 }} className="relative group cursor-pointer">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-card p-6 md:p-8 rounded-2xl border border-border shadow-lg space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">Start a Conversation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you have a project in mind, need technical expertise, or just want to chat
                    about technology and development, I'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-sm text-muted-foreground mb-2">Available For</p>
                    <div className="flex flex-wrap gap-2">
                      {["Data Analysis", "Power BI Dashboards", "Reporting", "Consulting"].map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href="tel:8956353529">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  "Turning raw data into interactive, actionable business insights."
                </blockquote>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border text-center space-y-4 animate-fade-in">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Mamta Ande. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with a passion for data analytics and interactive visualizations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
