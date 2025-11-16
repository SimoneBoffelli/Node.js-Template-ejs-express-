const toggleMobile = document.getElementById("themeToggleMobile");
const toggleDesktop = document.getElementById("themeToggleDesktop");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  // Allineare i due toggle
  toggleMobile.checked = theme === "dark";
  toggleDesktop.checked = theme === "dark";
}

(function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
})();

toggleMobile.addEventListener("change", () => {
  setTheme(toggleMobile.checked ? "dark" : "light");
});

toggleDesktop.addEventListener("change", () => {
  setTheme(toggleDesktop.checked ? "dark" : "light");
});
