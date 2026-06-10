import { Github, Linkedin, Send, Mail, Phone, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const links = [
  {
    Icon: Github,
    label: "GitHub",
    value: "ogabekboymirzayev",
    href: "https://github.com/ogabekboymirzayev",
    color: "hover:border-zinc-400 hover:text-foreground",
    iconBg: "group-hover:bg-zinc-700 group-hover:text-white group-hover:border-zinc-700",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "ogabekboymirzayev",
    href: "https://www.linkedin.com/in/ogabekboymirzayev",
    color: "hover:border-blue-500/50",
    iconBg: "group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600",
  },
  {
    Icon: Send,
    label: "Telegram",
    value: "@ogabek_boymirzayev",
    href: "https://t.me/ogabek_boymirzayev",
    color: "hover:border-sky-400/50",
    iconBg: "group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "boymirzayev523@gmail.com",
    href: "mailto:boymirzayev523@gmail.com",
    color: "hover:border-primary/50",
    iconBg: "group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-primary/8 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
              Contact
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              Let's build something<br className="hidden sm:block" /> together.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Open to freelance projects and full-time opportunities.
            </p>
          </Reveal>
        </div>

        {/* Contact cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map(({ Icon, label, value, href, color, iconBg }, i) => (
            <Reveal key={label} delay={i * 80}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`group flex flex-col gap-4 rounded-xl border border-border bg-surface p-5 transition-all hover:-translate-y-1 hover:shadow-lg ${color}`}
              >
                <div className="flex items-center justify-between">
                  <div className={`grid h-10 w-10 place-items-center rounded-lg bg-primary/10 border border-primary/30 text-primary transition-all ${iconBg}`}>
                    <Icon size={18} />
                  </div>
                  <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{label}</div>
                  <div className="mt-1 text-sm font-medium text-foreground truncate">{value}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Phone */}
        <Reveal delay={350}>
          <div className="mt-8 flex justify-center">
            <a
              href="tel:+998940033959"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-surface transition-all"
            >
              <Phone size={14} className="text-primary" />
              <span className="font-medium">+998 94 003 39 59</span>
            </a>
          </div>
        </Reveal>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2026 Og'abek Boymirzayev. All rights reserved.
        </div>
      </div>
    </section>
  );
}