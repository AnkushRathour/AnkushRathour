import { execSync } from 'child_process'
import fs from 'fs'

const MIN_CHANGES = Number(process.env.MIN_CHANGES || 250)
const LOOKBACK_DAYS = Number(process.env.LOOKBACK_DAYS || 35)

function run(cmd) {
  return execSync(cmd, { encoding: 'utf8' }).trim()
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
} catch (error) {
  console.log('Could not query merged PRs via gh CLI; skipping update.')
  process.exit(0)
}

const meaningful = prs.filter((pr) => (pr.additions ?? 0) + (pr.deletions ?? 0) >= MIN_CHANGES)

const month = new Date().toISOString().slice(0, 7)
const slug = `draft-engineering-notes-${month}`
const filePath = `content/engineering-notes/${slug}.md`

const bulletLines = meaningful
  .slice(0, 8)
  .map(
    (pr) =>
      `- [#${pr.number} ${pr.title}](${pr.url}) — merged ${pr.mergedAt?.slice(0, 10) ?? 'unknown'} (+${pr.additions}/-${pr.deletions})`
  )
  .join('\n')

const body = `---
title: "Engineering update draft — ${month}"
description: "Proposed engineering notes outline based on verified merged pull requests from the last ${LOOKBACK_DAYS} days."
publishedAt: ${new Date().toISOString().slice(0, 10)}
tags: portfolio, engineering-notes, draft
readingTimeMinutes: 5
---

# Engineering update draft (${month})

This draft was generated from merged pull requests in this repository. **Review, edit, and remove anything that must not be public before publishing.**

## Verified merged work

${bulletLines}

## Suggested article sections

- Problem and context (from PR titles only — expand with your notes)
- Technical approach
- Trade-offs and lessons
- Follow-up work

> Auto-generated outline only. Do not publish without manual review.
`

if (!meaningful.length) {
  console.log('No meaningful merged activity found; no PR will be created.')
  process.exit(0)
}

fs.mkdirSync('content/engineering-notes', { recursive: true })
if (fs.existsSync(filePath)) {
  console.log(`Draft already exists for ${month}; skipping.`)
  process.exit(0)
}
fs.writeFileSync(filePath, body)

run('git config user.name "github-actions[bot]"')
run('git config user.email "41898282+github-actions[bot]@users.noreply.github.com"')
run(`git checkout -b chore/${slug}`)
run(`git add ${filePath}`)
run('node scripts/sync-engineering-note-pages.mjs')
run('git add src/app/engineering-notes || true')
run(`git commit -m "chore: propose engineering notes draft for ${month}"`)
run(`git push -u origin chore/${slug}`)
run(
  `gh pr create --title "Proposed engineering notes draft (${month})" --body "Automated monthly draft based on verified merged PR activity. Review content before merging."`
)

console.log(`Created draft PR with ${meaningful.length} referenced merged PR(s).`)