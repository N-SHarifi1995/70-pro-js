const button = document.querySelector('.nav-toggler');
button.addEventListener('click', function() {
    const mynav = document.querySelector('.nav');
    mynav.classList.toggle('open');
})