let close = document.querySelector('.close');
let open = document.querySelector('.open');
let container = document.querySelector('.container');
open.addEventListener('click', function() {
    container.classList.add('show')
})
close.addEventListener('click', function() {
    container.classList.remove('show')
})