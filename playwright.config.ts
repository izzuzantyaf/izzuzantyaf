import { defineConfig, devices } from '@playwright/test'

const port = 4173

// Runs against built output served by `vite preview`, so SSR, hydration and the
// Cloudflare plugin's worker entry are all in the path. Unit tests cover neither.
const config = defineConfig({
  testDir: './e2e',
  use: { baseURL: `http://localhost:${port}` },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: `bun run build && bun run start --port ${port}`,
    url: `http://localhost:${port}`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})

export default config
