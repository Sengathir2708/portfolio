import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      title: "Foundation of AI",
      issuer: "Oracle",
      year: "2025",
      image: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWx8ZW58MXx8fHwxNzcxNTg0NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-red-600 to-orange-600",
      bgColor: "bg-red-50 dark:bg-red-950",
      borderColor: "border-red-200 dark:border-red-800",
    },
    {
      title: "Programming using Java",
      issuer: "Infosys",
      year: "2024",
      image: "https://images.unsplash.com/photo-1664570000007-db164768644d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXZhJTIwcHJvZ3JhbW1pbmclMjBjb2RlJTIwc2NyZWVufGVufDF8fHx8MTc3MTYwMTkzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-50 dark:bg-blue-950",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      title: "Cybersecurity Analysis & Design",
      issuer: "NASSCOM",
      year: "2024",
      image: "https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE1ODg1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-50 dark:bg-purple-950",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                transition: { duration: 0.3 } 
              }}
              className="relative group perspective-1000"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>

              {/* Certificate Card */}
              <div className={`relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border-2 ${cert.borderColor} transform-gpu`}>
                {/* Header with Gradient */}
                <div className={`h-32 bg-gradient-to-br ${cert.color} relative overflow-hidden`}>
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}></div>
                  
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover opacity-30"
                    />
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white font-bold text-sm">{cert.year}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-2 ${cert.bgColor} rounded-lg mt-1`}>
                      <Award className={`h-5 w-5 bg-gradient-to-br ${cert.color} bg-clip-text text-transparent`} style={{ fill: 'currentColor', fillOpacity: 0.2 }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {cert.title}
                      </h3>
                      <p className={`font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`} style={{ fontFamily: 'Inter, sans-serif' }}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className={`h-px bg-gradient-to-r ${cert.color} opacity-20 mb-4`}></div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`}></div>
                      <span style={{ fontFamily: 'Inter, sans-serif' }}>Verified Credential</span>
                    </div>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                  <div className={`absolute inset-0 bg-gradient-to-tl ${cert.color} transform rotate-45 translate-x-12 translate-y-12 rounded-lg`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "3+", label: "Certifications" },
            { value: "2+", label: "Industry Leaders" },
            { value: "2025", label: "Latest Certificate" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}