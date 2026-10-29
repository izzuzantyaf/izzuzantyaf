import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Responsive variants written by `bun run images`, e.g. `tos-dashboard.640w.webp`.
export function imageVariant(src: string, width: number) {
  return src.replace(/\.webp$/, `.${width}w.webp`)
}
