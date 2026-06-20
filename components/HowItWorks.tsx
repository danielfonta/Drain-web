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
    <Section
      id="how-it-works"
      align="center"
      eyebrow="How it works"
      title="Share → Refine → Use"
      intro="Three steps from a passing thought to context your AI can act on."
    >
      <ol className="grid gap-4 sm:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal as="li" key={step.n} delay={i * 80}>
            <div className="flex h-full flex-col rounded-3xl border border-line bg-elevated p-6 sm:p-7">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft font-mono text-xs text-accent">
                {step.n}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-fg">
                {step.title}
              </h3>
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
