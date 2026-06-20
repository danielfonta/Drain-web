import { Section } from "./Section";
import { Reveal } from "./Reveal";

// Holo organizes value into soft, tinted "focus" cards. For Drain these are the
// kinds of knowledge people pour in — each gets its own pastel tint.
const categories = [
  {
    title: "Research",
    body: "Papers, threads and docs, distilled into notes your agents can cite.",
    tint: "bg-tint-sage",
  },
  {
    title: "Reading list",
    body: "Articles you actually want to come back to — with why you saved them.",
    tint: "bg-tint-peach",
  },
  {
    title: "Ideas & notes",
    body: "Half-formed thoughts captured the second they happen.",
    tint: "bg-tint-sky",
  },
  {
    title: "Work & projects",
    body: "Specs, decisions and references, ready for Claude Code to pull in.",
    tint: "bg-tint-sand",
  },
  {
    title: "Recipes & life",
    body: "The everyday stuff — kept just as searchable as everything else.",
    tint: "bg-tint-lilac",
  },
  {
    title: "Personal",
    body: "Private journals and sensitive notes, locked in encrypted vaults.",
    tint: "bg-tint-rose",
  },
];

export function Categories() {
  return (
    <Section
      id="categories"
      align="center"
      eyebrow="One brain, every corner of your life"
      title="Whatever you pour in, your AI can use."
      intro="Drain doesn't care what kind of thing it is. It captures, cleans and files it — so the right context is always one question away."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Reveal key={cat.title} delay={(i % 3) * 80}>
            <div
              className={`flex h-full flex-col rounded-3xl border border-line ${cat.tint} p-6 sm:p-7`}
            >
              <h3 className="text-lg font-semibold text-fg">{cat.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {cat.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
