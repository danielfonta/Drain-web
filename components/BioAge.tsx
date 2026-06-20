import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

// Holo's "How old is your body?" + biological-age dashboard.
// Drain's version: "How much does your brain know?" + a knowledge dashboard.
export function BioAge() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="How much does your brain know?"
          subtitle="Make it sharper. One save at a time."
          action={{ label: "See your knowledge map", href: "#early-access" }}
        />

        <Reveal delay={80}>
          <Dashboard />
        </Reveal>
      </div>
    </section>
  );
}

function Dashboard() {
  const bars = [40, 65, 30, 80, 55, 70, 45, 90, 60, 75, 35, 85, 50, 68, 42, 78];
  const colors = [
    "bg-cat-green",
    "bg-cat-lime",
    "bg-cat-orange",
    "bg-cat-blue",
    "bg-cat-purple",
    "bg-cat-red",
  ];
  const stats = [
    { v: "1,284", l: "notes saved" },
    { v: "75", l: "knowledge score" },
    { v: "13", l: "topics tracked" },
    { v: "112", l: "tags" },
  ];
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.l}
            className="rounded-2xl border border-line bg-elevated px-5 py-4"
          >
            <p className="font-display text-3xl text-fg">{stat.v}</p>
            <p className="mt-1 text-xs text-faint">{stat.l}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex h-40 items-end gap-1.5 sm:gap-2">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`flex-1 rounded-t-sm ${colors[i % colors.length]} opacity-80`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between text-xs text-faint">
        <span>Last 16 weeks</span>
        <span className="font-mono">Drain</span>
      </div>
    </div>
  );
}
