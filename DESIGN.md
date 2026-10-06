---
name: Individuate
description: The Permanent Collection. Each app hangs as a work on a painted wall, labelled like a museum piece, with Individuate only on the room sign and colophon.
colors:
  corridor-wall: "#27392f"
  corridor-wall-lit: "#36503f"
  corridor-floor: "#1d2b23"
  corridor-ink: "#eceee7"
  corridor-ink-soft: "#b9c6b8"
  corridor-ink-faint: "#9fb3a2"
  corridor-brass: "#d7b56d"
  corridor-plaque: "#eceee7"
  corridor-plaque-ink: "#1e2a23"
  foodplan-wall: "#8f3c27"
  foodplan-wall-lit: "#a54a32"
  foodplan-floor: "#74301f"
  foodplan-ink: "#fff3ec"
  foodplan-ink-soft: "#f7d6c8"
  foodplan-ink-faint: "#efc3b0"
  foodplan-brass: "#f6d39a"
  foodplan-plaque: "#fff3ec"
  foodplan-plaque-ink: "#7a3120"
  musicprism-wall: "#f4efe4"
  musicprism-wall-lit: "#fbf8f1"
  musicprism-floor: "#e9e2d3"
  musicprism-ink: "#22201c"
  musicprism-ink-soft: "#5e584d"
  musicprism-ink-faint: "#6f685b"
  musicprism-brass: "#8a5a00"
  musicprism-plaque: "#22201c"
  musicprism-plaque-ink: "#f4efe4"
  musicprism-mat: "#fffdf8"
  musicprism-mat-rule: "#ded6c4"
  musicprism-note-root: "#b03a2e"
  musicprism-note-third: "#2f5f95"
  musicprism-note-fifth: "#4f6d34"
  musicprism-note-seventh: "#6b3f72"
  proseprimer-wall: "#1c1b19"
  proseprimer-wall-lit: "#2a2825"
  proseprimer-floor: "#141311"
  proseprimer-ink: "#ece7dd"
  proseprimer-ink-soft: "#b3ac9e"
  proseprimer-ink-faint: "#a39c8e"
  proseprimer-brass: "#db8c21"
  proseprimer-plaque: "#ece7dd"
  proseprimer-plaque-ink: "#1c1b19"
  affirmable-wall: "#d2ae52"
  affirmable-wall-lit: "#e0c06b"
  affirmable-floor: "#bf9940"
  affirmable-ink: "#14301d"
  affirmable-ink-soft: "#2a4527"
  affirmable-ink-faint: "#33502f"
  affirmable-brass: "#5e3300"
  affirmable-plaque: "#14301d"
  affirmable-plaque-ink: "#f3e3b4"
typography:
  display:
    fontFamily: "Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(40px, 5.4vw, 80px)"
    fontWeight: 300
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  display-room:
    fontFamily: "Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(42px, 6vw, 92px)"
    fontWeight: 300
    lineHeight: 0.95
    letterSpacing: "-0.038em"
  headline:
    fontFamily: "Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(38px, 4.6vw, 64px)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.035em"
  section:
    fontFamily: "Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(26px, 2.4vw, 32px)"
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  wall-copy:
    fontFamily: "Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(19px, 1.6vw, 24px)"
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: "-0.012em"
  work-title:
    fontFamily: "Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  sign:
    fontFamily: "Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "-0.005em"
  label:
    fontFamily: "Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  figures:
    fontFamily: "Franklin, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "\"tnum\""
rounded:
  plaque: "2px"
  mark: "3px"
  icon-ios: "22.4%"
  dot: "50%"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  work: "clamp(150px, 13.5vw, 210px)"
  work-room: "clamp(180px, 22vw, 320px)"
  work-small: "92px"
  hang-gap: "clamp(24px, 3vw, 48px)"
  label-drop: "30px"
  desk-top: "48px"
  desk-bottom: "88px"
