import { Section } from "./Section";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "I pointed Claude Code at my Drain repo and it answered from notes I made six months ago. It finally feels like my own knowledge, not a feed.",
    name: "Maya R.",
    role: "Staff engineer",
    tint: "bg-tint-sage",
  },
  {
    quote:
      "Capture is so fast I actually do it now. Share, one line on why, done. The fact that it's just markdown in my GitHub sealed it.",
    name: "Daniel F.",
    role: "Indie founder",
    tint: "bg-tint-peach",
  },
  {
    quote:
      "Encrypted vaults mean I keep journals and client work in the same brain without worrying. Nothing else gave me ownership and AI access together.",
    name: "Priya S.",
    role: "Product designer",
    tint: "bg-tint-lilac",
  },
];

export function Testimonials() {
  return (
    <Section
      align="center"
      eyebrow="Loved by people who hate lock-in"
      title="Early users are already hooked."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <figure
              className={`flex h-full flex-col rounded-3xl border border-line ${t.tint} p-6 sm:p-7`}
            >
              <blockquote className="text-pretty text-[15px] leading-relaxed text-fg">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-fg/10 text-sm font-semibold text-fg">
                  {t.name.charAt(0)}
                </span>
                <span className="text-sm">
                  <span className="block font-medium text-fg">{t.name}</span>
                  <span className="block text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
