# Drain — landing page

Minimalist marketing site for **Drain**: a second brain your AI can actually
read, owned by you as markdown in your own GitHub.

Built with **Next.js (App Router) + Tailwind CSS v4**. Light by default —
an Apple-style palette of white and neutral grays (`#f5f5f7`), near-black ink
(`#1d1d1f`) and a single Apple-blue accent used sparingly, with alternating
white/gray section bands. Section **structure** is adapted from
[tryholo.com](https://tryholo.com); titles use the **Tiempos Headline** serif,
matching the app.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static export-friendly)
```

## Structure

Modular blocks mirroring Holo's section order, lots of air (`app/page.tsx`):

| Section | Component | Purpose |
| --- | --- | --- |
| Promo banner | `components/PromoBanner.tsx` | Thin announcement bar (early-access waitlist). |
| Nav | `components/Nav.tsx` | Logo + wide section links + a single CTA. |
| Hero | `components/Hero.tsx` + `HeroVisual.tsx` | Promise, dual CTA, value-prop checks + the signature visual (iOS capture → markdown → AI reads it). |
| Categories | `components/Categories.tsx` | Six pastel "use it for" cards (Holo's focus categories). |
| How it works | `components/HowItWorks.tsx` | Three steps: Share → Refine → Use. |
| Understanding | `components/Understanding.tsx` | Three alternating feature rows (own it · AI reads it · context layer). |
| What you can save | `components/SaveGrid.tsx` | Grid of capturable content types (Holo's biomarker wall). |
| Spotlight | `components/Spotlight.tsx` | Bold dark feature block — "stop searching, start recalling". |
| Testimonials | `components/Testimonials.tsx` | Three social-proof quotes. |
| FAQ | `components/Faq.tsx` | Four questions, native `<details>` accordion. |
| Blog | `components/Blog.tsx` | Three guide teasers. |
| Privacy | `components/Privacy.tsx` | "Your knowledge belongs to you" — repo, keys, vaults. |
| Final CTA | `components/FinalCta.tsx` | Closing line + waitlist email capture. |
| Footer | `components/Footer.tsx` | Five-column footer. |

## Customizing

- **Product name & top-level copy** live in `lib/site.ts` — the name (`Drain`)
  is set in one place so it can be swapped if it changes.
- **Design tokens** (warm surfaces, accent, pastel section tints, fonts) live
  in the `@theme` block of `app/globals.css`.
- **Nav & section links** live in `navLinks` in `lib/site.ts`.
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
