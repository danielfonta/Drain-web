import { Reveal } from "./Reveal";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

// One idea per section, lots of air.
export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`border-t border-line px-6 py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto max-w-5xl">
        {(eyebrow || title) && (
          <Reveal className="mb-12 sm:mb-16">
            {eyebrow && (
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 max-w-2xl text-balance text-2xl font-semibold tracking-tight text-fg sm:text-4xl">
                {title}
              </h2>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
