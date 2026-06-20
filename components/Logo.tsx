import { site } from "@/lib/site";

/**
 * Wordmark with a small monochrome glyph. The mark is a stylized node-cluster
 * — a brain rendered as connected points, nodding to the "context layer" idea.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="text-accent"
      >
        <path
          d="M5 7 L10 4 L15 7 M5 7 L5 13 L10 16 L15 13 L15 7 M5 7 L10 10 L15 7 M10 10 L10 16"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="4" r="1.6" fill="currentColor" />
        <circle cx="5" cy="7" r="1.4" fill="currentColor" />
        <circle cx="15" cy="7" r="1.4" fill="currentColor" />
        <circle cx="10" cy="10" r="1.4" fill="currentColor" />
      </svg>
      <span className="text-[15px] font-semibold tracking-tight text-fg">
        {site.name}
      </span>
    </span>
  );
}
