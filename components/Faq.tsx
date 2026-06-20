import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    q: "How do I get started with Drain?",
    a: "Join the waitlist and we'll send an invite as access rolls out. You connect your own GitHub, drop in your AI API key, and start sharing from your phone — your brain builds itself from there.",
  },
  {
    q: "When should I start using Drain?",
    a: "The moment you save anything you'd want back later. The earlier you start, the richer the context your AI can draw on across your work.",
  },
  {
    q: "What more does Drain offer than my notes app or bookmarks?",
    a: "Your notes app is a black box you forget about. Drain stores plain markdown in a repo you own and makes it readable by any AI agent — so it feeds your work instead of just collecting dust.",
  },
  {
    q: "What does Drain include?",
    a: "Zero-friction capture from any app, AI refinement focused on your intent, markdown stored in your own GitHub, MCP access for Claude Code and any agent, and encrypted vaults for sensitive folders.",
  },
  {
    q: "Which AI tools can read my brain?",
    a: "Anything that speaks MCP — Claude Code, Cursor, and any MCP-compatible agent. Because it's markdown in a repo, even a plain script can read it without our permission.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Your questions, answered."
          subtitle="Everything you need to know before you start."
          action={{ label: "Browse all FAQs", href: "#" }}
        />

        <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 50}>
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
      </div>
    </section>
  );
}
