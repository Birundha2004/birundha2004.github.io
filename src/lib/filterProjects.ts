import type { Project } from "../data/content";

export type CategoryFilter = "All" | Project["category"];

/** Filters projects by category and a free-text query (title, summary, bullets, tech). */
export function filterProjects(
  list: Project[],
  category: CategoryFilter,
  query: string,
): Project[] {
  const q = query.trim().toLowerCase();
  return list.filter((p) => {
    if (category !== "All" && p.category !== category) return false;
    if (!q) return true;
    const haystack = [p.title, p.summary, p.category, ...p.bullets, ...p.tech]
      .join(" ")
      .toLowerCase();
    return q.split(/\s+/).every((word) => haystack.includes(word));
  });
}
