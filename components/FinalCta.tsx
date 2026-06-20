import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

// Holo's newsletter band: heading on the left, email capture on the right.
export function FinalCta() {
  return (
    <section
      id="early-access"
      className="border-t border-line px-6 py-14 sm:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <Reveal>
          <h2 className="text-balance font-display text-3xl tracking-tight text-fg sm:text-4xl">
            Stay in the loop.
          </h2>
          <p className="mt-2 text-pretty text-muted">
            Join the waitlist — don&apos;t miss early access or any of our
            updates.
          </p>
        </Reveal>

        <Reveal delay={80} className="w-full lg:max-w-md">
          <form
            className="flex flex-col gap-3 sm:flex-row"
            action="#"
            method="post"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-full border border-line-strong bg-surface px-5 py-3 text-sm text-fg placeholder:text-faint focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:w-auto"
            >
              {site.cta}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
