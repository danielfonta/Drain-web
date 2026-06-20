import { Logo } from "./Logo";
import { site } from "@/lib/site";

// Holo's five-column dark footer.
const columns = [
  {
    heading: "Product",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "What you can save", href: "#capture" },
      { label: "Pricing", href: "#" },
      { label: "FAQs", href: "#faq" },
    ],
  },
  {
    heading: "Why",
    links: [
      { label: "Research", href: "#categories" },
      { label: "Reading list", href: "#categories" },
      { label: "Ideas & notes", href: "#categories" },
      { label: "Work & projects", href: "#categories" },
      { label: "Personal", href: "#categories" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "For teams", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#privacy" },
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
    <footer className="border-t border-line px-6 pt-14 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-muted">
              A second brain your AI can actually read — owned by you as markdown
              in your own GitHub.
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

        <p className="mt-12 text-xs text-faint">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
