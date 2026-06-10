import { ArrowRight, Download, MapPin, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

const floatingBadges = [
  { label: "React", top: "8%", left: "-6%", delay: "0s" },
  { label: "Next.js", top: "22%", right: "-8%", delay: "0.6s" },
  { label: "PostgreSQL", bottom: "20%", left: "-4%", delay: "1.2s" },
  { label: "OpenAI", bottom: "8%", right: "2%", delay: "1.8s" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center justify-center overflow-hidden px-6"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-dot-grid opacity-40 mask-[radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      {/* Soft glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 py-24 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {/* ── Left column ── */}
        <div className="flex flex-col">
          {/* Status badge */}
          <Reveal>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs text-foreground backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for work
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal delay={100}>
            <h1 className="mt-6 text-5xl font-bold tracking-tight leading-[1.05] sm:text-6xl lg:text-6xl xl:text-7xl">
              Og'abek <br />
              <span className="bg-linear-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
                Boymirzayev
              </span>
            </h1>
          </Reveal>

          {/* Sub-title */}
          <Reveal delay={200}>
            <p className="mt-5 text-xl font-medium text-muted-foreground sm:text-2xl">
              Fullstack Developer <span className="text-primary">&</span> AI Engineer
            </p>
          </Reveal>

          {/* Location */}
          <Reveal delay={260}>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin size={14} className="text-primary" />
              Tashkent, Uzbekistan · open to remote
            </p>
          </Reveal>

          {/* Description */}
          <Reveal delay={320}>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground text-base">
              I build full-stack web apps and integrate AI into real products.
              From database design to polished UI — I handle the entire stack.
            </p>
          </Reveal>

          {/* CTA buttons */}
          <Reveal delay={400}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:-translate-y-px shadow-md shadow-primary/25"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="/cv.pdf"
                download="Ogabek_Boymirzayev_CV.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground hover:bg-surface hover:border-primary/40 transition-all"
              >
                <Download size={16} /> Download CV
              </a>
            </div>
          </Reveal>

          {/* Mini stats */}
          <Reveal delay={480}>
            <div className="mt-10 flex items-center gap-6 border-t border-border pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">2+</div>
                <div className="text-xs text-muted-foreground mt-0.5">Projects</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">3</div>
                <div className="text-xs text-muted-foreground mt-0.5">Cities</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap size={14} className="text-primary" />
                Full-stack to AI
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Right column: Terminal ── */}
        <Reveal delay={200} className="hidden lg:block">
          <div className="relative">
            {/* Floating tech badges */}
            {floatingBadges.map((b) => (
              <span
                key={b.label}
                style={{
                  top: b.top,
                  left: b.left,
                  right: b.right,
                  bottom: b.bottom,
                  animationDelay: b.delay,
                }}
                className="absolute z-10 rounded-full border border-primary/30 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-3.5 py-1.5 text-xs font-medium text-foreground shadow-lg animate-[float_5s_ease-in-out_infinite]"
              >
                {b.label}
              </span>
            ))}

            {/* Glow behind terminal */}
            <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-2xl" />

            {/* Terminal window */}
            <div className="relative rounded-2xl border border-border bg-zinc-950 shadow-2xl overflow-hidden ring-1 ring-white/5">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5 bg-zinc-900/80">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-3 flex-1 text-center text-xs text-zinc-500 font-mono">
                  ~/ogabek — zsh
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-[13px] leading-relaxed space-y-1">
                <div>
                  <span className="text-emerald-400">➜ </span>
                  <span className="text-zinc-300">whoami</span>
                </div>
                <div className="text-zinc-100 pl-4">Og'abek Boymirzayev</div>

                <div className="pt-2">
                  <span className="text-emerald-400">➜ </span>
                  <span className="text-zinc-300">cat stack.json</span>
                </div>
                <pre className="text-zinc-100 pl-4 text-[12.5px]">{`{
  "frontend": ["React", "Next.js", "TS"],
  "backend":  ["Node", "Prisma", "Postgres"],
  "ai":       ["OpenAI", "Prompting"]
}`}</pre>

                <div className="pt-2">
                  <span className="text-emerald-400">➜ </span>
                  <span className="text-zinc-300">deploy production</span>
                </div>
                <div className="text-emerald-400 pl-4">✓ build succeeded</div>
                <div className="text-emerald-400 pl-4">✓ live in 8.4s</div>

                <div className="pt-2 flex items-center gap-1">
                  <span className="text-emerald-400">➜ </span>
                  <span className="text-zinc-300 animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}