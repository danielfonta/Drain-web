import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

// Holo's hero: a short serif headline, a row of feature chips, then two big
// rounded cards side by side (a photo card + the app card).
const chips = [
  "Zero-friction capture",
  "110+ file types",
  "GitHub-native",
  "Clinician-grade structure",
  "Action-ready notes",
  "Drain AI",
];

export function Hero() {
  return (
    <section className="px-4 pt-10 pb-6 sm:px-6 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h1 className="text-balance text-center font-display text-5xl tracking-tight text-fg sm:text-7xl">
            Trust your second brain.
          </h1>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mx-auto mt-7 flex max-w-3xl flex-wrap items-center justify-center gap-2">
            {chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs text-muted"
              >
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <PhotoCard />
            <AppCard />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Left card — Holo's lifestyle photo with overlaid headline + round CTA.
function PhotoCard() {
  return (
    <div className="relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-3xl border border-line p-6 sm:min-h-[440px] sm:p-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 20% 10%, #2a2320 0%, #1a1614 40%, #0c0b0a 100%), linear-gradient(135deg, rgba(251,90,45,0.25), transparent 55%)",
        }}
      />
      <div className="flex items-end justify-between gap-4">
        <p className="max-w-xs font-display text-2xl leading-tight text-fg sm:text-3xl">
          Capture life as it happens.
        </p>
        <a
          href="#early-access"
          aria-label={site.cta}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-fg text-bg transition-transform hover:scale-105"
        >
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

// Right card — the app, dark, with a phone mock.
function AppCard() {
  return (
    <div className="relative flex min-h-[360px] flex-col overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:min-h-[440px] sm:p-8">
      <p className="max-w-xs font-display text-2xl leading-tight text-fg sm:text-3xl">
        The app that gives your knowledge a life.
      </p>
      <div className="mt-auto flex justify-center pt-8">
        <PhoneMock />
      </div>
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="w-[210px] overflow-hidden rounded-[28px] border border-line-strong bg-bg p-2 shadow-2xl">
      <div className="rounded-[22px] bg-elevated/70 p-3">
        <div className="mb-3 flex items-center justify-between px-1">
          <span className="text-[11px] text-faint">Safari</span>
          <span className="text-[11px] text-faint">9:41</span>
        </div>
        <div className="mb-2 rounded-xl border border-line bg-surface px-3 py-2.5">
          <p className="truncate text-[12px] font-medium text-fg">
            Designing for AI agents
          </p>
          <p className="truncate text-[11px] text-faint">interconnected.dev</p>
        </div>
        <div className="flex items-center gap-2.5 rounded-xl border border-accent/40 bg-accent-soft px-3 py-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/20 text-accent">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 7 L10 4 L15 7 M5 7 L5 13 L10 16 L15 13 L15 7"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="text-[12px] font-medium text-fg">Save to Drain</p>
            <p className="text-[11px] text-muted">Add to your brain</p>
          </div>
        </div>
        <div className="mt-2 flex justify-between px-1">
          {["Copy", "Notes", "Mail", "More"].map((label) => (
            <span key={label} className="text-[10px] text-faint">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
