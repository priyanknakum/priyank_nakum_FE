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
        footerLogo.innerHTML = `<img src="../images/logo/logo-dark.png" alt="logo">`

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
        footerLogo.innerHTML = `<img src="../images/logo/logo-light.png" alt="logo">`

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

// -------------------------------------Emi-Calculator------------------------------------

const loanAmount = document.getElementById("loan_amount");
const loanTenure = document.getElementById("loan_tenure");
const loanRate = document.getElementById("loan_interest");

const loanEmi = document.querySelector(".loan_emi");
const loanPrinciple = document.querySelector(".loan_principle");
const loanTotal = document.querySelector(".loan_total");
const loanInterest = document.querySelector(".loan_interest_rate");

const submitBtn = document.querySelector(".calculator-btn");

submitBtn.addEventListener("click", function () {

    amount = loanAmount.value;
    tenure = (loanTenure.value) * 12; // 1Year = 12 months
    rate = (loanRate.value) / 12 / 100; // loan rate per year / 100 = loan percentage

    emi = ((amount * rate * (1 + rate) ** tenure) / (((1 + rate) ** tenure) - 1));
    total = emi * tenure; // total amount to be paid including interest
    interest = total - amount // interest = total amount - principle amount


    loanEmi.innerHTML = Math.floor(emi);
    loanPrinciple.innerHTML = Math.floor(amount);
    loanTotal.innerHTML = Math.floor(total);
    loanInterest.innerHTML = Math.floor(interest);


    //Loanchart
    let xValues = ["Principle", "Interest"];
    let yValues = [amount, Math.floor(interest)];

    let barColors = ['rgba(255, 92, 138, 0.6)',
        ' rgba(96, 211, 148,0.6)'];

    new Chart("loanChart", {
        type: "polarArea",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: false,
            }
        }
    });
});