// ----------------------------------------nav-menu------------------------------------------------
let navbar = document.querySelector("nav");
let icon = document.querySelector("#bar");
let ul = document.querySelector('.nav-opt');

icon.addEventListener('click', () => {
    ul.classList.toggle('show');
    icon.classList.toggle('fa-xmark');
});
// --------------------------darkTheme and logo and sun-moon-----------------------------------------------
let sell = document.querySelectorAll('.sell');
let theme = document.getElementById("theme")
let logo = document.querySelector('.nav-section-1')
let footerLogo = document.querySelector('.footerLogo');

theme.onclick = function () {
    document.body.classList.toggle('dark')
    theme.classList.toggle('fa-moon');
    updateLogo();
};
function updateLogo() {
    if (document.body.classList.contains('dark')) {
        logo.innerHTML = `<img src="../images/logo/logo-dark.png" alt="logo">`
        footerLogo.innerHTML = `<img src="../images/logo/logo-light.png" alt="logo">`
        sell.forEach(i => {
            i.addEventListener('mouseover', () => {
                i.style.backgroundColor = '#464040';
            });
            i.addEventListener('mouseout', () => {
                i.style.backgroundColor = 'transparent';
            });
        });
    }
    else {
        logo.innerHTML = `<img src="../images/logo/logo-light.png" alt="logo">`
        footerLogo.innerHTML = `<img src="../images/logo/logo-dark.png" alt="logo">`
        sell.forEach(i => {
            i.addEventListener('mouseover', () => {
                i.style.backgroundColor = '#80808033';
            });
            i.addEventListener('mouseout', () => {
                i.style.backgroundColor = 'transparent';
            });
        });
    };
};
// <!------------------------HeroSection-Initialize Swiper --------------------------------->
var swiper = new Swiper(".homeSlide", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// <!------------------------offer-Swiper --------------------------------->
var swiper = new Swiper(".second-slider", {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

document.addEventListener('DOMContentLoaded', updateLogo);
// --------------------------------------offer (slick slider)------------------------
$('.offer').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
      
    ]
});