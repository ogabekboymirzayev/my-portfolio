import {
  Server, Lock, Radio, Database, Boxes, Sparkles, FileCode,
  Atom, Layers, Palette, Component, Layout, Zap, Workflow,
} from "lucide-react";
import { Reveal } from "./Reveal";

const backend = [
  { name: "REST API", Icon: Server },
  { name: "JWT", Icon: Lock },
  { name: "WebSocket", Icon: Radio },
  { name: "Prisma ORM", Icon: Boxes },
  { name: "PostgreSQL", Icon: Database },
  { name: "OpenAI API", Icon: Sparkles },
  { name: "TypeScript", Icon: FileCode },
];

const frontend = [
  { name: "React.js", Icon: Atom },
  { name: "Next.js", Icon: Layers },
  { name: "TypeScript", Icon: FileCode },
  { name: "TailwindCSS", Icon: Palette },
  { name: "Ant Design", Icon: Component },
  { name: "shadcn/UI", Icon: Layout },
  { name: "Redux Toolkit", Icon: Workflow },
  { name: "Zustand", Icon: Zap },
  { name: "React Query", Icon: Workflow },
];

function Group({
  title,
  items,
}: {
  title: string;
  items: { name: string; Icon: typeof Server }[];
}) {
  return (
    <div>
      <Reveal>
        <h3 className="text-sm uppercase tracking-[0.2em] text-secondary mb-5">
          {title}
        </h3>
      </Reveal>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {items.map(({ name, Icon }, i) => (
          <Reveal key={name} delay={i * 50}>
            <div className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-5 transition-all hover:border-primary/60 hover:-translate-y-0.5">
              <Icon
                size={24}
                className="text-secondary group-hover:text-primary transition-colors"
              />
              <span className="text-xs text-foreground text-center">{name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function Stack() {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="mx-auto max-w-300">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            Toolbox
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Technologies
          </h2>
        </Reveal>

        <div className="mt-12 space-y-12">
          <Group title="Backend" items={backend} />
          <Group title="Frontend" items={frontend} />
        </div>
      </div>
    </section>
  );
}