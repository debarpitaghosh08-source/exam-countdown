import { motion } from 'framer-motion';
import { Zap, TrendingUp, Award, Brain } from 'lucide-react';

export default function AnalyticsSection() {
  const stats = [
    { icon: <Brain className="w-6 h-6" />, label: 'Topics Studied', value: '24', color: 'cyan' },
    { icon: <Award className="w-6 h-6" />, label: 'Exams Passed', value: '8', color: 'green' },
    { icon: <TrendingUp className="w-6 h-6" />, label: 'Improvement', value: '45%', color: 'purple' },
    { icon: <Zap className="w-6 h-6" />, label: 'Streak Days', value: '12', color: 'yellow' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="glass-effect rounded-xl p-4 border border-cyan-500/20 backdrop-blur-xl text-center hover:border-cyan-400/50 transition-all"
        >
          <div className={`flex justify-center mb-3 text-${stat.color}-400`}>
            {stat.icon}
          </div>
          <p className="text-2xl font-bold text-white">{stat.value}</p>
          <p className={`text-xs text-${stat.color}-300/70 mt-1`}>{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
