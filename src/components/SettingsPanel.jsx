import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import useExamStore from '../context/examStore';
import { playSound } from '../utils/constants';

export default function SettingsPanel() {
  const soundEnabled = useExamStore((state) => state.soundEnabled);
  const toggleSound = useExamStore((state) => state.toggleSound);
  const theme = useExamStore((state) => state.theme);
  const setTheme = useExamStore((state) => state.setTheme);

  const handleSoundToggle = () => {
    toggleSound();
    playSound('success');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-effect rounded-2xl p-6 border border-cyan-500/20 backdrop-blur-xl"
    >
      <h3 className="text-lg font-bold text-white mb-4">Settings</h3>

      {/* Sound Toggle */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-cyan-500/10">
        <div className="flex items-center gap-2">
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 text-cyan-400" />
          ) : (
            <VolumeX className="w-4 h-4 text-cyan-400/50" />
          )}
          <span className="text-cyan-300">Sound Effects</span>
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleSoundToggle}
          className={`w-12 h-6 rounded-full transition-all ${
            soundEnabled ? 'bg-cyan-500' : 'bg-slate-700'
          }`}
        >
          <motion.div
            layout
            className="w-5 h-5 bg-white rounded-full"
            style={{
              marginLeft: soundEnabled ? '22px' : '2px',
            }}
          />
        </motion.button>
      </div>

      {/* Theme Selection */}
      <div>
        <span className="text-sm text-cyan-300 block mb-3">Theme</span>
        <div className="grid grid-cols-2 gap-2">
          {['dark', 'light'].map((t) => (
            <motion.button
              key={t}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(t)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all capitalize ${
                theme === t
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800/50 border border-cyan-500/20 text-cyan-300'
              }`}
            >
              {t}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
