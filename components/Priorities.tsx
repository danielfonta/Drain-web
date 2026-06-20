import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { categories } from "./categories";

// Holo's "What's the most important for you?" — a 2×3 grid of dark category
// pills, each with a colored icon and a "+".
export function Priorities() {
  return (
    <section id="categories" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="What matters most to you?"
          subtitle="It all starts with capturing it — your context, kept and ready."
          action={{ label: "See what you can save", href: "#how-it-works" }}
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.label} delay={(i % 3) * 70}>
              <a
                href="#capture"
                className="group flex items-center gap-4 rounded-2xl border border-line bg-surface px-5 py-4 transition-colors hover:border-line-strong hover:bg-elevated"
              >
                <span className={`shrink-0 ${cat.color}`}>{cat.icon}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-medium text-fg">
                    {cat.label}
                  </span>
                  <span className="block truncate text-xs text-faint">
                    {cat.desc}
                  </span>
                </span>
                <span className="text-muted transition-transform group-hover:rotate-90">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 3v10M3 8h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
