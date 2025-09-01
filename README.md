# Matheus Reis — Portfolio (Actions Deploy)

Clean, professional portfolio with animations, AI assistant, light/dark mode, and **GitHub Actions** deploy.

## Run locally
```bash
npm install
npm run dev
```

## Build (local check)
```bash
npm run build
npm run preview
```

## Deploy with GitHub Actions
1. Push this project to a **public** repo named `matheus-portfolio`:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio with actions"
   git branch -M main
   git remote add origin https://github.com/Matheushrz/matheus-portfolio.git
   git push -u origin main
   ```
2. Go to **Settings → Pages** and select **Source: GitHub Actions**.
3. Done. Every push to `main` will build and publish automatically.

## Notes
- `vite.config.ts` is set to `base: '/matheus-portfolio/'`.
- Assets from `/public` use `import.meta.env.BASE_URL` in code.
- Resume file: `public/Matheus-Reis-CV.pdf`.
- If you prefer `gh-pages`, add it and run `npm run build && npm run predeploy && gh-pages -d dist`.
