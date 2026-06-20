import { Logo } from "./Logo";

const links = [
  { label: "Privacy", href: "#" },
  { label: "Contact", href: "mailto:hello@drain.app" },
  { label: "GitHub", href: "https://github.com" },
];

// Minimal footer.
export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <Logo />
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-faint transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
