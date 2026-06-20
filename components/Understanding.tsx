import { Section } from "./Section";
import { Reveal } from "./Reveal";

type Feature = {
  eyebrow: string;
  title: string;
  body: string;
  tint: string;
  visual: React.ReactNode;
};

// Holo's "Understanding Your Body" — three alternating feature rows, each with
// a soft tinted visual. Mapped to Drain's core promises.
const features: Feature[] = [
  {
    eyebrow: "Owned, not rented",
    title: "Your knowledge at a glance.",
    body: "Everything you save becomes plain markdown in your own GitHub repo — organized, versioned and yours. No walled garden, no lock-in. “Export” is meaningless when you already own the files.",
    tint: "bg-tint-sage",
    visual: <OwnedVisual />,
  },
  {
    eyebrow: "AI-native",
    title: "Your guide, always available.",
    body: "Point Claude Code or any MCP-compatible agent at your brain and it just works. Ask in plain language and get answers grounded in what you actually saved — not a closed app you have to query.",
    tint: "bg-tint-peach",
    visual: <GuideVisual />,
  },
  {
    eyebrow: "A context layer",
    title: "Connect all the dots.",
    body: "Drain isn't another place to check. It's the context layer underneath everything you do — so your tools, your agents and your future self all draw from the same source of truth.",
    tint: "bg-tint-sky",
    visual: <DotsVisual />,
  },
];

export function Understanding() {
  return (
    <Section
      id="understanding"
      align="center"
      eyebrow="Understanding your knowledge"
      title="A brain that works the way you think."
    >
      <div className="flex flex-col gap-6">
        {features.map((f, i) => (
          <Reveal key={f.title}>
            <div
              className={`grid items-center gap-8 rounded-3xl border border-line bg-elevated p-6 sm:p-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  {f.eyebrow}
                </p>
                <h3 className="mt-3 text-balance font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                  {f.title}
                </h3>
                <p className="mt-4 text-pretty text-base leading-relaxed text-muted">
                  {f.body}
                </p>
              </div>
              <div
                className={`flex min-h-[220px] items-center justify-center rounded-2xl ${f.tint} p-6`}
              >
                {f.visual}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function OwnedVisual() {
  const files = [
    "reading/designing-for-ai-agents.md",
    "research/context-windows.md",
    "ideas/a-brain-you-own.md",
    "work/onboarding-spec.md",
  ];
  return (
    <div className="w-full max-w-sm rounded-xl border border-line bg-elevated p-4 font-mono text-[12px] shadow-sm">
      <p className="text-faint">~/brain</p>
      <ul className="mt-2 space-y-1.5">
        {files.map((f) => (
          <li key={f} className="flex items-center gap-2 text-muted">
            <span className="text-accent">✓</span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function GuideVisual() {
  return (
    <div className="w-full max-w-sm space-y-2.5">
      <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-fg px-4 py-2.5 text-[13px] text-bg">
        What did I decide about tool permissions?
      </div>
      <div className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm border border-line bg-elevated px-4 py-2.5 text-[13px] text-fg shadow-sm">
        From <span className="text-accent">designing-for-ai-agents.md</span>:
        scoped, legible access — and confirm before any write action.
      </div>
    </div>
  );
}

function DotsVisual() {
  const nodes = ["Claude", "Cursor", "MCP agent", "You"];
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4">
      <div className="rounded-full border border-accent/40 bg-accent-soft px-4 py-2 text-sm font-medium text-accent">
        your brain
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {nodes.map((n) => (
          <span
            key={n}
            className="rounded-xl border border-line bg-elevated px-4 py-2 text-center text-[13px] text-muted shadow-sm"
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}
