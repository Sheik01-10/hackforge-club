import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import brochureImg from "../assets/broucher.jpeg"; // use your actual path

const BrochurePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-2xl max-w-3xl w-full"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500 text-2xl font-bold"
            >
              ×
            </button>

            {/* Brochure Image */}
            <img
              src={brochureImg}
              alt="Hackathon Brochure"
              className="rounded-lg w-full h-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrochurePopup;
