import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectImage from "@/assets/project-decode.jpg";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4 animate-slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
              Showcasing My <span className="text-gradient">Best Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              From analytical challenges to problem-solving excellence, each project highlights my
              dedication to crafting modern, functional solutions that deliver real value.
            </p>
          </div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="relative group cursor-pointer"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
              {/* Project Image */}
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden bg-muted">
                <img
                  src="/Bike Ridership Analysis.png"
                  alt="Bike Ridership Analysis"
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Award Badge */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <Award className="w-4 h-4" />
                  <span className="font-semibold text-sm">Capstone Project</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold">Cyclistic Bike-Share: Strategic Data Analysis</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This analysis of 5.6 million trips identifies critical usage differences between casual riders and annual members to drive membership growth. Using Power Query for large-scale data transformation and Advanced Excel for interactive dashboarding, the study reveals that while members are consistent weekday commuters, casual riders dominate weekend leisure travel with significantly longer trip durations. Key findings include a peak ridership window from July to September and a 57.79% preference for electric bikes. These insights support targeted marketing recommendations—such as seasonal weekend passes and e-bike incentives—to convert high-frequency casual users into profitable annual members.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Skills Applied</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Data Cleaning & Transformation</li>
                      <li>• Trend Analysis & Seasonality</li>
                      <li>• Business Insight Generation</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Technologies</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Advanced Excel</li>
                      <li>• Power Query</li>
                      <li>• Pivot Tables & Dashboards</li>
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground group w-full md:w-auto"
                  asChild
                >
                  <a href="/Google Data Analytics Capstone Complete a Case Study.pdf" target="_blank" rel="noopener noreferrer">
                    View Project Details
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Business Intelligence Project */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="relative group cursor-pointer"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
              {/* Project Image */}
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden bg-muted">
                <img
                  src="/retention-dashboard.jpeg"
                  alt="Customer Retention BI Dashboard"
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Award Badge */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <Award className="w-4 h-4" />
                  <span className="font-semibold text-sm">Business Intelligence Dashboard</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold">Customer Retention & Attrition Analysis</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A strategic BI dashboard that analyzes data from 7,043 customers to identify churn drivers.
                    It visualizes metrics like Monthly Charges ($456K), Contract Types, and Payment Methods—pinpointing that 55% of churned users were on month-to-month contracts.
                    These data-driven insights empower stakeholders to optimize LTV and minimize revenue loss.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Skills Applied</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Churn Modeling & Segmentation</li>
                      <li>• Complex Metric Aggregation</li>
                      <li>• Strategic Business Storytelling</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Technologies</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Power BI Interactive Dashboards</li>
                      <li>• Data Modeling & DAX</li>
                      <li>• Demographic Analysis</li>
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground group w-full md:w-auto"
                >
                  View Live Dashboard
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Multi-Region Sales Dashboard Project */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="relative group cursor-pointer"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
              {/* Project Image */}
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden bg-muted">
                <img
                  src="/Multi-Region Sales Dashboard.jpeg"
                  alt="Multi-Region Sales Dashboard"
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Award Badge */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <Award className="w-4 h-4" />
                  <span className="font-semibold text-sm">Interactive Analytics</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold">Multi-Region Sales Dashboard</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This Multi-Region Sales Dashboard consolidates retail data to track revenue and regional profitability through interactive filtering. By analyzing performance across cities and products, it identifies Cookies (44%) and Bars (38%) as the primary sales drivers and highlights Boston as the most profitable region at 40%. These data-driven insights allow executives to optimize inventory and refine sales strategies based on seasonal trends and salesperson performance.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Skills Applied</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Data Consolidation & Modeling</li>
                      <li>• Performance Tracking</li>
                      <li>• Interactive Data Analysis</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Technologies</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Power BI / Advanced Excel</li>
                      <li>• Dashboard Integration</li>
                      <li>• Complex Formatting</li>
                    </ul>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground group w-full md:w-auto"
                  asChild
                >
                  <a href="/Multi-Region Sales Dashboard.jpeg" target="_blank" rel="noopener noreferrer">
                    View Dashboard
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Diversity & Inclusion Dashboard Project */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="relative group cursor-pointer"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
              {/* Project Image */}
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden bg-muted">
                <img
                  src="/Diversity & Inclusion Dashboard1.jpeg"
                  alt="Diversity & Inclusion Dashboard"
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <Award className="w-4 h-4" />
                  <span className="font-semibold text-sm">HR Analytics Dashboard</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold">Diversity & Inclusion Dashboard</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This Diversity & Inclusion Dashboard leverages Power BI to track critical workforce metrics across 7,043 employees, providing a centralized interface for monitoring representation, equity, and belonging. By analyzing key performance indicators such as Hiring Ratios, Promotion Rates, and Turnover by Gender and Age, the analysis identifies systemic gaps—including a significant gender imbalance at the executive level and varying retention rates among senior employees. These data-driven insights transform raw demographic information into a visual narrative, empowering HR leaders to remove structural biases, implement fair promotion practices, and drive long-term organizational growth through a more equitable and inclusive workforce culture.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Skills Applied</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• KPI Tracking & Monitoring</li>
                      <li>• Demographic Analysis</li>
                      <li>• Business Value Generation</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Technologies</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Power BI interactive BI</li>
                      <li>• HR Analytics</li>
                      <li>• Visual Storytelling</li>
                    </ul>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground group w-full md:w-auto"
                  asChild
                >
                  <a href="/Diversity & Inclusion Dashboard1.jpeg" target="_blank" rel="noopener noreferrer">
                    View Features
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <div className="text-center animate-slide-up">
            <p className="text-muted-foreground">
              More projects and contributions coming soon as I continue to build and learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
