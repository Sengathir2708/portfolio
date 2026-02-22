import { motion } from "motion/react";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };



  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent cursor-pointer"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              onClick={() => scrollToSection("#home")}
            >
              SR
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.name}
                </motion.button>
              ))}

              {/* Download Resume Button */}
              <motion.a
                href="/resume.pdf"
                download="Sengathir_R_Resume.pdf"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>Resume</span>
                </Button>
              </motion.a>

              <Button
                onClick={toggleTheme}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>





            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                onClick={toggleTheme}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.name}
                </button>
              ))}

              {/* Download Resume Button - Mobile */}
              <a
                href="/resume.pdf"
                download="Sengathir_R_Resume.pdf"
                className="block w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>Download Resume</span>
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}