import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const testimonials = [
  {
    quote:
      "I didn't expect to actually reuse my notes this fast — I pointed Claude at my repo and it answered from something I saved months ago.",
    attribution: "Member on getting answers",
    bg: "linear-gradient(160deg, #2a2622 0%, #14110f 100%)",
  },
  {
    quote:
      "For the first time I could actually read my own knowledge back. Capture is one tap and the fact that it's just markdown in my GitHub sealed it.",
    attribution: "Member on understanding their notes",
    bg: "linear-gradient(160deg, #22271f 0%, #0f110d 100%)",
  },
  {
    quote:
      "Booking it into my workflow was easy, and encrypted vaults let me keep journals and client work in the same brain without worrying.",
    attribution: "Member on ownership and privacy",
    bg: "linear-gradient(160deg, #1f242a 0%, #0d0f11 100%)",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="What our users value most."
          subtitle="Speed, ownership and answers grounded in your own notes."
          action={{ label: "Join them", href: "#early-access" }}
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.attribution} delay={i * 80}>
              <figure
                className="flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl border border-line p-6 sm:p-7"
                style={{ background: t.bg }}
              >
                <blockquote className="text-pretty text-[15px] leading-relaxed text-fg">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-faint">
                  {t.attribution}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
