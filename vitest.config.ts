import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// The Cloudflare and TanStack Start plugins are left out on purpose: they need a
// workerd/virtual-module graph that unit tests do not have. Routes and server
// functions are covered by `bun run start` checks, not here.
const config = defineConfig({
  plugins: [viteReact()],
  resolve: { tsconfigPaths: true },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
  },
})

export default config
