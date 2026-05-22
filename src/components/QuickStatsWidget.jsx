import { motion } from 'framer-motion';
import useExamStore from '../context/examStore';

const StatItem = ({ label, value, icon, color = 'cyan' }) => (
  <div className="text-center">
    <div className="text-3xl mb-2">{icon}</div>
    <p className={`text-2xl font-bold text-${color}-400`}>{value}</p>
    <p className={`text-xs text-${color}-300/60 mt-1`}>{label}</p>
  </div>
);

export default function QuickStatsWidget() {
  const totalExams = useExamStore((state) => state.getTotalExams());
  const completedExams = useExamStore((state) => state.getCompletedExams());

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="glass-effect rounded-2xl p-6 border border-blue-500/20 backdrop-blur-xl"
    >
      <h3 className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-widest">
        Overview
      </h3>
      <div className="text-center">
        <p className="text-3xl font-bold text-white">{totalExams}</p>
        <p className="text-blue-300/70 text-sm">Total Exams</p>
        {totalExams > 0 && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-3 w-full h-1.5 bg-blue-500/30 rounded-full overflow-hidden"
          >
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
              style={{ width: `${(completedExams / totalExams) * 100}%` }}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
