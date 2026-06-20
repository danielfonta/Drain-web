import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";
import { site } from "@/lib/site";

// Holo's signature "discover your biological age" moment — one bold, full-bleed
// block. Drain's version: the payoff of owning a readable brain.
export function Spotlight() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-fg px-6 py-14 text-bg sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(60% 80% at 80% 20%, rgba(0,113,227,0.35), transparent 70%)",
              }}
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  The payoff
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Stop searching. Start recalling.
                </h2>
                <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-bg/70">
                  Most save-it apps are a black box you forget about. Drain feeds
                  your work — every answer grounded in what you actually saved,
                  in your own words.
                </p>
                <div className="mt-8">
                  <CtaButton variant="accent" className="px-6 py-3 text-[15px]">
                    {site.cta}
                  </CtaButton>
                </div>
              </div>

              <div className="space-y-3">
                <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-bg/15 px-4 py-2.5 text-[13px] text-bg backdrop-blur-sm">
                  Summarize everything I saved about onboarding this month.
                </div>
                <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-sm bg-bg px-4 py-3 text-[13px] leading-relaxed text-fg shadow-lg">
                  You saved 4 notes. The throughline:{" "}
                  <span className="text-accent">scoped permissions</span> and
                  confirming before write actions. Want the spec draft from
                  <span className="font-mono text-[12px]"> work/</span>?
                </div>
                <p className="pl-1 text-[12px] text-bg/50">
                  Grounded in 4 files · ~/brain
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
