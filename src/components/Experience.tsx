import { Briefcase } from "lucide-react";
import { experience } from "../data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <h2 className="section-title">Professional experience</h2>
      </Reveal>
      <ol className="mt-8 space-y-5 border-l border-line pl-6">
        {experience.map((e, i) => (
          <li key={e.role + e.company} className="relative">
            <span
              aria-hidden
              className="absolute -left-[33px] top-6 h-3 w-3 rounded-full bg-cyan ring-4 ring-ink-950"
            />
            <Reveal delay={i * 0.05}>
              <article className="card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold">
                    <Briefcase size={18} className="mr-2 inline text-blue" aria-hidden />
                    {e.role} — {e.company}
                  </h3>
                  <span className="chip">{e.period}</span>
                </div>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-muted marker:text-violet">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
