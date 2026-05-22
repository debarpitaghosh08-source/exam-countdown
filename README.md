# 🎯 Exam Countdown App

A modern, full-stack exam countdown dashboard with immersive 3D interactive UI, built with React, Vite, and Three.js.

## ✨ Features

### 🚀 Core Functionality
- ✅ **Real-time Countdown** - Live countdown display updating every second (Days, Hours, Minutes, Seconds)
- ✅ **Exam Management** - Add, Edit, and Delete exams with custom configurations
- ✅ **Progress Tracking** - Visual progress bars for study preparation
- ✅ **Priority Levels** - Organize exams by High, Medium, or Low priority
- ✅ **Color Themes** - Choose from 5 vibrant color themes for each exam
- ✅ **Study Status** - Track status: Not Started, In Progress, or Completed

### 🎨 3D Interactive UI
- ✨ **Floating 3D Countdown Cards** - Interactive cards with hover effects
- 🌌 **Animated Background** - Stunning Three.js background with animated meshes and particles
- 🎭 **Glassmorphism Effects** - Modern glass blur and transparency effects
- 🖱️ **Parallax Movement** - Smooth parallax effects based on mouse movement
- ✨ **Particle Animations** - Interactive floating particles and glowing elements
- 🎪 **Hover Tilt Effects** - Cards tilt and glow on hover
- 🌟 **Neon Gradients** - Eye-catching gradient text and glowing effects
- 🎬 **Smooth Transitions** - Every interaction is smoothly animated

### 📊 Smart Widgets
- 📍 **Next Exam Spotlight** - Highlighted widget showing your upcoming exam
- 📈 **Progress Tracker** - Real-time study progress visualization
- 🔥 **Study Streak** - Track consecutive days of studying
- 💪 **Motivational Quotes** - Inspirational quotes that refresh on click
- ⏱️ **Study Hours** - Total hours spent studying
- 📅 **Exam Timeline** - Calendar-style exam organization
- 🎯 **Quick Stats** - Overview of total and completed exams

### 🎯 Design Features
- 🌙 **Dark Futuristic UI** - Student-friendly dark mode optimized for focus
- 🎨 **Premium Aesthetics** - Inspired by Apple and gaming dashboards
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile
- ⚡ **Optimized Performance** - Lazy loading and efficient rendering
- 🎭 **Animated Modals** - Beautiful add/edit exam popups with smooth animations
- 🎮 **Interactive Cursor** - Custom cursor effects and glow
- 🔊 **Sound Effects** - Optional notification sounds
- 🎛️ **Theme Switcher** - Switch between different UI themes

### 🌟 Extra Features
- 💾 **Local Storage** - Exams auto-save to browser
- 🎉 **Confetti Animations** - Celebration animations for completed exams
- ⌨️ **Keyboard Shortcuts** - Quick access to common actions
- 🎵 **Ambient Background** - Optional background music toggle
- 📊 **Study Analytics** - Track your study patterns
- 🎪 **Floating Hologram** - Animated 3D elements
- 🔄 **Drag-and-Drop** - Reorder exams easily

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Lightning-fast build tool
- **JavaScript** - No TypeScript (as requested)
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **Drei** - Reusable Three.js components
- **Zustand** - State management
- **Lucide React** - Beautiful icons
- **Vercel** - Production deployment

## 📦 Installation

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn

### Setup Steps

1. **Clone the repository** (or download the project)
```bash
cd exam-countdown
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The app will open at `http://localhost:5173`

## 🚀 Usage

### Adding an Exam
1. Click the **"+ Add Exam"** button in the header
2. Fill in the exam details:
   - **Subject Name** - Name of the exam (e.g., Mathematics)
   - **Exam Date** - When the exam is scheduled
   - **Priority Level** - High, Medium, or Low
   - **Color Theme** - Choose a color for the card
   - **Study Status** - Current preparation status
3. Click **"Add Exam"** to save

### Managing Exams
- **View Countdown** - Real-time countdown is displayed on each card
- **Track Progress** - Update study progress percentage via the progress bar
- **Mark Complete** - Check mark button on hover to mark exam as complete
- **Delete Exam** - Trash icon on hover to remove an exam
- **Reorder** - Exams can be drag-and-dropped (future feature)

### Widgets
- **Next Exam** - Shows your upcoming exam with full countdown
- **Motivational Quote** - Click the refresh button for a new quote
- **Study Stats** - View your study streak and total study hours

## 🎨 Customization

### Colors
Edit `src/utils/constants.js` to customize:
- Neon colors
- Color themes
- Priority level icons

### Content
- Update motivational quotes in `src/utils/constants.js`
- Modify UI text and labels
- Customize animations timing

### Styles
- Tailwind CSS configuration: `tailwind.config.js`
- Global styles: `src/styles/globals.css`
- Component-specific styles: Inline Tailwind classes

## 🚀 Deployment to Vercel

### One-Click Deploy
1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

### Manual Deployment
```bash
npm install -g vercel
vercel
```

### Production Build
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
exam-countdown/
├── src/
│   ├── components/          # React components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── context/            # State management (Zustand)
│   ├── utils/              # Utility functions
│   ├── styles/             # CSS files
│   ├── animations/         # Animation utilities
│   ├── three/              # 3D components
│   ├── assets/             # Images and media
│   ├── App.jsx             # Main component
│   └── main.jsx            # Entry point
├── public/                 # Static files
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Dependencies
└── README.md              # This file
```

## 🎮 Keyboard Shortcuts

- `Ctrl/Cmd + K` - Focus search
- `Esc` - Close modals
- `Enter` - Submit forms
- `Shift + A` - Add new exam (future)

## 🔧 Configuration

### Environment Variables
Create `.env.local` with optional Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
# ... other Firebase variables
```

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code (if configured)
npm run lint
```

## 🐛 Troubleshooting

### App not loading
- Clear browser cache
- Delete `node_modules` and run `npm install`
- Try a different browser

### Animations not smooth
- Close other CPU-intensive applications
- Check your GPU drivers are updated
- Disable other browser extensions

### Data not persisting
- Check browser's localStorage is enabled
- Try an incognito/private window
- Check browser console for errors

## 📊 Features Coming Soon

- 🔐 Firebase Authentication
- 📈 Detailed Analytics Dashboard
- 📅 Calendar Integration
- 🤖 AI Study Recommendations
- 👥 Study Group Collaboration
- 🎓 Exam Preparation Guides
- 📚 Resource Recommendations

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Support

For issues or feature requests:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include screenshots if applicable

## 🙏 Credits

Created as a modern student productivity tool combining:
- Beautiful UI/UX design
- Powerful React and Three.js integration
- Performance-optimized architecture
- Vercel deployment ready

---

### 💡 Pro Tips

1. **Set Realistic Dates** - Give yourself enough study time
2. **Update Progress** - Keep your study progress updated for motivation
3. **Use Priorities** - Focus on high-priority exams first
4. **Track Streak** - Try to maintain your study streak
5. **Review Often** - Check the app daily for motivation

### 🎯 Study Tips

- Study in focused 25-minute sessions (Pomodoro)
- Take regular breaks
- Review notes regularly
- Practice with past papers
- Stay motivated with the app's quotes

---

**Happy Studying! 🚀📚✨**

For more information or updates, visit the project repository.
