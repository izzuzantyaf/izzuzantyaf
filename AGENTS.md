# AGENTS.md

TanStack Start app on Cloudflare Workers. **Before editing anything under `src/**`, read the matching file in `.agents/rules/`** - that is where the code-style conventions live (function declarations, naming, colocation, no barrels, imports, TanStack Query, interfaces over types, UI source priority). Longer docs: `.agents/skills/`.

## Stack

- TanStack Start (React 19) + Router (file-based) + Query (SSR via `src/integrations/tanstack-query/root-provider`), Vite build, `wrangler.jsonc` deploy.
- Tailwind v4 is CSS-first: edit `src/styles.css`. There is no `tailwind.config.js`, despite `components.json` naming one.
- shadcn (style `base-vega`, Base UI primitives) lives in `src/features/common/components/ui`.
- Biome for lint/format; Vitest + jsdom for tests.

## Commands

`bun run dev|start|build|deploy|test|lint|format|check|generate-routes`. One test: `bunx vitest run path/to/file.test.ts`. Before commit: `bun run check`, then `bun run test` (husky pre-commit runs Biome on staged files).

## Layout

- `src/routes/**` is file-based. `src/routeTree.gen.ts` is generated: never hand-edit, run `bun run generate-routes` after adding or renaming routes.
- `src/features/<feature>/` holds `components/`, `components/ui/`, `toolkits/`, `services.ts`. Scaffold with the `features-module-scaffold` skill.
- `#/*` and `@/*` both resolve to `./src/*`.

## Gotchas

- Deploy is automated: push to `main` runs `.github/workflows/deploy.yml`. It only fires when build inputs change (`src/**`, `public/**`, `package.json`, `bun.lock`, `tsconfig.json`, `tsr.config.json`, `vite.config.ts`, `wrangler.jsonc`, the workflow file). Docs, `.agents/**` and `.pi/**` changes do not deploy.

- `wrangler.jsonc` `main` is `@tanstack/react-start/server-entry`, a virtual module resolved by the Start plugin. Don't look for it on disk. `nodejs_compat` is required.
- Read the matching Cloudflare skill in `.agents/skills/` before changing Workers config, bindings, or deploy setup.
- `.pi/settings.json` pins per-repo agent tooling (ponytail); `.pi/npm/` gitignores itself.
