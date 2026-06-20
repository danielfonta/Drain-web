# Drain — landing page

Minimalist marketing site for **Drain**: a second brain your AI can actually
read, owned by you as markdown in your own GitHub.

Built with **Next.js (App Router) + Tailwind CSS v4**, dark by default,
near-monochrome with a single accent. Design direction: Linear as the anchor,
Vercel in the restraint.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static export-friendly)
```

## Structure

One idea per section, lots of air (`app/page.tsx`):

| Section | Component | Purpose |
| --- | --- | --- |
| Hero | `components/Hero.tsx` + `HeroVisual.tsx` | Promise + the signature dual visual (iOS capture → markdown → AI reads it). |
| How it works | `components/HowItWorks.tsx` | Three steps: Share → Refine → Use. |
| Why it’s different | `components/WhyDifferent.tsx` | Own it · Your AI reads it · Private. |
| The shift | `components/TheShift.tsx` | The sharp line vs. the "bookmark graveyard". |
| Ownership & privacy | `components/Ownership.tsx` | Your repo, your keys, encrypted vaults. |
| Final CTA | `components/FinalCta.tsx` | Closing line + waitlist email capture. |
| Footer | `components/Footer.tsx` | Minimal. |

## Customizing

- **Product name & top-level copy** live in `lib/site.ts` — the name (`Drain`)
  is set in one place so it can be swapped if it changes.
- **Design tokens** (colors, accent, fonts) live in the `@theme` block of
  `app/globals.css`.
- **The CTA** assumes a pre-launch **waitlist** (email capture in the final
  CTA). The form currently posts to `#` — wire it to a real endpoint (e.g. a
  waitlist provider or API route) before launch.

## Notes / open decisions

Carried over from the landing spec (`docs/landing-spec.md`):

- **CTA target** — assumes waitlist. Switch to App Store links if the app ships.
- **Language** — copy is in English (matches the app + AI-native audience).
  Localize later if targeting the Spanish market.
- **Hero visual** — currently a hand-built product mock standing in for real
  screenshots. Replace with real product captures when available.
