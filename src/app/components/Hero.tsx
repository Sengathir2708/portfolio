import { motion } from "motion/react";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const roles = [
  "Java Developer",
  "Data Science Enthusiast",
  "Full Stack Learner"
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleDownloadResume = () => {
    // Download resume PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sengathir_R_Resume.pdf';
    link.click();
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 rounded-full mb-6"
            >
              👋 Welcome to my portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Sengathir R
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 mb-6 h-12"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="text-blue-600 dark:text-blue-400">{displayText}</span>
              <span className="animate-pulse">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Motivated B.Tech IT student with a strong foundation in Java, Data Science,
              and web technologies. Passionate about building scalable applications and
              solving real-world problems using technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button
                onClick={scrollToProjects}
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image & Floating Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm bg-white/10 dark:bg-black/10 p-2"
              >
                <img
                  src="./photo.jpeg"
                  alt="Programming code on screen"
                  className="rounded-2xl w-80 h-80 w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}