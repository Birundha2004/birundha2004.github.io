import { ArrowRight, Download, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "../data/content";

export default function Hero() {
  const reduce = useReducedMotion();
  const resumeHref = `${import.meta.env.BASE_URL}${profile.resumeFile}`;

  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-32 md:pt-40">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="chip mb-6">{profile.title}</p>
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          <span className="gradient-text">Building Intelligent AI Agents</span> for Real-World
          Business Workflows.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{profile.intro}</p>
        <p className="mt-3 max-w-2xl text-sm text-muted">{profile.availability}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary">
            Explore My Work <ArrowRight size={18} aria-hidden />
          </a>
          <a
            href={resumeHref}
            download={profile.resumeDownloadName}
            className="btn btn-ghost"
          >
            <Download size={18} aria-hidden /> Download Resume
          </a>
          <a href="#contact" className="btn btn-ghost">
            <Mail size={18} aria-hidden /> Contact Me
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2" aria-label="Target roles">
          {profile.targetRoles.map((r) => (
            <li key={r} className="chip">
              {r}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
