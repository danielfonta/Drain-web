import { Section } from "./Section";
import { Reveal } from "./Reveal";

// Holo closes with a Blog/guides teaser. Drain's guides speak to the AI-native
// reader: ownership, context, and getting more out of your agents.
const posts = [
  {
    tag: "Guide",
    title: "Why your second brain should be markdown you own",
    minutes: "5 min read",
    tint: "bg-tint-sand",
  },
  {
    tag: "Workflow",
    title: "Wiring Claude Code into your personal knowledge base",
    minutes: "7 min read",
    tint: "bg-tint-sky",
  },
  {
    tag: "Privacy",
    title: "Encrypted vaults: keeping secrets in an AI-readable brain",
    minutes: "4 min read",
    tint: "bg-tint-rose",
  },
];

export function Blog() {
  return (
    <Section
      id="blog"
      align="center"
      eyebrow="From the blog"
      title="Get more out of a brain you own."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.title} delay={i * 80}>
            <a
              href="#"
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-elevated transition-colors hover:border-fg/20"
            >
              <div className={`aspect-[16/9] ${post.tint}`} />
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                  {post.tag}
                </span>
                <h3 className="mt-3 text-pretty text-lg font-semibold leading-snug text-fg">
                  {post.title}
                </h3>
                <span className="mt-auto pt-6 text-xs text-faint">
                  {post.minutes}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
