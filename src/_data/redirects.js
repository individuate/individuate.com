// Old addresses that must keep working: they're baked into shipped apps and store listings.
import apps from "./apps.js";

export default apps.flatMap((a) => [
  // Affirmable's shipped About screen links to the old /apps/<app>/ shape.
  { from: `/apps/${a.slug}/`, to: `/${a.slug}/`, name: a.name },
  // Each app once had its own support and privacy pages; they're now sections of the shared ones.
  { from: `/${a.slug}/support/`, to: `/support/#${a.slug}`, name: `${a.name} support` },
  { from: `/${a.slug}/privacy/`, to: `/privacy/#${a.slug}`, name: `${a.name} privacy` },
  // The same two with the words the other way round: Affirmable's App Store listing uses /support/affirmable.
  { from: `/support/${a.slug}/`, to: `/support/#${a.slug}`, name: `${a.name} support` },
  { from: `/privacy/${a.slug}/`, to: `/privacy/#${a.slug}`, name: `${a.name} privacy` },
]);
