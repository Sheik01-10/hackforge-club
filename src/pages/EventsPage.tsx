import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import symposiumImg from "../assets/events/web.jpeg";

const EventsPage: React.FC = () => {
  const navigate = useNavigate();

  const goToSymposium = () => {
    console.log("CARD CLICKED");
    navigate("/symposium");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">

      {/* CLICKABLE CARD */}
      <motion.div
        onClick={goToSymposium}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="relative w-full max-w-md sm:max-w-6xl
        rounded-[2.2rem] overflow-hidden
        border border-white/10
        shadow-[0_40px_120px_rgba(0,0,0,0.9)]
        cursor-pointer"
      >

        {/* IMAGE */}
        <img
          src={symposiumImg}
          alt="Innovista 2K26"
          className="w-full h-[420px] sm:h-[560px] object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />

        {/* CONTENT (IMPORTANT FIX) */}
        <div className="absolute inset-0 flex flex-col justify-end sm:justify-center
        px-6 sm:px-16 pb-6 pointer-events-none">

          <span className="mb-3 px-5 py-2 w-fit rounded-full
          bg-white/10 backdrop-blur text-cyan-300 text-xs tracking-[0.3em]">
            SYMPOSIUM
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold mb-3">
            <span className="text-blue-400">Innovista</span>
            <span className="text-white"> — 2K26</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-xl mb-6 max-w-2xl">
            National-level symposium with elite Technical &
            Non-Technical events.
          </p>

          <div className="px-8 py-3 w-fit rounded-full
          bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
          text-white font-semibold shadow-xl">
            Enter Symposium →
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default EventsPage;
