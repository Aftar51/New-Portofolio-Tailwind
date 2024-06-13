// Toogel Menu
const toogleMenu = document.querySelector('#toogle-menu');
const toogleMenuIcon = document.querySelector('i');
const menu = document.querySelector('#menu');
toogleMenu.addEventListener('click', () => {
    menu.classList.toggle('translate-y-[-200%]');
    changeMenuIcon()
})

// Close menu when click menu list
const navlinks = document.querySelectorAll('.nav-link')
navlinks.forEach(navlinks => {
    navlinks.addEventListener('click', () => {
        menu.classList.add('translate-y-[-200%]')
        changeMenuIcon()
    })
})

function changeMenuIcon() {
    const isContainTranslate = menu.classList.contains('translate-y-[-200%]')
    const icon = isContainTranslate ? 'icon-menu' : 'icon-close'
    toogleMenuIcon.classList = ``
}

// Toggle Theme
const html = document.querySelector('html');
const toggleTheme = document.querySelector('#toggle-theme');
const toggleThemeIcon = toggleTheme.querySelector('img');
toggleTheme.addEventListener('click', () => {
    html.classList.toggle('dark')
    const isDark = html.classList.contains('dark')
    const themeIcon = isDark ? 'light' : 'dark'
    toggleThemeIcon.src = `/src/img/${themeIcon}.png`
})