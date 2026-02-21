import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, Github, Linkedin, Send, MapPin, CheckCircle, AlertCircle, FileDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/xvzbwzyq";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Auto-reset success state after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const data = await response.json();
        setErrorMessage(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing again
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9342151940",
      href: "tel:+919342151940",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: Mail,
      label: "Email",
      value: "sengathirram@gmail.com",
      href: "mailto:sengathirram@gmail.com",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Sengathir2708",
      href: "https://github.com/Sengathir2708",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sengathir-r",
      href: "https://linkedin.com/in/sengathir-r",
      color: "from-blue-600 to-blue-700",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Let's discuss opportunities, projects, or just connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)',
                backgroundSize: '30px 30px',
              }}></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Contact Information
                </h3>
                <p className="text-blue-100 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Feel free to reach out through any of these channels. I'm always open to discussing new opportunities!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <motion.a
                        key={index}
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ x: 10, transition: { duration: 0.2 } }}
                        className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all group"
                      >
                        <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-blue-100 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {contact.label}
                          </div>
                          <div className="font-semibold break-all" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {contact.value}
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Resume Download */}
                <motion.a
                  href="/resume.pdf"
                  download="Sengathir_R_Resume.pdf"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex items-start gap-4 p-4 mt-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all group cursor-pointer"
                >
                  <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                    <FileDown className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-blue-100 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Resume
                    </div>
                    <div className="font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Download My Resume (PDF)
                    </div>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6" />
                    <div>
                      <div className="text-sm text-blue-100" style={{ fontFamily: 'Inter, sans-serif' }}>Location</div>
                      <div className="font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Chennai, Tamil Nadu, India</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Send a Message
              </h3>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg"
                    >
                      <CheckCircle className="h-10 w-10 text-white" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Message Sent!
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 max-w-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Thank you for reaching out! I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Error Banner */}
                    <AnimatePresence>
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: -10, height: 0 }}
                          className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl"
                        >
                          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                          <div>
                            <p className="text-red-700 dark:text-red-400 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {errorMessage}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or opportunity..."
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
