let search = document.querySelector('.search');
let input = document.querySelector('input');
let button = document.querySelector('button');
button.addEventListener('click', function() {
    search.classList.toggle('active');
    input.focus();
})