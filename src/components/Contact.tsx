import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  const links = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/birundha-i", href: profile.linkedin },
    { icon: Github, label: "GitHub", value: "github.com/Birundha2004", href: profile.github },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <h2 className="section-title">Contact</h2>
        <p className="mt-3 max-w-2xl text-muted">
          I'm open to Agentic AI, AI, Generative AI, Python and AI automation roles in Dubai, UAE.
          The quickest way to reach me is by email.
        </p>
      </Reveal>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {links.map(({ icon: Icon, label, value, href }) => {
          const external = href.startsWith("http");
          return (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="card flex items-center gap-4 p-5"
              >
                <Icon size={22} className="shrink-0 text-cyan" aria-hidden />
                <span className="min-w-0">
                  <span className="block text-sm text-muted">{label}</span>
                  <span className="block break-words font-medium">{value}</span>
                </span>
                {external && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
