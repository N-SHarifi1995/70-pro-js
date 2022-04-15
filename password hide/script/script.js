const input = document.querySelector('input');
const icon = document.querySelector('.toggle');
const show = true;

function change() {
    if (input.type === "password") {
        input.setAttribute('type', 'text');
        icon.classList.add('hide');
    } else {
        input.setAttribute('type', 'password');
        icon.classList.remove('hide')
    }
}