components:
  plaque:
    backgroundColor: "{colors.corridor-plaque}"
    textColor: "{colors.corridor-plaque-ink}"
    rounded: "{rounded.plaque}"
    padding: "13px 20px 13px 18px"
  plaque-musicprism:
    backgroundColor: "{colors.musicprism-plaque}"
    textColor: "{colors.musicprism-plaque-ink}"
    rounded: "{rounded.plaque}"
    padding: "13px 20px 13px 18px"
  work-title:
    textColor: "{colors.corridor-ink}"
    typography: "{typography.work-title}"
  state-available:
    textColor: "{colors.corridor-ink}"
    typography: "{typography.label}"
  state-wip:
    textColor: "{colors.corridor-brass}"
    typography: "{typography.label}"
  stamp:
    backgroundColor: "{colors.corridor-brass}"
    textColor: "{colors.corridor-plaque-ink}"
    rounded: "{rounded.plaque}"
    padding: "6px 12px"
  signage-link:
    textColor: "{colors.corridor-ink-soft}"
    typography: "{typography.label}"
  signage-link-current:
    textColor: "{colors.corridor-ink}"
  spec-table:
    textColor: "{colors.corridor-ink}"
    typography: "{typography.figures}"
    width: "420px"
---

# Design System: Individuate

## Overview

**Creative North Star: "The Permanent Collection"**

individuate.com is a small museum. Its apps are not products in a grid; they are works hung on painted walls, each with a tombstone label that gives its title, medium, one line of description, and its honest state. The home page is the corridor, painted bottle green. Each app's own page is a room, painted in that app's identity colour, so walking from the corridor into a room changes the whole viewport. Individuate itself only appears as the room sign and the colophon.

Everything on the wall is lettered, not boxed. There are no cards, tiles, or panels: the lettering sits straight on the paint, like wall vinyl, and hierarchy comes from scale and weight contrast inside one typeface. Depth comes from light, not from containers: a warm pool of track light above each work and a real two-layer drop shadow beneath it. The one motion idea is light: the lights warm up once on arrival, the attended work's light brightens while the rest of the room dims, and the work's icon walks into its room through a cross-document view transition.

Density is gallery-sparse. A room holds one large work, an extended label, an exhibit hung in a form particular to that app, a visitor-information desk, and a short row of the other works. No two rooms hang their exhibits the same way.

**Key Characteristics:**
- Full-viewport painted walls; every app's room is painted in that app's own identity.
- One self-hosted typeface (Libre Franklin), light display against bold emphasis, italic work titles, tabular figures for particulars.
- Identical tombstone-label anatomy everywhere a work appears.
- Track-light pools and real drop shadows; flat lettering otherwise.
- Hairline rules as the only lines; no cards, no ornament.
- Individuate is never the subject's voice; the apps speak.

## Colors

Each wall is one strategy: a single painted hue with a lifted top (the light falling from the ceiling) and a deeper floor, lettered in one ink at three strengths, with brass reserved for state.

Every room carries the same nine roles, set on `[data-room="<slug>"]` and inherited by every component through custom properties (`--wall`, `--wall-lit`, `--wall-floor`, `--ink`, `--ink-soft`, `--ink-faint`, `--brass`, `--plaque`, `--plaque-ink`), plus three lighting values (`--light` as an RGB triplet for the track-light colour, `--light-strength`, and `--shadow` as an RGB triplet for drop-shadow tint). Components never name a room colour directly; they name a role.

### Primary
- **Painted Wall** (`--wall`): the room colour, painted edge to edge. Corridor bottle green, Food Plan terracotta, Music Prism engraver's ivory, Prose Primer lamp-black, SteadyTending deep twilight indigo (one step darker than its own graph-paper icon, so the icon still reads as a work on the wall), Affirmable ochre-gold. The body background is a radial lift of `--wall-lit` from the top centre over a vertical fade from `--wall` (to 72%) into `--wall-floor`.

### Secondary
- **Plaque** (`--plaque` on `--plaque-ink`): the one filled surface, used only for the primary action (Download for Mac) and the skip link. On dark walls it is the wall's ink colour; on light walls (Music Prism, Affirmable) it inverts to the dark ink.

