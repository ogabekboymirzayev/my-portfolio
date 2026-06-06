import { ArrowRight, Download } from "lucide-react";
import { Reveal } from "./Reveal";

const floatingBadges = [
  { label: "React", top: "8%", left: "-4%", delay: "0s" },
  { label: "Next.js", top: "20%", right: "-6%", delay: "0.6s" },
  { label: "PostgreSQL", bottom: "18%", left: "-2%", delay: "1.2s" },
  { label: "OpenAI", bottom: "6%", right: "4%", delay: "1.8s" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center justify-center overflow-hidden px-0 py-0"
    >
      {/* dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-40 mask-[radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      {/* glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-125 w-175 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-12">
        {/* left */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for work
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-4xl font-bold tracking-tight leading-[1.05] sm:text-5xl lg:text-6xl">
              Og'abek <br />
              <span className="bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent">
                Boymirzayev
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
              Fullstack Developer & AI Engineer
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              I build full-stack web apps and integrate AI into real products.
              Based in Tashkent, open to remote.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:-translate-y-px"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="/cv.pdf"
                download="Ogabek_Boymirzayev_CV.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-5 py-3 text-sm font-medium text-foreground hover:bg-surface transition-colors"
              >
                <Download size={16} /> Download CV
              </a>
            </div>
          </Reveal>
        </div>

        {/* right: terminal */}
        <Reveal delay={200} className="hidden lg:block">
          <div className="relative">
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
                className="absolute rounded-full border border-primary/30 bg-white px-3 py-1 text-xs font-medium text-foreground shadow-md animate-[float_5s_ease-in-out_infinite]"
              >
                {b.label}
              </span>
            ))}

            <div className="rounded-xl border border-border bg-zinc-900 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 bg-black/40">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-zinc-400">~/ogabek — zsh</span>
              </div>
              <pre className="p-5 text-[13px] leading-relaxed font-mono text-zinc-400 overflow-x-auto">
                {`> whoami
`}<span className="text-zinc-100">Og'abek boymirzayev</span>{`
> cat stack.json
`}<span className="text-white">{`{
  "frontend": ["React", "Next.js", "TS"],
  "backend":  ["Node", "Prisma", "Postgres"],
  "ai":       ["OpenAI", "Prompting"]
}`}</span>{`
> deploy production
`}<span className="text-emerald-400">✓ build succeeded</span>{`
`}<span className="text-emerald-400">✓ live in 8.4s</span>{`
> _`}
              </pre>
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