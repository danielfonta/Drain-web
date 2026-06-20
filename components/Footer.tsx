import { Logo } from "./Logo";
import { site } from "@/lib/site";

// Holo-style multi-column footer.
const columns = [
  {
    heading: "Product",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "What you can save", href: "#capture" },
      { label: "Why Drain", href: "#understanding" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Use it for",
    links: [
      { label: "Research", href: "#categories" },
      { label: "Reading list", href: "#categories" },
      { label: "Work & projects", href: "#categories" },
      { label: "Personal", href: "#categories" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "GitHub", href: site.github },
      { label: "Privacy", href: "#privacy" },
    ],
  },
  {
    heading: "Social",
    links: [
      { label: "X", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: site.github },
    ],
  },
  {
    heading: "Contact",
    links: [{ label: site.email, href: `mailto:${site.email}` }],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line px-6 pt-16 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-muted">
              A second brain your AI can actually read — owned by you as
              markdown in your own GitHub.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} className="lg:col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-faint">Made for people who own their data.</p>
        </div>
      </div>
    </footer>
  );
}
