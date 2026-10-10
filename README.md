# individuate.com

The collection of Individuate LLC apps. Each app has a room at `/<app>/`. Support and privacy are one shared page each, with a section per app at `/support/#<app>` and `/privacy/#<app>`.

```
npm install
npm run dev      # http://localhost:8080, rebuilds on save
npm run build    # writes _site/
```

## Layout

| Path | What it is |
|---|---|
| `src/_data/apps.js` | The collection: one entry per app (name, medium, requirements, state, download URL). Every page reads from it. |
| `src/index.njk` | Home: the hang (one column per app). |
| `src/<app>/index.njk` | The app's room. Each room is composed in its own way; the shared head, desk, and "Also in the collection" come from `room.njk`. |
| `src/support.md`, `src/privacy.md` | The one support page and the one privacy policy: shared rules first, then a section per app (`appHead` in `macros.njk` gives each its `#<slug>` anchor). `reviewed: false` shows a "Draft for review" stamp; set it to `true` once you've approved the text. |
| `src/_data/redirects.js`, `src/redirects.njk` | Old addresses kept alive: `/apps/<app>/` → `/<app>/` (Affirmable's shipped About screen), and `/<app>/support/`, `/<app>/privacy/`, `/support/<app>/`, `/privacy/<app>/` (Affirmable's App Store listing) → the app's section on the shared pages. |
| `src/assets/site.css` | The whole visual system: room palettes live under `[data-room="…"]`. |
| `scripts/sync-musicprism.mjs` | Copies Music Prism's captures (light and dark), printed sheets, app-drawn chord diagrams (into `src/_includes/musicprism/`), and latest version from the app repo. Run `node scripts/sync-musicprism.mjs` after that repo reshoots or ships, then rebuild. |
| `src/_data/site.js` | Support address and the website's TelemetryDeck app ID (the script is omitted until it's set). |

## Adding an app

1. Add an entry to `src/_data/apps.js`.
2. Add a folder `src/<slug>/` with `<slug>.json` (`{ "appSlug": "<slug>" }`) and `index.njk`.
3. Add a `{{ appHead(apps | app("<slug>")) }}` section to `src/support.md` and `src/privacy.md`, in collection order.
4. Give the room a wall: add a `[data-room="<slug>"]` block in `site.css` with its palette.
5. Put a 640px webp icon at `src/assets/img/<slug>-icon.webp` and a 180px PNG at `<slug>-icon-180.png`.

## Deploying

Pushing to `main` on a GitHub repo (suggested: `individuate/individuate.com`) runs `.github/workflows/pages.yml`, which builds and publishes `_site/` to GitHub Pages. In the repo's settings, set **Pages ▸ Source** to **GitHub Actions** and the custom domain to `individuate.com`.

DNS (Cloudflare, DNS-only/grey cloud, the same as the other two sites): the apex carries GitHub Pages' four A records, and `www` is a CNAME to `individuate.github.io`.

## Forwarding the app domains

Each app domain should 301 to its room, keeping the path, e.g. `loveyourfoodplan.com/*` → `https://individuate.com/foodplan/`. A Cloudflare Redirect Rule (Rules ▸ Redirect Rules) on each zone does this. That zone's records then need to be **proxied** (orange cloud) so Cloudflare can answer the redirect.

**Do not delete or rename `individuate/loveyourfoodplan.com` or `individuate/music-prism.com`.** They host the signed `.dmg` releases and the Sparkle `appcast.xml` that every installed copy polls. Moving the website's HTML away from them is fine; their Releases must stay exactly where they are. The download buttons here link straight to those releases.

Before switching a domain over, remove its CNAME from the old Pages repo (or leave Pages serving it until the redirect rule is live) so the two don't fight.

## Before launch

- [ ] Review the shared support and privacy pages (`reviewed: false` shows the stamp). `src/privacy.md` has `<!-- REVIEW -->` notes on what couldn't be confirmed from code.
- [ ] For App Store listings and new About boxes, use `https://individuate.com/support/` and `https://individuate.com/privacy/` (or with `#<app>`). The old per-app URLs redirect.
- [ ] Confirm the years on the labels: Food Plan 2026, Music Prism 2026, Affirmable 2014.
- [ ] Make sure `hello@individuate.com` (Music Prism's in-app feedback) and `support@individuate.com` reach the same inbox.
- [ ] SteadyTending: decide whether any screenshot-catalog frames are demo data and can be hung in its room (none published so far; they may show real health data).
- [ ] Create `individuate/individuate.com`, push, and set Pages ▸ Source to GitHub Actions with the custom domain.
- [ ] Point each app domain at its room (see "Forwarding the app domains" above).
