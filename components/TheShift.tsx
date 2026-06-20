import { Reveal } from "./Reveal";

// The sharp line that kills the "bookmark graveyard".
export function TheShift() {
  return (
    <section className="border-t border-line px-6 py-24 sm:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-balance text-2xl font-medium leading-snug tracking-tight text-fg sm:text-4xl">
            Most save-it apps are a black box you forget about.
            <br className="hidden sm:block" />{" "}
            <span className="text-accent">This one feeds your work.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
