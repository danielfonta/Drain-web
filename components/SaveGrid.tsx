import { Section } from "./Section";
import { Reveal } from "./Reveal";

// Holo shows a wall of biomarkers it measures. Drain shows the wall of things
// it can swallow — anything you can share becomes clean, usable knowledge.
const items = [
  "Articles",
  "PDFs",
  "Tweets & threads",
  "YouTube videos",
  "Voice notes",
  "Highlights",
  "Code snippets",
  "Links",
  "Screenshots",
  "Recipes",
  "Newsletters",
  "Podcasts",
  "Docs",
  "Photos",
  "Quotes",
  "Random ideas",
];

export function SaveGrid() {
  return (
    <Section
      id="capture"
      align="center"
      eyebrow="What you can save"
      title="If you can share it, Drain can keep it."
      intro="Sixteen kinds of things — and counting. Each one lands as structured markdown, tagged and ready for your AI."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item} delay={(i % 4) * 60}>
            <div className="flex items-center gap-2.5 rounded-2xl border border-line bg-elevated px-4 py-3.5">
              <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="text-sm text-fg">{item}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
