import { Logo } from "./Logo";
import { CtaButton } from "./CtaButton";
import { site } from "@/lib/site";

// Nav: logo + a single CTA. Nothing else.
export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/0 bg-bg/70 backdrop-blur-md supports-[backdrop-filter]:bg-bg/60">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="-m-2 p-2" aria-label={site.name}>
          <Logo />
        </a>
        <CtaButton>{site.cta}</CtaButton>
      </div>
    </header>
  );
}
