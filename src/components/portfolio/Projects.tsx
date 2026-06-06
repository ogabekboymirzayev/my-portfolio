import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "./Reveal";

const projects = [
  {
    name: "Musa Doors",
    url: "https://musadoors.uz",
    description:
      "Premium door e-commerce platform for a business with branches in Tashkent, Qo'qon and Bukhara.",
    stack: ["Next.js", "TailwindCSS", "TypeScript", "SEO"],
    accent: "from-blue-500/30 to-cyan-500/10",
    initials: "MD",
  },
  {
    name: "Shodlik MChJ",
    url: "https://uzbek-builder-vue.vercel.app",
    description:
      "Corporate website for a precast concrete factory. GOST certified product catalog.",
    stack: ["Vue.js", "TailwindCSS", "SEO"],
    accent: "from-emerald-500/30 to-blue-500/10",
    initials: "SH",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-300">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Selected Work
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article className="group overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_20px_60px_-20px_oklch(0.623_0.214_259.815/0.4)]">
                <div
                  className={`relative aspect-video overflow-hidden bg-linear-to-br ${p.accent}`}
                >
                  <div className="absolute inset-0 bg-dot-grid opacity-30" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="text-5xl font-bold text-foreground/90 tracking-tight">
                      {p.initials}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-secondary leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${p.name}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs text-secondary hover:text-foreground hover:border-primary/60 transition-colors"
                    >
                      <ExternalLink size={14} /> Live site
                    </a>
                    <a
                      href="https://github.com/ogabekboymirzayev"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} repository`}
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs text-secondary hover:text-foreground hover:border-primary/60 transition-colors"
                    >
                      <Github size={14} /> Code
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}