---
trigger: always_on
---

# Feature Imports — Use Direct Subpath Imports

**Description**: Import directly from the specific subpath within a feature module, not from a feature-level barrel.

- **Use direct subpath imports** when importing from a feature:
  - `import { Button } from "@/features/common/components/ui/button"`
  - `import { useAuth } from "@/features/auth/toolkits"`
  - `import { loginMutationOptions } from "@/features/auth/services"`

- **Do not** import from a feature root barrel like `@/features/[feature-name]`.

```ts
// ✅ Preferred
import { Button } from "@/features/common/components/ui/button";
import { loginMutationOptions } from "@/features/auth/services";

// ❌ Avoid
import { Button, loginMutationOptions } from "@/features/auth";
```
