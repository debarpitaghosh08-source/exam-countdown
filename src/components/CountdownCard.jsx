import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useHooks';
import { colorThemes, priorityLevels } from '../utils/constants';
import { Trash2, Edit2, CheckCircle } from 'lucide-react';
import useExamStore from '../context/examStore';

const CountdownBox = ({ label, value }) => (
  <div className="flex-1 text-center">
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="text-2xl sm:text-3xl font-bold text-cyan-300 leading-none"
    >
      {value.toString().padStart(2, '0')}
    </motion.div>
    <p className="text-xs sm:text-sm text-cyan-300/60 mt-1 uppercase tracking-widest">
      {label}
    </p>
  </div>
);

export default function CountdownCard({ exam, index }) {
  const countdown = useCountdown(exam.date);
  const deleteExam = useExamStore((state) => state.deleteExam);
  const updateExam = useExamStore((state) => state.updateExam);
  const color = colorThemes[exam.color] || colorThemes.blue;
  const priority = priorityLevels[exam.priority] || priorityLevels.medium;

  const handleMarkComplete = () => {
    updateExam(exam.id, { studyStatus: 'completed', progressPercentage: 100 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 300 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative"
    >
      {/* Glowing border effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r rounded-2xl p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage: `linear-gradient(135deg, ${color.primary}, ${color.secondary})`,
        }}
      >
        <div className="absolute inset-0 bg-slate-950 rounded-2xl" />
      </div>

      {/* Card content */}
      <div className="relative glass-effect rounded-2xl p-6 border border-cyan-500/20 backdrop-blur-xl group-hover:border-cyan-400/50 transition-all">
        {/* Top section - Subject and priority */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              {exam.subject}
            </h3>
            <p className={`text-sm font-semibold ${priority.color}`}>
              {priority.icon} {priority.label}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {exam.studyStatus !== 'completed' && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleMarkComplete}
                className="p-2 hover:bg-green-500/20 rounded-lg transition-colors"
                title="Mark as complete"
              >
                <CheckCircle className="w-4 h-4 text-green-400" />
              </motion.button>
            )}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => deleteExam(exam.id)}
              className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
              title="Delete exam"
            >
              <Trash2 className="w-4 h-4 text-red-400" />
            </motion.button>
          </div>
        </div>

        {/* Countdown display */}
        {countdown.expired ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/30 mb-4"
          >
            <p className="text-2xl font-bold text-green-400">✓ Exam Day!</p>
            <p className="text-green-300/70 text-sm mt-1">Best of luck!</p>
          </motion.div>
        ) : (
          <div className="flex gap-2 mb-4 bg-slate-900/50 rounded-lg p-4">
            <CountdownBox label="Days" value={countdown.days} />
            <CountdownBox label="Hours" value={countdown.hours} />
            <CountdownBox label="Mins" value={countdown.minutes} />
            <CountdownBox label="Secs" value={countdown.seconds} />
          </div>
        )}

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-cyan-300/70">Study Progress</span>
            <span className="text-xs font-bold text-cyan-400">{exam.progressPercentage}%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden border border-cyan-500/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${exam.progressPercentage}%` }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
            />
          </div>
        </div>

        {/* Status and notes */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-cyan-300/60">
            Status: <span className="font-semibold text-cyan-300">{exam.studyStatus.replace('-', ' ')}</span>
          </span>
          <span className="text-cyan-300/60">
            Notes: <span className="font-semibold text-cyan-300">{exam.notesCount}</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
