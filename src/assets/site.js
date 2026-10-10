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
    // A room painted dark hangs its app's dark captures, where it has them.
    if (setting === "theme") document.querySelectorAll("source[data-dark]").forEach((s) => { s.media = value === "dark" ? "all" : "not all"; });
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

// Food Plan and Music Prism rooms: open a screenshot full size. A native modal
// dialog keeps focus inside, closes on Escape, and leaves the rest of the page inert.
(() => {
  const shots = [...document.querySelectorAll(".menu .exhibit img, .prism .exhibit img")].filter((img) => !img.closest(".frame"));
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
  // A cycling capture opens on whichever frame is showing; a dark room opens the dark original.
  const showing = (img) => {
    let best = img, most = .5;
    img.closest(".shot-cycle")?.querySelectorAll(".frame img").forEach((f) => {
      const o = parseFloat(getComputedStyle(f.parentNode).opacity) || 0;
      if (o > most && f.currentSrc) { most = o; best = f; }
    });
    return best;
  };
  const original = (img) => {
    const dark = img.parentNode.querySelector("source[data-dark]");
    return dark?.media === "all" ? dark.dataset.full : img.dataset.full;
  };
  const open = (img) => {
    opener = img;
    const shown = showing(img);
    big.src = shown.currentSrc || shown.src;
    big.alt = img.alt;
    viewer.showModal();
    const full = original(shown);
    if (full) {
      const sharp = new Image();
      sharp.onload = () => { if (opener === img && viewer.open) big.src = full; };
      sharp.src = full;
    }
    window.TelemetryDeck?.signal("screenshotZoomed", { image: (full || shown.currentSrc || shown.src).split("/").pop() });
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

// Music Prism room: the wall drawing inks itself in when it comes into view, and
// each plate's quoted control cycles once while it's in view, its captures in step,
// then rests on its declared selection. Frames load only when their plate comes
// near and motion is allowed. Pictures of the app, never a working copy: none of
// it takes a click.
(() => {
  const sheet = document.querySelector(".prism .sheet-field");
  const plates = [...document.querySelectorAll(".prism .plate")].filter((p) => p.querySelector(".ui-anim, .shot-cycle"));
  if (!sheet && !plates.length) return;
  const moving = () => document.documentElement.dataset.motion !== "reduce" && !matchMedia("(prefers-reduced-motion: reduce)").matches;
  const watch = "IntersectionObserver" in window;

  if (sheet) {
    if (!watch) sheet.classList.add("inked");
    else new IntersectionObserver((entries, io) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      sheet.classList.add("inked");
      io.disconnect();
    }, { threshold: .15 }).observe(sheet);
  }

  // Still at load: the plates stay at rest, even if motion is switched on later.
  if (!moving()) return;
  const hydrate = (plate) => plate.querySelectorAll(".frame [data-srcset], .frame [data-src]").forEach((el) => {
    if (el.dataset.srcset) { el.srcset = el.dataset.srcset; delete el.dataset.srcset; }
    if (el.dataset.src) { el.src = el.dataset.src; delete el.dataset.src; }
  });
  // One round is the longest cycle on the plate, three seconds a step.
  const rounds = new Map(plates.map((p) => {
    const steps = Math.max(...[...p.querySelectorAll('[class*="cycle-"]')].map((el) => Number(/(?:ui|shot)-cycle-(\d+)/.exec(el.className)?.[1] || 0)));
    return [p, { left: steps * 3000, since: null, timer: 0 }];
  }));
  const run = (plate, visible) => {
    const r = rounds.get(plate);
    if (r.left <= 0) return;
    if (visible) {
      plate.classList.add("anim-run");
      r.since = Date.now();
      r.timer = setTimeout(() => { r.left = 0; plate.classList.remove("anim-run"); }, r.left);
    } else if (r.since !== null) {
      clearTimeout(r.timer);
      r.left -= Date.now() - r.since;
      r.since = null;
    }
  };
  if (!watch) return plates.forEach((p) => { hydrate(p); run(p, true); });
  const near = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    hydrate(e.target);
    near.unobserve(e.target);
  }), { rootMargin: "600px 0px" });
  const seen = new IntersectionObserver((entries) => entries.forEach((e) => {
    e.target.classList.toggle("anim-offscreen", !e.isIntersecting);
    run(e.target, e.isIntersecting);
  }), { rootMargin: "80px" });
  plates.forEach((p) => { near.observe(p); seen.observe(p); });
})();

// Downloads leave for GitHub or the App Store, so a page view can't tell us one happened.
document.querySelectorAll("[data-download]").forEach((a) =>
  a.addEventListener("click", () => {
    window.TelemetryDeck?.signal("downloadClicked", { app: a.dataset.download });
  })
);
