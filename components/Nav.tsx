import { Logo } from "./Logo";
import { CtaButton } from "./CtaButton";
import { site, navLinks } from "@/lib/site";

// Nav: logo + section links + a single CTA (Holo-style wide nav).
export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md supports-[backdrop-filter]:bg-bg/65">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <a href="#top" className="-m-2 shrink-0 p-2" aria-label={site.name}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <CtaButton variant="solid" className="shrink-0">
          {site.cta}
        </CtaButton>
      </div>
    </header>
  );
}
