import { execSync } from 'child_process'
import fs from 'fs'

const MIN_CHANGES = Number(process.env.MIN_CHANGES || 250)
const LOOKBACK_DAYS = Number(process.env.LOOKBACK_DAYS || 35)

const ALLOWED_PREFIXES = ['content/engineering-notes/', 'src/app/engineering-notes/']

function run(cmd) {
  return execSync(cmd, { encoding: 'utf8' }).trim()
}

function setOutput(name, value) {
  const out = process.env.GITHUB_OUTPUT
  if (out) fs.appendFileSync(out, `${name}=${value}\n`)
}

function daysAgoIso(days) {
  const d = new Date()
  d.setUTCDate(d.getUTCDate() - days)
  return d.toISOString().split('T')[0]
}

const since = daysAgoIso(LOOKBACK_DAYS)

let prs
try {
  prs = JSON.parse(
    run(
      `gh pr list --state merged --search "merged:>=${since}" --json number,title,mergedAt,additions,deletions,author,url,labels`
    )
  )
} catch {
  console.log('Could not query merged PRs via gh CLI; skipping update.')
  setOutput('content_updated', 'false')
  process.exit(0)
}

const meaningful = prs.filter((pr) => (pr.additions ?? 0) + (pr.deletions ?? 0) >= MIN_CHANGES)

const month = new Date().toISOString().slice(0, 7)
const slug = `engineering-update-${month}`
const filePath = `content/engineering-notes/${slug}.md`

if (!meaningful.length) {
  console.log('No meaningful merged activity found; nothing to commit.')
  setOutput('content_updated', 'false')
  process.exit(0)
}

if (fs.existsSync(filePath)) {
  console.log(`Engineering update for ${month} already exists; skipping.`)
  setOutput('content_updated', 'false')
  process.exit(0)
}

const bulletLines = meaningful
  .slice(0, 8)
  .map(
    (pr) =>
      `- [#${pr.number} ${pr.title}](${pr.url}) — merged ${pr.mergedAt?.slice(0, 10) ?? 'unknown'} (+${pr.additions}/-${pr.deletions})`
  )
  .join('\n')

const today = new Date().toISOString().slice(0, 10)
const body = `---
title: "Engineering update — ${month}"
description: "Repository activity summary for ${month}: merged pull requests from the last ${LOOKBACK_DAYS} days."
publishedAt: ${today}
tags: portfolio, engineering-notes, release-notes
readingTimeMinutes: 4
---

# Engineering update (${month})

This note lists **verified merged pull requests** in this repository during the lookback window (${LOOKBACK_DAYS} days). Titles and merge metadata come from GitHub; expand with your own narrative if you publish a longer article elsewhere.

## Merged work

${bulletLines}
`

fs.mkdirSync('content/engineering-notes', { recursive: true })
fs.writeFileSync(filePath, body)

run('git config user.name "github-actions[bot]"')
run('git config user.email "41898282+github-actions[bot]@users.noreply.github.com"')
run('node scripts/sync-engineering-note-pages.mjs')

run(`git add ${filePath}`)
for (const prefix of ALLOWED_PREFIXES) {
  try {
    run(`git add ${prefix}`)
  } catch {
  }
}

const staged = run('git diff --staged --name-only')
const allowedOnly = staged.split('\n').filter(Boolean).every((p) => ALLOWED_PREFIXES.some((pre) => p.startsWith(pre)))
if (!allowedOnly) {
  console.error('Refusing to commit: staged files outside allowlist.')
  run('git reset HEAD')
  setOutput('content_updated', 'false')
  process.exit(1)
}

if (!staged) {
  console.log('No staged changes after sync; skipping commit.')
  setOutput('content_updated', 'false')
  process.exit(0)
}

run(`git commit -m "chore: add engineering update for ${month}"`)
run('git push origin HEAD:main')

setOutput('content_updated', 'true')
console.log(`Committed engineering update referencing ${meaningful.length} merged PR(s).`)