import { Reveal } from "./Reveal";

const points = [
  { k: "Your repo", v: "Files live in your own GitHub. Always." },
  { k: "Your API key", v: "You bring the keys. We never hold them." },
  { k: "Your vaults", v: "Encrypted at rest — invisible until you unlock." },
];

// Holo's "Your health data belongs to you" reassurance, Drain edition.
export function Privacy() {
  return (
    <section id="privacy" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="grid items-center gap-10 rounded-3xl border border-line bg-tint-sage p-8 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Ownership &amp; privacy
              </p>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-fg sm:text-4xl">
                Your knowledge belongs to you.
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted">
                Drain organizes it and protects it — but it never owns it. Your
                API key, your repo, your rules. Sensitive folders are encrypted
                at rest,{" "}
                <span className="text-fg">
                  not even your AI tools can read them without you.
                </span>
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {points.map((p, i) => (
                <Reveal key={p.k} delay={i * 70}>
                  <div className="flex items-baseline gap-4 bg-elevated px-5 py-4">
                    <span className="w-28 shrink-0 font-mono text-xs text-accent">
                      {p.k}
                    </span>
                    <span className="text-sm text-muted">{p.v}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
