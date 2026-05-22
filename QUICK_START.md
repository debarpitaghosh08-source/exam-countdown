# 🚀 Quick Start Guide

## ⚡ 30-Second Setup

```bash
cd exam-countdown
npm install
npm run dev
```

Open http://localhost:5173 in your browser and you're done! 🎉

## 📋 Prerequisites

- **Node.js v16+** - Download from https://nodejs.org/
- **Modern Web Browser** - Chrome, Firefox, Safari, or Edge
- **5GB Free Disk Space** - For node_modules

## 🎯 First Steps

### 1. Check Node Installation
```bash
node --version  # Should show v16.0.0 or higher
npm --version   # Should show 8.0.0 or higher
```

### 2. Navigate to Project
```bash
cd "exam-countdown"
```

### 3. Install Dependencies
```bash
npm install
```

Expected output: ✅ `added XXX packages`

### 4. Start Development Server
```bash
npm run dev
```

Expected output:
```
  VITE v5.1.3 ready in 500ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### 5. Open in Browser
- **Desktop**: Visit http://localhost:5173/
- **Mobile**: Use your computer's IP address (e.g., http://192.168.1.x:5173/)

## ✨ You're Ready!

The app now has:
- ✅ Real-time exam countdown
- ✅ 3D animated background
- ✅ Interactive UI with Framer Motion
- ✅ Full local storage support
- ✅ Hot reload (auto-refresh on code changes)

## 📝 First Time Users

1. **Add an Exam** - Click the "+ Add Exam" button
2. **Fill Details:**
   - Subject: "Mathematics"
   - Date: Pick a future date
   - Priority: Select High/Medium/Low
   - Color: Choose a color
   - Status: Select preparation status
3. **See Countdown** - Real-time countdown updates every second
4. **Track Progress** - Update study percentage
5. **View Stats** - See your study streak and total hours

## 🛠️ Available Commands

```bash
# Development (with hot reload)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Clear npm cache
npm cache clean --force
```

## 📱 Test on Mobile

Find your computer's IP:
- **Windows**: Open Command Prompt, type `ipconfig`
- **Mac/Linux**: Open Terminal, type `ifconfig`

Look for IPv4 address (e.g., `192.168.1.100`)

On mobile, visit: `http://YOUR_IP:5173`

## ⚠️ Windows ARM64 Users

If you get a Rollup error, use:
```bash
npm install --force
npm run dev
```

See `WINDOWS_ARM64_FIX.md` for more solutions.

## 🐛 Common Issues

### "npm: command not found"
→ Install Node.js from https://nodejs.org/

### "Port 5173 in use"
→ Change port: `npm run dev -- --port 3000`

### "Cannot find module"
→ Delete and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Blank screen"
→ Check browser console (F12) for errors, then clear cache (Ctrl+Shift+Delete)

## 🚀 Deploy to Vercel (Free!)

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. Visit https://vercel.com/new
3. Select your GitHub repository
4. Click "Deploy"

**Done!** Your app is live! 🎉

## 📚 Learn More

- **Installation Help**: Read `INSTALLATION.md`
- **All Features**: Check `FEATURES.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Windows ARM64 Fix**: See `WINDOWS_ARM64_FIX.md`
- **Main README**: Read `README.md`

## 💡 Pro Tips

1. **Keep Exams Sorted** - Add exams furthest away first
2. **Update Progress** - Keep study % updated for motivation
3. **Watch Animations** - Hover over cards for cool effects
4. **Use Quotes** - Click refresh on motivation widget
5. **Track Streak** - Try not to break your study streak

## ❓ Need Help?

1. Check the relevant .md file
2. Review error message carefully
3. Try the troubleshooting steps
4. Clear browser cache and refresh
5. Reinstall node_modules

## 🎉 Ready to Go!

Your Exam Countdown App is ready to help you ace your exams!

Happy studying! 📚✨

---

**For detailed information, see the other documentation files in this project.**
