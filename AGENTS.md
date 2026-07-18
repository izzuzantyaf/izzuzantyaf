# AGENTS.md

Compact guide for working in this repo. Read `.agents/rules/*.md` for detailed code-style conventions; this file captures what's not obvious from filenames.

## Stack

- **TanStack Start** (React 19 SSR framework) on **Vite**, deployed to **Cloudflare Workers** via `@cloudflare/vite-plugin` + `wrangler.jsonc`.
- **TanStack Router** in file-router mode; **TanStack Query** with SSR query integration (`src/integrations/tanstack-query/root-provider`).
- **Tailwind v4** through `@tailwindcss/vite` (no `tailwind.config.js` despite `components.json` referencing one). Styles entry is `src/styles.css`.
- **shadcn** registry (style `base-vega`, Base UI primitives) installed into `@/features/common/components/ui`.
- Lint/format via **Biome**; tests via **Vitest** + jsdom.

> Note: `CLAUDE.md` and `.cursor/rules/*` describe a generic "use Bun.serve / no Vite" setup that does **not** match this repo. This project uses Vite + TanStack Start. Prefer the executable config here over those files.

## Commands

Use `bun run <script>` (package manager is Bun; see `bun.lock`). The scripts themselves invoke Vite/Vitest/Biome.

- `bun run dev` — Vite dev server on port 3000
- `bun run build` — Vite build (Cloudflare target)
- `bun run preview` — preview built output
- `bun run deploy` — `vite build && wrangler deploy`
- `bun run test` — `vitest run` (single test file: `bunx vitest run path/to/file.test.ts`; watch: `bunx vitest`)
- `bun run lint` / `format` / `check` — Biome (write: `biome check --write`)
- `bun run generate-routes` — `tsr generate`; regenerates `src/routeTree.gen.ts`

Suggested order before commits: `bun run check` then `bun run test`.

## Path aliases

Both `#/*` and `@/*` resolve to `./src/*`. shadcn config (`components.json`) uses `@/*`.

## Routing & codegen

- Routes live in `src/routes/**` (file-based). `src/routeTree.gen.ts` is **generated** - gitignored and excluded from Biome; never hand-edit. Re-run `bun run generate-routes` after adding/renaming route files.
- Router wiring in `src/router.tsx`; SSR query integration is set up there.

## Feature module layout

`src/features/<feature>/` with subpaths: `components/`, `components/ui/` (shadcn), `toolkits/` (hooks + utils), `services.ts` (TanStack Query option factories). See `features-module-scaffold` skill to scaffold new ones.

## Conventions (enforced by `.agents/rules/`)

- **Function declarations** over arrow consts for top-level components/hooks/services/utils; arrows only for inline callbacks (`map`, `queryFn`, etc.).
- **`interface` over `type`** for object shapes; `type` only for unions/aliases/utilities.
- Static module-level constants in `SCREAMING_SNAKE_CASE`.
- **Colocate** single-use constants/types next to their consumer, not in a top-of-file constants block.
- **Direct subpath imports** from features (`@/features/common/components/ui/button`), not feature-level barrels.
- TanStack Query: **no destructuring** of `useQuery`/`useMutation` results - assign to a named variable. Query/mutation option factories live in `features/**/services.ts` and are named `*QueryOptions` / `*MutationOptions`. **No direct `fetch`/`axios` in components.**
- UI component source priority: **shadcn -> Base UI -> raw HTML**.

## Pre-commit

`.husky/pre-commit` runs `bunx lint-staged`, which runs `biome check --write` on staged `*.{js,ts,jsx,tsx,json,css}`. Format locally before committing.

## Gotchas

- `wrangler.jsonc` `main` is `@tanstack/react-start/server-entry` - a virtual module resolved by the Start plugin; don't try to edit or find it on disk.
- `compatibility_flags: ["nodejs_compat"]` is required for the Workers runtime.
- `.tanstack/`, `.wrangler/`, `dist/`, `.output/` are build/cache artifacts - ignore; `.tanstack/` holds generated route temp files.
- shadcn `components.json` references `tailwind.config.js` and `src/styles.css`; the config file does not exist (Tailwind v4 is CSS-first), so prefer editing `src/styles.css` directly.