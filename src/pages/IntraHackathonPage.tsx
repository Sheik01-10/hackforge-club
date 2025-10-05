import React from "react";
import { motion } from "framer-motion";
import paperImg from "../assets/events/paper.jpeg";
import quizImg from "../assets/events/quiz.jpeg";
import codeImg from "../assets/events/code.jpeg";
import webImg from "../assets/events/web.jpeg";
import logoImg from "../assets/events/logo.jpeg";
import treasureImg from "../assets/events/treasure.jpeg";
import memoryImg from "../assets/events/memory.jpeg";
import chainImg from "../assets/events/chain.jpeg";

const events = {
  tech: [
    { title: "Paper Presentation", desc: "Showcase your innovative research.", img: paperImg },
    { title: "Quiz", desc: "Test your technical knowledge.", img: quizImg },
    { title: "Code Crafter", desc: "Solve real-world coding challenges.", img: codeImg },
    { title: "Web Gen", desc: "Creative web solutions on the spot.", img: webImg },
    { title: "Logovation", desc: "Logo design with creativity.", img: logoImg },
  ],
  nonTech: [
    { title: "Treasure Hunt", desc: "Follow the clues and find treasure!", img: treasureImg },
    { title: "Memory Relay", desc: "Challenge your memory and teamwork.", img: memoryImg },
    { title: "PixRiddle", desc: "Solve fun riddles with pictures.", img: chainImg },
  ],
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

const IntraHackathonPage: React.FC = () => {
  return (
    <div className="py-9 bg-gradient-to-b from-gray-950 via-gray-900 to-black min-h-screen">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-white mb-10 sm:mb-20"
        >
           IntraHackathon- <span className="text-blue-500">2K25</span>
        </motion.h1>

        {/* Tech Section */}
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-400 mb-8 sm:mb-12"
        >
          ⚡ Tech Events
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mb-16 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {events.tech.map((event, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.07,
                y: -5,
                rotate: 1,
                boxShadow: "0 15px 35px rgba(95, 11, 230, 0.5)",
              }}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-gray-700 transition-all cursor-pointer"
            >
              <img src={event.img} alt={event.title} className="h-40 sm:h-48 w-full object-cover" />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-gray-300 text-sm">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Non-Tech Section */}
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-amber-400 mb-8 sm:mb-12"
        >
           Non-Tech Events
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {events.nonTech.map((event, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.07,
                y: -5,
                rotate: -1,
                boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
              }}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-gray-700 transition-all cursor-pointer"
            >
              <img src={event.img} alt={event.title} className="h-40 sm:h-48 w-full object-cover" />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-gray-300 text-sm">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Registration Section */}
        <div className="mt-20 sm:mt-28 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-center text-white mb-6 sm:mb-8"
          >
            Start with your adventure 
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <button
              onClick={() =>
                window.open(
                  "https://forms.gle/efGdjPbJAndnycrP8",
                  "_blank"
                )
              }
              className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg transition duration-300"
            >
              Register Now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IntraHackathonPage;
