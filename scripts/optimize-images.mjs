import sharp from 'sharp'
import path from 'node:path'

const assetsDir = path.resolve(import.meta.dirname, '../src/assets')

const jobs = [
  { file: 'cta-cityscape.png', out: 'cta-cityscape.webp', width: 1920, quality: 70 },
  { file: 'founder.png', out: 'founder.webp', width: 240, quality: 85 },
  { file: 'logo.png', out: 'logo.webp', width: 400, quality: 90 },
]

for (const job of jobs) {
  const input = path.join(assetsDir, job.file)
  const output = path.join(assetsDir, job.out)
  await sharp(input)
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality })
    .toFile(output)
  console.log(`${job.file} -> ${job.out}`)
}
