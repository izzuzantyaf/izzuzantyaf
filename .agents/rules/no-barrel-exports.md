# No Barrel Exports

**Description**: Never create barrel files (`index.ts` that only re-exports) or `export *` re-exports.
**Files**: `**/*.ts`, `**/*.tsx`

Barrels hide dependencies, defeat tree-shaking, and slow down module resolution. Consumers import from the file that owns the code.

## Do

- Import from the concrete module: `import { Button } from '@/features/common/components/ui/button'`.
- Export a symbol from the file that defines it.
- Name the files a consumer needs (`services.ts`, `toolkits/use-auth.ts`) so no re-export layer is required.

## Don't

- Do not add `index.ts` files whose only job is re-exporting other modules.
- Do not use `export * from './x'` or `export { a } from './x'` to aggregate.
- Do not import from a feature root (`@/features/auth`) or a subpath barrel (`@/features/auth/toolkits`).

Enforced by Biome `performance/noBarrelFile` and `performance/noReExportAll` in `biome.json`.
