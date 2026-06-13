---
name: features-module-scaffold
description: Scaffolds a new feature module under src/features/ following the standard project structure (barrel index, components, types, services, toolkits). Use when creating new features.
---

# Feature Module Scaffold Skill

This skill provides the structure and instructions to scaffold a new feature module under `src/features/`.

## When to use this skill
- Use this skill whenever a new feature module needs to be created under `src/features/`.
- This ensures consistency with the canonical layout (based on `src/features/common/`).

## Directory Layout

A standard feature module is scaffolded as follows:
```
features/<feature-name>/
  index.ts           # Barrel: types → constants → services → toolkits → components
  types.ts           # Feature-specific types/interfaces
  constants.ts        # Feature constants (export const CONSTANTS = … or real values)
  services.ts         # API calls, TanStack query/mutation options (queryOptions, etc.)
  toolkits.ts         # Helpers, hooks, shared utilities (e.g. cn, custom hooks)
  components/
    index.ts          # Barrel exporting all components and components/ui/*
    <component>.tsx   # Feature components
    ui/               # Optional: shared UI primitives for this feature
      <primitive>.tsx
```

## How to use it

### 1. Root barrel (`index.ts`)
Export in this exact order: types, constants, services, toolkits, components.
```ts
export * from "./types"
export * from "./constants"
export * from "./services"
export * from "./toolkits"
export * from "./components"
```

### 2. Conventions per file
*   **types.ts**: Export interfaces/types used by the feature.
*   **constants.ts**: Export constants; use a placeholder (e.g. `export const CONSTANTS = undefined`) if none exist yet.
*   **services.ts**: Use `@/features/<feature-name>` for same-feature imports; define `queryOptions` and mutation options here.
*   **toolkits.ts**: Pure helpers and hooks; no UI. Can re-export or define `api` (e.g., ky/client instance) if feature-specific.
*   **components/**: Each component goes in its own file; `components/index.ts` re-exports every component and `components/ui/*` explicitly.

### 3. Consuming the feature
Code outside the feature must import exclusively from the barrel: `@/features/<feature-name>`, and **never** from subpaths like `@/features/<feature-name>/services` or `@/features/<feature-name>/components/foo`.