### Tertiary
- **Brass** (`--brass`): state that is not yet "available": "Work in progress", "New edition in preparation", and the draft stamp on unapproved policy pages. Each room tunes its brass to stay legible on its own paint (deep umber on Affirmable's gold, burnt amber on Music Prism's ivory, Prose Primer's own preposition orange on lamp-black, SteadyTending's warm amber on indigo).
- **Room-owned pigments**: a room may carry its app's own semantic colours as extra tokens, used only inside that room's exhibit. Music Prism's four interval colours (root, third, fifth, seventh) mark the instrument key; Prose Primer's part-of-speech pencils (noun `#619bfd`, verb `#fd6a5e`, adjective `#52ae61`, adverb `#b682fa`, preposition `#db8c21`, pronoun `#2daab7`, gerund `#ee6e9b`, article `#b3b9c1`, determiner `#8c9db5`) mark its sentence wall at 30% (16% for articles) mixed into transparency.

### Neutral
- **Ink** (`--ink`): headlines, work titles, links, body on the wall.
- **Soft Ink** (`--ink-soft`): ledes, medium lines, captions, wayfinding links, table headers.
- **Faint Ink** (`--ink-faint`): the colophon, separators in the room sign.
- **Hairline**: `--ink` mixed into transparency at 14–20% (`color-mix(in oklab, var(--ink) 18%, transparent)`) for the rule above the visitor-information desk, table rows, and directory rows.
- **Mat paper** (Music Prism only): the print in that room hangs on a mat of the app's own card colour with a 1px rule.

### Named Rules
**The Own Paint Rule.** Every app's room is painted in that app's established identity, never in an Individuate house colour. Music Prism's ivory comes from its "Engraver's Proof" paper (that app's DESIGN.md: paper `#FAF6EF`, card `#FFFDF8`), deepened one step so it reads as a painted wall; its mat uses the app's card colour and its note dots its tone colours. A new room takes its wall from its app's icon and existing design system, not from a free choice.

**The Role-Not-Hue Rule.** Components read `--wall`, `--ink`, `--brass`, and the rest; they never hard-code a room's hex. A component that only works on one wall is a defect.

**The Light Wall Rule.** A light-painted room (`musicprism`, `affirmable`) sets `color-scheme: light`, inverts the plaque to dark ink, raises `--light-strength` (0.7 and 0.45 against 0.13–0.17 on dark walls), and prints the draft stamp in `--wall` instead of `--plaque-ink`.

**The Appearance Rule.** Auto is the collection as painted. The footer's Site appearance control (Auto, Light, Dark) sets `data-theme` on `<html>`; Light repaints the corridor, Food Plan, Prose Primer and SteadyTending in pale versions of their own colour, and Dark repaints Music Prism in its app's dark paper and Affirmable with its green ink as the wall and its gold as the lettering. A room already painted the requested way keeps its paint. The Motion control (Auto, Reduced) sets `data-motion="reduce"`, which does everything `prefers-reduced-motion: reduce` does, view transitions included. Both choices are stored under `individuate:theme` and `individuate:motion`; Auto clears the key.

## Typography

**Display Font:** Libre Franklin, self-hosted as the family "Franklin" (variable weight 300–800, upright and italic files in `/assets/fonts/`, upright preloaded), falling back to `ui-sans-serif, system-ui, sans-serif`.
**Body Font:** the same.
**Label/Mono Font:** the same; `ui-monospace, "SF Mono", Menlo` appears only for inline code in policy text.

**Character:** One grotesque used the way a museum letters its walls: light and very large for wall text, small and plain for labels, with weight and italics doing the work that colour and boxes do elsewhere. Kerning and standard ligatures are on throughout.

