# Installation Guide

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for cloning)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## ✅ Check Prerequisites

Open a terminal and verify your versions:

```bash
node --version    # Should show v16.0.0 or higher
npm --version     # Should show 8.0.0 or higher
```

## 🚀 Quick Start (5 minutes)

### Step 1: Navigate to Project Directory

```bash
cd exam-countdown
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React and React DOM
- Vite (build tool)
- Tailwind CSS
- Framer Motion
- Three.js and React Three Fiber
- Zustand (state management)
- And more...

**Expected output:** ✅ "added XXX packages"

### Step 3: Start Development Server

```bash
npm run dev
```

**Expected output:**
```
  VITE v5.0.8  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Press h to show help
```

### Step 4: Open in Browser

The app should automatically open at `http://localhost:5173/`

If it doesn't, manually visit that URL in your browser.

## ✨ You're Ready!

The app is now running with:
- ✅ Full 3D animations
- ✅ Real-time countdowns
- ✅ Interactive UI
- ✅ Hot module reloading (changes appear instantly)
- ✅ Full local storage support

## 🛠️ Common Issues & Solutions

### Issue: "npm: command not found"

**Solution:** Node.js is not installed
1. Download and install from https://nodejs.org/
2. Restart your terminal
3. Run `npm --version` to verify

### Issue: "Cannot find module"

**Solution:** Dependencies not installed properly
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: "Port 5173 already in use"

**Solution:** Another app is using the port
```bash
# Option 1: Kill the process
lsof -i :5173
kill -9 <PID>

# Option 2: Use different port
npm run dev -- --port 3000
```

### Issue: "Module not found: Three"

**Solution:** Three.js not installed
```bash
npm install three @react-three/fiber @react-three/drei
npm run dev
```

### Issue: Blank screen or errors in console

**Solution:** Clear cache and reinstall
```bash
npm cache clean --force
rm -rf node_modules dist
npm install
npm run dev
```

## 📦 Project Structure

After installation, your folder should look like:

```
exam-countdown/
├── node_modules/           # Dependencies (auto-created)
├── dist/                   # Production build (created after npm run build)
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── context/
│   ├── utils/
│   ├── styles/
│   ├── animations/
│   ├── three/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎮 First Time Using the App

1. **View Dashboard** - See your current state with sample exams
2. **Add an Exam** - Click "+ Add Exam" button
3. **Fill Details:**
   - Subject: "Mathematics" or any subject
   - Date: Pick a future date
   - Priority: Select High/Medium/Low
   - Color: Choose a color theme
   - Status: Select preparation status
4. **Watch Countdown** - Real-time countdown updates every second
5. **Manage Exams** - Edit progress, mark complete, or delete

## 🚀 Available Commands

```bash
# Start development server (default port 5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Clear npm cache (if issues)
npm cache clean --force
```

## 📱 Testing on Different Devices

### Desktop
Open `http://localhost:5173/` on desktop browser

### Mobile (Same Network)
1. Find your computer's IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. On mobile, visit: `http://YOUR_IP:5173`

### Tablet
Same as mobile - use the IP address method

## 💾 Data Persistence

- ✅ Exams auto-save to browser's localStorage
- ✅ Data persists across browser restarts
- ✅ Each browser has separate storage
- ⚠️ Clearing browser cache will delete data

## 🔧 Advanced Configuration

### Change Default Port

Edit `vite.config.js`:
```javascript
server: {
  port: 3000,  // Change to your desired port
  open: true,
}
```

### Customize Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  neon: {
    blue: '#00d4ff',  // Change colors here
    // ... more colors
  }
}
```

### Add Environment Variables

Create `.env.local`:
```env
VITE_APP_NAME=Exam Countdown
VITE_APP_VERSION=1.0.0
```

Access in code: `import.meta.env.VITE_APP_NAME`

## 🚀 Deployment to Vercel

### Option 1: One-Click Deploy (Recommended)

1. Push project to GitHub
2. Visit https://vercel.com
3. Click "New Project"
4. Select your GitHub repo
5. Click "Deploy"

### Option 2: Manual Deploy

```bash
npm install -g vercel
vercel
```

Follow the prompts and your app will be live!

### Option 3: Production Build Locally

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to preview production build

## 🎯 Troubleshooting Checklist

- [ ] Node.js installed (v16+)
- [ ] npm installed
- [ ] `npm install` completed without errors
- [ ] No other app using port 5173
- [ ] Browser supports WebGL (for 3D)
- [ ] JavaScript enabled in browser
- [ ] Not using very old browser

## 📚 Learn More

- **Vite:** https://vitejs.dev/
- **React:** https://react.dev/
- **Tailwind CSS:** https://tailwindcss.com/
- **Framer Motion:** https://www.framer.com/motion/
- **Three.js:** https://threejs.org/

## 🆘 Still Having Issues?

1. **Check Error Message** - Read console error carefully
2. **Google Error** - Copy error message and search
3. **Check Dependencies** - Run `npm ls` to verify installs
4. **Check Node Version** - Run `node --version`
5. **Reinstall** - Delete node_modules and `npm install` again

## ✅ Installation Complete!

Your Exam Countdown App is ready to use! 🎉

Start by running:
```bash
npm run dev
```

Then visit `http://localhost:5173/` and enjoy!

---

**Need Help?** Check the main README.md for more information.
