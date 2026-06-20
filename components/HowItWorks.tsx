import { Section } from "./Section";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Share.",
    body: "From any app, hit share. Done in a second.",
  },
  {
    n: "02",
    title: "Refine.",
    body: "Tell it why you saved it. AI extracts the key points, focused on your intent. You confirm — nothing is filed without you.",
  },
  {
    n: "03",
    title: "Use.",
    body: "It lives as markdown in your own GitHub, ready for Claude Code or any agent to reference across your work.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" eyebrow="How it works" title="Share → Refine → Use">
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal as="li" key={step.n} delay={i * 80} className="bg-surface">
            <div className="flex h-full flex-col p-6 sm:p-7">
              <span className="font-mono text-xs text-faint">{step.n}</span>
              <h3 className="mt-4 text-lg font-medium text-fg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
