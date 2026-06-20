/**
 * The hero visual *is* the differentiator: captured with care on your phone →
 * yours as markdown → used by AI. Built as a self-contained product mock
 * (placeholder for real screenshots): an iOS share sheet on the left, the
 * resulting markdown being read by an agent on the right.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* ambient accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 -z-10 opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(40% 50% at 30% 20%, rgba(194,96,60,0.16), transparent 70%), radial-gradient(40% 50% at 75% 60%, rgba(194,96,60,0.10), transparent 70%)",
        }}
      />

      <div className="grid items-center gap-4 rounded-3xl border border-line bg-elevated/70 p-4 shadow-[0_24px_60px_-30px_rgba(31,28,23,0.35)] backdrop-blur-sm sm:grid-cols-[minmax(0,0.9fr)_auto_minmax(0,1.25fr)] sm:gap-2">
        {/* Phone: share sheet */}
        <PhoneShareSheet />

        {/* Flow connector */}
        <div className="flex items-center justify-center py-2 sm:flex-col sm:py-0">
          <FlowArrow />
        </div>

        {/* Agent reading the markdown */}
        <AgentWindow />
      </div>
    </div>
  );
}

function PhoneShareSheet() {
  return (
    <div className="mx-auto w-full max-w-[280px]">
      <div className="overflow-hidden rounded-[26px] border border-line-strong bg-surface p-2 shadow-xl">
        <div className="rounded-[20px] bg-bg/80 p-3">
          <div className="mb-3 flex items-center justify-between px-1">
            <span className="text-[11px] text-faint">Safari</span>
            <span className="text-[11px] text-faint">9:41</span>
          </div>

          {/* shared item preview */}
          <div className="mb-2 rounded-xl border border-line bg-elevated px-3 py-2.5">
            <p className="truncate text-[12px] font-medium text-fg">
              Designing for AI agents
            </p>
            <p className="truncate text-[11px] text-faint">
              interconnected.dev/agents
            </p>
          </div>

          {/* the Drain action, highlighted */}
          <div className="flex items-center gap-2.5 rounded-xl border border-accent/40 bg-accent-soft px-3 py-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/15 text-accent">
              <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 7 L10 4 L15 7 M5 7 L5 13 L10 16 L15 13 L15 7"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-[12px] font-medium text-fg">Save to Drain</p>
              <p className="text-[11px] text-muted">Add to your brain</p>
            </div>
          </div>

          {/* generic share row */}
          <div className="mt-2 flex justify-between px-1">
            {["Copy", "Notes", "Mail", "More"].map((label) => (
              <span key={label} className="text-[10px] text-faint">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AgentWindow() {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-xl border border-line-strong bg-surface shadow-xl">
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-line bg-bg/60 px-3.5 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
          <span className="ml-2 font-mono text-[11px] text-faint">
            ~/brain/reading/designing-for-ai-agents.md
          </span>
        </div>

        <div className="grid gap-0 sm:grid-cols-2">
          {/* markdown source */}
          <div className="border-line p-3.5 font-mono text-[11px] leading-relaxed sm:border-r">
            <p className="text-faint"># Designing for AI agents</p>
            <p className="mt-1.5 text-muted">
              <span className="text-faint">tags:</span> agents, ux, mcp
            </p>
            <p className="text-muted">
              <span className="text-faint">source:</span> interconnected.dev
            </p>
            <p className="mt-2 text-fg/80">## Why I saved this</p>
            <p className="text-muted">
              Reference for the onboarding flow — the part on tool permissions.
            </p>
            <p className="mt-2 text-fg/80">## Key points</p>
            <p className="text-muted">- Agents need scoped, legible access</p>
            <p className="text-muted">- Confirm before write actions</p>
          </div>

          {/* agent terminal */}
          <div className="bg-bg/40 p-3.5 font-mono text-[11px] leading-relaxed">
            <p className="text-accent">
              <span className="text-faint">$</span> claude
            </p>
            <p className="mt-1.5 text-muted">
              <span className="text-faint">&gt;</span> what did I save about
              agent permissions?
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-faint">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              reading your brain…
            </p>
            <p className="mt-2 text-fg/90">
              From{" "}
              <span className="text-accent">designing-for-ai-agents.md</span>:
              agents should get scoped, legible access and confirm before any
              write action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center gap-1 text-accent/70 sm:flex-col">
      <span className="h-px w-5 bg-gradient-to-r from-transparent to-accent/50 sm:h-5 sm:w-px sm:bg-gradient-to-b" />
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="rotate-0 sm:rotate-90"
      >
        <path
          d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="h-px w-5 bg-gradient-to-l from-transparent to-accent/50 sm:h-5 sm:w-px sm:bg-gradient-to-t" />
    </div>
  );
}
