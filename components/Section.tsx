import { Reveal } from "./Reveal";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  align?: "left" | "center";
  children: React.ReactNode;
  className?: string;
};

// One idea per section, lots of air.
export function Section({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  children,
  className = "",
}: SectionProps) {
  const centered = align === "center";
  return (
    <section id={id} className={`px-6 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-5xl">
        {(eyebrow || title || intro) && (
          <Reveal
            className={`mb-12 sm:mb-16 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
          >
            {eyebrow && (
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-fg sm:text-4xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
                {intro}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
