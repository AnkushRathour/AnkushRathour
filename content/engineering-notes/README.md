# Engineering Notes (`content/engineering-notes/`)

Markdown files here power `/engineering-notes/`. Each **`.md` file** (except this README) becomes one listing card and one static page after build.

## How the pipeline works

1. Add or edit `your-slug.md` in this folder.
2. **`npm run build`** runs `scripts/sync-engineering-note-pages.mjs`, which generates  
   `src/app/engineering-notes/<slug>/page.tsx` for static export.
3. At build time, `getAllEngineeringNotes()` reads frontmatter for the index and sitemap.

You do **not** hand-write routes under `src/app/engineering-notes/<slug>/`; the sync script owns those files.

## Frontmatter (required)

```yaml
---
title: Article title
description: Short summary for SEO and the listing card
publishedAt: 2026-10-12
updatedAt: 2026-01-20
tags: python, snowflake
readingTimeMinutes: 8
---
```

Optional fields:

| Field | Purpose |
|--------|--------|
| `externalUrl` | Full article on Medium (or elsewhere). Portfolio page shows summary + link; **canonical SEO** points here. |
| `source` | Set to `medium` for a Medium badge on the listing. |

## Showing Medium articles (without copying the full post)

Do **not** paste the entire Medium article into the repo. Add a short **summary** in the body and link out:

```yaml
---
title: Your Medium title
description: One-line summary for cards and SEO
publishedAt: 2026-10-12
externalUrl: https://ankushrathour.medium.com/your-post-slug
source: medium
tags: python, snowflake
---

A short teaser paragraph (2–4 sentences). The full guide lives on Medium.
```

Add one `.md` file per Medium post you want listed. Profile link: [medium.com/@ankushrathour](https://medium.com/@ankushrathour).

## Hosted on the portfolio (full article)

Omit `externalUrl`. Put the full article body in Markdown below the frontmatter (rendered as preformatted text until MDX is added).