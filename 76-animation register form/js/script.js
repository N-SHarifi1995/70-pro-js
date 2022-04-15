const log = document.querySelector('.login')
const reg = document.querySelector('.register')
const btn = document.querySelector('#btn');


function login() {
    btn.style.right = "0";
    log.style.right = "0";
    reg.style.right = "350px";

}

function register() {
    btn.style.right = "120px";
    reg.style.right = "0";
    log.style.right = "350px";
}