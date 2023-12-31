export function toggleTheme() {
  const isDarkTheme = document.body.classList.toggle("dark-theme");
  updateThemeIcon("themeIcon", isDarkTheme);
  updateThemeIcon("themeIconDesktop", isDarkTheme);
}

function updateThemeIcon(iconId, isDarkTheme) {
  const themeIcon = document.getElementById(iconId);
  themeIcon.textContent = isDarkTheme ? "🌙" : "☀️";
  themeIcon.className = isDarkTheme ? "moon-icon" : "sun-icon";
}