### Hierarchy
- **Display** (300, clamp(40px, 5.4vw, 80px), 0.98, -0.035em): the corridor's wall text. One word inside it is set in bold (700) for contrast: "Thoughtful apps for **particular** passions."
- **Display, room** (300, clamp(42px, 6vw, 92px), 0.95, -0.038em): the app's name at the head of its room.
- **Headline** (300, clamp(38px, 4.6vw, 64px), 1): the title of a support or privacy page.
- **Section** (300, clamp(26px, 2.4vw, 32px), 1.15): section heads inside visitor-information pages; questions under them are 17px at 650.
- **Wall copy** (400, clamp(19px, 1.6vw, 24px), 1.42, max 36ch): the paragraphs hung beside a room's exhibit; a second paragraph steps down to soft ink.
- **Exhibit lettering**: Affirmable's affirmation (300, clamp(36px, 6.2vw, 96px), max 17ch) and Prose Primer's sentence (400, clamp(30px, 4.4vw, 66px), max 22ch) are lettered at display scale as the exhibit itself.
- **Work title** (600 italic, 18px; 16px in rooms and small rows): the title in every tombstone and figure caption.
- **Body** (400, 17px, 1.5; 16px under 600px; 1.6 and max 68ch in policy text).
- **Sign** (700, 15px): the room sign "Individuate" and the small headings on the visitor-information desk.
- **Label** (400, 14px, 1.45, max 30ch): tombstone medium and description; state lines are 600 at 13–14px.
- **Figures** (15px, `font-variant-numeric: tabular-nums`): the Particulars table (requirements, distribution) and dates on policy pages.

### Named Rules
**The Light-and-Bold Rule.** Display sizes are always weight 300; contrast inside them comes from a single word at 700, never from colour, underline, or a second face.

**The Italic Title Rule.** The name of a work, wherever it is cited as a work (tombstone, room label, figure caption, exhibit caption), is italic 600. Names used as navigation (room sign, colophon, directory) are upright.

**The Tabular Particulars Rule.** Any figure a visitor compares (OS versions, dates) is set with tabular figures.

## Layout

The page is a wall: full-bleed paint, content inset by one fluid gutter (clamp(16px, 4vw, 56px)) on both sides. The page stack is fixed: signage, main, colophon.

- **The hang (corridor):** every work on one centreline, one column per app (five today; gap clamp(24px, 3vw, 48px)), each work clamp(140px, 11.5vw, 196px) square, its label dropped 30px beneath. Three columns under 1240px, two under 1080px. Under 600px the works become a single column, each work 124px beside its label.
- **The room head:** the work at clamp(180px, 22vw, 320px) on the left, aligned to the bottom of the room title and extended label on the right (max 56ch). Stacks under 820px with the work at 200px (168px under 600px).
- **Exhibits:** each room hangs its material on its own 12-column arrangement, and no two are alike: Food Plan is a tasting menu (an opening wall at 5 + 6, four numbered courses of capture and card at 7 + 4 on alternating sides, a full-width spread over a 6 + 6 pair, then recipe, nutrition label, and AI setup, closing on a second plaque), Music Prism a print room (a matted print at 5 columns beside copy, then two proofs at 6 + 6), Prose Primer a sentence lettered across the wall with a part-of-speech key, Affirmable one affirmation lettered large with "Another one". All collapse to one column under 820px.
- **Visitor-information desk:** below every room's exhibits, a hairline rule, then three columns (Support, Privacy, Particulars at 1.2fr). The desk goes to two columns under 1080px with the last spanning, and one under 600px. The corridor's information wall has two columns (Support, Privacy), and one under 600px.
- **Also in the collection:** the other works in a three-column row at 92px, no track light; one column under 1080px.
- **Visitor-information pages:** a centred reading column of 46rem on the same painted wall.

Breakpoints are 1080px, 820px, and 600px. Vertical rhythm uses viewport-aware clamps (for example, hang padding clamp(64px, 11vh, 128px) above, clamp(72px, 10vh, 120px) below), so a 1440 × 900 viewport shows the wall text and the whole hang together.

## Elevation & Depth

