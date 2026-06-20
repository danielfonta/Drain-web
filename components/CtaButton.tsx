import Link from "next/link";

type CtaButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const variants = {
  solid:
    "bg-fg text-bg px-5 py-2.5 hover:bg-white/90 shadow-[0_1px_0_rgba(255,255,255,0.4)_inset]",
  ghost:
    "border border-line-strong text-fg px-5 py-2.5 hover:bg-elevated hover:border-white/20",
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
