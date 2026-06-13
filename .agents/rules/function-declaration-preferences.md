---
trigger: always_on
---

# Function Declaration Preferences

**Description**: Prioritize function declarations over arrow functions or function expressions. Use arrow functions only when passing as an argument or callback.

- **Prioritize function declarations**: Always use `function name() {}` syntax instead of `const name = () => {}` for top-level components, hooks, services, helper functions, and utilities.
- **Use arrow functions only for inline callbacks and arguments**: Use arrow functions (e.g., `(item) => item.id`) when passing them as parameters to array methods (`map`, `filter`, `reduce`), React hook callbacks, or library config options (e.g., `queryFn: () => ...`).
- **Do not use arrow functions for top-level declarations**: Avoid declaring components, utilities, or query option factories as arrow function constants.

## Examples

```typescript
// ✅ PREFERRED
export function getPokemonDetails(id: number) {
  return pokeApi.get(`pokemon/${id}`).json();
}

// ❌ AVOID
export const getPokemonDetails = (id: number) => {
  return pokeApi.get(`pokemon/${id}`).json();
}

// ✅ PREFERRED (arrow function as callback)
export function pokemonListQueryOptions(params?: PaginationParams) {
  return {
    queryKey: ['pokemonList'],
    queryFn: () => pokeApi.get('pokemon').json(),
  };
}
```
