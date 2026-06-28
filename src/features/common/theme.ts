import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'system'

export function getTheme(): Theme {
  if (typeof window === 'undefined') return 'system'
  return (localStorage.getItem('theme') as Theme) || 'system'
}

export function setTheme(theme: Theme) {
  if (typeof window === 'undefined') return
  localStorage.setItem('theme', theme)
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', isDark)
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('system')

  // Set the theme on mount to match localStorage
  useEffect(() => {
    setThemeState(getTheme())
  }, [])

  // Listener for system preference changes
  useEffect(() => {
    if (theme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    function handleChange() {
      const isDark = mediaQuery.matches
      document.documentElement.classList.toggle('dark', isDark)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  function updateTheme(newTheme: Theme) {
    setTheme(newTheme)
    setThemeState(newTheme)
  }

  return { theme, setTheme: updateTheme }
}
