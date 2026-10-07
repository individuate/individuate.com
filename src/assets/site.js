// Small interactions, all progressive: the pages read fine without them.

// Site appearance and motion. The head script applies the stored choice before
// paint; this keeps the buttons, the store, and the browser's toolbar tint in step.
(() => {
  const root = document.documentElement;
  const buttons = document.querySelectorAll("[data-setting]");
  if (!buttons.length) return;
  const tint = document.querySelector('meta[name="theme-color"]');
  const apply = (setting, value) => {
    if (value === "auto") delete root.dataset[setting];
    else root.dataset[setting] = value;
    buttons.forEach((b) => {
      if (b.dataset.setting === setting) b.setAttribute("aria-pressed", String(b.dataset.value === value));
    });
    if (setting === "theme" && tint) tint.content = getComputedStyle(document.body).getPropertyValue("--wall").trim();
  };
  buttons.forEach((b) =>
    b.addEventListener("click", () => {
      const { setting, value } = b.dataset;
      apply(setting, value);
      try {
        if (value === "auto") localStorage.removeItem(`individuate:${setting}`);
        else localStorage.setItem(`individuate:${setting}`, value);
      } catch { /* no store: the choice holds for this page only */ }
    })
  );
  apply("theme", root.dataset.theme || "auto");
  apply("motion", root.dataset.motion || "auto");
})();

// Affirmable room: hang another affirmation on the wall.
(() => {
  const wall = document.getElementById("affirmation");
  const button = document.getElementById("another");
  const source = document.getElementById("affirmations");
  if (!wall || !button || !source) return;
  const all = JSON.parse(source.textContent);
  let order = [];
  const next = () => {
    if (!order.length) order = all.filter((a) => a !== wall.textContent).sort(() => Math.random() - 0.5);
    return order.pop();
  };
  button.hidden = false;
  button.addEventListener("click", () => {
    wall.textContent = next();
    wall.classList.remove("swap");
    void wall.offsetWidth;
    wall.classList.add("swap");
  });
})();

// Prose Primer room: look at one part of speech at a time.
(() => {
  const sentence = document.getElementById("sentence");
  const buttons = document.querySelectorAll(".key button[data-lens]");
  if (!sentence || !buttons.length) return;
  buttons.forEach((b) =>
    b.addEventListener("click", () => {
      const on = b.getAttribute("aria-pressed") !== "true";
      buttons.forEach((x) => x.setAttribute("aria-pressed", "false"));
      if (on) {
        b.setAttribute("aria-pressed", "true");
        sentence.dataset.lens = b.dataset.lens;
      } else {
        delete sentence.dataset.lens;
      }
    })
  );
})();

// Food Plan room: open a screenshot full size. A native modal dialog keeps focus
// inside, closes on Escape, and leaves the rest of the page inert.
(() => {
  const shots = document.querySelectorAll(".menu .exhibit img");
  if (!shots.length || !window.HTMLDialogElement) return;
  const viewer = document.createElement("dialog");
  viewer.className = "viewer";
  viewer.setAttribute("aria-label", "Screenshot, full size");
  viewer.innerHTML = '<button type="button" aria-label="Close"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M3.5 3.5l9 9M12.5 3.5l-9 9"/></svg></button><img alt="" decoding="async">';
  document.body.append(viewer);
  const big = viewer.querySelector("img");
  let opener = null;
  // Opens at once on the copy already on the page, then trades up to the
  // full-resolution capture (data-full) when it arrives.
  const open = (img) => {
    opener = img;
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    viewer.showModal();
    const full = img.dataset.full;
    if (full) {
      const sharp = new Image();
      sharp.onload = () => { if (opener === img && viewer.open) big.src = full; };
      sharp.src = full;
    }
    window.TelemetryDeck?.signal("screenshotZoomed", { image: img.src.split("/").pop() });
  };
  // Anywhere closes it: the button, the paint, or the capture itself.
  viewer.addEventListener("click", () => viewer.close());
  viewer.addEventListener("close", () => {
    big.removeAttribute("src");
    opener?.focus();
    opener = null;
  });
  shots.forEach((img) => {
    const name = img.closest("figure")?.querySelector("figcaption b")?.textContent;
    img.classList.add("zoom");
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.setAttribute("aria-label", `View full size: ${name || img.alt}`);
    img.addEventListener("click", () => open(img));
    img.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      open(img);
    });
  });
})();

// Downloads leave for GitHub, so a page view can't tell us one happened.
document.querySelectorAll("[data-download]").forEach((a) =>
  a.addEventListener("click", () => {
    window.TelemetryDeck?.signal("downloadClicked", { app: a.dataset.download });
  })
);
