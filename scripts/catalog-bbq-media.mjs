/**
 * Catalog BBQ event MOV clips: extract frames, OCR, sharpness scores.
 * Run: node scripts/catalog-bbq-media.mjs [sourceFolder]
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execFileSync } from 'child_process'
import Tesseract from 'tesseract.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_SOURCE =
  'C:\\Users\\utsav\\Downloads\\BBQ 28.06.2026-20260628T183450Z-3-002\\BBQ 28.06.2026'
const SOURCE = process.argv[2] ?? DEFAULT_SOURCE
const OUT_DIR = path.join(__dirname, 'bbq-media')
const FRAMES_DIR = path.join(OUT_DIR, 'frames')
const CATALOG_PATH = path.join(OUT_DIR, 'bbq-media-catalog.json')

function run(cmd, args) {
  return execFileSync(cmd, args, {
    encoding: 'utf8',
    maxBuffer: 50 * 1024 * 1024,
    stdio: ['pipe', 'pipe', 'pipe'],
  }).trim()
}

function getDurationSec(filePath) {
  const out = run('ffprobe', [
    '-v',
    'quiet',
    '-show_entries',
    'format=duration',
    '-of',
    'default=noprint_wrappers=1:nokey=1',
    filePath,
  ])
  return parseFloat(out)
}

function getSharpnessScore(imagePath) {
  if (!fs.existsSync(imagePath)) return 0
  return Math.round(fs.statSync(imagePath).size / 1024)
}

function suggestTags(ocrText, sharpnessScore) {
  const text = ocrText.toLowerCase()
  const tags = []
  if (/bbq|barbecue|grill|smoke|fire|char/.test(text)) tags.push('grill')
  if (/menu|wine|beer|drink|cocktail/.test(text)) tags.push('menu')
  if (/dine|devang|chef/.test(text)) tags.push('brand')
  if (sharpnessScore > 30) tags.push('sharp')
  if (sharpnessScore < 10) tags.push('soft')
  return tags.length ? tags : ['general']
}

async function ocrFrame(imagePath) {
  const { data } = await Tesseract.recognize(imagePath, 'eng', {
    logger: () => {},
  })
  return data.text.replace(/\s+/g, ' ').trim()
}

function extractFrame(videoPath, timeSec, outPath) {
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  run('ffmpeg', [
    '-ss',
    String(timeSec),
    '-i',
    videoPath,
    '-frames:v',
    '1',
    '-q:v',
    '2',
    '-update',
    '1',
    '-y',
    outPath,
  ])
}

async function catalogClip(filePath) {
  const name = path.basename(filePath)
  const stat = fs.statSync(filePath)
  const durationSec = getDurationSec(filePath)
  const clipStem = path.parse(name).name
  const frameDir = path.join(FRAMES_DIR, clipStem)
  const sampleTimes = [0, 0.25, 0.5, 0.75].map((p) =>
    Math.min(Math.max(durationSec * p, 0), Math.max(durationSec - 0.1, 0))
  )

  const frames = []
  for (let i = 0; i < sampleTimes.length; i++) {
    const timeSec = Math.round(sampleTimes[i] * 100) / 100
    const frameName = `frame-${String(i).padStart(2, '0')}-${timeSec}s.jpg`
    const framePath = path.join(frameDir, frameName)
    extractFrame(filePath, timeSec, framePath)
    const sharpnessScore = getSharpnessScore(framePath)
    const ocrText = await ocrFrame(framePath)
    frames.push({
      timeSec,
      path: path.relative(OUT_DIR, framePath).replace(/\\/g, '/'),
      ocrText,
      sharpnessScore: Math.round(sharpnessScore * 100) / 100,
      suggestedTags: suggestTags(ocrText, sharpnessScore),
    })
  }

  const bestFrame = [...frames].sort((a, b) => b.sharpnessScore - a.sharpnessScore)[0]
  const allTags = [...new Set(frames.flatMap((f) => f.suggestedTags))]

  return {
    clip: name,
    captureOrder: parseInt(clipStem.replace(/\D/g, ''), 10) || 0,
    durationSec: Math.round(durationSec * 100) / 100,
    sizeBytes: stat.size,
    modifiedAt: stat.mtime.toISOString(),
    frames,
    bestFrameTimeSec: bestFrame.timeSec,
    suggestedTags: allTags,
  }
}

async function main() {
  if (!fs.existsSync(SOURCE)) {
    console.error('Source folder not found:', SOURCE)
    process.exit(1)
  }

  fs.mkdirSync(FRAMES_DIR, { recursive: true })

  const clips = fs
    .readdirSync(SOURCE)
    .filter((f) => /\.mov$/i.test(f))
    .sort()
    .map((f) => path.join(SOURCE, f))

  console.log(`Cataloging ${clips.length} clips from ${SOURCE}`)

  const catalog = []
  for (const clipPath of clips) {
    console.log('Processing', path.basename(clipPath))
    catalog.push(await catalogClip(clipPath))
  }

  catalog.sort((a, b) => a.captureOrder - b.captureOrder)

  const output = {
    generatedAt: new Date().toISOString(),
    sourceFolder: SOURCE,
    clipCount: catalog.length,
    totalDurationSec: Math.round(catalog.reduce((s, c) => s + c.durationSec, 0) * 100) / 100,
    clips: catalog,
  }

  fs.writeFileSync(CATALOG_PATH, JSON.stringify(output, null, 2))
  console.log('Wrote', CATALOG_PATH)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
