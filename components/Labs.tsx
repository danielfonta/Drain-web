import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";

// Holo's "Top clinical labs, close to you" (map + 40 stat) and the privacy
// block, both living inside one big navy panel. Drain's version: works with
// the tools you already use + ownership/privacy.
export function Labs() {
  return (
    <section id="privacy" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-8">
          <h2 className="max-w-2xl text-balance font-display text-3xl tracking-tight text-fg sm:text-4xl">
            Plugs into the tools you already use.
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Fast, native access from any MCP agent — across your whole stack.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="overflow-hidden rounded-3xl border border-line bg-navy">
            {/* Top: network field + stat */}
            <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
              <DotField />
              <div>
                <p className="font-display text-6xl text-white sm:text-7xl">100%</p>
                <p className="mt-2 max-w-xs text-pretty text-white/70">
                  of your data stays in your own GitHub — readable by Claude
                  Code, Cursor and any MCP-compatible agent.
                </p>
                <div className="mt-8">
                  <CtaButton
                    variant="solid"
                    href="#early-access"
                    className="bg-white text-navy hover:bg-white/90"
                  >
                    Connect your GitHub
                  </CtaButton>
                </div>
              </div>
            </div>

            {/* Bottom: privacy */}
            <div className="grid gap-8 border-t border-white/10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="font-display text-2xl text-white sm:text-3xl">
                  Built to protect your privacy.
                </h3>
                <p className="mt-3 max-w-md text-pretty text-white/70">
                  Your knowledge belongs to you. Drain organizes it and protects
                  it — sensitive folders are encrypted at rest, invisible even to
                  the AI tools reading your brain.
                </p>
              </div>
              <EncryptedList />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// A soft field of dots standing in for Holo's dotted map.
function DotField() {
  return (
    <div
      className="h-48 w-full rounded-2xl sm:h-60"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.35) 1.3px, transparent 1.3px)",
        backgroundSize: "16px 16px",
        maskImage:
          "radial-gradient(120% 90% at 50% 50%, #000 40%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(120% 90% at 50% 50%, #000 40%, transparent 80%)",
      }}
    />
  );
}

function EncryptedList() {
  const rows = [
    { name: "personal/journal.md", cipher: "x9$Lm·░▒▓·8aQ" },
    { name: "finance/2026.md", cipher: "k!D5·▓░▒·Pz7" },
    { name: "health/notes.md", cipher: "?Pk_L5·░▓·9b" },
    { name: "private/keys.md", cipher: "%bT·▒░▓·yQ4" },
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5 font-mono text-[12px]">
      {rows.map((row) => (
        <div
          key={row.name}
          className="flex items-center justify-between gap-4 py-1.5"
        >
          <span className="flex items-center gap-2 text-white/80">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 10V8a6 6 0 0112 0v2M5 10h14v10H5V10z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {row.name}
          </span>
          <span className="text-white/35">{row.cipher}</span>
        </div>
      ))}
    </div>
  );
}
