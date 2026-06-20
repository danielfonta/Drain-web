import { Reveal } from "./Reveal";

// Holo's authority quote (a doctor). Drain's version: a power user.
export function ExpertQuote() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="font-display text-2xl leading-snug tracking-tight text-fg sm:text-3xl">
            Drain gives you real control over your knowledge.
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted">
            For the first time it&apos;s easier than ever to keep what you learn
            and actually put it to work — your own notes, finally readable by the
            tools you already use.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-elevated text-sm font-semibold text-fg">
              M
            </span>
            <span className="text-sm">
              <span className="block font-medium text-fg">Maya R.</span>
              <span className="block text-faint">Staff Engineer</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
