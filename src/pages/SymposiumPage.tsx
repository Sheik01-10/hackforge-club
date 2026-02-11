import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// TECH IMAGES
import codeImg from "../assets/events/code.jpg";
import logoImg from "../assets/events/logo.jpg";
import folioImg from "../assets/events/folio.jpg";

// NON-TECH IMAGES
import chessImg from "../assets/events/chess.jpg";
import connectImg from "../assets/events/connect.jpg";

type EventType = {
  title: string;
  img: string;
  description: string;
  rules: string[];
};

const techEvents: EventType[] = [
  {
    title: "Logovation",
    img: logoImg,
    description:
      "Develop a pre-built logo provided by our team using your creativity and design knowledge.",
    rules: [
      "No AI tools without event inspector permission",
      "Solo event",
    ],
  },
  {
    title: "Code Crafter",
    img: codeImg,
    description:
      "Solve coding problems and predict output with correct logic.",
    rules: [
      "No AI tools allowed",
      "No discussion with others",
      "Mobile phones strictly prohibited",
    ],
  },
  {
    title: "Folio Tech",
    img: folioImg,
    description:
      "Create a portfolio using the provided tools during the event.",
    rules: [
      "Only approved software allowed",
      "No pre-built portfolios",
      "Malpractice leads to disqualification",
    ],
  },
];

const nonTechEvents: EventType[] = [
  {
    title: "Crown & Castle",
    img: chessImg,
    description: "A strategic chess battle testing your thinking skills.",
    rules: [
      "Individual event",
      "Standard chess rules apply",
      "Judges decision is final",
    ],
  },
  {
    title: "Rebus Puzzle",
    img: connectImg,
    description: "Crack logical rebus puzzles within the time limit.",
    rules: [
      "Individual participation",
      "No external help",
      "Time-based evaluation",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const SymposiumPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#3b0000,_#000_70%)] text-white py-24 px-6">

      {/* ===== TITLE ===== */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center mb-36"
      >
        <span className="inline-block mb-6 px-6 py-2 rounded-full
        bg-red-500/10 border border-red-400/40
        text-red-300 text-xs tracking-[0.4em] font-semibold">
          SYMPOSIUM
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8">
          <span className="text-red-500 drop-shadow-[0_0_25px_red]">
            INNOVISTA
          </span>{" "}
          <span className="text-white">2K’26</span>
        </h1>

        <p className="max-w-3xl mx-auto text-gray-300 text-lg sm:text-xl">
          Organized by the Department of Artificial Intelligence &
          Data Science, Al-Ameen Engineering College.
        </p>
      </motion.div>

      {/* ===== TECH EVENTS ===== */}
      <section className="max-w-7xl mx-auto mb-36">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold
        text-red-400 mb-20">
          Technical Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {techEvents.map((event) => (
            <motion.div
              key={event.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              onClick={() => setSelectedEvent(event)}
              className="group relative rounded-[2.5rem] overflow-hidden
              bg-red-900/10 backdrop-blur-xl
              border border-red-500/30
              shadow-[0_0_80px_rgba(255,0,0,0.35)]
              cursor-pointer"
            >
              <img
                src={event.img}
                alt={event.title}
                className="h-60 w-full object-cover group-hover:scale-110 transition duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <h3 className="text-2xl font-bold mb-2 text-red-300">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  Click to view rules
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== NON-TECH EVENTS ===== */}
      <section className="max-w-7xl mx-auto mb-36">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold
        text-orange-400 mb-20">
          Non-Technical Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {nonTechEvents.map((event) => (
            <motion.div
              key={event.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              onClick={() => setSelectedEvent(event)}
              className="group relative rounded-[2.5rem] overflow-hidden
              bg-orange-900/10 backdrop-blur-xl
              border border-orange-500/30
              shadow-[0_0_80px_rgba(255,120,0,0.35)]
              cursor-pointer"
            >
              <img
                src={event.img}
                alt={event.title}
                className="h-60 w-full object-cover group-hover:scale-110 transition duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <h3 className="text-2xl font-bold mb-2 text-orange-300">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  Click to view rules
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur
            flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="bg-[#120000] rounded-3xl max-w-lg w-full p-8
              border border-red-500/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold mb-2 text-red-400">
                {selectedEvent.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {selectedEvent.description}
              </p>

              <ul className="space-y-3 text-gray-300">
                {selectedEvent.rules.map((rule, i) => (
                  <li key={i}>• {rule}</li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedEvent(null)}
                className="mt-8 w-full py-3 rounded-full
                bg-gradient-to-r from-red-600 to-orange-600
                font-semibold shadow-[0_0_25px_rgba(255,60,60,0.7)]"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== CTA ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          Step Into the Experience
        </h2>

        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            window.open("https://forms.gle/QxWo2PqWa3nx8Mns9", "_blank")
          }
          className="px-20 py-6 rounded-full text-lg font-bold
          bg-gradient-to-r from-red-600 via-orange-500 to-red-600
          shadow-[0_0_80px_rgba(255,80,80,0.8)]"
        >
          Register Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SymposiumPage;
