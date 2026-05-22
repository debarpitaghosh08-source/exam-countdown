export const motivationalQuotes = [
  "Every exam is a chance to show what you've learned.",
  "Consistency is the key to success.",
  "Your hard work will pay off.",
  "Focus on progress, not perfection.",
  "You've prepared for this moment.",
  "Believe in yourself and your abilities.",
  "The best time to study was yesterday, the second best is now.",
  "Your future self will thank you.",
  "Challenges are opportunities to grow.",
  "You are capable of amazing things.",
  "Progress, not perfection, is the goal.",
  "Success is a journey, not a destination.",
  "Every mistake is a step towards mastery.",
  "You've got this!",
  "Determination is your superpower.",
];

export const colorThemes = {
  blue: {
    primary: '#00d4ff',
    secondary: '#0099cc',
    light: '#00f5ff',
    glow: 'rgb(0, 212, 255, 0.5)',
  },
  purple: {
    primary: '#c61dfa',
    secondary: '#9c0cb9',
    light: '#e61dfa',
    glow: 'rgb(198, 29, 250, 0.5)',
  },
  pink: {
    primary: '#ff006e',
    secondary: '#cc0056',
    light: '#ff1493',
    glow: 'rgb(255, 0, 110, 0.5)',
  },
  cyan: {
    primary: '#00f5ff',
    secondary: '#00ccff',
    light: '#00ffff',
    glow: 'rgb(0, 245, 255, 0.5)',
  },
  green: {
    primary: '#39ff14',
    secondary: '#2ecc40',
    light: '#00ff41',
    glow: 'rgb(57, 255, 20, 0.5)',
  },
};

export const priorityLevels = {
  high: { label: 'High Priority', icon: '🔴', color: 'text-red-400' },
  medium: { label: 'Medium Priority', icon: '🟡', color: 'text-yellow-400' },
  low: { label: 'Low Priority', icon: '🟢', color: 'text-green-400' },
};

export const studyStatusOptions = [
  { value: 'not-started', label: 'Not Started', icon: '📚' },
  { value: 'in-progress', label: 'In Progress', icon: '⏳' },
  { value: 'completed', label: 'Completed', icon: '✅' },
];

export const formatTimeRemaining = (targetDate) => {
  const now = new Date();
  const difference = new Date(targetDate).getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds, expired: false };
};

export const playSound = (soundType) => {
  // Simple beep sound for notifications
  if (typeof window !== 'undefined' && window.AudioContext) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.frequency.value = soundType === 'success' ? 800 : 400;
    oscillator.type = 'sine';

    gain.gain.setValueAtTime(0.3, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  }
};

export const getRandomQuote = () => {
  return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
};

export const generateConfetti = (x, y) => {
  // This will be used with framer-motion for confetti animation
  const confetti = [];
  for (let i = 0; i < 30; i++) {
    confetti.push({
      id: Math.random(),
      x: x + (Math.random() - 0.5) * 200,
      y: y + (Math.random() - 0.5) * 200,
      delay: Math.random() * 0.1,
      color: ['#00d4ff', '#c61dfa', '#ff006e', '#39ff14'][Math.floor(Math.random() * 4)],
    });
  }
  return confetti;
};
