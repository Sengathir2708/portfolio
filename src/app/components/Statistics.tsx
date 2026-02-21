import { motion, useInView } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { Briefcase, FolderGit2, Award } from "lucide-react";

export function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: Briefcase,
      value: 2,
      suffix: "+",
      label: "Internships",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: FolderGit2,
      value: 1,
      suffix: "+",
      label: "Major Projects",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: Award,
      value: 3,
      suffix: "+",
      label: "Certifications",
      color: "from-orange-600 to-red-600",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Achievements in Numbers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            Milestones in my journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <StatCard
                key={index}
                stat={stat}
                index={index}
                isInView={isInView}
                Icon={Icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  stat: {
    value: number;
    suffix: string;
    label: string;
    color: string;
  };
  index: number;
  isInView: boolean;
  Icon: React.ComponentType<{ className?: string }>;
}

function StatCard({ stat, index, isInView, Icon }: StatCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.3 } }}
      className="relative group"
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>

      {/* Card */}
      <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Background Icon */}
        <div className="absolute top-0 right-0 opacity-5 transform translate-x-6 -translate-y-6">
          <Icon className="w-32 h-32" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className={`inline-flex p-4 bg-gradient-to-br ${stat.color} rounded-2xl mb-4`}>
            <Icon className="h-8 w-8 text-white" />
          </div>

          <div className="mb-2">
            <span
              className={`text-5xl sm:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {count}{stat.suffix}
            </span>
          </div>

          <div className="text-xl font-semibold text-gray-700 dark:text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            {stat.label}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20" style={{ color: stat.color.split(' ')[0].replace('from-', '') }}></div>
      </div>
    </motion.div>
  );
}
