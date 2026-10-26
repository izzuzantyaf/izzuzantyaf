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
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const openGallery = openIndex === null ? null : galleries[openIndex]
  const screenshots = openGallery?.screenshots ?? []
  const activeScreenshot = screenshots[activeIndex]

  function toggleGallery(index: number) {
    setActiveIndex(0)
    setLightboxOpen(false)
    setOpenIndex((current) => (current === index ? null : index))
  }

  function showOffset(offset: number) {
    setActiveIndex((index) => wrapIndex(index, offset, screenshots.length))
  }

  useEffect(() => {
    if (!lightboxOpen) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setLightboxOpen(false)
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
  }, [lightboxOpen, screenshots.length])

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
              <span className="text-xs tabular-nums text-muted-foreground">
                {gallery.screenshots.length}
              </span>
            </button>
          )
        })}
      </div>

      {openGallery && activeScreenshot ? (
        <div className="flex flex-col gap-3 mt-4">
          <p className="text-sm text-muted-foreground">
            {openGallery.description}
          </p>

          <figure className="m-0">
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              aria-label={`View screenshot: ${activeScreenshot.caption}`}
              className="block w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-muted/30 hover:border-primary/50 transition-colors cursor-zoom-in"
            >
              <img
                src={activeScreenshot.src}
                alt=""
                loading="lazy"
                decoding="async"
                width={1600}
                height={960}
                className="w-full h-auto block"
              />
            </button>
            <figcaption className="flex items-center justify-between gap-4 mt-2">
              <span className="text-sm text-muted-foreground">
                {activeScreenshot.caption}
              </span>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => showOffset(-1)}
                  aria-label="Previous screenshot"
                  className="size-8 rounded-full border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-xs tabular-nums text-muted-foreground px-1">
                  {activeIndex + 1} / {screenshots.length}
                </span>
                <button
                  type="button"
                  onClick={() => showOffset(1)}
                  aria-label="Next screenshot"
                  className="size-8 rounded-full border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </figcaption>
          </figure>

          <ul className="flex gap-2 overflow-x-auto list-none p-0 m-0 pb-1">
            {screenshots.map((screenshot, index) => (
              <li key={screenshot.src} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show screenshot: ${screenshot.caption}`}
                  aria-current={index === activeIndex}
                  className={`block w-24 rounded-md overflow-hidden border cursor-pointer transition-opacity ${
                    index === activeIndex
                      ? 'border-primary'
                      : 'border-gray-200 dark:border-gray-800 opacity-50 hover:opacity-100'
                  }`}
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
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {lightboxOpen && activeScreenshot ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 p-6">
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
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
              {activeIndex + 1} / {screenshots.length}
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
