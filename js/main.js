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


let searchBtn = document.querySelector('.site-header__search-btn');
let inputSearch = document.querySelector('.serach-input');

searchBtn.addEventListener('click', function () {
    if (inputSearch.style.display == 'block')
        inputSearch.style.display = 'none';
    else inputSearch.style.display = 'block'
})



let dotsItem = document.querySelector('.slick-dots')

$('.site__hero-carousel').slick({
    dots: true,
    customPaging: function (slider, i) {
        if (i == 0) {
            return '<span class="slider_num">01</span> intro';

        } else if (i == 1) {
            return '<span class="slider_num">02</span> work';
        } else if (i == 2) {
            return '<span class="slider_num">03</span> about';
        } else if (i == 3) {
            return '<span class="slider_num">04</span> contact';
        }
    },
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false
});
