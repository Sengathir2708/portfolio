import { motion } from "motion/react";
import { GraduationCap, Award, TrendingUp } from "lucide-react";

export function About() {
  const achievements = [
    { icon: "🎓", label: "B.Tech IT Student", value: "2023-2027" },
    { icon: "💼", label: "Internships", value: "2+" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Get to know more about my journey and education
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Education</h3>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>

                <div className="mb-8">
                  <div className="bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm inline-block mb-2">
                    2023 - 2027
                  </div>
                  <h4 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Bachelor of Technology
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Information Technology</p>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    Panimalar Engineering College
                  </p>
                  <div className="mt-3 flex items-center gap-2">

                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 grid grid-cols-3 gap-4"
            >
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-4 text-center shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* About Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Motivated IT student with a strong foundation in <span className="text-blue-600 dark:text-blue-400 font-semibold">Java</span>,
                <span className="text-blue-600 dark:text-blue-400 font-semibold"> Data Science</span>, and
                <span className="text-blue-600 dark:text-blue-400 font-semibold"> web technologies</span>.
                Passionate about building scalable applications and solving real-world problems using technology.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Currently pursuing my B.Tech degree at <span className="font-semibold">Panimalar Engineering College</span>,
                I have gained hands-on experience through multiple internships and real-world projects.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                I am dedicated to continuous learning and staying updated with the latest technologies in
                software development, data science, and full-stack development.
              </p>
            </div>

            {/* Currently Learning */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-3xl p-8 shadow-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Currently Learning
                </h3>
              </div>
              <div className="space-y-3">
                {["Spring Boot", "Advanced Data Structures", "Machine Learning Optimization"].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <span className="text-blue-900 dark:text-blue-100 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
