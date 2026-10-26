import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export interface Screenshot {
  src: string
  caption: string
}

interface ScreenshotGalleryProps {
  title: string
  description: string
  screenshots: Screenshot[]
}

function wrapIndex(index: number | null, offset: number, length: number) {
  return index === null ? null : (index + offset + length) % length
}

export function ScreenshotGallery({
  title,
  description,
  screenshots,
}: ScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  function showOffset(offset: number) {
    setActiveIndex((index) => wrapIndex(index, offset, screenshots.length))
  }

  useEffect(() => {
    if (activeIndex === null) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft')
        setActiveIndex((index) => wrapIndex(index, -1, screenshots.length))
      if (event.key === 'ArrowRight')
        setActiveIndex((index) => wrapIndex(index, 1, screenshots.length))
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex, screenshots.length])

  const activeScreenshot =
    activeIndex === null ? null : screenshots[activeIndex]

  return (
    <div className="flex flex-col gap-3">
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory list-none p-0 m-0 pb-2">
        {screenshots.map((screenshot, index) => (
          <li
            key={screenshot.src}
            className="snap-start shrink-0 w-[min(85vw,30rem)]"
          >
            <figure className="m-0">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View screenshot: ${screenshot.caption}`}
                className="block w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-muted/30 hover:border-primary/50 transition-colors cursor-zoom-in"
              >
                <img
                  src={screenshot.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={1600}
                  height={960}
                  className="w-full h-auto block"
                />
              </button>
              <figcaption className="text-sm text-muted-foreground mt-2">
                {screenshot.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

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
            alt=""
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
