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