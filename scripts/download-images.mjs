/**
 * Downloads the 11 Lovable asset images into public/images/
 * Run: node scripts/download-images.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = 'https://divine-vision-craft.lovable.app/assets'
const OUT = path.join(__dirname, '..', 'public', 'images')

const FILES = [
  ['hero-chef-plating.jpg', 'hero-chef-plating-kUxFzLqA.jpg'],
  ['chef-devang-shah.jpg', 'chef-devang-shah-Ciq9GXiN.jpg'],
  ['event-private-dining.jpg', 'event-private-dining-C1veflok.jpg'],
  ['event-garden-bbq.jpg', 'event-garden-bbq-3Ljtsnf4.jpg'],
  ['event-canapes.jpg', 'event-canapes-hmK0patb.jpg'],
  ['event-corporate.jpg', 'event-corporate-C6UhqiaE.jpg'],
  ['event-wedding.jpg', 'event-wedding-CR6_-VeH.jpg'],
  ['venue-prestigious.jpg', 'venue-prestigious-0O349wCx.jpg'],
  ['menu-vegetarian.jpg', 'menu-vegetarian-D6_pcYgg.jpg'],
  ['menu-nonveg.jpg', 'menu-nonveg-D-t8An3c.jpg'],
  ['menu-international.jpg', 'menu-international-CKNKAfTl.jpg'],
]

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true })

for (const [localName, remoteName] of FILES) {
  const url = `${BASE}/${remoteName}`
  const outPath = path.join(OUT, localName)
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
    const buf = await res.arrayBuffer()
    fs.writeFileSync(outPath, Buffer.from(buf))
    console.log('OK', localName)
  } catch (e) {
    console.error('FAIL', localName, e.message)
  }
}
