# Drain — landing page

Minimalist marketing site for **Drain**: a second brain your AI can actually
read, owned by you as markdown in your own GitHub.

Built with **Next.js (App Router) + Tailwind CSS v4**. A near-1:1 **dark
replica of [tryholo.com](https://tryholo.com)** — block for block — filled
with Drain's content. Dark base (`#0a0a0b`), off-white ink, a warm orange
accent (`#fb5a2d`), a navy feature panel and multicolor category icons.
Titles use the **Tiempos Headline** serif, matching the app.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static export-friendly)
```

## Structure

Blocks map 1:1 onto Holo's, top to bottom (`app/page.tsx`). Holo block →
Drain content:

| Holo block | Component | Drain content |
| --- | --- | --- |
| Nav | `components/Nav.tsx` | Logo + section links + light CTA pill. |
| Hero (2 cards) | `components/Hero.tsx` | Serif headline, chip row, photo card + app card with phone mock. |
| What matters most | `components/Priorities.tsx` | Six dark category pills with colored icons. |
| Authority quote | `components/ExpertQuote.tsx` | A power-user quote. |
| Orange feature card | `components/FeatureBanner.tsx` | "Capture once. Use everywhere." + markdown phone. |
| User testimonials | `components/Testimonials.tsx` | Three photo-backed quote cards. |
| Biological age | `components/BioAge.tsx` | Knowledge dashboard (stats + colored bar chart). |
| FAQ | `components/Faq.tsx` | Accordion (native `<details>`). |
| Blog | `components/Blog.tsx` | Three guide cards. |
| Labs map + privacy | `components/Labs.tsx` | Navy panel: dot field + 100% stat + encrypted vaults. |
| Newsletter | `components/FinalCta.tsx` | Email/waitlist capture band. |
| Icon row | `components/IconRow.tsx` | Multicolor category icons. |
| Footer | `components/Footer.tsx` | Five-column footer. |
| Giant wordmark | `components/BigWordmark.tsx` | Oversized "Drain". |
| Promo banner | `components/PromoBanner.tsx` | Blue bar at the very bottom. |

Category data (labels, colors, icons) is shared in `components/categories.tsx`;
repeating section heads use `components/SectionHeader.tsx`.

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
