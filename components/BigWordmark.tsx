import { site } from "@/lib/site";

// Holo's giant wordmark spanning the page near the very bottom.
export function BigWordmark() {
  return (
    <div className="overflow-hidden px-6 pb-4">
      <p
        aria-hidden="true"
        className="select-none text-center font-display font-bold leading-none tracking-tight text-fg/90"
        style={{ fontSize: "clamp(5rem, 28vw, 22rem)" }}
      >
        {site.name}
      </p>
    </div>
  );
}
