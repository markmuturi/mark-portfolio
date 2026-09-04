# mark-portfolio

Single-page portfolio. Vite + React + Tailwind + Motion, self-hosted fonts via Fontsource.

## Run it

```
npm install
npm run dev
```

Build for deploy:

```
npm run build
```

Output lands in `dist/`. Deploy that folder to Vercel, Netlify, or any static host.

## What's real vs placeholder

Everything content-related lives in `src/content.js`. Search that file for
`PLACEHOLDER` — there are five things to fix before this goes live:

1. `profile.email`, `profile.github`, `profile.linkedin`, `profile.cvUrl`
2. The SuaveCre8ive design tools list in `practice[1].stack`
3. The NAJ26 project description — add what you actually built and any
   outcome you can point to (traffic, client feedback, etc.)
4. The two empty project card slots in `work` — replace or delete them
5. Add a real screenshot/OG image if you want link previews to show one;
   none is wired up yet

## Design notes

- The DEV / DESIGN toggle in the nav isn't decorative — it switches the
  accent color (teal → amber) and the hero copy, because CompTech Solutions
  and SuaveCre8ive are genuinely two separate practices. Clicking either
  practice card in the "Two practices" section does the same thing.
- Palette, type, and layout tokens are in `tailwind.config.js` under
  `theme.extend` if you want to adjust them.
- Reduced-motion and visible focus states are handled in `src/index.css`.
