import { Section } from "./Section";
import { Reveal } from "./Reveal";

const points = [
  { k: "Your repo", v: "Files live in your own GitHub." },
  { k: "Your API key", v: "You bring the keys. We don’t hold them." },
  { k: "Your rules", v: "Encrypted vaults for sensitive folders." },
];

export function Ownership() {
  return (
    <Section id="ownership" eyebrow="Ownership & privacy" title="Your data is just files in your GitHub.">
      <div className="grid gap-10 sm:grid-cols-[1.1fr_1fr] sm:gap-16">
        <Reveal>
          <p className="text-pretty text-lg leading-relaxed text-muted">
            Your API key, your repo, your rules. Sensitive folders are
            encrypted at rest —{" "}
            <span className="text-fg">
              not even your AI tools can read them without you.
            </span>
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {points.map((p, i) => (
            <Reveal key={p.k} delay={i * 70}>
              <div className="flex items-baseline gap-4 bg-surface px-5 py-4">
                <span className="w-28 shrink-0 font-mono text-xs text-accent">
                  {p.k}
                </span>
                <span className="text-sm text-muted">{p.v}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
