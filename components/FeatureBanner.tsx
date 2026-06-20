import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";

const tabs = ["Capture", "Refine", "Use"];

// Holo's "Entiende tu cuerpo. Decide mejor." + the big orange gradient card.
export function FeatureBanner() {
  return (
    <section id="how-it-works" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-8">
          <h2 className="text-balance font-display text-3xl tracking-tight text-fg sm:text-4xl">
            Capture once. Use everywhere.
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Unify everything you save, understand what it means and get more out
            of it every day.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {tabs.map((tab, i) => (
              <span
                key={tab}
                className={`rounded-full px-4 py-1.5 text-sm ${
                  i === 0
                    ? "bg-fg text-bg"
                    : "border border-line text-muted"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div
            className="relative overflow-hidden rounded-3xl p-6 sm:p-10"
            style={{
              background:
                "radial-gradient(120% 120% at 0% 0%, #ff7a3d 0%, #fb5a2d 35%, #c4341a 75%, #7d1f12 100%)",
            }}
          >
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="flex justify-center">
                <PhoneMarkdown />
              </div>
              <div>
                <p className="font-display text-2xl leading-tight text-white sm:text-3xl">
                  All your knowledge in one place.
                </p>
                <p className="mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-white/85">
                  The notes you save become structured markdown in your own
                  GitHub — tagged, organized and ready for Claude or any AI agent
                  to read. Isolated bookmarks are just clutter; combined over
                  time, they tell a story worth keeping.
                </p>
                <div className="mt-8">
                  <CtaButton
                    variant="solid"
                    href="#early-access"
                    className="bg-white text-[#7d1f12] hover:bg-white/90"
                  >
                    Share to Drain
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PhoneMarkdown() {
  return (
    <div className="w-[230px] overflow-hidden rounded-[28px] border border-white/20 bg-black/40 p-2 shadow-2xl backdrop-blur-sm">
      <div className="rounded-[22px] bg-black/50 p-4 font-mono text-[11px] leading-relaxed">
        <p className="text-white/50"># Designing for AI agents</p>
        <p className="mt-1.5 text-white/70">
          <span className="text-white/40">tags:</span> agents, ux, mcp
        </p>
        <p className="text-white/70">
          <span className="text-white/40">source:</span> interconnected.dev
        </p>
        <p className="mt-2 text-white/90">## Why I saved this</p>
        <p className="text-white/70">Reference for onboarding — tool permissions.</p>
        <p className="mt-2 text-white/90">## Key points</p>
        <p className="text-white/70">- Scoped, legible access</p>
        <p className="text-white/70">- Confirm before write actions</p>
      </div>
    </div>
  );
}
