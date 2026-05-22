import { motion } from 'framer-motion';
import useExamStore from '../context/examStore';

export default function StudyStreakWidget() {
  const studyStreak = useExamStore((state) => state.studyStreak);
  const studyHours = useExamStore((state) => state.studyHours);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass-effect rounded-2xl p-6 border border-orange-500/20 backdrop-blur-xl"
    >
      <h3 className="text-sm font-semibold text-orange-400 mb-4 uppercase tracking-widest">
        Study Streak
      </h3>
      <div className="space-y-3">
        <div className="text-center">
          <p className="text-3xl font-bold text-orange-400">{studyStreak}🔥</p>
          <p className="text-orange-300/70 text-sm">Days Active</p>
        </div>
        <div className="text-center pt-2 border-t border-orange-500/20">
          <p className="text-2xl font-bold text-orange-300">{studyHours}h</p>
          <p className="text-orange-300/70 text-sm">Total Study Time</p>
        </div>
      </div>
    </motion.div>
  );
}
