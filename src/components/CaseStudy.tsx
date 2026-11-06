import { ShieldCheck } from "lucide-react";
import { caseStudy } from "../data/content";
import Reveal from "./Reveal";

export default function CaseStudy() {
  return (
    <section id="case-study" className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <p className="chip mb-3">{caseStudy.badge}</p>
        <h2 className="section-title">{caseStudy.title}</h2>
        <p className="mt-4 flex max-w-3xl gap-2 text-sm text-muted">
          <ShieldCheck size={18} className="mt-0.5 shrink-0 text-cyan" aria-hidden />
          <span>{caseStudy.disclaimer}</span>
        </p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {caseStudy.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {caseStudy.capabilities.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.05}>
            <article className="card h-full p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-700 font-mono text-sm text-cyan">
                  {c.id}
                </span>
                <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              </div>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-muted marker:text-violet">
                {c.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
