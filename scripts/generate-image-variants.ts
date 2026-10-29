// Generates the `srcset` widths used by the responsive <img> tags.
// Run with `bun run images` after adding or replacing a source image.
import { readdirSync } from 'node:fs'
import { basename, dirname, extname, resolve } from 'node:path'
import sharp from 'sharp'

const ROOT = resolve(import.meta.dir, '..')

// Match the CSS widths in the components: 288px gallery thumbs, ~660px hero, 48px logos.
const TARGETS: Record<string, number[]> = {
  'public/images/experience': [640, 1280],
  'public/images/companies': [96],
}

for (const [dir, widths] of Object.entries(TARGETS)) {
  for (const file of readdirSync(resolve(ROOT, dir), {
    recursive: true,
    withFileTypes: true,
  })) {
    if (!file.isFile() || extname(file.name) !== '.webp') continue
    if (/\.\d+w\.webp$/.test(file.name)) continue

    const source = resolve(file.parentPath, file.name)
    const image = sharp(source)
    const { width } = await image.metadata()
    const stem = basename(file.name, extname(file.name))

    for (const target of widths) {
      if (!width || target >= width) continue
      await image
        .clone()
        .resize({ width: target })
        .webp({ quality: 80, effort: 5 })
        .toFile(resolve(dirname(source), `${stem}.${target}w.webp`))
    }
  }
}
