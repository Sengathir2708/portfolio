import { motion } from "motion/react";
import { Code, Wrench, Monitor } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "blue",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "SQL", level: 75 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 75 },
      ],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "purple",
      skills: [
        { name: "Excel", level: 80 },
        { name: "Power BI", level: 70 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 75 },
      ],
    },
    {
      title: "Platforms",
      icon: Monitor,
      color: "green",
      skills: [
        { name: "Eclipse", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Jupyter Notebook", level: 80 },
      ],
    },
  ];

  const getColorClasses = (color: string, type: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800",
        progress: "bg-blue-600 dark:bg-blue-400",
        glow: "shadow-blue-500/50",
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900",
        text: "text-purple-600 dark:text-purple-400",
        border: "border-purple-200 dark:border-purple-800",
        progress: "bg-purple-600 dark:bg-purple-400",
        glow: "shadow-purple-500/50",
      },
      green: {
        bg: "bg-green-100 dark:bg-green-900",
        text: "text-green-600 dark:text-green-400",
        border: "border-green-200 dark:border-green-800",
        progress: "bg-green-600 dark:bg-green-400",
        glow: "shadow-green-500/50",
      },
    };
    return colors[color as keyof typeof colors][type as keyof typeof colors.blue];
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border ${getColorClasses(
                  category.color,
                  "border"
                )} hover:shadow-2xl hover:${getColorClasses(category.color, "glow")} transition-all`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 ${getColorClasses(category.color, "bg")} rounded-xl`}>
                    <Icon className={`h-6 w-6 ${getColorClasses(category.color, "text")}`} />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {skill.name}
                        </span>
                        <span className={`text-sm font-semibold ${getColorClasses(category.color, "text")}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                          className={`h-full ${getColorClasses(category.color, "progress")} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Object-Oriented Programming",
              "Data Analysis",
              "Web Development",
              "Database Management",
              "Data Visualization",
              "Problem Solving",
            ].map((badge, index) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all cursor-default"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
