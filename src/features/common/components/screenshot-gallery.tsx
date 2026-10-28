import { ChevronLeft, ChevronRight, Images } from 'lucide-react'
import { useEffect, useState } from 'react'

export interface Screenshot {
  src: string
  caption: string
}

export interface ScreenshotSet {
  title: string
  description: string
  screenshots: Screenshot[]
}

interface ScreenshotGalleryProps {
  galleries: ScreenshotSet[]
}

function wrapIndex(index: number, offset: number, length: number) {
  return (index + offset + length) % length
}

export function ScreenshotGallery({ galleries }: ScreenshotGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const openGallery = openIndex === null ? null : galleries[openIndex]
  const screenshots = openGallery?.screenshots ?? []
  const activeScreenshot =
    activeIndex === null ? null : screenshots[activeIndex]

  function toggleGallery(index: number) {
    setActiveIndex(null)
    setOpenIndex((current) => (current === index ? null : index))
  }

  function showOffset(offset: number) {
    setActiveIndex((index) =>
      index === null ? index : wrapIndex(index, offset, screenshots.length),
    )
  }

  useEffect(() => {
    if (activeIndex === null) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft')
        setActiveIndex((index) =>
          index === null ? index : wrapIndex(index, -1, screenshots.length),
        )
      if (event.key === 'ArrowRight')
        setActiveIndex((index) =>
          index === null ? index : wrapIndex(index, 1, screenshots.length),
        )
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex, screenshots.length])

  return (
    <div className="mt-6 min-w-0">
      <div className="flex flex-wrap gap-2">
        {galleries.map((gallery, index) => {
          const isOpen = index === openIndex

          return (
            <button
              key={gallery.title}
              type="button"
              onClick={() => toggleGallery(index)}
              aria-expanded={isOpen}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors cursor-pointer ${
                isOpen
                  ? 'border-primary/50 bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <Images size={14} />
              {gallery.title}
              {/* Inherits the button color: muted-foreground on the open state's accent background is only 4.39:1. */}
              <span className="text-xs tabular-nums">
                {gallery.screenshots.length}
              </span>
            </button>
          )
        })}
      </div>

      {openGallery ? (
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">
            {openGallery.description}
          </p>

          <ul className="mt-3 flex snap-x gap-3 overflow-x-auto list-none p-0 m-0 pb-2">
            {openGallery.screenshots.map((screenshot, index) => (
              <li key={screenshot.src} className="w-72 shrink-0 snap-start">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View screenshot: ${screenshot.caption}`}
                  className="relative block w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-colors cursor-zoom-in"
                >
                  <img
                    src={screenshot.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width={1600}
                    height={960}
                    className="block w-full aspect-[16/10] object-cover"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pt-6 pb-2.5 text-left text-xs leading-snug text-white">
                    {screenshot.caption}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {activeScreenshot ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 p-6">
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close screenshot preview"
            className="absolute inset-0 size-full bg-black/40 backdrop-blur-md cursor-zoom-out"
          />
          <img
            src={activeScreenshot.src}
            alt={activeScreenshot.caption}
            className="relative max-h-[80vh] max-w-full w-auto h-auto rounded-lg shadow-2xl"
          />
          <div className="relative flex items-center gap-2 text-white">
            <button
              type="button"
              onClick={() => showOffset(-1)}
              aria-label="Previous screenshot"
              className="size-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm tabular-nums">
              {(activeIndex ?? 0) + 1} / {screenshots.length}
            </span>
            <button
              type="button"
              onClick={() => showOffset(1)}
              aria-label="Next screenshot"
              className="size-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
