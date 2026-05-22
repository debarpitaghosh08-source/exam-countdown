/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00d4ff',
          purple: '#c61dfa',
          pink: '#ff006e',
          cyan: '#00f5ff',
          green: '#39ff14',
        },
        glass: 'rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(0, 212, 255, 0.5)',
        'glow-purple': '0 0 30px rgba(198, 29, 250, 0.5)',
        'glow-pink': '0 0 30px rgba(255, 0, 110, 0.5)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 212, 255, 0.8)',
          },
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '0.5',
          },
          '50%': { 
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}