The wall itself is flat paint lit from above; depth belongs only to things hung on it. Works cast real, two-layer drop shadows tinted by the room's `--shadow` colour, and each work on the corridor and room head sits under a track-light pool: a radial gradient of `--light` at `--light-strength`, centred on the work, 2.5 × the work wide and 2.8 × tall, starting 0.95 × the work above it (0.75 × in the room head). Lettering casts nothing.

### Shadow Vocabulary
- **Hung work** (`filter: drop-shadow(0 2px 2px rgb(var(--shadow) / .35)) drop-shadow(0 22px 26px rgb(var(--shadow) / .45))`): every app icon on a wall. A drop-shadow filter, so it follows the icon's alpha.
- **Plaque** (`box-shadow: 0 1px 1px rgb(var(--shadow) / .2), 0 8px 18px -6px rgb(var(--shadow) / .45)`; hover `0 12px 24px -8px … / .55` with a 1px lift): the download plaque, mounted slightly off the wall.
- **Mat** (`box-shadow: 0 1px 2px rgb(var(--shadow) / .25), 0 28px 56px -20px rgb(var(--shadow) / .5)`): a framed print (Music Prism).
- **Window captures**: none added. App screenshots already carry macOS's own window shadow.

### Named Rules
**The Light Not Boxes Rule.** Depth on a wall is light and cast shadow. Nothing on the wall gets a container, card, or tinted panel to separate it.

**The Attention Rule.** When a work in a hang is hovered or focused, its light brightens (`brightness(1.35)`) and lifts 3px; every other work's light falls to 25% opacity and its icon dims (`brightness(.82) saturate(.85)`). Transitions run 0.7s.

## Shapes

