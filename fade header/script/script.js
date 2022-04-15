const mn = document.querySelector('.mn');
window.addEventListener('scroll', function() {
    mn.style.opacity = 1 - +window.pageYOffset / 600;

})