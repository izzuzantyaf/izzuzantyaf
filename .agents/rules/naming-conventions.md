# Project Rules

## Naming Conventions

### Static / Module-Level Constants
Use `SCREAMING_SNAKE_CASE` for static variables declared at the module level (i.e., variables that never change and are not React components or functions).

```ts
// ✅ PREFERRED
const SOCIAL_LINKS = [...]
const MAX_RETRIES = 3

// ❌ AVOID
const socialLinks = [...]
const maxRetries = 3
```

This applies to arrays, objects, primitives, and any other value that is a static constant at the top level of a file.
