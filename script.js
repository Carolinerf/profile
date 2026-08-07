const themeToggle = document.querySelector('.theme-toggle');

function syncLabel() {
  const isDark = document.documentElement.classList.contains('dark');
  const label = isDark ? '切换到浅色模式' : '切换到深色模式';
  themeToggle.setAttribute('aria-label', label);
  themeToggle.setAttribute('title', label);
}

function setTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
  syncLabel();
}

syncLabel();

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
});