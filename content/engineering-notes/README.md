# Engineering Notes

Add Markdown articles here when you have real content to publish.

## Frontmatter

```yaml
---
title: Article title
description: Short summary for SEO and listings
publishedAt: 2026-01-15
updatedAt: 2026-01-20
tags: python, fastapi, ai
readingTimeMinutes: 8
---

Article body in Markdown (rendered as preformatted text until MDX is added).
```

Do not commit placeholder or fabricated articles.

After adding a `.md` file, run `npm run build` (or `node scripts/sync-engineering-note-pages.mjs`) to generate the static route under `src/app/engineering-notes/<slug>/`.