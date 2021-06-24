// SITE HEADER HAMBURGER MENU 

let menuIcon = document.querySelector('.site-header__hamburger-icon');
let siteNav = document.querySelector('.sitenav');
menuIcon.addEventListener('click', function () {
    if (siteNav.style.display == 'flex')
        siteNav.style.display = 'none'
    else siteNav.style.display = 'flex'
})