import { Github, Linkedin, Send, Mail, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

const links = [
  {
    Icon: Github,
    label: "GitHub",
    value: "ogabekboymirzayev",
    href: "https://github.com/ogabekboymirzayev",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "ogabekboymirzayev",
    href: "https://www.linkedin.com/in/ogabekboymirzayev",
  },
  {
    Icon: Send,
    label: "Telegram",
    value: "@ogabek_boymirzayev",
    href: "https://t.me/ogabek_boymirzayev",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "boymirzayev523@gmail.com",
    href: "mailto:boymirzayev523@gmail.com",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-100 w-150 rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            Contact
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
            Let's build something together.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Open to freelance projects and full-time opportunities.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-3">
          {links.map(({ Icon, label, value, href }, i) => (
            <Reveal key={label} delay={i * 80}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 text-left transition-all hover:border-primary/60 hover:-translate-y-0.5"
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 border border-primary/30 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">{label}</div>
                  <div className="font-medium text-foreground truncate">
                    {value}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <a href="tel:+998940033959" className="text-muted-foreground">
            <span className="mt-10 inline-flex items-center gap-2 transition-colors hover:text-foreground">
              <Phone size={16} />
              <span className="font-medium">+998 94 003 39 59</span>
            </span>
          </a>
        </Reveal>

        <div className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground">
          © 2026 Og'abek Boymirzayev. All rights reserved.
        </div>
      </div>
    </section>
  );
}