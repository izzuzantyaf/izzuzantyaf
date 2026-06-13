# UI Component Source Preference

**Description**: UI component source preference (Shadcn > Base UI > HTML)
**Files**: `**/*.ts`, `**/*.tsx`

When building or modifying UI:

- **Use Shadcn components first**
  - Prefer components from the configured Shadcn registry (e.g. `@/components/ui/...`) whenever an appropriate component exists.
  - Follow Shadcn’s recommended composition patterns and variants before introducing custom primitives.
  - When using Shadcn components that wrap Radix UI primitives, **always import the Base UI version of the component (from your Shadcn/Base UI layer)** rather than importing directly from Radix UI packages.

- **Fallback to Base UI second**
  - If Shadcn does not provide a suitable component, use the project’s Base UI library (e.g. `@/components/base/...` or the configured design system).
  - Keep styling and patterns consistent with existing Base UI usage.

- **Use raw HTML only as a last resort**
  - If neither Shadcn nor Base UI exposes a suitable component, you may use semantic HTML elements directly.
  - Wrap frequently reused raw HTML patterns into new Shadcn-style or Base UI-style components so they can be reused later.

In summary: **Shadcn ➝ Base UI ➝ plain HTML**.
