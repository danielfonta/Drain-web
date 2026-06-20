import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="early-access" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-elevated px-6 py-16 text-center sm:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 opacity-80"
              style={{
                background:
                  "radial-gradient(50% 60% at 50% 20%, rgba(194,96,60,0.12), transparent 70%)",
              }}
            />
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
              Your brain, finally usable.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-pretty text-muted">
              Join the waitlist for early access. Your knowledge, owned by you
              and readable by your AI.
            </p>

            <form
              className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 sm:flex-row"
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
                className="w-full rounded-full border border-line-strong bg-bg px-5 py-3 text-sm text-fg placeholder:text-faint focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-elevated sm:w-auto"
              >
                {site.cta}
              </button>
            </form>
            <p className="mt-4 text-xs text-faint">
              Early access is rolling out gradually. No spam, just an invite.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
