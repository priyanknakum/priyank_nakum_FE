// ----------------------------------------nav-menu------------------------------------------------
let navbar = document.querySelector("nav");
let icon = document.querySelector("#bar");
let ul = document.querySelector('.nav-opt');

icon.addEventListener('click', () => {
    ul.classList.toggle('show');
    icon.classList.toggle('fa-xmark');
});// --------------------------darkTheme and logo and sun-moon-----------------------------------------------
let theme = document.getElementById("theme");
let logo = document.querySelector('.nav-section-1');
let hovered = document.querySelectorAll('.hovered');
let hoverEffect = document.querySelectorAll('.hoverEffect');

let footerLogo = document.querySelector('.footerLogo');

// --------light and dark theme--------
theme.onclick = function () {
    document.body.classList.toggle('dark');
    theme.classList.toggle('fa-moon');
    updateLogo();
};

function updateLogo() {
    // Check if 'dark' class is present in the body
    if (document.body.classList.contains('dark')) {
        logo.innerHTML = `<img src="../images/logo/logo-dark.png" alt="logo">`;
        footerLogo.innerHTML = `<img src="../images/logo/logo-light.png" alt="logo">`

        hoverEffect.forEach(i => {
            i.addEventListener('mouseover', () => {
                i.style.backgroundColor = '#d4d4d44d';
            });
            i.addEventListener('mouseout', () => {
                i.style.backgroundColor = 'transparent';
            });
        });
        hovered.forEach(h => {
            h.style.backgroundColor = '#d4d4d44d';
        });


    } else {
        logo.innerHTML = `<img src="../images/logo/logo-light.png" alt="logo">`;
        footerLogo.innerHTML = `<img src="../images/logo/logo-dark.png" alt="logo">`

        hoverEffect.forEach(i => {
            i.addEventListener('mouseover', () => {
                i.style.backgroundColor = '#d3d3d3';
            });
            i.addEventListener('mouseout', () => {
                i.style.backgroundColor = 'transparent';
            });
        });
        hovered.forEach(h => {
            h.style.backgroundColor = '#d3d3d3';
        });

    }
}
document.addEventListener('DOMContentLoaded', updateLogo);


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
// ------------------------------------------chose car--------------------------------------

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active-section");
        current[0].className = current[0].className.replace("active-section", "");
        this.className += " active";
    });
}

// Show filtered elements
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}
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