import { motion } from 'framer-motion';
import { getRandomQuote } from '../utils/constants';
import { useState, useEffect } from 'react';
import { Lightbulb, RotateCw } from 'lucide-react';

export default function MotivationalWidget() {
  const [quote, setQuote] = useState(getRandomQuote());

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative group"
    >
      {/* Animated border glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-30 group-hover:opacity-100 blur transition-opacity duration-300" />

      <div className="relative glass-effect rounded-2xl p-8 border border-purple-500/30 backdrop-blur-xl overflow-hidden">
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-widest flex items-center gap-2">
              <Lightbulb className="w-4 h-4" /> Motivation
            </h2>
            <motion.button
              whileHover={{ rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNewQuote}
              className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
            >
              <RotateCw className="w-4 h-4 text-purple-400" />
            </motion.button>
          </div>

          <motion.p
            key={quote}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl font-bold text-white leading-relaxed mb-6"
          >
            "{quote}"
          </motion.p>

          <div className="flex items-center justify-between text-sm text-purple-300/70">
            <span>💪 Keep pushing</span>
            <span>✨ You've got this</span>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-purple-600 opacity-10 blur-3xl animate-pulse" />
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-pink-600 opacity-10 blur-3xl animate-pulse" />
      </div>
    </motion.div>
  );
}