Square works on a rectilinear wall. macOS icons are hung as shipped (with Apple's grid margin); iOS icons ship full-bleed, so they are drawn at 80.5% inside the same square frame with a 22.4% corner radius to match. The plaque and stamp are nearly square-cornered (2px), focus rings and code spans round 3px, state dots and note dots are circles, and Prose Primer's part-of-speech key uses full pills because that is the app's own control language. Lines are only 1px hairlines in ink at low strength.

## Components

### Plaque (primary action)
The one filled object on any wall, mounted like a small engraved plate.
- **Shape:** near-square (2px).
- **Fill:** `--plaque` with `--plaque-ink` lettering, 600 at 15px, a 16px stroke icon leading, padding 13px 20px 13px 18px. A second line, "Laptops and desktops", sits beneath at 400 12px in `--plaque-ink` mixed 78% into the plaque, so no one reads "Mac" as "iPhone". One macro (`plaque` in `macros.njk`) draws every plaque.
- **Hover / Active:** lifts 1px with a deeper shadow over 0.4s; returns flat on press.
- **Use:** "Download for Mac" in a room head, beside a soft-ink note of the requirement and the app's `note` ("No account needed" unless the app sets its own, e.g. Love Your Food Plan's "No subscription"; never a pricing claim an app's repo forbids). Unreleased apps get no plaque; they show the brass state line instead.

### Tombstone label (signature)
Identical anatomy wherever a work hangs, in this order:
1. Italic title ("*Music Prism*"). No dates.
2. Medium in soft ink: the platform alone ("macOS, for Mac laptops and desktops", "iOS & iPadOS"); Mac apps spell out the hardware because visitors read "Mac" as "Apple" and try them on a phone.
3. One-line description (omitted in the small "Also in the collection" row and on the 404 hang).
4. State: a 6px dot in `currentColor` and a 600-weight phrase: ink for "Direct download", brass for anything not yet available.

The room head extends the label: lede in full ink at clamp(18px, 1.45vw, 21px), then title and medium, then the plaque or the brass state with an optional note.

### Hung work
- **Frame:** a square at `--work`, the icon centred and contained, carrying the hung-work shadow.
- **Track light:** a sibling element behind the frame; it warms on load (opacity 0 → 1, scale .82 → 1, 1.6s on the house ease), staggered left to right at 160ms per work after 250ms.
- **View transition:** `@view-transition { navigation: auto; }` lets the icon walk from the hang into its room, 0.55s on the house ease. Only the travelling icon is named (`work`), set by the inline head script on `pageswap`/`pagereveal` and cleared when the transition finishes. Never give the icons a standing `view-transition-name`: it clips each drop shadow into a visible box.

### Signage (navigation)
The only chrome. Top-left the room sign "Individuate" (700, 15px), followed in a room by a faint slash and the room name in soft ink; top-right Support and Privacy in soft ink, pointing at the current room's section of the shared pages (or their top from the corridor). Hover and current page go to full ink with an underline. Under 600px the room name drops. No bar, no background, no border.

### Visitor-information desk
Three blocks lettered on the wall under a hairline: Support and Privacy each with a soft-ink paragraph and a 600-weight "go" link with a trailing arrow; Particulars as a table of 1px-ruled rows with soft-ink row heads (42%) and tabular figures (max 420px).

### Visitor-information pages
Support and privacy are one page each, lettered straight onto the corridor wall, like the labels: headline title, soft-ink sub line, then a soft-ink row of app names jumping to each app's section. Shared answers come first; each app's section opens with a hairline, its 40px icon beside the name at h2 size, and a soft-ink line of requirements, state, and "About the app". The support address is lettered at clamp(26px, 3.4vw, 44px), weight 300. Questions are 17px 650, answers body text at max 68ch. No cards, accordions, or panels.

### Draft stamp
A brass stamp (600, 13px, 6px 12px, 2px corners) on any policy page whose content has not been approved. It is a temporary state and disappears when the page's `reviewed` flag is removed.

### Exhibit captions
Figure captions sit 18px under the image at 13px soft ink (max 44ch) with an italic 600 title in full ink on its own line. Every capture is identified as a screen capture, a print, or an illustration.

### Adding a room
1. Add the app to `src/_data/apps.js` (slug, name, medium, requires, line, status, stateLabel, icon, iconShape, download only if it ships, and optionally note, account, subscription).
2. Create `src/<slug>/` with `<slug>.json` (`{ "appSlug": "<slug>" }`), `index.njk` on the room layout (lede, privacyLine, distribution, optional stateNote). Add the app's section to `src/support.md` and `src/privacy.md` with `appHead`.
3. Add a `[data-room="<slug>"]` block in `site.css` defining all nine colour roles plus `--light`, `--light-strength`, and `--shadow`, painted from the app's own identity; add `color-scheme: light` and the light-wall adjustments if the wall is light.
4. Supply the icon as a 640px WebP plus a 180px PNG, each with its provenance sidecar.
5. Hang the room's exhibit in a form particular to that app, on the shared 12-column wall, collapsing at 820px.

The hang, labels, desk, colophon, redirects, and "Also in the collection" pick the new app up from the data.

## Do's and Don'ts

### Do:
- **Do** paint each room in its app's own established identity and express every colour as a role on `[data-room]`.
- **Do** keep the tombstone anatomy identical everywhere: italic title, medium, description, state.
- **Do** set display type at weight 300 and earn emphasis with one word at 700.
- **Do** set requirements and dates in tabular figures.
- **Do** letter visitor information straight onto the wall, in the room's colour.
- **Do** make the app, or Individuate, the subject of every sentence ("Love Your Food Plan keeps…", "Individuate never sees…").
- **Do** keep content visible by default; with reduced motion the lights are simply on and view transitions are off.
- **Do** use brass only for state that is not yet "available".

### Don't:
- **Don't** put a work, label, or block of visitor information in a card, tile, tinted panel, or bordered box; the only lines are 1px ink hairlines.
- **Don't** write "we", "us", or "our" anywhere on the site, and don't give Individuate a studio or personal voice.
- **Don't** paint a room in a colour the app doesn't own, or hard-code a room hex inside a shared component.
- **Don't** show a download plaque, release date, or platform for an app that doesn't ship it.
- **Don't** add a second typeface or load fonts from a third-party service.
- **Don't** add shadows to window captures; they carry macOS's own.
- **Don't** hang two rooms' exhibits in the same arrangement.
