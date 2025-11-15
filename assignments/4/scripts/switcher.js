document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('.theme-button');
    const themeStylesheet = document.getElementById('css-theme');

    if (!themeStylesheet) {
        console.error('Theme switcher: <link id="css-theme"> not found in <head>.');
        return;
    }

    function setActiveTheme(themeName) {
        // Update stylesheet href
        themeStylesheet.href = 'styles/styles.css';

        // toggle body classes based on themeName
        document.body.classList.remove('light-theme', 'sfsu-theme');

        if (themeName === 'Light-theme') {
            document.body.classList.add('light-theme');
        } else if (themeName === 'SFSU-theme') {
            document.body.classList.add('sfsu-theme');
        }
        // "Dark-theme" uses the default :root

        // Update active state
        themeButtons.forEach(btn => {
            const isActive = btn.dataset.theme === themeName;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', String(isActive));
        });

        // Persist
        localStorage.setItem('preferredTheme', themeName);
        console.log(`Theme switched to: ${themeName}`);
    }

    // Set clicks
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            setActiveTheme(button.dataset.theme);
        });
    });

    // Init
    const saved = localStorage.getItem('preferredTheme');
    if (saved) setActiveTheme(saved);
    else {
        // derive current file name from the link as a sane default
        const m = themeStylesheet.getAttribute('href')?.match(/styles\/(.+)\.css$/);
        setActiveTheme('Dark-theme');
    }
});
