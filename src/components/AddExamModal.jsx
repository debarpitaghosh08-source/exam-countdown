import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import useExamStore from '../context/examStore';
import { colorThemes, priorityLevels, studyStatusOptions } from '../utils/constants';

export default function AddExamModal({ isOpen, onClose }) {
  const addExam = useExamStore((state) => state.addExam);
  const [formData, setFormData] = useState({
    subject: '',
    date: '',
    priority: 'medium',
    color: 'blue',
    studyStatus: 'not-started',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.subject || !formData.date) {
      alert('Please fill in all required fields');
      return;
    }

    addExam({
      ...formData,
      progressPercentage: 0,
      notesCount: 0,
    });

    setFormData({
      subject: '',
      date: '',
      priority: 'medium',
      color: 'blue',
      studyStatus: 'not-started',
    });

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md glass-effect rounded-2xl border border-cyan-500/30 backdrop-blur-xl p-8 relative"
          >
            {/* Close button */}
            <motion.button
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-red-500/20 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-red-400" />
            </motion.button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-white mb-6">Add New Exam</h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-cyan-300 mb-2">
                  Subject Name *
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g., Mathematics, Physics"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-cyan-300/40 focus:outline-none focus:border-cyan-400/60 focus:bg-slate-800 transition-all"
                />
              </div>

              {/* Exam Date */}
              <div>
                <label className="block text-sm font-semibold text-cyan-300 mb-2">
                  Exam Date *
                </label>
                <input
                  type="datetime-local"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/60 focus:bg-slate-800 transition-all"
                />
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm font-semibold text-cyan-300 mb-2">
                  Priority Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(priorityLevels).map(([key, value]) => (
                    <motion.button
                      key={key}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormData({ ...formData, priority: key })}
                      className={`px-3 py-2 rounded-lg font-semibold transition-all ${
                        formData.priority === key
                          ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                          : 'bg-slate-800/50 border border-cyan-500/20 text-cyan-300 hover:border-cyan-400/60'
                      }`}
                    >
                      {value.icon} {value.label.split(' ')[0]}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Color Theme */}
              <div>
                <label className="block text-sm font-semibold text-cyan-300 mb-2">
                  Color Theme
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {Object.entries(colorThemes).map(([key, value]) => (
                    <motion.button
                      key={key}
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setFormData({ ...formData, color: key })}
                      className={`w-full h-10 rounded-lg transition-all border-2 ${
                        formData.color === key
                          ? 'border-white scale-110'
                          : 'border-transparent'
                      }`}
                      style={{ backgroundColor: value.primary }}
                    />
                  ))}
                </div>
              </div>

              {/* Study Status */}
              <div>
                <label className="block text-sm font-semibold text-cyan-300 mb-2">
                  Study Status
                </label>
                <select
                  value={formData.studyStatus}
                  onChange={(e) => setFormData({ ...formData, studyStatus: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/60 transition-all appearance-none cursor-pointer"
                >
                  {studyStatusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.icon} {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all"
              >
                Add Exam
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
