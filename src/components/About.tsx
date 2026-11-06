import { about } from "../data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <h2 className="section-title">About me</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-muted">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
