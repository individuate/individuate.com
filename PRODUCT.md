# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static site with a tiny build step (confirmed 2026-10-05): Eleventy, or an equivalent dependency-light generator, assembles shared layouts and Markdown support/privacy pages into plain HTML. Hosted on GitHub Pages under the `individuate` GitHub org, the same as the sibling sites. Cloudflare is DNS-only (grey cloud), the same as `loveyourfoodplan.com` and `music-prism.com`.

## Users

- **People who already have one of the apps** and need help or a privacy answer. They arrive from an in-app Help link, an App Store "Support URL" or "Privacy Policy URL" field, or a search. They want the answer, or the support address, fast.
- **People evaluating an app.** They arrive from an app's own domain (redirected), a link, or a search. They want to know what the app does, whether it's for them, and how to get it.
- **App reviewers.** Apple App Store review requires a reachable privacy policy URL and support URL for Affirmable.

## Product Purpose

individuate.com is the one home for Individuate LLC's apps. It replaces the friction of running a separate website per app. It holds:

1. A consolidated listing of every app.
2. One canonical page per app at `individuate.com/<app>`, plus one support page and one privacy policy covering every app (`/support`, `/privacy`), each with a section per app at `#<app>` (consolidated 2026-10-05: every app shares the same TelemetryDeck setup, so the policies are standardized).

Success means that adding the next app is just adding pages, not a new website, and that every app has a support URL and privacy URL that can be pasted into the App Store or an About box.

## Positioning

Individuate makes targeted software for individuals: small, focused apps, mostly for macOS, each built around a **passion**, not a job (owner's framing, 2026-10-05). So far that means food, music, writing, and the way you talk to yourself. The copy speaks to what a person loves doing, never to productivity or tasks. They're local-first, with no login and no cloud account. The company is nearly invisible. **The apps are the page**, and Individuate is a quiet colophon, not a brand voice.

## Operating Context

- **Domain plan (confirmed): the mothership is canonical.** Each app's domain (e.g. `loveyourfoodplan.com`, `music-prism.com`, and future ones) will 301-redirect to `individuate.com/<app>`. The existing standalone sites move in over time, and nothing is forced on day one.
- **URL shape (confirmed):** `/foodplan`, `/musicprism`, `/proseprimer`, `/affirmable`, plus shared `/support` and `/privacy` with `#<app>` sections. The earlier `/<app>/support` and `/<app>/privacy` redirect there, and so do `/support/<app>` and `/privacy/<app>` (Affirmable's App Store listing uses `/support/affirmable`).
- **Downloads and auto-update stay where they are.** The `individuate/loveyourfoodplan.com` and `individuate/music-prism.com` repos host the signed `.dmg` releases and the Sparkle `appcast.xml`. Every installed copy's `SUFeedURL` points there. Those repos must never be deleted or renamed, and their releases must never be moved, even after their HTML moves to individuate.com. Download buttons link to `github.com/individuate/<repo>/releases/latest/download/<App>.dmg`.
- Distribution today is direct download (signed, notarized `.dmg` + Sparkle). App Store distribution may be added later, and Affirmable is App Store–only.

## Capabilities and Constraints

The apps, as of 2026-10-05:

| App | Platform | Tech | Distribution | Status |
|---|---|---|---|---|
| Love Your Food Plan | macOS (Windows possible someday) | SwiftUI (confirmed; not Tauri) | Direct download | Shipping |
| Music Prism | macOS (Windows possible) | Tauri | Direct download, free | Shipping |
| Prose Primer | macOS | Swift | Direct download (planned) | Not yet released |
| Affirmable | iOS & iPadOS | Swift | App Store | 2.0 approved 2026-10-10 and released on the existing listing (apps.apple.com/app/id792864321); the original shipped ~2014 |
| SteadyTending | macOS 15+ | Tauri | Direct download (planned; releases at `individuate/steadytending.com`) | Listed as in progress (owner, 2026-10-05). Its own repo's PRODUCT.md binds claims: not a medical device, no wellness clichés, no publishing personal health data |

- Support contact: **support@individuate.com**, one address for all apps. Music Prism's shipped feedback composer targets `hello@individuate.com`, so both addresses must reach the owner.
- **Telemetry (confirmed 2026-10-05):** every app and individuate.com itself send anonymous TelemetryDeck signals (no cookies, no PII, hashed per-install IDs). Every privacy page discloses this, and the site's own privacy note does too.
- Affirmable's shipped About screen links to `individuate.com/apps/affirmable/`, so `/apps/<app>/` must redirect to `/<app>/`.
- The support and privacy pages were drafted by Claude from what each repo shows the app does; the owner took the draft stamp off both on 2026-10-06. Open questions for the unreleased apps (and Affirmable 2.0) stay as `{# REVIEW #}` template comments in `src/privacy.md`, which never reach the published page.
- Unreleased apps must not show a download button or invented dates. They may appear in the listing honestly marked as in development.
- **Only name a platform that ships.** Windows and iPad are internal considerations, not public claims. No "coming soon" for platforms.
- Each app's own PRODUCT.md (in its repo) owns that app's claims and evidence discipline. This site never invents claims an app's repo forbids. In particular, Music Prism forbids any price or license claim, and it forbids staging chord diagrams as interactive demos.

## Brand Commitments

- Company name: **Individuate LLC**. It is near-invisible on the site. It is not a personal "I" voice and not a "we" studio voice. The apps speak.
- Each app keeps its own established visual identity (Love Your Food Plan's editorial-warm world; Music Prism's "Engraver's Proof"; Prose Primer's own DESIGN.md). The individuate.com frame must host them without flattening them into one look.
- Shared stance across the apps' existing copy: "Old-school macOS app. No login. No cloud."
- The site should be clean and minimal, but not corporate or generic (owner's brief).

## Evidence on Hand

- App icons, screenshots, and copy live in each app's repo (`~/dev/LoveYourFoodPlan/marketing/`, `~/dev/MusicPrism/musicprism/marketing/`, `~/dev/prose-primer/`, `~/dev/Affirmable/Affirmable2026/`).
- Copy from the existing marketing sites can be reused for each app's overview.
- **Absent and must not be invented:** testimonials, user counts, press, ratings, prices (beyond what an app's own repo confirms), release dates for unreleased apps, and App Store URLs that don't exist yet.

## Product Principles

1. **The apps are the page.** The company frame recedes, and each app arrives in its own colors and voice.
2. **One place, durable URLs.** Every app gets the same predictable paths (`/<app>`, `/support#<app>`, `/privacy#<app>`), and old ones redirect, stable enough to bake into binaries and store listings.
3. **Answers before persuasion.** Support and privacy are first-class pages, not footer afterthoughts.
4. **Honest about state.** Shipping, in development, and platform claims are always exactly true.
5. **Adding an app is adding a folder.** The structure scales without a redesign.
