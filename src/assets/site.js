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

// Downloads leave for GitHub, so a page view can't tell us one happened.
document.querySelectorAll("[data-download]").forEach((a) =>
  a.addEventListener("click", () => {
    window.TelemetryDeck?.signal("downloadClicked", { app: a.dataset.download });
  })
);
