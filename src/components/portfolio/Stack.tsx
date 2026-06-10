import { Reveal } from "./Reveal";

const backend = [
  { name: "REST API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg" },
  { name: "JWT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg" },
  { name: "WebSocket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" },
  { name: "Prisma ORM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "AI", icon: "https://www.svgrepo.com/show/373424/ai.svg" },
];

const frontend = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Ant Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg" },
  { name: "shadcn/UI", icon: "https://cdn.simpleicons.org/shadcnui/000000" },
  { name: "Redux Toolkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
  { name: "Zustand", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg" },
  { name: "React Query", icon: "https://cdn.simpleicons.org/tanstack" },
];

function Group({ title, items }: { title: string; items: { name: string; icon: string }[] }) {
  return (
    <div>
      <Reveal>
        <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-5">
          {title}
        </h3>
      </Reveal>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
        {items.map(({ name, icon }, i) => (
          <Reveal key={name} delay={i * 50}>
            <div className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-surface px-3 py-5 transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:bg-surface/70 cursor-default">
              <div className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-background/60 p-2 transition-colors group-hover:border-primary/60 group-hover:bg-background">
                <img
                  src={icon}
                  alt={`${name} icon`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <span className="text-[11px] text-muted-foreground group-hover:text-foreground text-center leading-tight transition-colors">
                {name}
              </span>
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
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            Toolbox
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Technologies
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Tools and frameworks I use to build modern, scalable products.
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          <Group title="Backend & Infrastructure" items={backend} />
          <Group title="Frontend & UI" items={frontend} />
        </div>
      </div>
    </section>
  );
}