import { Brain, MessageSquareCode, Cpu } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    Icon: Brain,
    title: "OpenAI API Integration",
    description:
      "Building AI-powered features into production web apps.",
  },
  {
    Icon: MessageSquareCode,
    title: "Prompt Engineering",
    description:
      "Designing and optimizing prompts for real product use cases.",
  },
  {
    Icon: Cpu,
    title: "AI-first Development",
    description:
      "Combining fullstack architecture with intelligent automation.",
  },
];

export function AIEngineering() {
  return (
    <section id="ai" className="py-24 px-6 bg-surface-2 border-y border-border">
      <div className="mx-auto max-w-300">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            Specialty
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            AI Engineering
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {features.map(({ Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group h-full rounded-xl border border-border bg-surface p-6 transition-all hover:border-primary/60 hover:-translate-y-1">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 border border-primary/30 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-secondary leading-relaxed">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}