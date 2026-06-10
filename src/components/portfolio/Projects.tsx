import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const projects = [
  {
    name: "Musa Doors",
    url: "https://musadoors.uz",
    description:
      "Premium door e-commerce platform for a business with branches in Tashkent, Qo'qon and Bukhara.",
    stack: ["Next.js", "TailwindCSS", "TypeScript", "SEO"],
    accent: "from-blue-500/15 to-cyan-500/5",
    image: "musadoors.png",
    tag: "E-commerce",
  },
  {
    name: "Shodlik MChJ",
    url: "https://uzbek-builder-vue.vercel.app",
    description:
      "Corporate website for a precast concrete factory. GOST certified product catalog.",
    stack: ["Vue.js", "TailwindCSS", "SEO"],
    accent: "from-emerald-500/15 to-teal-500/5",
    image: "shodlik.png",
    tag: "Corporate",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
                Portfolio
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                Selected Work
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <a
              href="https://github.com/ogabekboymirzayev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              View all on GitHub
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_24px_64px_-20px_oklch(0.546_0.245_262.881/0.2)]">
                {/* Image */}
                <div className={`relative aspect-video overflow-hidden bg-linear-to-br ${p.accent}`}>
                  <img
                    src={p.image}
                    alt={`${p.name} website screenshot`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-dot-grid opacity-20" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
                  {/* Tag */}
                  <span className="absolute top-3 right-3 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-white">
                    {p.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>

                  {/* Stack chips */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex items-center gap-2">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${p.name}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
                    >
                      <ExternalLink size={13} /> Live site
                    </a>
                    <a
                      href="https://github.com/ogabekboymirzayev"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} repository`}
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-xs font-medium text-muted-foreground hover:bg-foreground/5 hover:text-foreground transition-colors"
                    >
                      <Github size={13} /> Code
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