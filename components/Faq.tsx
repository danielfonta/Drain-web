import { Section } from "./Section";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "How do I get started?",
    a: "Join the waitlist and we'll send an invite as access rolls out. You connect your own GitHub, drop in your AI API key, and start sharing from your phone — your brain builds itself from there.",
  },
  {
    q: "Where exactly is my data stored?",
    a: "As plain markdown files in a GitHub repository you own. Nothing lives in a Drain database you can't see. If you ever stop using Drain, your knowledge is already sitting in your repo.",
  },
  {
    q: "Which AI tools can read my brain?",
    a: "Anything that speaks MCP — Claude Code, Cursor, and any MCP-compatible agent. Because it's markdown in a repo, even a plain script or a future tool can read it without our permission.",
  },
  {
    q: "How is my private content protected?",
    a: "Sensitive folders can be locked as encrypted vaults. The content is encrypted at rest and invisible even to the AI tools consuming your brain — until you unlock it. Your API key stays yours; we never hold it.",
  },
];

export function Faq() {
  return (
    <Section
      id="faq"
      align="center"
      eyebrow="FAQ"
      title="Questions, answered."
      className="bg-surface"
    >
      <div className="mx-auto max-w-3xl divide-y divide-line overflow-hidden rounded-3xl border border-line bg-elevated">
        {faqs.map((faq, i) => (
          <Reveal key={faq.q} delay={i * 60}>
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-[15px] font-medium text-fg [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-transform duration-200 group-open:rotate-45">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 3v10M3 8h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                {faq.a}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
