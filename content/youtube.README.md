# YouTube feed

## What you need in git

| File | Purpose |
|------|---------|
| **`youtube.config.json`** | **Keep.** Channel ID, channel URL, and `maxItems` (how many latest uploads to show). |
| **`youtube-videos.json`** | **Generated.** Do not edit by hand unless you want to pin/reorder a one-off; it is refreshed automatically (see below). |

## How videos are loaded (not manual)

The site uses **static export** (GitHub Pages). There is no server at runtime, so the app cannot call YouTube on every visitor request.

Instead:

1. **`scripts/sync-youtube-feed.mjs`** fetches the public YouTube RSS feed  
   `https://www.youtube.com/feeds/videos.xml?channel_id=…` (no API key).
2. It writes the latest uploads to **`content/youtube-videos.json`**.
3. **`npm run build`** runs that script in **`prebuild`**, then Next.js bakes the list into the homepage HTML.

So production deploys always pull **latest videos at build time**. You are not meant to maintain the JSON like a CMS.

## Local development

`npm run dev` does not run `prebuild`. For fresh data locally:

```bash
npm run sync:youtube
```

Or run a full `npm run build` (which syncs first).

## Why a JSON file at all?

- Fast, reliable homepage (no client-side YouTube API, no extra layout shift).
- Works with static hosting and matches how engineering notes are built from `content/`.
- CI/deploy network fetch happens once per build, not on every page view.

## Optional overrides

Edit **`youtube-videos.json` only** if you need to fix a title, hide one entry, or pin order until the next deploy sync overwrites it.

## GitHub Actions / cron

| Workflow | Schedule | Rebuilds site? | Fresh YouTube on live site? |
|----------|----------|----------------|----------------------------|
| **Deploy to GitHub Pages** | Every push to `main`, manual, **Mon 08:00 UTC** | Yes — deploys `out/` | **Yes** — sync runs before build |
| **Weekly health check** | Mon 07:30 UTC, PRs | Build only (no deploy) | No (CI validation only) |
| **Monthly engineering update** | 1st of month | No — may open a PR for notes | No |

Production YouTube rows update when **Deploy** runs (including the weekly scheduled rebuild). The JSON in git may stay unchanged; the deployed HTML uses whatever was fetched during that build.