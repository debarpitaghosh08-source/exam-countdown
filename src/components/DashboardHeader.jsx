import { motion } from 'framer-motion';
import { Clock, Plus, Settings } from 'lucide-react';

export default function DashboardHeader({ onAddExam }) {
  return (
    <header className="relative z-20 border-b border-cyan-500/10 backdrop-blur-xl bg-slate-900/20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
      >
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-75 animate-pulse" />
              <div className="relative bg-slate-950 rounded-lg p-2">
                <Clock className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                <span className="neon-text">Exam Countdown</span>
              </h1>
              <p className="text-xs sm:text-sm text-cyan-300/60">Your ultimate study companion</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onAddExam}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/80 to-blue-600/80 hover:from-cyan-400 hover:to-blue-500 rounded-lg font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Exam</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 glass-effect rounded-lg border border-cyan-500/20 hover:border-cyan-400/50 transition-all"
            >
              <Settings className="w-5 h-5 text-cyan-400" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
