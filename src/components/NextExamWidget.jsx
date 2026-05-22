import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useHooks';
import { colorThemes } from '../utils/constants';

export default function NextExamWidget({ exam }) {
  const countdown = useCountdown(exam ? exam.date : new Date());
  const color = exam ? colorThemes[exam.color] : colorThemes.blue;

  if (!exam) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-effect rounded-2xl p-6 border border-cyan-500/20 backdrop-blur-xl flex items-center justify-center min-h-[300px]"
      >
        <div className="text-center">
          <p className="text-cyan-300/70 text-lg">No upcoming exams</p>
          <p className="text-cyan-300/50 text-sm mt-1">Add an exam to get started!</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      {/* Animated border glow */}
      <div
        className="absolute -inset-0.5 bg-gradient-to-r rounded-2xl opacity-50 group-hover:opacity-100 blur transition-opacity duration-300 animate-pulse"
        style={{
          backgroundImage: `linear-gradient(135deg, ${color.primary}, ${color.light})`,
        }}
      />

      <div className="relative glass-effect rounded-2xl p-8 border border-cyan-500/30 backdrop-blur-xl overflow-hidden">
        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-2">
            Next Exam
          </h2>

          <h1 className="text-4xl font-black text-white mb-6">
            {exam.subject}
          </h1>

          {/* Big countdown display */}
          {countdown.expired ? (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-center py-8 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl border border-green-500/40 mb-6"
            >
              <p className="text-5xl font-black text-green-400">✨</p>
              <p className="text-2xl font-bold text-green-400 mt-2">It's Exam Day!</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-4 gap-3 mb-6">
              {[
                { label: 'Days', value: countdown.days },
                { label: 'Hours', value: countdown.hours },
                { label: 'Mins', value: countdown.minutes },
                { label: 'Secs', value: countdown.seconds },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center bg-slate-900/50 rounded-lg p-3 border border-cyan-500/30"
                >
                  <p className="text-2xl font-black text-cyan-400">
                    {item.value.toString().padStart(2, '0')}
                  </p>
                  <p className="text-xs text-cyan-300/60 mt-1">{item.label}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Progress indicator */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-cyan-300/70 font-semibold">Preparation</span>
              <span className="text-cyan-400 font-bold">{exam.progressPercentage}%</span>
            </div>
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-cyan-500/20">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${exam.progressPercentage}%` }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600"
              />
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ backgroundColor: color.primary }} />
      </div>
    </motion.div>
  );
}
