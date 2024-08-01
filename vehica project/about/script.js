
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


// ------------------------offer-Swiper -----------------------
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
// -----------------------section-1(about)--------------------------
document.addEventListener("DOMContentLoaded", function () {
    // Define the final values for each item
    const yearsValue = 7;
    const specialistsValue = 45;
    const carsValue = 973;
    const localizationsValue = 18;

    // Get references to the span elements
    const yearsSpan = document.getElementById("years");
    const specialistsSpan = document.getElementById("specialists");
    const carsSpan = document.getElementById("cars");
    const localizationsSpan = document.getElementById("localizations");

    // Function to update the content of each span with animation
    function updateSpanValue(element, value) {
        let current = 0;
        const duration = 2000; // 2 seconds
        const step = value / (duration / 10); // Calculate step value

        // Define an interval to update the span value gradually
        const interval = setInterval(() => {
            current += step;
            element.textContent = Math.round(current); // Round to avoid decimal places

            // Stop the interval when the final value is reached
            if (current >= value) {
                clearInterval(interval);
                element.textContent = value; // Ensure the final value is set precisely
            }
        }, 10); // Update every 10 milliseconds for smooth animation
    }

    // Call the function to update each span with animation
    updateSpanValue(yearsSpan, yearsValue);
    updateSpanValue(specialistsSpan, specialistsValue);
    updateSpanValue(carsSpan, carsValue);
    updateSpanValue(localizationsSpan, localizationsValue);
});
// -----------------------------form validation---------------------------
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
