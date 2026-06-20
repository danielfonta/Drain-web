// Thin announcement bar — Holo runs a promo banner above the nav.
export function PromoBanner() {
  return (
    <div className="bg-fg text-bg">
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-2 px-6 py-2 text-center text-[13px]">
        <span className="hidden sm:inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
        <p>
          Early access is open —{" "}
          <a
            href="#early-access"
            className="font-medium underline underline-offset-4 decoration-bg/40 hover:decoration-bg"
          >
            join the waitlist
          </a>{" "}
          and get your first vault free.
        </p>
      </div>
    </div>
  );
}
