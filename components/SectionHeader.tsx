import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  action?: { label: string; href: string };
  className?: string;
};

// Holo's repeating section head: serif title + muted subtitle on the left,
// an optional outline pill on the right.
export function SectionHeader({
  title,
  subtitle,
  action,
  className = "",
}: SectionHeaderProps) {
  return (
    <Reveal
      className={`mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between ${className}`}
    >
      <div className="max-w-2xl">
        <h2 className="text-balance font-display text-3xl tracking-tight text-fg sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
      {action && (
        <CtaButton variant="ghost" href={action.href} className="shrink-0">
          {action.label}
        </CtaButton>
      )}
    </Reveal>
  );
}
