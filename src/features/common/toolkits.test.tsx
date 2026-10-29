import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { LiquidGlassFilter } from './components/liquid-glass'
import { cn, imageVariant } from './toolkits'

describe('cn', () => {
  it('lets later classes win', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4')
  })

  it('drops falsey values', () => {
    expect(cn('p-2', false, undefined, null, 'text-sm')).toBe('p-2 text-sm')
  })
})

describe('imageVariant', () => {
  it('appends the width before the extension', () => {
    expect(imageVariant('/images/a.webp', 640)).toBe('/images/a.640w.webp')
  })

  it('leaves non-webp sources alone', () => {
    expect(imageVariant('/images/a.png', 640)).toBe('/images/a.png')
  })
})

describe('LiquidGlassFilter', () => {
  it('renders a filter definition without touching the DOM in jsdom', () => {
    const ref = createRef<HTMLDivElement>()
    const { container } = render(
      <div ref={ref}>
        <LiquidGlassFilter targetRef={ref} />
      </div>,
    )

    expect(container.querySelector('svg filter')).not.toBeNull()
  })
})
