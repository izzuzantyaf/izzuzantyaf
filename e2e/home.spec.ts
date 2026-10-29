import { expect, test } from '@playwright/test'

test('home page renders, hydrates and stays error free', async ({ page }) => {
  const errors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))

  const response = await page.goto('/')
  expect(response?.status()).toBe(200)

  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'ship once',
  )

  // Only works once React has hydrated the server markup.
  const themeToggle = page.getByRole('button', { name: /^Theme: / })
  const before = await themeToggle.getAttribute('aria-label')
  await themeToggle.click()
  await expect(themeToggle).not.toHaveAttribute('aria-label', before ?? '')

  expect(errors).toEqual([])
})
