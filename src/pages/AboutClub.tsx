import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Code, Users, Award, Mic } from "lucide-react";

const AboutClub: React.FC = () => {
  const activities = [
    {
      icon: Code,
      title: "Workshops",
      description:
        "Regular hands-on workshops on latest technologies and programming languages.",
    },
    {
      icon: Award,
      title: "Hackathons",
      description:
        "Organize and participate in competitive coding events and innovation challenges.",
    },
    {
      icon: Users,
      title: "Coding Sessions",
      description: "Collaborative coding sessions to solve real-world problems together.",
    },
    {
      icon: Mic,
      title: "Alumini Talks",
      description:
        "Industry experts and alumni share insights on latest trends and career guidance.",
    },
  ];

  const benefits = [
    "Learn cutting-edge technologies and programming languages",
    "Work on real-world projects that make a difference",
    "Get mentorship from industry professionals and senior students",
    "Build a strong portfolio to showcase your skills",
    "Network with like-minded peers and professionals",
    "Participate in national and international competitions",
    "Develop leadership and teamwork skills",
    "Access to exclusive internship and job opportunities",
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-600 dark:text-blue-400">HackForge</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Where innovation meets collaboration, and ideas transform into reality through the power of code.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To create a vibrant community of passionate technologists who collaborate, innovate, and build
              solutions that address real-world challenges. We strive to bridge the gap between academic
              learning and industry requirements while fostering a culture of continuous learning and growth.
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mr-4">
                <Eye className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To be the leading technology club that empowers students to become innovative problem solvers
              and ethical leaders in the tech industry. We envision a future where our members contribute
              significantly to technological advancement and make a positive impact on society.
            </p>
          </motion.div>
        </div>

        {/* Activities */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Activities</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Diverse programs designed to enhance your technical skills and professional growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                  <activity.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Join Us */}
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Join HackForge?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Unlock your potential and accelerate your career in technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://chat.whatsapp.com/LFy9CIAU6UJDNY7zgwCAwb?mode=ems_wa_t"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg"
            >
              <Users className="h-5 w-5" />
              <span>Join Our Community</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutClub;
