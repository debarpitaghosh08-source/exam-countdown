import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import DashboardHeader from './components/DashboardHeader';
import CountdownCard from './components/CountdownCard';
import NextExamWidget from './components/NextExamWidget';
import QuickStatsWidget from './components/QuickStatsWidget';
import AddExamModal from './components/AddExamModal';
import StudyStreakWidget from './components/StudyStreakWidget';
import MotivationalWidget from './components/MotivationalWidget';
import useExamStore from './context/examStore';

function App() {
  const [showAddModal, setShowAddModal] = useState(false);
  const exams = useExamStore((state) => state.exams);
  const nextExam = useExamStore((state) => state.getNextExam());

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-slate-950">
      {/* Animated background with 3D elements */}
      <AnimatedBackground />

      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <DashboardHeader onAddExam={() => setShowAddModal(true)} />

        {/* Main content area */}
        <main className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
          {/* Top row - Quick stats and motivation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          >
            <NextExamWidget exam={nextExam} />
            <MotivationalWidget />
          </motion.div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
          >
            <QuickStatsWidget />
            <StudyStreakWidget />
            <div className="glass-effect rounded-2xl p-6 border border-cyan-500/20 backdrop-blur-xl">
              <h3 className="text-sm font-semibold text-cyan-400 mb-2">Total Exams</h3>
              <p className="text-3xl font-bold text-white">{exams.length}</p>
            </div>
          </motion.div>

          {/* Countdown cards grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Your Exams</h2>
                <p className="text-cyan-300/70 mt-1">Track and manage your upcoming exams</p>
              </div>
            </div>

            {exams.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-effect rounded-2xl p-12 text-center border border-purple-500/20 backdrop-blur-xl"
              >
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-white mb-2">No Exams Yet</h3>
                <p className="text-cyan-300/70 mb-6">
                  Add your first exam to start tracking your countdown
                </p>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-glow-blue transition-all"
                >
                  Add Your First Exam
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exams.map((exam, index) => (
                  <CountdownCard key={exam.id} exam={exam} index={index} />
                ))}
              </div>
            )}
          </motion.div>
        </main>

        {/* Add Exam Modal */}
        {showAddModal && (
          <AddExamModal
            isOpen={showAddModal}
            onClose={() => setShowAddModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
