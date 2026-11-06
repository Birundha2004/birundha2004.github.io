# Birundha I — AI Engineer Portfolio

A dark, interactive portfolio built with React, TypeScript, Vite, Tailwind CSS v4, Motion and Lucide icons.

Planned address: https://birundha2004.github.io/birundha-portfolio/ (not live until you deploy it — see below).

## Run locally

Requires Node.js 20+ (22 recommended).

```bash
npm install
npm run dev        # http://localhost:5173/birundha-portfolio/
npm test           # unit tests (project filter + content integrity)
npm run build      # typecheck + production build into dist/
npm run preview    # serve the production build locally
```

Note the dev URL includes `/birundha-portfolio/` because the Vite `base` is set for GitHub Pages.

## Edit your content

Everything lives in `src/data/content.ts`: profile, experience, case study, projects, certifications, education, architecture stages.

- **Resume:** the real PDF you supplied is at `public/resume.pdf`. Replace that file (same name) whenever you update your resume.
- **Future certifications:** add them to `plannedCertifications` in `content.ts`. They display as "In progress (not yet earned)". Move an entry into `certifications` only once completed.
- **Confidentiality:** the Sree Karuviyiyal work is shown as a case study only. Do not add company code, credentials, customer data, internal endpoints or screenshots. No GitHub repo or demo link is claimed for any project.

## Publish to GitHub (you have not created the repo yet)

1. On GitHub, click **New repository**. Name it exactly `birundha-portfolio`, leave it **empty** (no README, .gitignore or license), and create it under the `Birundha2004` account.
2. In this project folder:

```bash
git init -b main
git add .
git commit -m "Initial portfolio site"
git remote add origin https://github.com/Birundha2004/birundha-portfolio.git
git push -u origin main
```

## Deploy with GitHub Pages

1. In the repo, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` runs on every push to `main` (tests, build, deploy). Watch progress in the **Actions** tab.
4. When the run succeeds, the site appears at https://birundha2004.github.io/birundha-portfolio/.

If you rename the repository, change `base` in `vite.config.ts` and the canonical/Open Graph URLs in `index.html` to match.

## Project structure

```
index.html              SEO metadata, fonts, JSON-LD
vite.config.ts          base path /birundha-portfolio/, Tailwind, Vitest
public/resume.pdf       your resume (download button)
public/favicon.svg
src/data/content.ts     all site content
src/lib/filterProjects.ts (+ .test.ts)
src/components/         Nav, Hero, About, Skills, Experience, CaseStudy,
                        ProjectExplorer, ArchitectureDiagram, Credentials,
                        Contact, Footer, Reveal
.github/workflows/deploy.yml
```

## Accessibility and performance

Skip link, keyboard-operable menu (Esc closes), labelled controls, visible focus rings, ARIA tabs on the architecture diagram (arrow keys move between stages), `prefers-reduced-motion` honoured in CSS and Motion, code-split vendor chunks.
