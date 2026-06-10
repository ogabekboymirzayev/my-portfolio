import { useState } from "react";
import { Award, Download, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Reveal } from "./Reveal";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  file: string;
  accent: string;
  badgeColor: string;
}

const certificates: Certificate[] = [
  {
    title: "My Certificate",
    issuer: "Certificate Authority",
    date: "2024",
    file: "/my-certificate.pdf",
    accent: "from-blue-500/20 to-violet-500/10",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
];

function CertificateCard({ cert }: { cert: Certificate }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_20px_60px_-20px_oklch(0.546_0.245_262.881/0.25)]">
      {/* Header */}
      <div className={`relative flex items-center gap-4 p-6 bg-linear-to-br ${cert.accent}`}>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-background/70 backdrop-blur-sm shadow-sm">
          <Award size={22} className="text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground truncate">{cert.title}</h3>
          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span
            className={`hidden sm:inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${cert.badgeColor}`}
          >
            {cert.date}
          </span>
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-label={expanded ? "Collapse certificate" : "Expand certificate"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/70 text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 px-6 py-4 border-t border-border">
        <a
          href={cert.file}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
        >
          <ExternalLink size={13} /> View
        </a>
        <a
          href={cert.file}
          download
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-xs font-medium text-muted-foreground hover:bg-foreground/5 hover:text-foreground transition-colors"
        >
          <Download size={13} /> Download
        </a>
      </div>

      {/* Embedded PDF preview (collapsible) */}
      {expanded && (
        <div className="border-t border-border animate-fade-in">
          <iframe
            src={`${cert.file}#toolbar=0&view=FitH`}
            title={`${cert.title} PDF`}
            className="w-full h-[480px] sm:h-[600px]"
            loading="lazy"
          />
        </div>
      )}
    </article>
  );
}

export function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            Achievements
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            My Certificates
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Professional certifications and credentials that validate my skills and expertise.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 120}>
              <CertificateCard cert={cert} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
