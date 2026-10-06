// The collection. One entry per app; every page reads from here.
// status: "available" | "in-progress" | "new-edition"
// Only state what each app's own repo confirms. No prices, no invented dates.
// note: the line beside the download plaque (default "No account needed").
// account, subscription: Particulars rows (account defaults to "None"; subscription shows only when set).

export default [
  {
    slug: "affirmable",
    wall: "#d2ae52", // matches [data-room="affirmable"] --wall in site.css
    name: "Affirmable",
    medium: "iOS & iPadOS",
    requires: [["iOS & iPadOS", "26 or later"]],
    passion: "self-talk",
    line: "Affirmations to keep close, from many traditions, right on your Home Screen.",
    status: "new-edition",
    stateLabel: "New edition in preparation",
    icon: "/assets/img/affirmable-icon.webp",
    iconShape: "ios",
  },
  {
    slug: "foodplan",
    wall: "#8f3c27", // matches [data-room="foodplan"] --wall in site.css
    name: "Love Your Food Plan",
    medium: "macOS, for Mac laptops and desktops",
    requires: [["macOS", "15.0 or later"]],
    passion: "food",
    line: "Meal plans that start with what you love, built around your diet, restrictions, and kitchen.",
    status: "available",
    stateLabel: "Direct download",
    note: "No subscription",
    account: "Only your own Anthropic key",
    subscription: "None",
    download: "https://github.com/individuate/loveyourfoodplan.com/releases/latest/download/LoveYourFoodPlan.dmg",
    domain: "loveyourfoodplan.com",
    icon: "/assets/img/foodplan-icon.webp",
    iconShape: "mac",
  },
  {
    slug: "musicprism",
    wall: "#f4efe4", // matches [data-room="musicprism"] --wall in site.css
    name: "Music Prism",
    medium: "macOS, for Mac laptops and desktops",
    requires: [["macOS", "10.15 or later"]],
    passion: "music",
    line: "One chord everywhere it lives, on guitar, bass, ukulele, and piano.",
    status: "available",
    stateLabel: "Direct download",
    download: "https://github.com/individuate/music-prism.com/releases/latest/download/MusicPrism.dmg",
    domain: "music-prism.com",
    icon: "/assets/img/musicprism-icon.webp",
    iconShape: "mac",
  },
  {
    slug: "proseprimer",
    wall: "#1c1b19", // matches [data-room="proseprimer"] --wall in site.css
    name: "Prose Primer",
    medium: "macOS, for Mac laptops and desktops",
    requires: [["macOS", "15.0 or later"]],
    passion: "writing",
    line: "Grammar’s vocabulary, taught on the sentences you’re actually reading and writing.",
    status: "in-progress",
    stateLabel: "Work in progress",
    icon: "/assets/img/proseprimer-icon.webp",
    iconShape: "mac",
  },
  {
    slug: "steadytending",
    wall: "#252f4c", // matches [data-room="steadytending"] --wall in site.css
    name: "SteadyTending",
    medium: "macOS, for Mac laptops and desktops",
    requires: [["macOS", "15.0 or later"]],
    passion: "health",
    line: "Your genetics, your labs over the years, and the research you care about, read together on your own Mac.",
    status: "in-progress",
    stateLabel: "Work in progress",
    domain: "steadytending.com",
    icon: "/assets/img/steadytending-icon.webp",
    iconShape: "mac",
  },
];
