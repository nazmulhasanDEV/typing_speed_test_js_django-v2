const already_have_an_account = document.querySelector('.already_have_an_account');
const login_box = document.querySelector('.login-box');

const register_box = document.querySelector('.register-box');
const does_not_have_acccnt = document.querySelector('.does_not_have_acccnt');

function showLoginBox() {
    login_box.style.display = 'block';
    register_box.style.display = 'none';
}

function hideLoginBox() {
    login_box.style.display = 'none';
    register_box.style.display = 'block';
}