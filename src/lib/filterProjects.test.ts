import { describe, expect, it } from "vitest";
import { projects, certifications, profile } from "../data/content";
import { filterProjects } from "./filterProjects";

describe("filterProjects", () => {
  it("returns everything for All and empty query", () => {
    expect(filterProjects(projects, "All", "")).toHaveLength(projects.length);
  });

  it("filters by category", () => {
    const r = filterProjects(projects, "Computer Vision", "");
    expect(r.map((p) => p.id)).toEqual(["sign-language"]);
  });

  it("searches across tech and text, case-insensitively", () => {
    expect(filterProjects(projects, "All", "N8N").map((p) => p.id)).toContain("news-automation");
    expect(filterProjects(projects, "All", "odoo").map((p) => p.id)).toEqual(["geoattendance"]);
  });

  it("combines category and query, and can return nothing", () => {
    expect(filterProjects(projects, "Mobile", "tensorflow")).toHaveLength(0);
  });
});

describe("content integrity", () => {
  it("lists exactly the five real certifications", () => {
    expect(certifications).toHaveLength(5);
  });

  it("does not invent repository or demo links for projects", () => {
    for (const p of projects) {
      expect(JSON.stringify(p)).not.toMatch(/https?:\/\//);
    }
  });

  it("uses the planned portfolio URL", () => {
    expect(profile.siteUrl).toBe("https://birundha2004.github.io/");
  });
});
