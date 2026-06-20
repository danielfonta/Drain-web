// Holo's promo strip at the very bottom — a full-width blue bar.
export function PromoBanner() {
  return (
    <div className="bg-promo text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-6 py-2.5 text-center text-[13px]">
        <span className="hidden sm:inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
        <p>
          Early access is open —{" "}
          <a
            href="#early-access"
            className="font-medium underline underline-offset-4 decoration-white/40 hover:decoration-white"
          >
            join the waitlist
          </a>{" "}
          and get your first vault free.
        </p>
      </div>
    </div>
  );
}
