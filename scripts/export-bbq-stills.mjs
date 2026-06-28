/**
 * Score frames by JPEG size (proxy for detail) and export curated website stills.
 * Run after catalog-bbq-media.mjs: node scripts/export-bbq-stills.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execFileSync } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, 'bbq-media')
const CATALOG_PATH = path.join(OUT_DIR, 'bbq-media-catalog.json')
const SOURCE =
  'C:\\Users\\utsav\\Downloads\\BBQ 28.06.2026-20260628T183450Z-3-002\\BBQ 28.06.2026'
const PUBLIC_DIR = path.join(__dirname, '..', 'public', 'images', 'bbq')

/** clip stem -> timeSec for website picks (reviewed from extracted frames) */
const PICKS = [
  { out: 'bbq-hero.jpg', clip: 'IMG_2272', timeSec: 2.85, alt: 'Garden BBQ setup under white marquee' },
  { out: 'bbq-grill-01.jpg', clip: 'IMG_2307', timeSec: 11.68, alt: 'Chicken tikka and kebabs on the grill' },
  { out: 'bbq-food-01.jpg', clip: 'IMG_2294', timeSec: 5.11, alt: 'BBQ buffet with salads and sides' },
  { out: 'bbq-guests-01.jpg', clip: 'IMG_2285', timeSec: 5.35, alt: 'Chef serving guests at the BBQ' },
  { out: 'bbq-chef-01.jpg', clip: 'IMG_2295', timeSec: 9.58, alt: 'Chef Devang at the grill' },
  { out: 'bbq-atmosphere-01.jpg', clip: 'IMG_2306', timeSec: 4.01, alt: 'Multi-generational garden party' },
  { out: 'bbq-prep-01.jpg', clip: 'IMG_2311', timeSec: 4.38, alt: 'Live cooking at the BBQ station' },
]

function run(cmd, args) {
  execFileSync(cmd, args, { stdio: 'pipe' })
}

function exportFrame(clipStem, timeSec, outPath) {
  const videoPath = path.join(SOURCE, `${clipStem}.MOV`)
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  run('ffmpeg', [
    '-ss',
    String(timeSec),
    '-i',
    videoPath,
    '-frames:v',
    '1',
    '-vf',
    'scale=1920:-2',
    '-q:v',
    '3',
    '-update',
    '1',
    '-y',
    outPath,
  ])
}

function scoreCatalog(catalog) {
  for (const clip of catalog.clips) {
    for (const frame of clip.frames) {
      const framePath = path.join(OUT_DIR, frame.path.replace(/\//g, path.sep))
      frame.fileSizeBytes = fs.existsSync(framePath) ? fs.statSync(framePath).size : 0
      frame.sharpnessScore = Math.round(frame.fileSizeBytes / 1024)
    }
    clip.frames.sort((a, b) => b.sharpnessScore - a.sharpnessScore)
    clip.bestFrameTimeSec = clip.frames[0]?.timeSec ?? 0
  }
  fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2))
}

function main() {
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'))
  scoreCatalog(catalog)

  fs.mkdirSync(PUBLIC_DIR, { recursive: true })
  for (const pick of PICKS) {
    const outPath = path.join(PUBLIC_DIR, pick.out)
    exportFrame(pick.clip, pick.timeSec, outPath)
    console.log('Exported', pick.out)
  }

  const picksMeta = {
    generatedAt: new Date().toISOString(),
    picks: PICKS.map((p) => ({
      ...p,
      publicPath: `/images/bbq/${p.out}`,
    })),
  }
  fs.writeFileSync(path.join(OUT_DIR, 'bbq-picks.json'), JSON.stringify(picksMeta, null, 2))
  console.log('Done.')
}

main()
