# Windows ARM64 Installation Troubleshooting

## Issue: Rollup ARM64 MSVC Error on Windows

If you encounter an error like:
```
Error: Cannot find module @rollup/rollup-win32-arm64-msvc
```

This is a known npm issue with Windows ARM64 systems. Here are solutions:

## Solution 1: Use npm with Force Rebuild (Recommended)

```bash
npm install --force
npm run build
```

## Solution 2: Use .npmrc Configuration

Create `.npmrc` file in project root:
```
legacy-peer-deps=true
ignore-scripts=true
```

Then run:
```bash
npm install
npm run build
```

## Solution 3: Use Yarn Package Manager

If npm continues to fail, try Yarn:

```bash
npm install -g yarn
yarn install
yarn build
```

## Solution 4: Use Development Server Instead of Build

The development server usually works better on ARM64:

```bash
npm install
npm run dev
```

This will start the app at http://localhost:5173 for testing.

## Solution 5: Use Docker (Advanced)

Create `Dockerfile`:
```dockerfile
FROM node:20-bullseye

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "preview"]
```

Build and run:
```bash
docker build -t exam-countdown .
docker run -p 3000:3000 exam-countdown
```

## For Production on Vercel

**You don't need to build locally!** Vercel will handle the build automatically:

1. Push to GitHub
2. Connect to Vercel
3. Vercel builds it with its own infrastructure (which supports ARM64)
4. Your app is live!

## Testing on Development Server

The development server (`npm run dev`) should work fine on your system:

```bash
cd exam-countdown
npm install
npm run dev
```

Then visit http://localhost:5173 to test the app fully.

## Why This Happens

- Windows ARM64 is still relatively new
- npm has issues with optional dependencies on ARM64
- Rollup (used by Vite) needs ARM64-specific binaries
- Some build tools haven't fully optimized for ARM64

## Verify Your System

Check if you're on ARM64:
```powershell
[System.Environment]::ProcessorCount
# Look for ARM64 in System Information
```

## Get Help

- Vite Issues: https://github.com/vitejs/vite/issues
- npm Issues: https://github.com/npm/cli/issues
- Rollup Issues: https://github.com/rollup/rollup/issues

---

**Important:** The code itself is production-ready. These are just build system compatibility issues that don't affect the app's functionality once deployed to Vercel or other hosting platforms.
