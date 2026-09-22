/* O conteúdo é editado em index.html; JavaScript só cuida de tema e ano. */
(() => {
  "use strict";

  const storageKey = "portfolio-theme";
  const modes = ["system", "light", "dark"];
  const labels = { system: "Sistema", light: "Claro", dark: "Escuro" };
  const root = document.documentElement;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  let mode = "system";

  // Storage pode estar indisponível em navegação privada ou ao abrir via file://.
  try {
    const saved = localStorage.getItem(storageKey);
    if (modes.includes(saved)) mode = saved;
  } catch { /* A preferência do sistema continua funcionando. */ }

  const applyTheme = () => {
    if (mode === "system") delete root.dataset.theme;
    else root.dataset.theme = mode;

    const dark = mode === "dark" || (mode === "system" && systemTheme.matches);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? "#11161b" : "#fafbfc";
  };

  applyTheme();
  systemTheme.addEventListener("change", applyTheme);

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-current-year]").forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });

    const button = document.querySelector(".theme-toggle");
    if (!button) return;

    const updateButton = () => {
      const next = modes[(modes.indexOf(mode) + 1) % modes.length];
      button.querySelector("[data-theme-label]").textContent = labels[mode];
      button.setAttribute("aria-label", `Tema: ${labels[mode].toLowerCase()}. Ativar tema ${labels[next].toLowerCase()}.`);
      button.title = "Alternar entre sistema, claro e escuro";
    };

    button.hidden = false;
    updateButton();
    button.addEventListener("click", () => {
      mode = modes[(modes.indexOf(mode) + 1) % modes.length];
      applyTheme();
      updateButton();
      try {
        if (mode === "system") localStorage.removeItem(storageKey);
        else localStorage.setItem(storageKey, mode);
      } catch { /* O tema escolhido permanece aplicado nesta página. */ }
    });
  });
})();
