import { motion } from "motion/react";
import { ExternalLink, Github, Database, Settings, ShoppingCart, Wrench } from "lucide-react";
import { Button } from "./ui/button";

export function Projects() {
  const handleViewProject = () => {
    alert("Project demo will be available soon!");
  };

  const handleGithub = () => {
    window.open("https://github.com/Sengathir2708", "_blank");
  };

  const features = [
    {
      icon: ShoppingCart,
      title: "Orders Management",
      description: "Comprehensive order tracking and management system",
    },
    {
      icon: Wrench,
      title: "Repair & Upgrade",
      description: "Service request handling for repairs and upgrades",
    },
    {
      icon: Settings,
      title: "Admin Dashboard",
      description: "Full-featured admin panel for complete control",
    },
    {
      icon: Database,
      title: "Database-Driven",
      description: "Robust SQL database architecture for data persistence",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Showcasing my best work and technical capabilities
          </p>
        </motion.div>

        {/* Main Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl blur-xl opacity-30"></div>
          
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Project Info */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mb-4 text-sm font-semibold">
                    ⭐ Featured Project
                  </div>

                  <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    PRIMEFIX
                  </h3>

                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Orders, Repair, Upgrade & Services Platform
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    A comprehensive service management platform that streamlines order processing, 
                    repair tracking, upgrade management, and customer service operations. Built with 
                    a robust database architecture and an intuitive admin dashboard for complete 
                    system control.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button
                      onClick={handleViewProject}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      View Project
                    </Button>
                    <Button
                      onClick={handleGithub}
                      variant="outline"
                      className="px-6 py-6 text-lg rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      GitHub
                    </Button>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {["Java", "SQL", "Database Design", "Backend Development"].map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Features Grid */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-8 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h4 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Key Features
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                        >
                          <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl w-fit mb-3">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <h5 className="font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {feature.title}
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {feature.description}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Additional Info */}
                  <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <h5 className="font-bold mb-3 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      Technical Highlights
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                        <span>Service request tracking and status management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                        <span>Complete CRUD operations with SQL database</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                        <span>Admin dashboard for system monitoring</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
