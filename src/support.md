---
layout: info.njk
title: Support
heading: Support
sub: "Every app in the collection, and one address for all of them."
reviewed: false
---
{%- from "macros.njk" import appHead, jump -%}
<div class="contact">
  <span class="addr"><a href="{{ site.support | mailto('Support') }}">{{ site.support }}</a></span>
  <p>Say which app you're writing about. If something isn't working, include the app version (in its About screen), your macOS or iOS version, and a screenshot if something looks wrong.</p>
</div>

{{ jump(apps) }}

## Every app

### Do I need an account?

No. None of the apps has an account or a login, and your data isn't stored anywhere but your own device (and, for Affirmable, your own iCloud). Love Your Food Plan does need your own Anthropic API key; see below.

### How do I update?

Mac apps downloaded from this site check for new versions on their own and offer to install them. You can also download the latest version from the app's page at any time; it replaces the old one and keeps your data. Apps from the App Store update through the App Store.

### What do the apps send?

Anonymous usage counts, and only what you ask for beyond that. The [privacy policy](/privacy/) lists what each app sends.

{{ appHead(apps | app("foodplan")) }}

### Do I need an Anthropic account?

Yes. Love Your Food Plan generates plans and recipes with Claude, using your own API key. You create the key at [console.anthropic.com](https://console.anthropic.com) and add prepaid credits there. You pay Anthropic directly for what you use, and the app shows rough costs before paid actions. Your key is stored in the macOS Keychain on this Mac only.

### What does the USDA key do?

It's optional. With a free key from the USDA's FoodData Central, the app can estimate nutrition for your recipes. Without one, everything else works the same.

{{ appHead(apps | app("musicprism")) }}

### Which instruments does it cover?

Guitar (standard and baritone), bass (four- and five-string), ukulele (standard and baritone), and piano.

### Can I print the diagrams?

Yes. Any sheet the app shows can be printed, or saved as a PDF from the print dialog.

### Does it need an internet connection?

No. Music Prism runs entirely on your Mac.

### A chord looks wrong.

Write in with the instrument, the chord, and the view you were in. Notes sent with the feedback option in the Help menu reach the same inbox.

{{ appHead(apps | app("proseprimer")) }}

### When will it be available?

When it's ready. There's no date yet. When it ships, the download will be on [the app's page](/proseprimer/). Questions and ideas are welcome now.

{{ appHead(apps | app("steadytending")) }}

### When will it be available?

When it's ready. There's no date yet. When it ships, the download will be on [the app's page](/steadytending/). Questions and ideas are welcome now, but please don't send health records or lab results by email.

### Is it medical advice?

No. SteadyTending isn't a medical device and doesn't diagnose or treat anything. It's a place to organize and think about your own data, alongside the care you already have.

{{ appHead(apps | app("affirmable")) }}

### How do I put an affirmation on my Home Screen?

Touch and hold an empty area of your Home Screen until the apps jiggle, tap Edit ▸ Add Widget, and choose Affirmable.

### Do my affirmations sync between devices?

Yes, through your own iCloud account, when iCloud is turned on for Affirmable. Individuate never sees them.

### I had the original Affirmable. What happens now?

A new edition, rebuilt from the ground up, is in preparation. This page will say more when it's on the App Store.
