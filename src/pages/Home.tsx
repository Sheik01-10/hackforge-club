import React, { useState, useEffect } from "react";
import { ArrowRight, Code, Users, Trophy, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BrochurePopup from "../components/BrochurePopup"; // 👈 Import popup

const Home: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup when page loads
    const timer = setTimeout(() => setShowPopup(true), 1000); // 1s delay
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      title: "Hands-on Learning",
      description:
        "Learn by building real projects with cutting-edge technologies.",
      icon: Code,
    },
    {
      title: "Community Building",
      description:
        "Connect with like-minded students and industry professionals.",
      icon: Users,
    },
    {
      title: "Competitive Spirit",
      description: "Participate in hackathons and coding competitions.",
      icon: Trophy,
    },
  ];

  return (
    <div className="space-y-20">
      {/* 🔥 Brochure Popup */}
      <BrochurePopup open={showPopup} onClose={() => setShowPopup(false)} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-70"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* HackForge Animated Title */}
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight select-none"
            >
              {"HackForge".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]"
                  animate={{
                    y: [0, -8, 0, 8, 0],
                    textShadow: [
                      "0px 0px 5px rgba(0,255,255,0.8)",
                      "0px 0px 10px rgba(255,0,255,0.9)",
                      "0px 0px 10px rgba(0,200,255,0.8)",
                      "0px 0px 20px rgba(255,0,0,0.9)",
                      "0px 0px 5px rgba(0,255,255,0.8)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 font-medium"
            >
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                A club of Al-Ameen Engineering College By AI&DS Dept
              </motion.span>
            </motion.p>

            {/* Sub Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Forging the future through code, creativity, and collaboration.
              Join us in building innovative solutions and shaping tomorrow&apos;s
              technology.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="https://chat.whatsapp.com/LFy9CIAU6UJDNY7zgwCAwb?mode=ems_wa_t"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2"
              >
                <motion.span
                  animate={{ y: [0, -5, 0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Join Us
                </motion.span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/events"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <motion.span
                  animate={{ y: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Upcoming Events
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Why Choose HackForge?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              We&apos;re more than just a coding club. We&apos;re a community dedicated
              to fostering innovation, learning, and personal growth in the
              world of technology.
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-6">
                  <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join HackForge today and be part of a community that&apos;s passionate
            about technology, innovation, and making a difference.
          </p>
          <Link
            to="https://chat.whatsapp.com/LFy9CIAU6UJDNY7zgwCAwb?mode=ems_wa_t"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
