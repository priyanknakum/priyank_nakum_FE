// ------------------------------------------target id & class-------------------------------

let id = (id) => document.getElementById(id);
let username = id('username'), email = id('email'), password = id('password'),
    form = id('form'),
    errorMsg = document.getElementsByClassName('error'),
    success = document.getElementsByClassName('fa-circle-check'),
    failure = document.getElementsByClassName('fa-circle-exclamation');
let flag = 1;
function validateForm() {
    // ---------------------------------------username-----------------------------
    if (username.value === "") {
        errorMsg[0].innerHTML = 'Enter your UserName';
        failure[0].style.opacity = '1'
        success[0].style.opacity = '0'
        flag = 0;
    }
    else if (username.value.length < 3) {
        errorMsg[0].innerHTML = 'username required minium 3 char';
        failure[0].style.opacity = '1'
        success[0].style.opacity = '0'
        flag = 0;
    }
    else {
        errorMsg[0].innerHTML = '';
        failure[0].style.opacity = '0'
        success[0].style.opacity = '1'
        flag = 1;
    }
    // -----------------------------------------Email------------------------------
    if (email.value === "") {
        errorMsg[1].innerHTML = 'Enter your email';
        failure[1].style.opacity = '1'
        success[1].style.opacity = '0'
        flag = 0;
    }
    else {
        errorMsg[1].innerHTML = '';
        failure[1].style.opacity = '0'
        success[1].style.opacity = '1'
        flag = 1;
    }
    // --------------------------------------password----------------------------
    if (password.value === "") {
        errorMsg[2].innerHTML = 'Enter your password';
        flag = 0;
    }
    else if (password.value.length < 8) {
        errorMsg[2].innerHTML = 'password required minium 8 char';
        flag = 0;
    }
    else {
        errorMsg[2].innerHTML = '';
        flag = 1;
    }
    // ----------------------------------form submit-----------------------------
    if (flag) {
        return true;
    }
    else {
        return false;
    }
}