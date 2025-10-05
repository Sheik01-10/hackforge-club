import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, MapPin } from "lucide-react";
import collegeLogo from "../assets/logo.jpg";

const AboutCollege: React.FC = () => {
  const courses = [
    { name: "Artificial Intelligence and Data Science", code: "AI&DS" },
    { name: "Information Technology", code: "IT" },
    { name: "Computer Science and Engineering", code: "CSE" },
    { name: "Mechanical Engineering", code: "ME" },
    { name: "Electronics & Communication Engineering", code: "ECE" },
    { name: "Electrical & Electronics Engineering", code: "EEE" },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Al-Ameen Engineering College
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A premier institution committed to excellence in engineering
            education and innovation.
          </p>
        </motion.div>

        {/* College Logo and Info */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-12 mb-16 border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* College Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-amber-100 dark:from-blue-900/30 dark:to-amber-900/30 rounded-2xl flex items-center justify-center">
                <img
                  src={collegeLogo}
                  alt="Al-Ameen College Logo"
                  className="w-24 h-24 object-contain rounded-xl"
                />
              </div>
            </motion.div>

            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Al-Ameen Engineering College
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              AL-AMEEN ENGINEERING COLLEGE, an Autonomous Institution approved by AICTE, New Delhi and affiliated to Anna University, Chennai is located in Erode District, Tamil Nadu is run by AL-AMEEN EDUCATIONAL & CHARITABLE TRUST, which was established in the year 1984 by philanthropists from various professionals and industrialists, with an aim to foster higher education for all and to provide excellent professional education in rural India to uplift the downtrodden communities.Initially the Trust started Al-Ameen Polytechnic College. Later, Al-Ameen Engineering College was established in the year 2009. The college started with 4 undergraduate courses and has spread its wings to a multidisciplinary institution with 6 undergraduate courses, 1 Postgraduate course and 1 Doctoral degree Programme
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://alameen.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  <span>Visit Official Website</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="h-5 w-5" />
                  <span>Erode, TamilNadu</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Courses Offered */}
        <div className="mb-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Courses Offered
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive engineering programs designed for the future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-lg text-sm font-semibold">
                    {course.code}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {course.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              41
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Years of Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              5000+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Alumni Network
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              200+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Faculty Members
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              95%
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Placement Rate
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCollege;
