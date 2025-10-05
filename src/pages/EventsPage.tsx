import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import hackathonImg from "../assets/events/hackathon.jpg";

const EventsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Hero Intra-Hackathon Card */}
        <motion.div
          onClick={() => navigate("/intra-hackathon")}
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="cursor-pointer bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-2xl transition-all"
        >
          <motion.img
            src={hackathonImg}
            alt="Intra Hackathon"
            className="h-80 w-full object-cover"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-3">
              IntraHackathon- <span className="text-blue-500">2K25</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Explore exciting Tech & Non-Tech events inside!
            </p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default EventsPage;
