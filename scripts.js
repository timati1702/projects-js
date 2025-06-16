document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.classList.add(`r-page-${savedTheme}`);
        updateThemeIcon(savedTheme);
    }
    
    function toggleTheme() {
        const isDark = body.classList.contains('r-page-dark');
        const newTheme = isDark ? 'light' : 'dark';
        
        body.classList.replace(`r-page-${isDark ? 'dark' : 'light'}`, `r-page-${newTheme}`);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }
    
    function updateThemeIcon(theme) {
        const iconPath = theme === 'dark' ? 'resources/sun_icon.png' : 'resources/moon_icon.png';
        themeToggle.innerHTML = `<img src="${iconPath}" alt="Переключить тему" style="width: 32px; height: 32px;">`;
    }
    
    initTheme();
    
    themeToggle.addEventListener('click', toggleTheme);
});