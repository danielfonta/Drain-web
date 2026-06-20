// Shared category data — used by the "what matters most" pills and the
// multicolor icon row near the footer (Holo's category set).
export type Category = {
  label: string;
  desc: string;
  color: string; // tailwind text-* class
  icon: React.ReactNode;
};

const s = {
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

export const categories: Category[] = [
  {
    label: "Research",
    desc: "Papers, threads and docs",
    color: "text-cat-green",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path d="M9 3v6l-4 9a2 2 0 002 3h10a2 2 0 002-3l-4-9V3M8 3h8M8 14h8" {...s} />
      </svg>
    ),
  },
  {
    label: "Reading list",
    desc: "Articles worth coming back to",
    color: "text-cat-lime",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path d="M6 4h12v16l-6-3-6 3V4z" {...s} />
      </svg>
    ),
  },
  {
    label: "Ideas & notes",
    desc: "Thoughts captured instantly",
    color: "text-cat-orange",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.7.7 1 1.3 1 2.5h6c0-1.2.3-1.8 1-2.5A6 6 0 0012 3z" {...s} />
      </svg>
    ),
  },
  {
    label: "Work & projects",
    desc: "Specs, decisions, references",
    color: "text-cat-blue",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path d="M4 7h16v12H4V7zM9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M4 12h16" {...s} />
      </svg>
    ),
  },
  {
    label: "Recipes & life",
    desc: "The everyday stuff",
    color: "text-cat-purple",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path d="M12 20s-7-4.5-7-9.5A3.5 3.5 0 0112 7a3.5 3.5 0 017 3.5C19 15.5 12 20 12 20z" {...s} />
      </svg>
    ),
  },
  {
    label: "Personal",
    desc: "Private, encrypted vaults",
    color: "text-cat-red",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path d="M6 10V8a6 6 0 0112 0v2M5 10h14v10H5V10zM12 14v2" {...s} />
      </svg>
    ),
  },
];
