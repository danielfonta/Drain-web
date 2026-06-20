import { Reveal } from "./Reveal";
import { categories } from "./categories";

// Holo's row of colorful category icons above the footer.
export function IconRow() {
  return (
    <section className="px-6 py-12">
      <Reveal>
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {categories.map((cat) => (
            <span
              key={cat.label}
              className={`[&_svg]:h-8 [&_svg]:w-8 ${cat.color}`}
              title={cat.label}
            >
              {cat.icon}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
