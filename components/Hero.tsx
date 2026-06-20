import { CtaButton } from "./CtaButton";
import { HeroVisual } from "./HeroVisual";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Your knowledge, readable by your AI
          </span>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
            A second brain your AI can actually read.
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
          <div className="mt-8 flex items-center justify-center">
            <CtaButton className="px-6 py-3 text-[15px]">{site.cta}</CtaButton>
          </div>
        </Reveal>
      </div>

      <Reveal delay={240} className="mt-16 sm:mt-20">
        <HeroVisual />
      </Reveal>
    </section>
  );
}
