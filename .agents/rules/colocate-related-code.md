# Colocate Related Code

**Description**: Keep highly related code close together (e.g. constants next to the code that uses them)
**Files**: `**/*.ts`, `**/*.tsx`

When a constant, type, or helper is **only or primarily used by one nearby piece of code**, keep them close.

## Do

- Put a constant directly above the function/hook that uses it (e.g. `MOBILE_BREAKPOINT` right above `useIsMobile`).
- Prefer the same file; if splitting, keep the constant in the same file as its single consumer.
- Group related exports together (e.g. breakpoint + hook) rather than scattering by “constants first, then all functions.”

## Avoid

- Putting a single-use constant at the top of the file far from its only consumer.
- Splitting a constant and its sole consumer across files without good reason.

## Example

```ts
// ✅ Related code kept close
const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
  // ...
}
```

```ts
// ❌ Constant far from its only consumer
const MOBILE_BREAKPOINT = 768

export function cn(...inputs: ClassValue[]) { /* ... */ }

export function useIsMobile() {
  // uses MOBILE_BREAKPOINT
}
```
