// SITE HEADER HAMBURGER MENU

let menuIcon = document.querySelector(".site-header__hamburger-icon");
let siteNav = document.querySelector(".sitenav");
let siteNavLinks = document.querySelectorAll(".sitenav__link");
menuIcon.addEventListener("click", () => {
  siteNav.classList.toggle("sitenav-active");
  document.body.classList.toggle("body-active");
});

siteNavLinks.forEach((item) => {
  item.addEventListener("click", () => {
    siteNav.classList.remove("sitenav-active");
    document.body.classList.remove("body-active");
  });
});

// START WE DO TABS
// let weDoButton = document.querySelectorAll('.we-do__tab-btn');
// let weDoText = document.querySelectorAll('.we-do__tab-text')
// let weDoTab = document.querySelectorAll('.we-do-tab');

// for (let i = 0; i < 3; i++) {
//     weDoButton[i].addEventListener('click', function () {
//         weDoTab[0].classList.remove('we-do__tab-active');
//         weDoTab[1].classList.remove('we-do__tab-active');
//         weDoTab[2].classList.remove('we-do__tab-active');
//         weDoTab[i].classList.toggle('we-do__tab-active');
//     })
// }

const questions = document.querySelectorAll(".we-do-tab");

questions.forEach(function (question) {
  const btn = question.querySelector(".we-do__tab-btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("we-do__tab-active");
      }
    });

    question.classList.toggle("we-do__tab-active");
  });
});

let searchBtn = document.querySelector(".site-header__search-btn");
let inputSearch = document.querySelector(".serach-input");

searchBtn.addEventListener("click", function () {
  if (inputSearch.style.display == "block") inputSearch.style.display = "none";
  else inputSearch.style.display = "block";
});

let dotsItem = document.querySelector(".slick-dots");

$(".site__hero-carousel").slick({
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
  arrows: false,
});
