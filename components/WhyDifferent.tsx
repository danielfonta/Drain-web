import { Section } from "./Section";
import { Reveal } from "./Reveal";

const blocks = [
  {
    title: "It’s yours.",
    body: "Plain markdown in your own GitHub repo. No walled garden, no lock-in. “Export” is meaningless when you already own the files.",
    icon: (
      <path
        d="M4 7l8-4 8 4v6l-8 4-8-4V7z M4 7l8 4 8-4 M12 11v6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Your AI can read it.",
    body: "Point Claude Code or any MCP-compatible agent at your brain and it just works. Not a closed app you query — a context layer for everything you do.",
    icon: (
      <path
        d="M12 3a4 4 0 00-4 4 3 3 0 00-1 5.8V14a3 3 0 003 3h0 M12 3a4 4 0 014 4 3 3 0 011 5.8V14a3 3 0 01-3 3h0 M12 3v14"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Private when it needs to be.",
    body: "Lock sensitive folders behind a password. The content is encrypted — invisible even to the tools consuming your brain.",
    icon: (
      <path
        d="M6 10V8a6 6 0 0112 0v2 M5 10h14v9H5v-9z M12 14v2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export function WhyDifferent() {
  return (
    <Section
      id="why"
      eyebrow="Why it’s different"
      title="Own it. Your AI reads it. Private."
    >
      <div className="grid gap-6 sm:grid-cols-3">
        {blocks.map((block, i) => (
          <Reveal key={block.title} delay={i * 80}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 sm:p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-elevated text-accent">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  {block.icon}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-medium text-fg">
                {block.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {block.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
