import fs from 'fs'
import path from 'path'

const OUT_DIR = path.resolve('out')
const REQUIRED_ROUTES = [
  'index.html',
  'about/index.html',
  'tech-stack/index.html',
  'projects/index.html',
  'showcase/index.html',
  'contact/index.html',
  'engineering-notes/index.html',
  'projects/audiomaker/index.html',
  'engineering-notes-feed.xml',
  'sitemap.xml',
  'robots.txt',
]

let failed = false

for (const route of REQUIRED_ROUTES) {
  const filePath = path.join(OUT_DIR, route)
  if (!fs.existsSync(filePath)) {
    console.error(`Missing export artifact: ${route}`)
    failed = true
  }
}

const sitemap = fs.readFileSync(path.join(OUT_DIR, 'sitemap.xml'), 'utf8')
const requiredUrls = [
  'https://ankushrathour.com/',
  'https://ankushrathour.com/about/',
  'https://ankushrathour.com/tech-stack/',
  'https://ankushrathour.com/projects/',
  'https://ankushrathour.com/showcase/',
  'https://ankushrathour.com/contact/',
  'https://ankushrathour.com/engineering-notes/',
  'https://ankushrathour.com/projects/audiomaker/',
]

for (const url of requiredUrls) {
  if (!sitemap.includes(url)) {
    console.error(`sitemap.xml missing URL: ${url}`)
    failed = true
  }
}

const robots = fs.readFileSync(path.join(OUT_DIR, 'robots.txt'), 'utf8')
if (!robots.includes('Sitemap: https://ankushrathour.com/sitemap.xml')) {
  console.error('robots.txt missing sitemap reference')
  failed = true
}

if (failed) process.exit(1)
console.log('Static export validation passed.')