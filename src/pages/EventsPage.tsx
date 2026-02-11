import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import symposiumImg from "../assets/events/web.jpeg";

const EventsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">

      {/* MAIN CARD */}
      <motion.div
        onClick={() => navigate("/symposium")}
        initial={{ opacity: 0, scale: 0.9, y: 80 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="
          relative w-full max-w-6xl
          rounded-[2.5rem] overflow-hidden
          border border-red-500/30
          shadow-[0_0_120px_rgba(255,0,0,0.35)]
          cursor-pointer
        "
      >

        {/* BACKGROUND IMAGE */}
        <img
          src={symposiumImg}
          alt="Innovista 2K26"
          className="w-full h-[460px] sm:h-[620px] object-cover"
        />

        {/* DARK + RED GLOW OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-red-900/60 to-black/95" />

        {/* CONTENT */}
        <div className="
          absolute inset-0
          flex flex-col justify-center
          px-6 sm:px-20
        ">

          {/* TAG */}
          <span className="
            mb-5 w-fit px-6 py-2 rounded-full
            bg-red-500/10 backdrop-blur
            border border-red-400/40
            text-red-300 text-xs tracking-[0.35em]
          ">
             SYMPOSIUM
          </span>

          {/* TITLE */}
          <h1 className="text-4xl sm:text-7xl font-extrabold mb-4 leading-tight">
            <span className="text-red-500 drop-shadow-[0_0_25px_red]">
              INNOVISTA-
            </span>
            <span className="text-white"> 2K’26</span>
          </h1>

          {/* SUBTITLE */}
          <p className="text-gray-300 text-sm sm:text-xl max-w-3xl mb-6">
            A National Level Technical Symposium organized by the
            <span className="text-red-400 font-semibold">
              {" "}Department of Artificial Intelligence & Data Science
            </span>.
          </p>


          {/* CTA */}
          <div className="
            w-fit px-10 py-4 rounded-full
            bg-gradient-to-r from-red-600 via-orange-500 to-red-600
            text-white font-bold text-lg
            shadow-[0_0_30px_rgba(255,60,60,0.8)]
          ">
            Enter Symposium →
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default EventsPage;
