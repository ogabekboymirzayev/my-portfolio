import { Reveal } from "./Reveal";

const stats = [
  { value: "2+", label: "Client Projects" },
  { value: "3", label: "Cities Served" },
  { value: "Full-stack", label: "+ AI" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-300 grid lg:grid-cols-[260px_1fr] gap-12 items-start">
        <Reveal>
          <div className="relative mx-auto lg:mx-0 h-50 w-50">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl" />
            <div className="relative h-full w-full rounded-full border-2 border-primary p-1 shadow-[0_0_30px_-5px_oklch(0.623_0.214_259.815/0.6)]">
              <div className="grid h-full w-full place-items-center rounded-full bg-linear-to-br from-surface to-background text-5xl font-bold text-foreground">
                OB
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
              About
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Building the web, one product at a time.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-5 text-secondary leading-relaxed max-w-2xl">
              I'm a 3rd-year student at TSUE with hands-on experience building
              real client projects. I work across the full stack — from database
              design to UI — and I integrate AI features using OpenAI API.
            </p>
          </Reveal>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={150 + i * 100}>
                <div className="rounded-xl border border-border bg-surface p-5 hover:border-primary/50 transition-colors">
                  <div className="text-2xl font-bold text-foreground">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-secondary">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}