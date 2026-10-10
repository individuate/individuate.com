---
layout: info.njk
title: Privacy
heading: Privacy
sub: "One policy for every app in the collection, and for this website."
updated: 2026-10-10
---
{%- from "macros.njk" import appHead, jump -%}
<p class="meta">Updated {{ updated | longDate }}</p>

{{ jump(apps) }}

## The short version

Every Individuate app keeps what you make on your own device. There's no account and no Individuate server holding your data. An app reaches an outside service only to do something you ask for, and each app's section below names those services. Every app also sends anonymous usage signals, described next.

No Individuate app has advertising, sells or shares your data, or tracks you across apps or websites.

## Anonymous usage signals

Every app, and this website, uses the privacy-friendly analytics service TelemetryDeck (provider: TelemetryDeck GmbH, Von-der-Tann-Str. 54, 86159 Augsburg, Germany) to count things like "the app launched" or "a recipe was generated." The counts show which features get used and when something breaks. The use is based on Art. 6 para. 1 lit. b GDPR: Individuate requires reliable and efficient tools for collecting app usage data in order to fulfill the contract with you, the customer.

### What data is transferred?

The data processed by TelemetryDeck is completely anonymized and does not allow any conclusions to be drawn about personal information. The following data is collected, among other things:

- an anonymized, untraceable user ID (per app installation),
- actions defined by the app publisher (e.g., "app launched," "settings opened"),
- a rounded timestamp (to the nearest hour),
- device metadata (e.g., system version, app version, device type),
- additional metadata defined by the app publisher (e.g., "number of items in the database").

Signals never include your name, your email address, or anything you make or type in an app. That means no recipes, chords, writing, health data, or affirmations.

### What is not stored?

- No IP addresses (not in logs, not in the database),
- no cookies, advertising identifiers, or tracking technologies,
- no persistent identifiers that could be traced back to individuals.

The source code of the TelemetryDeck SDK is completely open source and available on GitHub: [github.com/TelemetryDeck](https://github.com/TelemetryDeck)

Further information on the exact data processing by TelemetryDeck can be found at [telemetrydeck.com/privacy](https://telemetrydeck.com/privacy) and at [telemetrydeck.com/docs/guides/privacy-faq](https://telemetrydeck.com/docs/guides/privacy-faq/).

## Updates, purchases, and email

**Update checks.** Mac apps downloaded from this site check GitHub for new versions using Sparkle. Like any web request, that request includes your app version and macOS version.

**Purchases.** When you buy something through the App Store or Mac App Store, Apple processes the payment. Individuate receives no payment details, only Apple's confirmation of the purchase. Affirmable also counts a purchase among its anonymous usage signals, with the price and currency.

**Email you send.** If you write to support, or send a note with an app's feedback option, your message reaches Individuate by email, and only when you send it.

{{ appHead(apps | app("affirmable")) }}

**On your iPhone and iPad.** Your affirmations, which ones are shown, your reminder times, and settings. A shared container lets the app's widgets show them on your Home Screen and in StandBy.

**In your iCloud, if you use iCloud.** Affirmable syncs through your private iCloud database so your affirmations appear on your other devices. That data belongs to your Apple Account, is protected by Apple, and isn't visible to Individuate.

**Sharing.** If you share an affirmation, it goes wherever you send it, and only when you send it.

**Removing your data.** Delete an affirmation in the app and it's removed everywhere it has synced. To remove all iCloud data, open Settings ▸ [your name] ▸ iCloud ▸ Manage Account Storage ▸ Affirmable.

{# REVIEW: confirm reminders/notifications are local-only, and the TelemetryDeck signals once 2.0's are final. #}

{{ appHead(apps | app("foodplan")) }}

**On your Mac.** Your dietary approaches, restrictions, food preferences, and kitchen profile. Every meal plan, recipe, revision, and shopping list you make. Your API keys, in the macOS Keychain, marked "this device only," so they don't sync to iCloud and aren't included in backups. Delete the app and its data, and it's gone.

**Anthropic (Claude), when you generate something.** When you generate a meal plan, recipe, revision, or shopping list, the app sends the relevant preferences and text to Anthropic's API (`api.anthropic.com`) using your own API key. Anthropic processes that request under [its own privacy policy](https://www.anthropic.com/legal/privacy) and your agreement with them. Individuate isn't a party to that exchange and can't see it.

**USDA FoodData Central, optional.** If you add a USDA key and estimate nutrition, ingredient names are sent to the USDA's public food database (`api.nal.usda.gov`) to look up nutrition values.

{{ appHead(apps | app("musicprism")) }}

**On your Mac.** Your settings and everything you look up: chords, scales, voicings, and progressions. Music Prism contacts no outside services beyond update checks and usage signals.

**Its usage signals, exactly.** Music Prism sends five kinds of signal: app launch (with the instrument and view it opened to), view change, instrument change, key set or cleared, and print. It never sends the chord, root, quality, or progression.

**Feedback.** The feedback option in the Help menu sends your note by email.

{{ appHead(apps | app("proseprimer")) }}

**On your Mac.** The text you open, paste, or write, and everything the app works out about it. Diagrams you've already made, cached so the same sentence isn't sent twice. Your Claude API key, if you add one, in the macOS Keychain. Most of the analysis, such as highlighting parts of speech and explaining words, happens on-device.

**Apple Intelligence.** When you diagram a sentence with Apple Intelligence, the work happens on your Mac under [Apple's privacy terms](https://www.apple.com/legal/privacy/).

**Anthropic (Claude), direct download only, optional.** If you add your own Claude key and choose Claude for diagramming, the sentence you're diagramming is sent to Anthropic's API (`api.anthropic.com`). Only that sentence is sent, not your whole document. Anthropic handles it under [its own privacy policy](https://www.anthropic.com/legal/privacy).

{# REVIEW: Prose Primer is unreleased. List the final TelemetryDeck signals and confirm the update mechanism and purchase model (Mac App Store unlock) before publishing. #}

{{ appHead(apps | app("steadytending")) }}

**On your Mac.** Your lab results, genetic data, notes, medications, supplements, and anything else you add, in a single local database. Your API keys, in the macOS Keychain. SteadyTending never pools your data with anyone else's.

**Anthropic (Claude), when you ask.** When you ask the AI a question or run an analysis, the relevant parts of your data are sent to Anthropic's API using your own API key. Anthropic handles them under [its own privacy policy](https://www.anthropic.com/legal/privacy).

**Research lookups.** When you search or open research, the app queries public databases such as PubMed (NCBI), Crossref, and bioRxiv. Those requests carry search terms and article identifiers, not your health records.

**Food data, optional.** Nutrition lookups go to the USDA's FoodData Central.

{# REVIEW: SteadyTending is unreleased. Confirm exactly which data each Claude feature sends, whether search terms can include personal context, the final TelemetryDeck signal list, the update mechanism, notification email (Resend), and purchase handling before publishing. #}

## This website

**Visit counts.** individuate.com counts page views with TelemetryDeck, as described above. There are no cookies.

**Hosting.** The site is served by GitHub Pages. Like any web host, GitHub may log your IP address when you visit; see [GitHub's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

**Fonts and files** are served from this site itself, not from third-party font services.

**Downloads.** App downloads come from GitHub, where the signed releases are hosted.

## Questions

Email [{{ site.support }}]({{ site.support | mailto('Privacy') }}) and say which app you're asking about. If this policy changes, the date above will change with it.
