# Portfolio v2 (Santiago)

Next.js 14 portfolio site with React 18, TypeScript, Tailwind CSS, and Shadcn UI.

## Skills

The following skills are installed in `.skills/` and should be referenced when working on this project:

- [React Best Practices](.skills/react-best-practices/SKILL.md) — React/Next.js performance optimization (58 rules). See `.skills/react-best-practices/AGENTS.md` for the full compiled guide.
- [Web Design Guidelines](.skills/web-design-guidelines/SKILL.md) — UI accessibility and design audit rules.
- [Find Skills](.skills/find-skills/SKILL.md) — Discover and install new skills via `npx skills find [query]`.

## Project Structure

- `src/data/resume.tsx` — Central data file (work, education, projects, hackathons, skills)
- `src/app/page.tsx` — Main homepage with all sections
- `src/components/` — UI components (navbar, project-card, resume-card, etc.)
- `src/data/blog.ts` — Blog post parsing
- `content/` — Blog posts in MDX format

## Commands

- `pnpm dev` — Start dev server
- `pnpm build` — Production build
- `pnpm lint` — Run ESLint
