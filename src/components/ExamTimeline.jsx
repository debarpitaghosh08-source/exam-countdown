import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen } from 'lucide-react';
import useExamStore from '../context/examStore';

export default function ExamTimeline() {
  const exams = useExamStore((state) => state.exams);
  const sortedExams = [...exams].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-effect rounded-2xl p-6 border border-cyan-500/20 backdrop-blur-xl"
    >
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-5 h-5 text-cyan-400" />
        <h3 className="text-lg font-bold text-white">Exam Timeline</h3>
      </div>

      {sortedExams.length === 0 ? (
        <p className="text-cyan-300/60 text-center py-8">No exams scheduled</p>
      ) : (
        <div className="space-y-4">
          {sortedExams.map((exam, index) => {
            const examDate = new Date(exam.date);
            const today = new Date();
            const daysUntil = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24));

            return (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg border border-cyan-500/10 hover:border-cyan-500/30 transition-all"
              >
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-cyan-500 border-2 border-cyan-400" />
                  {index < sortedExams.length - 1 && (
                    <div className="w-0.5 h-12 bg-gradient-to-b from-cyan-500/50 to-transparent mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-white truncate">{exam.subject}</h4>
                  <div className="flex items-center gap-4 mt-2 text-sm text-cyan-300/70">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {examDate.toLocaleDateString()}
                    </span>
                    <span className="px-2 py-1 bg-cyan-500/20 rounded text-cyan-300 text-xs font-semibold">
                      {daysUntil > 0 ? `${daysUntil} days` : 'Today'}
                    </span>
                  </div>
                </div>

                {/* Status badge */}
                <div className="text-right">
                  <div className="text-xs font-semibold">
                    <span className={`px-2 py-1 rounded-full ${
                      exam.studyStatus === 'completed'
                        ? 'bg-green-500/20 text-green-300'
                        : exam.studyStatus === 'in-progress'
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-purple-500/20 text-purple-300'
                    }`}>
                      {exam.studyStatus.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
