import { Brain, MessageSquareCode, Cpu, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    Icon: Brain,
    title: "OpenAI API Integration",
    description:
      "Building AI-powered features into production web apps — chatbots, summarizers, smart search, and more.",
    gradient: "from-violet-500/10 to-blue-500/5",
    iconBg: "bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400",
  },
  {
    Icon: MessageSquareCode,
    title: "Prompt Engineering",
    description:
      "Designing and optimizing prompts for real product use cases, ensuring reliable and safe model outputs.",
    gradient: "from-blue-500/10 to-cyan-500/5",
    iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400",
  },
  {
    Icon: Cpu,
    title: "AI-first Development",
    description:
      "Combining fullstack architecture with intelligent automation to create products that feel like the future.",
    gradient: "from-emerald-500/10 to-teal-500/5",
    iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
];

export function AIEngineering() {
  return (
    <section id="ai" className="py-24 px-6 bg-surface-2 border-y border-border relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
                Specialty
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                AI Engineering
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary font-medium w-fit">
              <Sparkles size={14} />
              Powered by OpenAI
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map(({ Icon, title, description, gradient, iconBg }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className={`group h-full rounded-xl border border-border bg-linear-to-br ${gradient} p-6 transition-all hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg`}>
                <div className={`grid h-12 w-12 place-items-center rounded-xl border ${iconBg}`}>
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}