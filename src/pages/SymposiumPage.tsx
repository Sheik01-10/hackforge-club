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
      "Develop a pre-built logo provided by our team using your creativity and design knowledge. Required software will be provided.",
    rules: [
      "Do not use any other AI-based software without the consent of the event inspector",
      "This is a solo event",
    ],
  },
  {
    title: "Code Crafter",
    img: codeImg,
    description:
      "Write code based on the given task and provide the estimated output. The participant who finishes first with correct logic will be the winner.",
    rules: [
      "No AI tools should be involved in the coding process",
      "Participants must not discuss with colleagues",
      "Usage of smartphones is strictly prohibited during the event",
    ],
  },
  {
    title: "Folio Tech",
    img: folioImg,
    description:
      "Build your own portfolio using the software provided during the event. The best portfolio will be selected as the winner.",
    rules: [
      "Use only the software approved by the event inspector",
      "Do not bring a pre-built portfolio",
      "Any malpractice or unfair behavior will lead to disqualification",
    ],
  },
];

const nonTechEvents: EventType[] = [
  {
    title: "Crown & Castle",
    img: chessImg,
    description: "Strategic chess-based competition to test planning skills.",
    rules: [
      "Individual participation only",
      "Standard chess rules apply",
      "Judges decision is final",
    ],
  },
  {
    title: "Rebuz Puzzle",
    img: connectImg,
    description: "Solve rebus-style puzzles using logic and reasoning.",
    rules: [
      "Individual event",
      "No external help allowed",
      "Time-based evaluation",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 70, scale: 0.92 },
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a,_#000000_70%)] text-white py-20 px-6">

      {/* ================= TITLE ================= */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center mb-32"
      >
        <span className="inline-block mb-6 px-6 py-2 rounded-full
        bg-white/10 backdrop-blur text-cyan-300 text-xs tracking-[0.4em] font-semibold">
          SYMPOSIUM
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8">
          <span className="bg-clip-text text-transparent
          bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
            Innovista
          </span>{" "}
          <span className="text-white">— 2K26</span>
        </h1>

        <p className="max-w-3xl mx-auto text-gray-400 text-lg sm:text-xl">
          A premium platform where innovation meets excellence across
          Technical and Non-Technical domains.
        </p>
      </motion.div>

      {/* ================= TECH EVENTS ================= */}
      <section className="max-w-7xl mx-auto mb-36">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold
        bg-clip-text text-transparent bg-gradient-to-r
        from-blue-400 to-indigo-500 mb-20">
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
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedEvent(event)}
              className="group relative rounded-[2.5rem] overflow-hidden
              bg-white/5 backdrop-blur-xl border border-white/10
              shadow-[0_40px_120px_rgba(0,0,0,0.8)]
              cursor-pointer transition-all"
            >
              <img
                src={event.img}
                alt={event.title}
                className="h-60 w-full object-cover group-hover:scale-110 transition duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-300 text-sm">Click to view rules</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= NON-TECH EVENTS ================= */}
      <section className="max-w-7xl mx-auto mb-36">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold
        bg-clip-text text-transparent bg-gradient-to-r
        from-yellow-400 to-orange-500 mb-20">
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
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedEvent(event)}
              className="group relative rounded-[2.5rem] overflow-hidden
              bg-white/5 backdrop-blur-xl border border-white/10
              shadow-[0_40px_120px_rgba(0,0,0,0.8)]
              cursor-pointer transition-all"
            >
              <img
                src={event.img}
                alt={event.title}
                className="h-60 w-full object-cover group-hover:scale-110 transition duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-300 text-sm">Click to view rules</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= RULES MODAL ================= */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur
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
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 rounded-3xl max-w-lg w-full p-8
              border border-white/10 shadow-2xl"
            >
              <h3 className="text-3xl font-bold mb-2 text-blue-400">
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
                bg-gradient-to-r from-blue-600 to-indigo-600
                font-semibold"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= CTA ================= */}
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
          className="px-20 py-6 rounded-full text-lg font-semibold
          bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
          shadow-[0_30px_120px_rgba(79,70,229,0.75)]"
        >
          Register Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SymposiumPage;
