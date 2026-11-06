import { useState } from "react";
import { architectureNodes } from "../data/content";
import Reveal from "./Reveal";

export default function ArchitectureDiagram() {
  const [active, setActive] = useState(0);
  const node = architectureNodes[active];

  const move = (delta: number) =>
    setActive((i) => (i + delta + architectureNodes.length) % architectureNodes.length);

  return (
    <section id="architecture" className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <h2 className="section-title">AI agent architecture</h2>
        <p className="mt-3 max-w-2xl text-muted">
          A simplified, generic view of how an enquiry flows through the agent workflow. Select a
          stage to see what happens there. It shows no internal endpoints or company data.
        </p>
      </Reveal>

      <div className="mt-8">
        <ol
          role="tablist"
          aria-label="Agent workflow stages"
          className="flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-0"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight" || e.key === "ArrowDown") {
              e.preventDefault();
              move(1);
            } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
              e.preventDefault();
              move(-1);
            }
          }}
        >
          {architectureNodes.map((n, i) => {
            const selected = i === active;
            return (
              <li key={n.id} className="flex flex-1 flex-col items-stretch lg:flex-row lg:items-center">
                <button
                  type="button"
                  role="tab"
                  id={`arch-tab-${n.id}`}
                  aria-selected={selected}
                  aria-controls="arch-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`flex-1 rounded-xl border px-3 py-3 text-left text-sm transition-colors lg:text-center ${
                    selected
                      ? "border-cyan bg-cyan/10 text-text shadow-[0_0_30px_-8px_rgb(34_211_238/0.6)]"
                      : "border-line bg-ink-900 text-muted hover:border-blue hover:text-text"
                  }`}
                >
                  <span className="block font-mono text-xs text-violet">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {n.label}
                </button>
                {i < architectureNodes.length - 1 && (
                  <span
                    aria-hidden
                    className="self-center py-1 text-blue lg:px-1 lg:py-0"
                  >
                    <span className="lg:hidden">↓</span>
                    <span className="hidden lg:inline">→</span>
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        <div
          id="arch-panel"
          role="tabpanel"
          aria-labelledby={`arch-tab-${node.id}`}
          className="card mt-5 p-6"
        >
          <h3 className="font-display text-lg font-semibold">
            <span className="gradient-text">{node.label}</span>
          </h3>
          <p className="mt-2 text-muted">{node.detail}</p>
          <div className="mt-4 flex gap-2">
            <button type="button" className="btn btn-ghost !py-2" onClick={() => move(-1)}>
              Previous stage
            </button>
            <button type="button" className="btn btn-ghost !py-2" onClick={() => move(1)}>
              Next stage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
