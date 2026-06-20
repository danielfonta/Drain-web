// Single source of truth for product-level copy.
// The product name is still being finalized — change it here to update the
// whole site (nav, hero, footer, metadata).
export const site = {
  name: "Drain",
  tagline: "A second brain your AI can actually read.",
  description:
    "Share anything from your phone. Drain turns it into clean, organized knowledge — stored as markdown in your own GitHub, ready for Claude and any AI agent to use.",
  cta: "Get early access",
  ctaSecondary: "See how it works",
  url: "https://drain.app",
  email: "hello@drain.app",
  github: "https://github.com",
} as const;

// Top navigation — wider, Holo-style.
export const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "What you can save", href: "#capture" },
  { label: "Why Drain", href: "#understanding" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
] as const;
