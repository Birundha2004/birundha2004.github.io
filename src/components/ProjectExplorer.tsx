import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { projects } from "../data/content";
import { filterProjects, type CategoryFilter } from "../lib/filterProjects";
import Reveal from "./Reveal";

const categories: CategoryFilter[] = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export default function ProjectExplorer() {
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [query, setQuery] = useState("");

  const results = useMemo(() => filterProjects(projects, category, query), [category, query]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <h2 className="section-title">Project explorer</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Filter by category or search by technology. The sales automation platform is a private
          company case study; the others are personal or academic projects.
        </p>
      </Reveal>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                category === c
                  ? "border-cyan bg-cyan/15 text-text"
                  : "border-line text-muted hover:text-text"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <label className="relative block md:w-72">
          <span className="sr-only">Search projects</span>
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search e.g. Flask, n8n, OpenCV"
            className="w-full rounded-lg border border-line bg-ink-900 py-2 pl-9 pr-3 text-sm placeholder:text-muted/70"
          />
        </label>
      </div>

      <p className="mt-4 text-sm text-muted" role="status" aria-live="polite">
        {results.length} {results.length === 1 ? "project" : "projects"} shown
      </p>

      {results.length === 0 ? (
        <div className="card mt-4 p-8 text-center text-muted">
          No projects match your search.{" "}
          <button
            type="button"
            className="text-cyan underline"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Reset filters
          </button>
        </div>
      ) : (
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {results.map((p) => (
            <li key={p.id}>
              <article className="card h-full p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="chip">{p.category}</span>
                  <span className="text-xs text-muted">{p.kind}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-muted">{p.summary}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted marker:text-violet">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                  {p.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
                {p.id === "sales-automation" && (
                  <a href="#case-study" className="mt-4 inline-block text-sm text-cyan underline">
                    Read the case study
                  </a>
                )}
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
