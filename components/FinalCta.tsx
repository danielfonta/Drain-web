import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      id="early-access"
      className="relative overflow-hidden border-t border-line px-6 py-28 sm:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 30%, rgba(139,123,255,0.16), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
            Your brain, finally usable.
          </h2>
        </Reveal>
        <Reveal delay={80}>
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
              className="w-full rounded-full border border-line-strong bg-surface px-5 py-3 text-sm text-fg placeholder:text-faint focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg shadow-[0_1px_0_rgba(255,255,255,0.4)_inset] transition-colors duration-200 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:w-auto"
            >
              {site.cta}
            </button>
          </form>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 text-xs text-faint">
            Early access is rolling out gradually. No spam, just an invite.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
