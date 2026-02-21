import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Java Internship",
      period: "June 2025",
      type: "In-Person",
      location: "Chennai, India",
      description: "Gained hands-on experience in Java development with focus on core concepts and practical applications.",
      highlights: [
        "Implemented Object-Oriented Programming concepts in real-world scenarios",
        "Mastered Exception Handling and Java Collections Framework",
        "Developed mini backend projects and RESTful services",
        "Enhanced debugging and code optimization skills",
      ],
      color: "blue",
    },
    {
      title: "Data Science Internship",
      period: "October 2024",
      type: "Online",
      location: "Remote",
      description: "Comprehensive internship focused on data analysis, machine learning, and visualization techniques.",
      highlights: [
        "Performed data cleaning and preprocessing on large datasets",
        "Conducted Exploratory Data Analysis (EDA) to extract insights",
        "Built and evaluated Machine Learning models for predictions",
        "Created compelling data visualizations using Matplotlib & Seaborn",
      ],
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-600 to-blue-400",
        badge: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
        border: "border-blue-200 dark:border-blue-800",
        dot: "bg-blue-600 dark:bg-blue-400",
      },
      purple: {
        bg: "from-purple-600 to-purple-400",
        badge: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300",
        border: "border-purple-200 dark:border-purple-800",
        dot: "bg-purple-600 dark:bg-purple-400",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Internship Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Professional experience and learning journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8`}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all">
                      {/* Header */}
                      <div className={`mb-6 ${isLeft ? "lg:flex-row-reverse" : ""} flex items-start gap-4`}>
                        <div className={`p-3 bg-gradient-to-br ${colors.bg} rounded-xl`}>
                          <Briefcase className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {exp.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className={`px-3 py-1 ${colors.badge} rounded-full text-sm font-medium flex items-center gap-1`}>
                              <Calendar className="h-3 w-3" />
                              {exp.period}
                            </span>
                            <span className={`px-3 py-1 ${colors.badge} rounded-full text-sm font-medium flex items-center gap-1`}>
                              <MapPin className="h-3 w-3" />
                              {exp.type}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <motion.div
                            key={hIndex}
                            initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.2 + hIndex * 0.1 }}
                            className={`flex items-start gap-2 ${isLeft ? "lg:flex-row-reverse lg:text-right" : ""}`}
                          >
                            <div className={`mt-1 w-2 h-2 rounded-full ${colors.dot} flex-shrink-0`}></div>
                            <span className="text-gray-700 dark:text-gray-300 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {highlight}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                      className={`w-6 h-6 bg-gradient-to-br ${colors.bg} rounded-full border-4 border-white dark:border-gray-900 shadow-lg`}
                    ></motion.div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden lg:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
