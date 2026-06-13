# TypeScript Interfaces Over Types

**Description**: Prefer TypeScript interfaces over type aliases
**Files**: `**/*.ts`, `**/*.tsx`

- **Prefer `interface` for object shapes**: When defining the shape of an object, class, or props, use `interface` instead of `type`.
- **Use `type` only when necessary**:
  - For union, intersection, mapped, conditional, or utility types
  - When aliasing primitive types (e.g., `type UserId = string`)
  - When you truly need capabilities that `interface` cannot express
- **Extending and merging**: Prefer `interface` when you expect extension, declaration merging, or incremental augmentation over time.

Examples:

```typescript
// ✅ PREFERRED
interface User {
  id: string;
  name: string;
}

// ❌ AVOID when a simple object shape
type UserType = {
  id: string;
  name: string;
};

// ✅ APPROPRIATE uses of `type`
type UserId = string;
type FetchStatus = 'idle' | 'loading' | 'success' | 'error';
type WithTimestamps<T> = T & { createdAt: string; updatedAt: string };
```
