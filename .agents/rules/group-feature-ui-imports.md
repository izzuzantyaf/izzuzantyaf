---
trigger: always_on
---

# Group Feature UI Imports

**Description**: Prefer grouped feature-level UI imports like `@/features/[feature-name]` instead of multiple deep UI subpath imports.

- **Prefer grouped feature imports** for UI components:
  - When you see multiple imports from deep UI paths like:
    - `import { Button } from "@/features/common/components/ui/button"`
    - `import { Input } from "@/features/common/components/ui/input"`
    - `import { Card } from "@/features/common/components/ui/card"`
    - `import { Label } from "@/features/common/components/ui/label"`
  - **Refactor to a single grouped import** from the feature entrypoint when available:

```ts
// ✅ Preferred
import { Button, Input, Card, Label } from "@/features/common";
```

- **Apply this pattern per feature**:
  - Use `@/features/[feature-name]` (or the closest feature barrel file) instead of repeating deep `components/ui/*` paths.
  - Keep imports **flat and centralized** at the feature boundary whenever the project exposes such barrels.

- **When not to change**:
  - If a feature does **not** yet expose a barrel that re-exports its UI components, you may leave the direct imports or create the barrel as part of a refactor, depending on scope.
