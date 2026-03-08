import { Database, LineChart, PieChart, BarChart, Presentation, FileSpreadsheet } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: FileSpreadsheet,
      title: "Excel & Analytics",
      description: "Advanced data manipulation and dynamic dashboard creation utilizing powerful spreadsheet tools.",
      features: ["Power Query", "Pivot Tables", "Advanced Formulas", "Dashboards"],
    },
    {
      icon: BarChart,
      title: "Power BI",
      description: "Developing comprehensive business intelligence solutions to drive data-informed decisions.",
      features: ["Interactive Dashboards", "Data Modeling", "DAX", "Business Intelligence"],
    },
    {
      icon: Database,
      title: "SQL & Databases",
      description: "Extracting, structuring, and managing data directly from relational databases.",
      features: ["Data Querying", "Joins & Subqueries", "Aliases", "Database Management"],
    },
    {
      icon: PieChart,
      title: "Data Visualization",
      description: "Designing beautiful, informative graphics to make complex data easily understandable.",
      features: ["Visual Design", "Dashboard UX", "Interactive Reporting", "Executive Summaries"],
    },
    {
      icon: LineChart,
      title: "Data Analysis",
      description: "Deep diving into datasets to extract meaningful conclusions and guide strategy.",
      features: ["Trend Analysis", "Pattern Recognition", "Actionable Insights", "Data Cleaning"],
    },
    {
      icon: Presentation,
      title: "Reporting",
      description: "Creating professional, automated business reports for stakeholder communication.",
      features: ["Business Reports", "KPI Tracking", "Automated Reporting", "Presentations"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4 text-center animate-slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specialized in data analytics, turning intricate datasets into
              interactive dashboards and actionable business insights.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-6 md:p-8 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="inline-flex p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 pt-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
