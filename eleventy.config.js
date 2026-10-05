export default function (eleventyConfig) {
  // Provenance sidecars (*.webp.json) stay in the repo, not on the site.
  eleventyConfig.addPassthroughCopy("src/assets/**/*.{css,js,woff2,webp,png,svg}");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });

  eleventyConfig.addFilter("app", (apps, slug) => apps.find((a) => a.slug === slug));
  eleventyConfig.addFilter("others", (apps, slug) => apps.filter((a) => a.slug !== slug));
  eleventyConfig.addFilter("mailto", (address, subject) =>
    `mailto:${address}?subject=${encodeURIComponent(subject)}`);
  eleventyConfig.addFilter("longDate", (d) =>
    new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
