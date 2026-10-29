import { type RefObject, useEffect, useId, useState } from 'react'

/**
 * Lens map margins. The filter region must be larger than the element, otherwise
 * Chromium has no backdrop pixels to sample at the rim and the edges go dark.
 */
const REGION_MARGIN_X = 0.25
const REGION_MARGIN_Y = 0.5

/** Width of the refractive bevel, as a fraction of element height. */
const BEZEL_RATIO = 0.22

/** Peak edge displacement in CSS pixels. */
const DISPLACEMENT = 6

/** Cap on the generated map size, keeps toDataURL and the pixel loop cheap. */
const MAX_MAP_SIDE = 1200

const BACKDROP_BLUR = 'blur(2px) saturate(180%) brightness(1.03)'

/** 1x1 neutral grey, so the filter always resolves before the real map is ready. */
const NEUTRAL_MAP = `data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'><rect width='1' height='1' fill='#808080'/></svg>",
)}`

interface LensMap {
  url: string
  scale: number
}

interface LiquidGlassFilterProps {
  targetRef: RefObject<HTMLElement | null>
  displacement?: number
  bezelRatio?: number
}

function roundedRectDistance(
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  const qx = Math.abs(x - width / 2) - (width / 2 - radius)
  const qy = Math.abs(y - height / 2) - (height / 2 - radius)
  const outside = Math.hypot(Math.max(qx, 0), Math.max(qy, 0))
  return Math.min(Math.max(qx, qy), 0) + outside - radius
}

/**
 * Renders a displacement map of the element's own silhouette: neutral grey in the
 * middle, bending only across a bevel at the rim. That is what a lens does - the
 * centre stays clear, the edge refracts. Feeds R/G to feDisplacementMap.
 */
function buildLensMap(
  width: number,
  height: number,
  radius: number,
  bezel: number,
  displacement: number,
): LensMap | null {
  const regionWidth = width * (1 + REGION_MARGIN_X * 2)
  const regionHeight = height * (1 + REGION_MARGIN_Y * 2)
  const downscale = Math.min(
    1,
    MAX_MAP_SIDE / Math.max(regionWidth, regionHeight),
  )
  const mapWidth = Math.max(1, Math.round(regionWidth * downscale))
  const mapHeight = Math.max(1, Math.round(regionHeight * downscale))
  const stepX = regionWidth / mapWidth
  const stepY = regionHeight / mapHeight
  const originX = width * REGION_MARGIN_X
  const originY = height * REGION_MARGIN_Y
  const eps = Math.max(0.75, Math.min(width, height) / 100)

  const canvas = document.createElement('canvas')
  canvas.width = mapWidth
  canvas.height = mapHeight
  const context = canvas.getContext('2d')
  if (!context) return null

  const image = context.createImageData(mapWidth, mapHeight)
  const data = image.data

  for (let py = 0; py < mapHeight; py++) {
    for (let px = 0; px < mapWidth; px++) {
      const x = px * stepX - originX
      const y = py * stepY - originY
      const index = (py * mapWidth + px) * 4
      // Chromium premultiplies alpha, a zero alpha pixel displaces nothing.
      data[index + 3] = 255

      const inside = -roundedRectDistance(x, y, width, height, radius)
      const falloff = inside > 0 ? (1 - Math.min(inside / bezel, 1)) ** 2 : 0

      if (falloff <= 0.001) {
        data[index] = 128
        data[index + 1] = 128
        continue
      }

      const gradientX =
        roundedRectDistance(x + eps, y, width, height, radius) -
        roundedRectDistance(x - eps, y, width, height, radius)
      const gradientY =
        roundedRectDistance(x, y + eps, width, height, radius) -
        roundedRectDistance(x, y - eps, width, height, radius)
      const length = Math.hypot(gradientX, gradientY) || 1
      const amount = (falloff * 0.5) / length

      data[index] = Math.round((0.5 - gradientX * amount) * 255)
      data[index + 1] = Math.round((0.5 - gradientY * amount) * 255)
    }
  }

  context.putImageData(image, 0, 0)
  // scale is doubled because the map encodes displacement in a 0..1 range.
  return { url: canvas.toDataURL('image/png'), scale: displacement * 2 }
}

/**
 * `backdrop-filter: url()` is Chromium only, and CSS.supports lies about it in
 * Safari and Firefox - they report support and then paint nothing.
 */
function supportsBackdropRefraction() {
  if (typeof navigator === 'undefined') return false
  return (
    /Chrome\/|Chromium\/|Edg\/|OPR\//.test(navigator.userAgent) &&
    !/Firefox\//.test(navigator.userAgent)
  )
}

export function LiquidGlassFilter({
  targetRef,
  displacement = DISPLACEMENT,
  bezelRatio = BEZEL_RATIO,
}: LiquidGlassFilterProps) {
  const filterId = `liquid-glass-${useId().replace(/:/g, '')}`
  const [map, setMap] = useState<LensMap | null>(null)

  useEffect(() => {
    const target = targetRef.current
    if (!target || !supportsBackdropRefraction()) return

    let frame = 0
    let lastKey = ''

    function render() {
      if (!target) return
      const rect = target.getBoundingClientRect()
      if (rect.width < 2 || rect.height < 2) return

      const radius = Math.min(
        Number.parseFloat(getComputedStyle(target).borderTopLeftRadius) || 0,
        rect.height / 2,
      )
      const bezel = Math.max(rect.height * bezelRatio, 6)
      const key = `${rect.width}:${rect.height}:${radius}`
      target.style.backdropFilter = `url(#${filterId}) ${BACKDROP_BLUR}`

      if (key === lastKey) return
      lastKey = key

      const next = buildLensMap(
        rect.width,
        rect.height,
        radius,
        bezel,
        displacement,
      )
      if (next) setMap(next)
    }

    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(render)
    })

    observer.observe(target)
    render()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [targetRef, filterId, displacement, bezelRatio])

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute size-0 overflow-hidden"
    >
      <filter
        id={filterId}
        x={`${-REGION_MARGIN_X * 100}%`}
        y={`${-REGION_MARGIN_Y * 100}%`}
        width={`${(1 + REGION_MARGIN_X * 2) * 100}%`}
        height={`${(1 + REGION_MARGIN_Y * 2) * 100}%`}
        colorInterpolationFilters="sRGB"
      >
        <feImage
          href={map?.url ?? NEUTRAL_MAP}
          x="0"
          y="0"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          result="lens"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="lens"
          scale={map?.scale ?? 0}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  )
}
