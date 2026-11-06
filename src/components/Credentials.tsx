import { Award, Download, GraduationCap } from "lucide-react";
import {
  certifications,
  education,
  plannedCertifications,
  profile,
} from "../data/content";
import Reveal from "./Reveal";

export default function Credentials() {
  const resumeHref = `${import.meta.env.BASE_URL}${profile.resumeFile}`;
  return (
    <section id="credentials" className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <h2 className="section-title">Certifications</h2>
          <ul className="mt-6 space-y-3">
            {certifications.map((c) => (
              <li key={c.title} className="card flex items-start gap-3 p-4">
                <Award size={18} className="mt-1 shrink-0 text-violet" aria-hidden />
                <div>
                  <p className="font-medium">{c.title}</p>
                  <p className="text-sm text-muted">
                    {c.issuer} · {c.date}
                  </p>
                </div>
              </li>
            ))}
            {plannedCertifications.map((c) => (
              <li key={c.title} className="card flex items-start gap-3 border-dashed p-4">
                <Award size={18} className="mt-1 shrink-0 text-muted" aria-hidden />
                <div>
                  <p className="font-medium">{c.title}</p>
                  <p className="text-sm text-muted">{c.issuer} · In progress (not yet earned)</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="space-y-10">
          <Reveal>
            <h2 className="section-title">Education</h2>
            <div className="card mt-6 flex gap-3 p-5">
              <GraduationCap size={20} className="mt-1 shrink-0 text-cyan" aria-hidden />
              <div>
                <p className="font-medium">{education.degree}</p>
                <p className="text-muted">{education.school}</p>
                <p className="mt-1 text-sm text-muted">
                  {education.period} · CGPA {education.cgpa}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="section-title">Resume</h2>
            <div className="card mt-6 p-5">
              <p className="text-muted">
                My current resume as a PDF, including experience, projects and certifications.
              </p>
              <a
                href={resumeHref}
                download={profile.resumeDownloadName}
                className="btn btn-primary mt-4"
              >
                <Download size={18} aria-hidden /> Download Resume (PDF)
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
