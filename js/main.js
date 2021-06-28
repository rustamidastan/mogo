// SITE HEADER HAMBURGER MENU 

let menuIcon = document.querySelector('.site-header__hamburger-icon');
let siteNav = document.querySelector('.sitenav');
menuIcon.addEventListener('click', function () {
    if (siteNav.style.display == 'flex')
        siteNav.style.display = 'none'
    else siteNav.style.display = 'flex'
})


// START WE DO TABS 
let weDoButton = document.querySelectorAll('.we-do__tab-btn');
let weDoText = document.querySelectorAll('.we-do__tab-text')
let weDoTab = document.querySelectorAll('.we-do-tab');

for (let i = 0; i < 3; i++) {
    weDoButton[i].addEventListener('click', function () {
        weDoTab[0].classList.remove('we-do__tab-active');
        weDoTab[1].classList.remove('we-do__tab-active');
        weDoTab[2].classList.remove('we-do__tab-active');
        weDoTab[i].classList.toggle('we-do__tab-active');
    })
}

