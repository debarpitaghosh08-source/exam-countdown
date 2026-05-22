import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Clock } from 'lucide-react';

const EmptyState = ({ type = 'exams' }) => {
  const messages = {
    exams: {
      icon: '📚',
      title: 'No Exams Yet',
      description: 'Start by adding your first exam to begin your countdown journey',
      action: 'Add Exam',
    },
    completed: {
      icon: '🎉',
      title: 'All Exams Completed!',
      description: 'Congratulations! You have completed all your scheduled exams',
      action: 'Add New Exam',
    },
    inProgress: {
      icon: '⏳',
      title: 'No Exams In Progress',
      description: 'Start studying for an upcoming exam to track your progress',
      action: 'Begin Studying',
    },
  };

  const message = messages[type] || messages.exams;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <div className="text-6xl mb-4">{message.icon}</div>
      <h3 className="text-2xl font-bold text-white mb-2">{message.title}</h3>
      <p className="text-cyan-300/70 text-center max-w-md mb-6">
        {message.description}
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white shadow-lg shadow-cyan-500/30"
      >
        {message.action}
      </motion.button>
    </motion.div>
  );
};

export default EmptyState;
