import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const posts = [
  {
    title: "What should you actually save?",
    excerpt: "A simple rule for what's worth keeping in a second brain.",
    bg: "linear-gradient(160deg, #2a2622 0%, #14110f 100%)",
  },
  {
    title: "Why your knowledge workflow is stalling",
    excerpt: "Capture is easy. Recall is the hard part — here's the fix.",
    bg: "linear-gradient(160deg, #22271f 0%, #0f110d 100%)",
  },
  {
    title: "How to read your brain back: the practical guide",
    excerpt: "Wiring Claude Code into your own markdown knowledge base.",
    bg: "linear-gradient(160deg, #1f242a 0%, #0d0f11 100%)",
  },
];

export function Blog() {
  return (
    <section id="blog" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Understand your tools and habits better."
          subtitle="Clear guidance to help you get the most out of a brain you own."
          action={{ label: "Explore our guides", href: "#" }}
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 80}>
              <a
                href="#"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-line-strong"
              >
                <div
                  className="relative aspect-[16/10]"
                  style={{ background: post.bg }}
                >
                  <h3 className="absolute inset-x-0 bottom-0 p-5 font-display text-xl leading-snug text-fg">
                    {post.title}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto pt-5 text-sm font-medium text-accent">
                    Read more →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
