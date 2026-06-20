import Link from "next/link";

type CtaButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "accent" | "ghost";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const variants = {
  // Dark ink pill — the primary action.
  solid: "bg-fg text-bg px-5 py-2.5 hover:bg-fg/90",
  // Warm accent pill.
  accent: "bg-accent text-white px-5 py-2.5 hover:bg-accent-ink",
  // Soft outline on the cream background.
  ghost:
    "border border-line-strong text-fg px-5 py-2.5 hover:bg-elevated hover:border-fg/25",
};

export function CtaButton({
  href = "#early-access",
  children,
  variant = "solid",
  className = "",
}: CtaButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
