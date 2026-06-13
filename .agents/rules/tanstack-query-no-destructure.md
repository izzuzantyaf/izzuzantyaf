# TanStack Query: No destructuring

**Description**: Prefer full query/mutation result over destructuring in TanStack Query
**Files**: `**/*.{ts,tsx}`

Do not destructure the return value of `useQuery`, `useMutation`, `useQueries`, or similar hooks. Assign the full result to a single variable and access properties from it.

```ts
// ❌ Avoid
const { data, isPending, isError } = useQuery(options);

// ✅ Prefer
const someNameQuery = useQuery(options);
// use: someNameQuery.data, someNameQuery.isPending, someNameQuery.isError
```

Same for mutations:

```ts
// ❌ Avoid
const { mutate, isPending } = useMutation(options);

// ✅ Prefer
const createThingMutation = useMutation(options);
// use: createThingMutation.mutate, createThingMutation.isPending
```
