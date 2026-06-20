import { CtaButton } from "./CtaButton";
import { HeroVisual } from "./HeroVisual";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

// What Drain gives you — the Holo-style value-prop row under the hero CTAs.
const valueProps = [
  "Zero-friction capture",
  "Markdown in your GitHub",
  "Readable by any AI",
  "MCP-ready",
  "Encrypted vaults",
  "You own it",
];

export function Hero() {
  return (
    <section className="relative px-6 pt-16 pb-16 sm:pt-24 sm:pb-24">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-elevated px-3 py-1 text-xs text-muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Your knowledge, readable by your AI
          </span>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
            Trust your AI with a brain that&apos;s actually yours.
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Share anything from your phone. {site.name} turns it into clean,
            organized knowledge — stored as markdown in your own GitHub, ready
            for Claude and any AI agent to use.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaButton variant="accent" className="px-6 py-3 text-[15px]">
              {site.cta}
            </CtaButton>
            <CtaButton
              variant="ghost"
              href="#how-it-works"
              className="px-6 py-3 text-[15px]"
            >
              {site.ctaSecondary}
            </CtaButton>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2.5">
            {valueProps.map((prop) => (
              <li
                key={prop}
                className="inline-flex items-center gap-2 text-sm text-muted"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-accent"
                  aria-hidden="true"
                >
                  <path
                    d="M3.5 8.5l3 3 6-7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {prop}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={300} className="mt-16 sm:mt-20">
        <HeroVisual />
      </Reveal>
    </section>
  );
}
