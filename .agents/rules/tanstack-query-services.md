---
trigger: always_on
---

# TanStack Query Fetching Conventions

**Description**: Standardize data fetching with TanStack Query using feature-level services files that expose query and mutation options.

- **Use TanStack Query for async data** in React components instead of ad-hoc `fetch` or `axios` calls where possible.

- **Define query and mutation options in feature services**:
  - For each feature, create or use a `services.ts` file under `src/features/**/services.ts`.
  - Export **query option factories** and **mutation option factories** (not hooks) from these files.
  - Examples:

```ts
import { queryOptions } from '@tanstack/react-query';

// Query options example
export const apiHealthQueryOptions = queryOptions({
  queryKey: ['api-health'],
  queryFn: () => client.get('/health'),
});

// Mutation options example
export const uploadFileMutationOptions = {
  mutationFn: (payload: UploadPayload) => client.post('/upload', payload),
};
```

- **Use options from services in components**:
  - In components, **only call** `useQuery` / `useMutation` from TanStack Query.
  - Pass the exported options object (or factory) from the corresponding `services.ts`.
  - Pattern:

```ts
// In component
const apiHealthQuery = useQuery(apiHealthQueryOptions);
const uploadMutation = useMutation(uploadFileMutationOptions);
```

- **No direct HTTP calls in components**:
  - Do **not** call `fetch`, `axios`, or API clients directly from React components.
  - Keep all HTTP logic centralized in `features/**/services.ts` and re-used via TanStack Query options.

- **Naming conventions**:
  - **Queries**: `*QueryOptions` (e.g., `apiHealthQueryOptions`, `projectListQueryOptions`).
  - **Mutations**: `*MutationOptions` (e.g., `fileUploadMutationOptions`, `projectCreateMutationOptions`).
