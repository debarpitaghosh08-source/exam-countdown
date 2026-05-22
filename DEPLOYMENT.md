# Deployment Guide

## 🚀 Overview

This guide provides step-by-step instructions for deploying your Exam Countdown App to Vercel (recommended), and alternative hosting platforms.

## 🏆 Recommended: Vercel Deployment

Vercel is the official hosting platform for Vite projects and provides the best experience.

### Prerequisites

- GitHub, GitLab, or Bitbucket account
- Project pushed to a Git repository
- Vercel account (free at https://vercel.com)

### Step 1: Create Git Repository

```bash
# If not already a git repo
git init
git add .
git commit -m "Initial commit"
```

### Step 2: Push to GitHub (Recommended)

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/exam-countdown.git
git push -u origin main
```

### Step 3: Deploy to Vercel

#### Option A: Import Project (Easiest)

1. Visit https://vercel.com/new
2. Click "Import Project"
3. Paste your Git repository URL
4. Click "Continue"
5. Configure:
   - **Framework:** Vite (auto-detected)
   - **Build Command:** `npm run build` (auto-filled)
   - **Install Command:** `npm install` (auto-filled)
   - **Environment Variables:** Leave empty (optional for now)
6. Click "Deploy"

#### Option B: Vercel CLI (Command Line)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts to link your project
```

#### Option C: GitHub Integration

1. Visit https://vercel.com/new
2. Select GitHub repository
3. Configure settings
4. Click "Deploy"
5. **Auto-deploy:** Future pushes will auto-deploy!

### Step 4: Configure Domain

#### Vercel Subdomain (Free)
Already assigned: `exam-countdown-abc123.vercel.app`

#### Custom Domain (Optional)
1. In Vercel Dashboard, go to "Settings"
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Post-Deployment Checklist

✅ App is live at provided URL  
✅ All features working  
✅ Countdown updates correctly  
✅ 3D animations smooth  
✅ Responsive on mobile  
✅ Performance is good (Lighthouse 90+)

## 📊 Alternative Hosting Platforms

### 🔵 Netlify

1. Visit https://app.netlify.com/start
2. Connect GitHub repository
3. Set Build command: `npm run build`
4. Set Publish directory: `dist`
5. Click "Deploy site"

```bash
# Or use Netlify CLI
npm install -g netlify-cli
netlify init
```

### 🟢 GitHub Pages

1. Update `vite.config.js`:
```javascript
export default {
  base: '/exam-countdown/',  // your repo name
  // ... rest of config
}
```

2. Configure GitHub Actions (create `.github/workflows/deploy.yml`):
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

3. Push to main branch and GitHub automatically deploys!

### 🟡 AWS Amplify

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

### 🟣 Heroku (Alternative)

1. Create `Procfile`:
```
web: npm run preview
```

2. Deploy:
```bash
heroku create your-app-name
git push heroku main
```

## 🔧 Pre-Deployment Checklist

### Build Verification

```bash
# Test production build locally
npm run build
npm run preview
```

Visit http://localhost:4173 and verify:
- ✅ App loads correctly
- ✅ All features work
- ✅ No console errors
- ✅ 3D animations smooth
- ✅ Responsive on mobile

### Performance Optimization

Run Lighthouse audit:
1. Open your deployed site in Chrome
2. Right-click → "Inspect"
3. Go to "Lighthouse" tab
4. Click "Analyze"

**Target scores:**
- Performance: 85+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

### Environment Variables (if needed)

Create `.env.production`:
```env
VITE_API_URL=https://your-api.com
VITE_APP_ENV=production
```

Add to Vercel/Netlify dashboard under Settings → Environment Variables

## 📊 Monitoring & Analytics

### Vercel Analytics

1. Go to Vercel Dashboard
2. Select your project
3. Go to "Analytics" tab
4. View:
   - Page load times
   - Core Web Vitals
   - User locations
   - Browser usage

### Google Analytics (Optional)

```javascript
// Add to src/main.jsx
import ReactGA from 'react-ga4';

ReactGA.initialize('GA_MEASUREMENT_ID');
ReactGA.send({ hitType: 'pageview', page: '/' });
```

## 🔒 Security Best Practices

### 1. Environment Variables
- Never commit `.env.local`
- Use Vercel/Netlify dashboard for secrets
- Create `.env.example` with placeholder values

### 2. API Keys
- If using Firebase, secure keys with rules
- Use environment variables for sensitive data
- Rotate keys regularly

### 3. CORS Headers
If your app calls external APIs, configure CORS in `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        }
      ]
    }
  ]
}
```

## 🔄 Continuous Deployment (CD)

### Automatic Deployment with Vercel

Every push to main branch automatically:
1. Builds the project
2. Runs tests (if configured)
3. Deploys to production
4. Generates preview URLs for PRs

### Rollback to Previous Deployment

1. Go to Vercel Dashboard
2. Select your project
3. Go to "Deployments" tab
4. Click "..." on previous deployment
5. Click "Redeploy"

## 📱 Mobile Considerations

### Progressive Web App (PWA)

Create `public/manifest.json`:
```json
{
  "name": "Exam Countdown App",
  "short_name": "Exam Countdown",
  "description": "Your ultimate exam preparation companion",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#0f172a",
  "background_color": "#ffffff",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

Add to `index.html`:
```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#0f172a">
```

## 🆘 Troubleshooting Deployment

### Build Fails

```bash
# Check for errors locally
npm run build

# Clear cache and rebuild
npm cache clean --force
rm -rf dist node_modules
npm install
npm run build
```

### App is Blank

1. Check browser console for errors
2. Verify all environment variables are set
3. Check network tab for failed requests
4. Try browser cache clear (Ctrl+Shift+Delete)

### Performance Issues

1. Check Lighthouse report
2. Optimize images (use WebP)
3. Split large components
4. Remove unused packages
5. Enable compression in Vercel settings

### 404 Errors on Routes

This is a single-page app (SPA). Configure:

**Vercel:** Auto-configured ✅  
**Netlify:** Create `public/_redirects`:
```
/* /index.html 200
```

**GitHub Pages:** Use `HashRouter` in React Router

## 📞 Deployment Platforms Comparison

| Platform | Cost | Setup | Performance | Support |
|----------|------|-------|-------------|---------|
| **Vercel** | Free | <5min | Excellent | Excellent |
| **Netlify** | Free | <5min | Excellent | Great |
| **GitHub Pages** | Free | 10min | Good | Community |
| **AWS Amplify** | Free tier | 10min | Excellent | Excellent |
| **Heroku** | Paid | 5min | Good | Community |

## ✅ Final Checklist Before Going Live

- [ ] All exams load correctly
- [ ] Countdown updates in real-time
- [ ] 3D animations are smooth
- [ ] App is responsive on all devices
- [ ] No console errors
- [ ] No broken links
- [ ] Environment variables configured
- [ ] Domain configured (if custom)
- [ ] SSL certificate active (auto with Vercel)
- [ ] Analytics configured (optional)

## 🎉 You're Live!

Your Exam Countdown App is now live and accessible to the world! 🚀

Share your deployment URL with friends and students!

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Vite Docs: https://vitejs.dev/guide/static-deploy.html
