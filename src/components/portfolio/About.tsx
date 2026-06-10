import { Reveal } from "./Reveal";

const stats = [
  { value: "2+", label: "Client Projects" },
  { value: "3", label: "Cities Served" },
  { value: "Full-stack", label: "to AI" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 xl:gap-16 items-start">
          {/* Photo */}
          <Reveal>
            <div className="flex flex-col items-center lg:items-start gap-6">
              <div className="relative mx-auto lg:mx-0 h-52 w-52 xl:h-60 xl:w-60">
                <div className="absolute inset-0 rounded-full bg-primary/25 blur-2xl" />
                <div className="relative h-full w-full rounded-full border-2 border-primary p-1 shadow-[0_0_40px_-8px_oklch(0.623_0.214_259.815/0.5)]">
                  <img
                    src="/image.png"
                    alt="Og'abek Boymirzayev"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Quick info card */}
              <div className="w-full max-w-xs rounded-xl border border-border bg-surface p-5 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Location</span>
                  <span className="text-foreground font-medium">Tashkent, UZ</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Education</span>
                  <span className="text-foreground font-medium">TSUE · 3rd year</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Remote</span>
                  <span className="text-foreground font-medium">Open ✓</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
                About
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                Building the web, one product at a time.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                I'm a 3rd-year student at TSUE with hands-on experience building
                real client projects. I work across the full stack — from database
                design to UI — and I integrate AI features using the OpenAI API.
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                My focus is on shipping clean, performant products that clients
                can rely on. I care deeply about code quality, user experience,
                and writing software that scales.
              </p>
            </Reveal>

            {/* Stats */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={150 + i * 100}>
                  <div className="rounded-xl border border-border bg-surface p-5 hover:border-primary/50 transition-colors">
                    <div className="text-2xl font-bold text-foreground">{s.value}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}