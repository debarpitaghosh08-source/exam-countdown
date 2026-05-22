import { motion } from 'framer-motion';

export default function Confetti({ particles = [] }) {
  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: particle.color,
            left: particle.x,
            top: particle.y,
          }}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: 200 }}
          transition={{ duration: 2, ease: 'easeOut', delay: particle.delay }}
        />
      ))}
    </div>
  );
}
